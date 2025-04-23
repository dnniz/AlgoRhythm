import * as SplashScreen from 'expo-splash-screen';
import { useDataPersist, DataPersistKeys } from '@/hooks';
import { loadImages, loadFonts } from '@/theme';
import { useRouter, Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { useUserStore } from '@/store/user.store';
import { fetchUser } from '@/services';
import Provider from '@/providers';
import { User } from '@/types';

SplashScreen.preventAutoHideAsync();

function Router() {
  const router = useRouter();
  const { setLoggedIn, setUser } = useUserStore();
  const { setPersistData, getPersistData } = useDataPersist();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    async function preload() {
      try {
        await Promise.all([loadImages(), loadFonts()]);
        const user = await fetchUser();
        setUser(user);
        setLoggedIn(!!user);
        if (user) setPersistData<User>(DataPersistKeys.USER, user);
        SplashScreen.hideAsync();
        setOpen(true);
      } catch {
        getPersistData<User>(DataPersistKeys.USER)
          .then(user => {
            if (user) setUser(user);
            setLoggedIn(!!user);
          })
          .finally(() => {
            SplashScreen.hideAsync();
            setOpen(true);
          });
      }
    }
    preload();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}
