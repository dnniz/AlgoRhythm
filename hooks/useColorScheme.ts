import { isMobile } from '@/utils/deviceInfo';
import { useState, useEffect } from 'react';
import { useColorScheme as useRNColorScheme, ColorSchemeName } from 'react-native';
import { useAppStore } from '@/store';
type ColorSchemeResult = {
  colorScheme: ColorSchemeName;
  isDark: boolean;
  isLight: boolean;
};

function useColorSchemaForMobile(): ColorSchemeResult {
  const colorScheme = useRNColorScheme();
  const isDark = colorScheme === 'dark';
  const isLight = colorScheme === 'light';
  return { colorScheme, isDark, isLight };
}

function useColorSchemeForWeb(): ColorSchemeResult {
  const [isHydrated, setHydrated] = useState<boolean>(false);

  const appColorScheme = useAppStore((state) => state.colorScheme);
  const toggleColorScheme = useAppStore((state) => state.toggleColorScheme);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const isDark = appColorScheme === 'dark';
  const isLight = appColorScheme === 'light';

  useEffect(() => {
    toggleColorScheme(useRNColorScheme() ?? 'light');
  }, []);
  return { colorScheme: appColorScheme ?? 'light', isDark, isLight };
}

export default isMobile ? useColorSchemaForMobile : useColorSchemeForWeb;
