import { SimpleLineIcons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks';

export default function NavigationHeaderLeft({ onPress }: { onPress: () => void }) {
  const text = useThemeColor({}, 'text');
  const bg = useThemeColor({}, 'background');

  return (
    <SimpleLineIcons.Button
      name="menu"
      size={24}
      color={text}
      backgroundColor={bg}
      onPress={onPress}
    />
  );
}
