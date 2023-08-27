import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jakartaSans: 'Plus Jakarta Sans'
      },
      boxShadow: {
        background: '0px 0px 40px rgb(197, 173, 197)',
      },
      colors: {
        sunsetOrange: '#FF5841',
        redViolet: '#C53678',
        darkClassicBlue: '#0A1828',
        turqoise: '#178582',
        gold: '#BFA181',
        pastelPurple: '#C5ADC5'
      }
    },
  },
  plugins: [],
}
export default config
