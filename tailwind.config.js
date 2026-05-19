/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}",],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        dark: "#111111",
        dark2: "#181818",
        surface: "#222222",
        border: "#2E2E2E",
        muted: "#5A5A5A",
        subtle: "#999999",
        white: "#F0F0F0",
        green: {
          DEFAULT: "#2A9A3C",
          lt: "#35C04B",
          dk: "#1A6828",
          dim: "rgba(42,154,60,0.12)",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "'Barlow Condensed'", "sans-serif"],
        body: ["'Barlow'", "sans-serif"],
      },
      fontSize: {
        10: "10px",
        11: "11px",
        13: "13px",
      },
      letterSpacing: {
        widest2: "0.35em",
        widest3: "0.2em",
        widest4: "0.15em",
        widest5: "0.12em",
        widest6: "0.1em",
        widest7: "0.08em",
        widest8: "0.06em",
        widest9: "0.05em",
        widest10: "0.04em",
        widest11: "0.02em",
      },
      minHeight: {
        "92vh": "92vh",
      },
      minWidth: {
        "72px": "72px",
        "50px": "50px",
        "200px": "200px",
      },
      maxWidth: {
        1240: "1240px",
        500: "500px",
        560: "560px",
      },
      height: {
        "36px": "36px",
        "70px": "70px",
        "54px": "54px",
        "80px": "80px",
        "14px": "14px",
        "22px": "22px",
        "52px": "52px",
        "40px": "40px",
      },
      width: {
        "22px": "22px",
        "52px": "52px",
        "80px": "80px",
        "40px": "40px",
        "600px": "600px",
      },
      aspectRatio: {
        "16/10": "16 / 10",
        "4/3": "4 / 3",
      },
      boxShadow: {
        "green-glow": "0 0 10px rgba(42,154,60,0.3)",
        "green-glow2": "0 0 16px rgba(42,154,60,0.6)",
        "green-btn": "0 8px 24px rgba(42,154,60,0.4)",
        dropdown: "0 20px 40px rgba(0,0,0,0.7)",
        "play-icon": "0 4px 20px rgba(0,0,0,0.5)",
      },
      backdropBlur: {
        12: "12px",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "none" },
        },
        bounceY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        pulseGreen: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(42,154,60,0.4)" },
          "50%": { boxShadow: "0 0 0 14px rgba(42,154,60,0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        fadeUp0: "fadeUp 0.7s ease forwards",
        fadeUp1: "fadeUp 0.7s ease 0.1s both",
        fadeUp2: "fadeUp 0.7s ease 0.2s both",
        fadeUp3: "fadeUp 0.7s ease 0.3s both",
        bounceY: "bounceY 2s ease-in-out infinite",
        pulseGreen: "pulseGreen 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
