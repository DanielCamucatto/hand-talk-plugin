// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Adicione outros caminhos conforme necessário
  ],
  theme: {
    extend: {
      colors: {
       'custom-dark': '#212121',
      },
    },
  },
  plugins: [],
};
