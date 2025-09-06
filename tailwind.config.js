/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d6e9ff",
          200: "#b3d6ff",
          300: "#84bbff",
          400: "#5395ff",
          500: "#2a6bff",
          600: "#1d52db",
          700: "#153eb0",
          800: "#12358d",
          900: "#112f74"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)",
        card: "0 20px 45px rgba(0,0,0,.12)",
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shine: 'shine 2.2s linear infinite'
      }
    },
  },
  plugins: [],
}