module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      backgroundImage: {
        'tips-top': 'url(/bg_tips1.jpg)',
        'about-top': 'url(/bg_about1.jpg)',
        'about-philosophy': 'url(/bg_about2.jpg)',
        'team-top': 'url(/bg_team.jpg)',
        'contact-top': 'url(/bg_contact.jpg)',
        'home-third': 'url(/bg_home1.jpg)',
        'home-fifth': 'url(/bg_home2.jpg)',
        'home-seventh': 'url(/bg_home3.jpg)',
        'footer-building': 'url(/img_footer.png)',
      },
      colors: {
        'gray-2e': '#2e2e2e',
        'gray-40': '#404040',
        'gray-eee': '#eeeeee',
      },
      fontFamily: {
        pretender: [
          'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif;',
        ],
      },
    },
  },
  plugins: [],
};
