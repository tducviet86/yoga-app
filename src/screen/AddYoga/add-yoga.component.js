import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  TextInput,
  Button,
  HelperText,
  Title,
  Subheading,
} from "react-native-paper";

const AddYoga = ({ navigation }) => {
  const [formData, setFormData] = useState({
    weekday: "",
    time: "",
    capacity: "",
    duration: "",
    price: "",
    classType: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [currentField, setCurrentField] = useState("");

  const classTypes = ["Yoga Flow", "Yoga Aerial", "Yoga Gia đình"];
  const weekdays = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.weekday)
      tempErrors.weekday = "Vui lòng chọn ngày trong tuần.";
    if (!formData.time)
      tempErrors.time = "Vui lòng nhập thời gian lớp học (VD: 10:00 AM).";
    if (!formData.capacity)
      tempErrors.capacity = "Vui lòng nhập sức chứa (VD: 20 người).";
    if (!formData.duration)
      tempErrors.duration = "Vui lòng nhập thời gian học (VD: 60 phút).";
    if (!formData.price)
      tempErrors.price = "Vui lòng nhập giá mỗi lớp (VD: £10).";
    if (!formData.classType) tempErrors.classType = "Vui lòng chọn loại lớp.";
    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Data:", formData);
      navigation.navigate("confirm-yoga", { formData });
    } else {
      console.log("Validation Failed:", errors);
    }
  };

  const openModal = (field) => {
    setCurrentField(field);
    setModalVisible(true);
  };

  const handleSelect = (value) => {
    setFormData({ ...formData, [currentField]: value });
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleSelect(item)}
      style={styles.listItem}
    >
      <Text style={styles.listText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>Thêm Lớp Yoga</Title>
      <Subheading style={styles.subheading}>
        Vui lòng nhập đầy đủ thông tin để thêm lớp học mới.
      </Subheading>

      {/* Ngày trong tuần */}
      <TouchableOpacity
        onPress={() => openModal("weekday")}
        style={styles.field}
      >
        <Text style={styles.label}>
          Ngày trong tuần: {formData.weekday || "Chọn ngày trong tuần"}
        </Text>
      </TouchableOpacity>
      <HelperText type="error" visible={!!errors.weekday}>
        {errors.weekday}
      </HelperText>

      {/* Thời gian lớp học */}
      <TextInput
        label="Thời gian lớp học (VD: 10:00 AM)"
        mode="outlined"
        placeholder="10:00 AM"
        value={formData.time}
        onChangeText={(text) => setFormData({ ...formData, time: text })}
        error={!!errors.time}
        style={styles.input}
      />
      <HelperText type="error" visible={!!errors.time}>
        {errors.time}
      </HelperText>

      {/* Sức chứa */}
      <TextInput
        label="Sức chứa (người)"
        mode="outlined"
        keyboardType="numeric"
        placeholder="VD: 20"
        value={formData.capacity}
        onChangeText={(text) => setFormData({ ...formData, capacity: text })}
        error={!!errors.capacity}
        style={styles.input}
      />
      <HelperText type="error" visible={!!errors.capacity}>
        {errors.capacity}
      </HelperText>

      {/* Loại lớp học */}
      <TouchableOpacity
        onPress={() => openModal("classType")}
        style={styles.field}
      >
        <Text style={styles.label}>
          Loại lớp: {formData.classType || "Chọn loại lớp học"}
        </Text>
      </TouchableOpacity>
      <HelperText type="error" visible={!!errors.classType}>
        {errors.classType}
      </HelperText>

      {/* Mô tả */}
      <TextInput
        label="Mô tả (tùy chọn)"
        mode="outlined"
        multiline
        numberOfLines={4}
        placeholder="Nhập mô tả về lớp học..."
        value={formData.description}
        onChangeText={(text) => setFormData({ ...formData, description: text })}
        style={styles.input}
      />

      {/* Nút xác nhận */}
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        Xác nhận
      </Button>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={currentField === "weekday" ? weekdays : classTypes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
            <Button onPress={() => setModalVisible(false)}>Đóng</Button>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F8F9FA",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 16,
    textAlign: "center",
  },
  subheading: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  field: {
    marginBottom: 12,
    padding: 12,
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 16,
  },
  listItem: {
    padding: 16,
    borderBottomColor: "#DDD",
    borderBottomWidth: 1,
  },
  listText: {
    fontSize: 16,
    color: "#333",
  },
});

export default AddYoga;
