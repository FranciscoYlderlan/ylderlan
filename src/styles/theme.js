const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export default {
    COLORS: {
        BACKGROUND_800: '#23282b',
        BACKGROUND_700: '#13161C',
        BACKGROUND_600: '#1E1E24',
        BACKGROUND_900: '#6c6c6c',

        WHITE: '#F4EDE8',
        GREEN: '#688c34',
        YELLOW: '#eeb933',
        DARK_YELLOW: '#c09424',
        RED: '#D81522',
        SHADOW: '#000000B3',

        GRAY_300: '#dadadb',
        GRAY: '#84878d',
    },
    DEVICES: {
        mobileS: `(min-width: ${size.mobileS})`,
        mobileM: `(min-width: ${size.mobileM})`,
        mobileL: `(min-width: ${size.mobileL})`,
        tablet: `(min-width: ${size.tablet})`,
        laptop: `(min-width: ${size.laptop})`,
        laptopL: `(min-width: ${size.laptopL})`,
        desktop: `(min-width: ${size.desktop})`,
        desktopL: `(min-width: ${size.desktop})`,
    },
};
