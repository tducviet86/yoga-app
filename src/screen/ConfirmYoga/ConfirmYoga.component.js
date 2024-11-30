import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Title } from "react-native-paper";

const ConfirmYogaClassScreen = ({ route, navigation }) => {
  const { formData } = route.params;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Xác Nhận Lớp Yoga</Title>
      <Text style={styles.detail}>Ngày: {formData.weekday}</Text>
      <Text style={styles.detail}>Thời gian: {formData.time}</Text>
      <Text style={styles.detail}>Sức chứa: {formData.capacity}</Text>
      <Text style={styles.detail}>Thời gian học: {formData.duration} phút</Text>
      <Text style={styles.detail}>Giá mỗi lớp: £{formData.price}</Text>
      <Text style={styles.detail}>Loại lớp: {formData.classType}</Text>
      <Text style={styles.detail}>
        Mô tả: {formData.description || "Không có mô tả"}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          Quay lại
        </Button>
        <Button
          mode="contained"
          onPress={() => alert("Lưu thành công!")}
          style={styles.button}
        >
          Lưu
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 16,
    textAlign: "center",
  },
  detail: {
    fontSize: 16,
    marginVertical: 4,
    color: "#333333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default ConfirmYogaClassScreen;
