/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { max: '870px' },
        'md-custom': { max: '870px' },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          position: "relative",
          width: "100%",
          backgroundColor: "#051F20",
          maxWidth: "100%",
          minHeight: "100vh",
          overflow: "hidden",
        },
        // '.container::before': {
        //   content: '""',
        //   position: 'absolute',
        //   height: '2000px',
        //   width: '2000px',
        //   top: '-10%',
        //   right: '48%',
        //   transform: 'translateY(-50%)',
        //   // backgroundImage: "linear-gradient(-45deg, #B92C2E 0%, #F5B0BC 100%)",
        //   backgroundColor: '#DAF1DE',
        //   color: '#002028',
        //   transition: '1.8s ease-in-out',
        //   borderRadius: '50%',
        //   zIndex: '6',
        // },
        // '.sign-up-mode::before': {
        //   transform: 'translate(100%, -50%)',
        //   right: '52%',
        // },

      })
    }
  ],
}