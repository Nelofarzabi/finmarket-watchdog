/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        graph: "url('assets/graph.jpg')",
        bit: "url('assets/bitcoin.jpg')",
      },
    },
  },
  plugins: [],
};
