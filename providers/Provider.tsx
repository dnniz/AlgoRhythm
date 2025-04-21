import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useColorScheme from '@/hooks/useColorScheme';
import 'react-native-reanimated';

export default function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isDark } = useColorScheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>{children}</ThemeProvider>
    </GestureHandlerRootView>
  );
}
