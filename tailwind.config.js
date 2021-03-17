module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        7: '1.75rem',
        20: '5rem'
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
        
      },  
      padding: {
        
      },
      margin: {

      },
      marginBottom: {
        
      },
      body: ['"TypoGrotesk"'],
      display: ['TypoGrotesk'],
      fontFamily: {
        typoGrotesk: 'TypoGrotesk'
      },
      letterSpacing: {
        
      },
      borderRadius: {
        
      },
      opacity: {
        
      },
      transitionProperty: {
        
      },      
      colors: {
        gray1: '#25122A',
        gray2:'#4F5154',
        gray3: '#232529',
        gray4: '#E9EAEA',
        purple: '#7D0080',
        lightPurple: '#800180',
        red: '#E4255C'
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
