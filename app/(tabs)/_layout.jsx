import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const LayoutLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // hide stack header
        tabBarActiveTintColor: "#007aff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { height: 60, paddingBottom: 5 },
      }}
    >
      <Tabs.Screen
        name="About"
        options={{
          title: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="code" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Database"
        options={{
          title: "Database",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="code" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Functions"
        options={{
          title: "Functions",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="code" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Storage"
        options={{
          title: "Storage",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="code" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Firestore"
        options={{
          title: "Firestore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="code" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default LayoutLayout;
