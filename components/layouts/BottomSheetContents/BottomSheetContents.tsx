import GradientButton from '@/components/elements/GradientButton';
import { StyleSheet, View, Text } from 'react-native';
import { windowWidth } from '@/utils/deviceInfo';
import { Colors, fonts } from '@/theme';
import config from '@/utils/config';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.openSan.bold,
    color: Colors.goth.text,
    marginTop: 16,
    marginBottom: 32,
    width: '100%',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.openSan.regular,
    width: '100%',
  },
  buttonTitle: {
    fontSize: 16,
    color: Colors.goth.tint,
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    height: 44,
    width: windowWidth / 2,
    backgroundColor: Colors.goth.background,
    marginBottom: 40,
  },
  envContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  envTitle: {
    fontSize: 14,
    fontFamily: fonts.openSan.bold,
    color: Colors.goth.text,
  },
  envValue: {
    fontSize: 14,
    fontFamily: fonts.openSan.regular,
    color: Colors.goth.text,
  },
});

type WelcomeBottomSheetContentsProps = {
  onClose: () => void;
};

export default function BottomSheetContents({ onClose }: WelcomeBottomSheetContentsProps) {
  return (
    <View style={[styles.root, { backgroundColor: Colors.goth.text }]}>
      <Text style={[styles.title, { color: Colors.goth.text }]}>🎉 Congratulations! </Text>
      <Text style={[styles.subtitle, { marginBottom: 32 }, { color: Colors.goth.text }]}>
        You have successfully spin up the React Native Boilerplate project in the
        <Text style={{ fontFamily: fonts.openSan.bold }}>{` ${config.env} `}</Text>environment 🚀
      </Text>
      <Text style={[styles.subtitle, { marginBottom: 8 }, { color: Colors.goth.text }]}>
        Injected Environmental Variables:
      </Text>
      {Object.entries(config).map(([key, value]) => (
        <View key={key} style={styles.envContainer}>
          <Text style={[styles.envTitle, { color: Colors.goth.text }]}>{`✅ ${key}: `}</Text>
          <Text style={[styles.envValue, { color: Colors.goth.text }]}>{value}</Text>
        </View>
      ))}
      <Text style={[styles.subtitle, { marginVertical: 32 }, { color: Colors.goth.text }]}>
        {`Your foundational setup is now complete, paving the way for seamless development and innovation. \n\nHappy coding!`}
      </Text>
      <GradientButton
        title="OK"
        titleStyle={[styles.buttonTitle, { color: Colors.goth.text }]}
        style={styles.button}
        gradientBackgroundProps={{
          colors: [Colors.goth.text, Colors.goth.background],
          start: { x: 0, y: 1 },
          end: { x: 0.8, y: 0 },
        }}
        onPress={onClose}
      />
    </View>
  );
}
