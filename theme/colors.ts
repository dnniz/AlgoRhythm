// export const colors = {
//   darkPurple: '#231d54',
//   purple: '#8100ff',
//   lightPurple: '#9388db',
//   lightGrayPurple: '#f7f7fb',
//   pink: '#ff3d69',
//   gray: '#797777',
//   blackGray: '#101212',
//   black: '#000000',
//   white: '#ffffff',
//   transparent: 'transparent',
// };

const tintColorLight = '#0a7ea4';
const tintColorDark = '#8AADBC';
const tintColorGoth = '#9388db';

const DEFAULTS = {
  primary1: '#8AADBC',
  primary2: '#EBD9BF',
  inactiveBg: '#797777',
  // inactiveDark:""
};

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    inactiveColor: '#95a5a5',
    tint: tintColorLight,
    ...DEFAULTS,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    inactiveColor: '#333737',
    tint: tintColorDark,
    ...DEFAULTS,
  },
  goth: {
    text: '#ECEDEE',
    background: '#231d54',
    inactiveColor: '#2f2b40',
    tint: tintColorGoth,
    ...DEFAULTS,
  },
};
