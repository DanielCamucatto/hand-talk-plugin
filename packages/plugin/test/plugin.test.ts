import { injectButton } from '../src/plugin';

describe('plugin', () => {
  it('should inject the button into the document', () => {
    document.body.innerHTML = '';
    injectButton();
    const button = document.querySelector('.extrair-dados-btn'); 
    expect(button).not.toBeNull(); 
    expect(button?.textContent).toBe('Extrair Dados'); 
  });
});