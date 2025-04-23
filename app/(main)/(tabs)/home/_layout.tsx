import { Stack } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import NavigationHeaderLeft from '@/components/layouts/NavigationHeaderLeft';
import NavigationHeaderTitle from '@/components/layouts/NavigationHeaderTitle';
import { useNavigation } from 'expo-router';
import { useThemeColor } from '@/hooks';

export default function HomeStackLayout() {
  const navigation = useNavigation();
  const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer());

  const text = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <Stack
      screenOptions={{
        headerTintColor: text,
        headerStyle: { backgroundColor },
        headerTitleStyle: { fontSize: 18 },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: () => <NavigationHeaderTitle />,
          headerLeft: () => <NavigationHeaderLeft onPress={toggleDrawer} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="details" options={{ title: 'Details' }} />
    </Stack>
  );
}
