import React, { useState } from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import Background from "../src/components/Background";
import TextInput from "../src/components/TextInput";
import Header from "../src/components/Header";
import Button from "../src/components/Button";
import Paragraph from "../src/components/Paragraph";
import Logo from "../src/components/Logo";
import { theme } from "../src/core/theme";

const Contact = () => {
  const phone = "+254788987654";
  const email = "info@learnerpro.com";
  const [about, setAbout] = useState(
    "With LearnerPro you can take charge of your education journey by studying a course of your choice from the comfort of your phone. Join us on this journey of growth, learn, and nurture a sustainable world."
  );

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text
        style={{
          textAlign: "center",
          color: theme.colors.text,
          fontWeight: "800",
          marginBottom : 5
        }}
      >
        CONTACT US{" "}
      </Text>
      <Paragraph>
        <Text
          style={{
            color: theme.colors.primary,
            fontWeight: "900",
          }}
          onPress={handlePhonePress}
        >
     {phone}
        </Text>
        </Paragraph>
        <Paragraph>
        <Text
          style={{
            color: theme.colors.primary,
            fontWeight: "900",
          }}
          onPress={handleEmailPress}
        >
          {email}
        </Text>
        </Paragraph>
     

      <Text
        style={{
          textAlign: "center",
          color: theme.colors.text,
          fontWeight: "800",
          marginBottom : 5
        }}
      >
        ABOUT US{" "}
      </Text>
      <Paragraph>
        <Text
          style={{
            color: theme.colors.primary,
            fontWeight: "800",
          }}
        >
          {about}
        </Text>
      </Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Set your desired background color here
    padding: 20,
    borderRadius: 10,
    margin: 10,
    elevation: 5,
  },
});

export default Contact;
