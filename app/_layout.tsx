import * as SplashScreen from 'expo-splash-screen';
import { useDataPersist, DataPersistKeys } from '@/hooks';
import { loadImages, loadFonts } from '@/theme';
import { useRouter, Stack, Slot } from 'expo-router';
import { useState, useEffect, Fragment } from 'react';
import { useUserStore } from '@/store/user.store';
import { fetchUser } from '@/services';
import Provider from '@/providers';
import { User } from '@/types';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

function Router() {
  const router = useRouter();
  const { setLoggedIn, setUser, loggedIn } = useUserStore();
  const { setPersistData, getPersistData } = useDataPersist();
  useEffect(() => {
    async function preload() {
      try {
        await Promise.all([loadImages(), loadFonts()]);
        const user = await fetchUser();
        setUser(user);
        setLoggedIn(!!user);
        if (user) setPersistData<User>(DataPersistKeys.USER, user);
        SplashScreen.hideAsync();
      } catch {
        getPersistData<User>(DataPersistKeys.USER)
          .then(user => {
            if (user) setUser(user);
            setLoggedIn(!!user);
          })
          .finally(() => {
            SplashScreen.hideAsync();
          });
      }
    }
    preload();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      router.push('/(main)/home');
    } else {
      router.push('/(onboarding)');
    }
  }, [router]);

  return (
    <Fragment>
      <Slot />
      <StatusBar style="light" />
    </Fragment>
  );
}

export default function RootLayout() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}
