import { Colors } from '@/theme';
import { useColorScheme } from './useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string; goth?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark & keyof typeof Colors.goth,
) {
  // const theme = useColorScheme() ?? 'light';
  const themeWorking = 'light'
  const colorFromProps = props[themeWorking];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[themeWorking][colorName];
  }
}
