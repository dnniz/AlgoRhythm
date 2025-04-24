import OnBoardingLayout from '@/components/elements/OnBoardingLayout';
import ThemedText from '@/components/elements/ThemedText';
import { useThemeColor } from '@/hooks';
import { generalStyles } from '@/theme/generalStyles';
import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '@/components/elements/Button';

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
export default function OnboardingStepTwo() {
  const bg = useThemeColor({}, 'background');
  const tint = useThemeColor({}, 'tint');
  const text = useThemeColor({}, 'text');

  return (
    <OnBoardingLayout nextBgColor={bg} bgColor={bg} complete>
      <View style={generalStyles.container}>
        <View style={generalStyles.textContainer}>
          <ThemedText
            style={[
              generalStyles.text,
              generalStyles.titleBold,
              {
                textAlign: 'center',
              },
            ]}>
            You're In!
          </ThemedText>
          <ThemedText
            style={[generalStyles.text, generalStyles.description, { textAlign: 'center' }]}>
            Everything's ready. Start building with React Native now.
          </ThemedText>
        </View>
        <Button
          title="Go to Home"
          titleStyle={[styles.buttonTitle, { color: text }]}
          style={[styles.button, { backgroundColor: tint }]}
          onPress={() => router.push({ pathname: '(main)/home', params: { from: 'welcome' } })}
        />
      </View>
    </OnBoardingLayout>
  );
}
