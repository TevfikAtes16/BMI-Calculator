import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [description, setDescription] = useState("");

  const calculateBmi = () => {
    let bmiValue = (weight / ((height * height) / 10000)).toFixed(1);
    setBmi(bmiValue);
    if (bmiValue < 18.5) {
      setDescription("Düşük Kilolu");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setDescription("Normal Kilolu");
    } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
      setDescription("Aşırı Kilolu");
    } else {
      setDescription("Obezite");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>BmiCalculator</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Kilonuzu giriniz"
        value={weight}
        onChangeText={(weight) => setWeight(weight)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Boyunuzu giriniz"
        value={height}
        onChangeText={(height) => setHeight(height)}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={calculateBmi} style={styles.button}>
        <Text style={styles.buttonText}>Hesapla</Text>
      </TouchableOpacity>
      {bmi && (
        <View style={styles.resultView}>
          <Text style={styles.resultText}>Bmi: {bmi}</Text>
          <Text style={styles.resultText}>Description: {description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#e0ecde",
  },
  title: {
    backgroundColor: "#1eae98",
    marginBottom: 10,
    justifyContent: "center",
    height: 80,
    alignItems: "center",
    marginBottom: 10,
  },
  titleText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 55,
    padding: 12,
    margin: 15,
    borderWidth: 1 / 2,
    borderRadius: 5,
    backgroundColor: "#cde0c9",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#1eae98",
    padding: 15,
    margin: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  resultView: {
    margin: 15,
    borderWidth:1/2,
    padding: 15,
    width: "70%",
    alignSelf: "center",
    borderRadius: 10,
  },
  resultText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default BmiCalculator;
