const tintColorLight = '#0a7ea4';
const tintColorDark = '#8AADBC';
const tintColorGoth = '#9388db';

const DEFAULTS = {
  primary1: '#8AADBC',
  primary2: '#EBD9BF',
  contrast: '#7E93C2',
  inactiveBg: '#797777',
};

export const Colors = {
  light: {
    text: '#11181C',
    background: '#C2D8ED',
    inactiveColor: '#95a5a5',
    tint: tintColorLight,
    gradientColor1: '#5A63D6',
    gradientColor2: '#9A6268',
    ...DEFAULTS,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    inactiveColor: '#333737',
    tint: tintColorDark,
    gradientColor1: '#B5C4EA',
    gradientColor2: '#9694B5',
    ...DEFAULTS,
  },
  goth: {
    text: '#ECEDEE',
    background: '#231d54',
    inactiveColor: '#2f2b40',
    tint: tintColorGoth,
    gradientColor1: '#B5C4EA',
    gradientColor2: '#9694B5',
    ...DEFAULTS,
  },
};
