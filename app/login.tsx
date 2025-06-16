import { Alert, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import InputField from "@/components/ui/InputField";
import BackButton from "@/components/ui/BackButton";
import { Link, router } from "expo-router";
import Button from "@/components/ui/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { auth } from "@/utils/firebaseConfig";
import { hp } from "@/utils/common";
const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  const handleLogin = async () => {
    if (email === "" || password === "") {
        setError('All fields are required');
      return;
    }
    setLoading(true);
    

    const timer = setTimeout(() => {
      router.replace("/complete")

      return () => {
        setLoading(false)
        clearTimeout(timer)
      };
    }, 3000);

    // setLoading(true);
    // try {
    //   const user = await signInWithEmailAndPassword(auth, email, password);
    //   setLoading(false);
    //   // @ts-ignore
    //   if (user) router.replace("/(tabs)/home");
    // } catch (error: any) {
    //   console.log(error);
    //   setError(error.message);
    //   setLoading(false);
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    
    <ScreenWrapper>
      <BackButton router={router} />

      <View style={styles.container}>
        <View style={{ width: "100%", marginTop: 30 }}>
          <Text
            style={{
              fontSize: theme.fontSizes.h1,
              fontFamily: theme.fonts.semibold,
              color: theme.colors.heading,
            }}
          >
            Welcome to B-Fit
          </Text>
          <Text
            style={{
              fontSize: theme.fontSizes.h3,
              fontFamily: theme.fonts.regular,
              color: theme.colors.textLight,
              marginVertical: 10,
            }}
          >
            Sign in to your account
          </Text>
        </View>

        <View style={{ width: "100%", gap: 15 }}>
          <InputField
            placeholder="email"
            value={email}
            onChangeText={(txt) => setEmail(txt.trim())}
            icon={{
              color : "grey",
              name: "mail",
              family : "AntDesign",
              size: 20,
            }}
          />
          <InputField
            placeholder="password"
            value={password}
            onChangeText={(txt) => setPassword(txt.trim())}
            secureTextEntry
            icon={{
              color : "grey",
              name: "lock",
              family : "AntDesign",
              size: 22,
            }}
          />
          {error && (
            <Text
              style={{ color: "red", fontSize: 12, height:hp(3), alignSelf: "flex-start" }}
            >
              {error}
            </Text>
          )}
        </View>

        <Button title="Login" onPress={handleLogin} isLoading={loading} />

        <View>
          <Text
            style={{
              fontSize: theme.fontSizes.p,
              fontFamily: theme.fonts.regular,
              color: theme.colors.textLight,
              marginVertical: 10,
            }}
          >
            Or continue with
          </Text>

          <View style={styles.button_container}>
            <Pressable style={styles.loginButtons}>
              <FontAwesome
                name="google"
                size={24}
                color={theme.colors.primary}
              />
            </Pressable>
            <Pressable style={styles.loginButtons}>
              <FontAwesome
                name="facebook"
                size={24}
                color={theme.colors.primary}
              />
            </Pressable>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text}>Don't have an account? </Text>
          <Pressable onPress={() => router.push("/signup")}>
            <Text style={styles.link}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default memo(login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 50,
  },

  button_container: {
    marginTop: 20,
    flexDirection: "row",
    alignSelf: "center",
    gap: 20,
  },

  loginButtons: {
    backgroundColor: theme.colors.grey,
    padding: 10,
    borderRadius: theme.borderRadius.full,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
    color: theme.colors.textLight,
  },

  link: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.medium,
  },
});
