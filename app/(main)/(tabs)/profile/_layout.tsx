import { Stack } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import NavigationHeaderLeft from '@/components/layouts/NavigationHeaderLeft';
import NavigationHeaderTitle from '@/components/layouts/NavigationHeaderTitle';
import { useNavigation } from 'expo-router';
import { Colors } from '@/theme';
import { useColorScheme, useThemeColor } from '@/hooks';

export default function ProfileStackLayout() {
  const navigation = useNavigation();
  const tint = useThemeColor({}, 'tint');
  const bg = useThemeColor({}, 'background');

  const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer());
  return (
    <Stack
      screenOptions={{
        headerTintColor: tint,
        headerStyle: { backgroundColor: bg },
        headerTitleStyle: { fontSize: 18 },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Profile',
          headerTitle: () => <NavigationHeaderTitle />,
          headerLeft: () => <NavigationHeaderLeft onPress={toggleDrawer} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="details" options={{ title: 'Details' }} />
    </Stack>
  );
}
