import { Colors } from '@/theme';
import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.tint,
  },
  link: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    backgroundColor: Colors.dark.tint,
    height: 44,
    width: '50%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default function NotFoundScreen() {
  return (
    <View style={styles.root}>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Link href="/" style={styles.link}>
        <Text style={styles.title}>Go to home screen!</Text>
      </Link>
    </View>
  );
}
