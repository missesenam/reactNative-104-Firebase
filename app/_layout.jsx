import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const LayoutLayout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
};

export default LayoutLayout;
