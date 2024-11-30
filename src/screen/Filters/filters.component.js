import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { TextInput, Button, Card, Text, Menu } from "react-native-paper";

const Filter = () => {
  const sampleResults = [
    { id: 1, name: "Yoga Flow", weekday: "Thứ Hai", teacher: "Nguyễn Văn A" },
    { id: 2, name: "Yoga Aerial", weekday: "Thứ Ba", teacher: "Trần Văn B" },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Tìm kiếm giáo viên hoặc ngày"
        style={styles.input}
      />
      <Menu
        visible={false}
        onDismiss={() => {}}
        anchor={<Button mode="outlined">Lọc theo tiêu chí</Button>}
      >
        <Menu.Item onPress={() => {}} title="Giáo viên" />
        <Menu.Item onPress={() => {}} title="Ngày" />
        <Menu.Item onPress={() => {}} title="Ngày trong tuần" />
      </Menu>
      <FlatList
        data={sampleResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title
              title={item.name}
              subtitle={`Giáo viên: ${item.teacher}`}
            />
            <Card.Content>
              <Text>Ngày: {item.weekday}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F5F5F5" },
  input: { marginBottom: 16 },
  card: { marginVertical: 8 },
});

export default Filter;
