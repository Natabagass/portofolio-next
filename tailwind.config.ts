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
        button: '0px 4px 24px 0px rgba(29, 93, 155, 0.4)'
      },
      colors: {
        sunsetOrange: '#FF5841',
        redViolet: '#FC51A1',
        darkViolet: '#C53678',
        darkClassicBlue: '#0A1828',
        turqoise: '#178582',
        gold: '#BFA181',
        lightGold: '#FFD7AB',
        pastelPurple: '#BDA3BD',
        greenLight: '#40f4b2'
      },
      margin: {
        content: '100px',
      },
      screens: {
        mobile: '450px'
      },
    },
  },
  plugins: [],
}
export default config
