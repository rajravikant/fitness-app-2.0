import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { theme } from "@/constants/theme";
import InputField from "@/components/ui/InputField";
import BackButton from "@/components/ui/BackButton";
import { useRouter } from "expo-router";
import Button from "@/components/ui/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { FirebaseError } from "firebase/app";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/utils/firebaseConfig";
// import { doc, setDoc } from "firebase/firestore";
const signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const cleanUp = ()=>{
    setEmail("");
    setPassword("");
    setusername("");
    setError("");
  }

  const handleSignup = async () => {
    if (email === "" || password === "" || username === "") {
      Alert.alert("All fields are required");
      return;
    }
    // setIsLoading(true);
    // try {
    //   const response = await createUserWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );
    //   await setDoc(doc(db, "users", response.user.uid), {
    //     name : username,
    //     email,
    //     id: response.user.uid,
    //     avatarUrl:'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
    //   });
        
    //   setIsLoading(false);
    //   Alert.alert("Success", "Account created successfully");
    //   cleanUp();
    // } catch (error: FirebaseError | any) {
    //   if (error instanceof FirebaseError) {
    //     setError(error.message);
    //   }
    //   console.log(error);
    // } finally {
    //   setIsLoading(false);
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
            Create an account to get started
          </Text>
        </View>

        <View style={{ width: "100%", gap: 15 }}>
          <InputField
            placeholder="name"
            value={username}
            onChangeText={(txt) => setusername(txt)}
          />
          <InputField
            placeholder="email"
            value={email}
            onChangeText={(txt) => setEmail(txt)}
          />
          <InputField
            placeholder="password"
            value={password}
            onChangeText={(txt) => setPassword(txt)}
            secureTextEntry
          />
        {error && <Text style={{ color: "red", fontSize: 12,alignSelf:'flex-start' }}>{error}</Text>}
        </View>


        <Button title="Sign Up" onPress={handleSignup} isLoading={isLoading} />

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
          <Text style={styles.text}>Already have an account? </Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={styles.link}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default memo(signup);

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
