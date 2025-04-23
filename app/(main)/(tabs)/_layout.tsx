import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks';

export default function TabLayout() {
  const inactive = useThemeColor({}, 'inactiveColor');
  const inactiveBg = useThemeColor({}, 'inactiveBg');
  const tint = useThemeColor({}, 'tint');
  const primary1 = useThemeColor({}, 'primary1');

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: inactive,
        tabBarInactiveBackgroundColor: inactiveBg,
        tabBarActiveTintColor: tint,
        tabBarActiveBackgroundColor: primary1,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <AntDesign name="profile" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
