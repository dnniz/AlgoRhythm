import { Text, View, StyleSheet } from 'react-native';
import Button from '@/components/elements/Button';
import { useRouter } from 'expo-router';
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

export default function Home() {
  const router = useRouter();
  const backgroundColor = useThemeColor({}, 'background');
  const tint = useThemeColor({}, 'tint');
  const text = useThemeColor({}, 'text');
  const primary1 = useThemeColor({}, 'primary1');

  return (
    <View style={[styles.root, { backgroundColor }]}>
      <Text style={[styles.title, { color: text }]}>Home</Text>
      <Button
        title="Go to Details"
        titleStyle={[styles.buttonTitle, { color: text }]}
        style={[styles.button, { backgroundColor: tint }]}
        onPress={() =>
          router.push({ pathname: '(main)/(tabs)/home/details', params: { from: 'Home' } })
        }
      />
      <Button
        title="Go to OnBoarding"
        titleStyle={[styles.buttonTitle, { color: text }]}
        style={[styles.button, { backgroundColor: tint }]}
        onPress={() => router.push({ pathname: '(onboarding)', params: { from: 'Home' } })}
      />
    </View>
  );
}
