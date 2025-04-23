import { Text, View, StyleSheet } from 'react-native';
import GradientButton from '@/components/elements/GradientButton';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useThemeColor } from '@/hooks';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    height: 44,
    width: '50%',
  },
});

export default function Details() {
  const router = useRouter();
  const { from } = useLocalSearchParams();
  const backgroundColor = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const tint = useThemeColor({}, 'tint');

  return (
    <View style={[styles.root, { backgroundColor }]}>
      <Text style={[styles.title, { color: text }]}>{`Details (from ${from})`}</Text>
      <GradientButton
        title="Go back to Home"
        titleStyle={[styles.buttonTitle, { color: text }]}
        style={styles.button}
        gradientBackgroundProps={{
          colors: [tint, text],
          start: { x: 0, y: 1 },
          end: { x: 0.8, y: 0 },
        }}
        onPress={() => router.back()}
      />
    </View>
  );
}
