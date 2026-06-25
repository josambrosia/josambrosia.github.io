/* Tailwind Play CDN config — design tokens "Industrial Safety" untuk Teknominerba.
   Ganti nilai warna di sini bila brand asli berbeda. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink:     '#152A4E',
        'ink-2': '#21395E',
        'ink-3': '#35517B',
        paper:   '#EDF0F5',
        'paper-2': '#DFE6EF',
        ember:   '#CA2E3C',
        'ember-soft': '#DC5867',
        hivis:   '#C6972F',
        steel:   '#5C6E88',
      },
      fontFamily: {
        display: ['"Saira Condensed"', 'system-ui', 'sans-serif'],
        sans:    ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { content: '1180px' },
      boxShadow: {
        hard: '5px 5px 0 0 #152A4E',
        'hard-ember': '5px 5px 0 0 #CA2E3C',
      },
    },
  },
};
