import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, SafeAreaView, View, Text, ViewProps } from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  gothColor?: string;
};

export default function DrawerContents({
  style,
  lightColor,
  darkColor,
  gothColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor, goth: gothColor },
    'background',
  );
  const textColor = useThemeColor({ light: lightColor, dark: darkColor, goth: gothColor }, 'text');

  return (
    <SafeAreaView>
      <View style={[styles.root, { backgroundColor }]}>
        <Text style={{ color: textColor }}>Side Menu Contents</Text>
      </View>
    </SafeAreaView>
  );
}
