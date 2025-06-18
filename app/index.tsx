import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Index() {
  const safe = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: safe.top,
        paddingBottom: safe.bottom,
        backgroundColor: "red",
      }}
    >
      <Link href="/auth/login" asChild>
        <Pressable>
          <Text>Index</Text>
        </Pressable>
      </Link>
    </View>
  );
}
