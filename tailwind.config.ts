import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // QuiverDesk brand palette — matches web app (styles.scss) & mobile (QDPalette)
        primary: {
          DEFAULT: '#0891B2', // brand teal
          purple: '#0EA5E9',  // secondary accent (sky) — key kept for existing classes
        },
        accent: '#d85c78',    // ascent/pink
        footer: '#344a53',    // footer dark
        success: '#10B981',
        warning: '#F59E0B',
        ink: {
          DEFAULT: '#344a53',
          secondary: '#475569',
          light: '#94A3B8',
        },
        line: '#E1E7EF',
        section: '#F5F7FB',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '12px',
        'card-lg': '24px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 4px 12px rgba(15, 23, 42, 0.08), 0 16px 40px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0891B2 0%, #0EA5E9 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
