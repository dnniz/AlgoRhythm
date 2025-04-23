import { useColorScheme } from '@/hooks';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

export default function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  const colorScheme = useColorScheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>{children}</ThemeProvider>
    </GestureHandlerRootView>
  );
}
