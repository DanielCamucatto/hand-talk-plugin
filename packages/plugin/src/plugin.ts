import { getDevice, getOperatingSystem } from './utils';
import { ThemeData } from './types';
import {config} from './config';


export function injectButton() {
  const button = document.createElement('button');
  button.innerText = 'Extrair Dados';
  button.classList.add('extrair-dados-btn');
  button.addEventListener('click', extractData);
  document.body.appendChild(button);
}

function extractData() {
  const device = getDevice();
  const operatingSystem = getOperatingSystem();
  const origin = window.location.origin;
  const themeChangesCount = getThemeChangesCount();

  const data: ThemeData = {
    device,
    operatingSystem,
    origin,
    themeChangesCount,
  };

  sendDataToAPI(data)
    .then(() => showFeedback('Dados enviados com sucesso!', 'success'))
    .catch(error => {
      console.error('Erro ao enviar dados:', error);
      showFeedback('Falha ao enviar dados', 'error');
    });
}


let themeChangesCount = 0;
function getThemeChangesCount() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', () => themeChangesCount++);
  return themeChangesCount;
}

const API_ENDPOINT = config.API_ENDPOINT 
async function sendDataToAPI(data: ThemeData) {
  const response = await fetch(API_ENDPOINT, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.TOKEN_PLUGIN}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

// Função para exibir feedback ao usuário
function showFeedback(message: string, type: 'success' | 'error') {
  const feedback = document.createElement('div');
  feedback.innerText = message;
  feedback.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 4px;
    background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
    color: white;
    z-index: 10000;
  `;
  document.body.appendChild(feedback);
  setTimeout(() => feedback.remove(), 3000);
}

injectButton();