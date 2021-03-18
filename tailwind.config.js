module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        7: '1.75rem',
        11: '2.75rem',
        14: '3.5rem',
        50: '50px',
        67: '67px',
        20: '5rem'
      },
      lineHeight: {
        15: '3.75rem'
      },
      height: {
        
      },
      width: {
        
      },
      minWidth: {
        
      },
      maxWidth: {
        
      },   
      minHeight: {
        '100vh': '100vh'
      },    
      padding: {
        
      },
      margin: {

      },
      body: ['"DINNextLTPro"'],
      display: ['DINNextLTPro'],
      fontFamily: {
        DINNextLTPro: 'DINNextLTPro'
      },
      letterSpacing: {
        
      },
      borderRadius: {
        30: '7.5rem'
      },
      borderWidth: {
        10: '2.5rem'
      },
      opacity: {
        
      },
      transitionProperty: {
        
      },      
      colors: {
        gray1: '#25122A',
        gray2:'#4F5154',
        gray3: '#232529',
        gray4: '#D3D3D4',
        gray5: '#FAF7FB',
        gray6: '#F4F4F4',
        gray7: '#E9EAEA',
        gray8: '#65676A',
        gray9: '#898A8D',
        gray10: '#200A52',
        gray12: '#BDBEBF',
        purple: '#7D0080',
        darkpurple: '#260426',
        lightpurple: '#800180',
        transpurple: '#DAAFE9',
        green: '#44E0B7',
        darkblue: '#0F1D2B',
        red: '#E4255C',
      },
      zIndex: {
        '-1': '-1',
        '999': '999',
        '9999': '9999'
      }
    },
    screens: {
      'max-3xl': { max: '1920px' },
      // => @media (max-width: 1920px) { ... }

      'max-2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      'max-xl': { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      'max-lg': { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      'max-md': { max: '767px' },
      // => @media (max-width: 767px) { ... }

      'max-sm': { max: '639px' },
      // => @media (max-width: 639px) { ... }



      'min-3xl': { min: '1920px' },
      // => @media (min-width: 1920px) { ... }

      'min-2xl': { min: '1535px' },
      // => @media (min-width: 1535px) { ... }

      'min-xl': { min: '1279px' },
      // => @media (min-width: 1279px) { ... }

      'min-lg': { min: '1023px' },
      // => @media (min-width: 1023px) { ... }

      'min-md': { min: '767px' },
      // => @media (min-width: 767px) { ... }

      'min-sm': { min: '639px' }
      // => @media (min-width: 639px) { ... }
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    }
  },
  plugins: []
}
