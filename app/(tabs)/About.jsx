import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { auth } from "../../firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "expo-router";

const About = () => {
  const router = useRouter();

  // ✅ Listen for user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (!user) {
        router.replace("/"); // if not logged in, send back to login
      }
    });

    return unsubscribe; // cleanup listener
  }, []);

  // ✅ Log out function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/"); // after logout, go to login screen
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  button: {
    backgroundColor: "#dd0a0a",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
