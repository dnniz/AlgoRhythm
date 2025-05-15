import ThemedText from '@/components/elements/ThemedText';
import React from 'react';
import { Image } from 'expo-image';
import { View } from 'react-native';
import { generalStyles } from '@/theme/generalStyles';
import { useColorScheme, useThemeColor } from '@/hooks';
import OnBoardingLayout from '@/components/elements/OnBoardingLayout';

export default function OnboardingStepOne() {
  const contrast = useThemeColor({}, 'contrast');
  return (
    <OnBoardingLayout nextBgColor={contrast} linearGradient nextHref="(onboarding)/step-2">
      <View style={generalStyles.container}>
        <Image
          source={require('../../assets/images/react-logo3x.png')}
          contentFit="contain"
          style={generalStyles.image}
        />
        <View style={generalStyles.textContainer}>
          <ThemedText style={[generalStyles.text, generalStyles.title]}>
            React Native Onboarding
          </ThemedText>
        </View>
      </View>
    </OnBoardingLayout>
  );
}
