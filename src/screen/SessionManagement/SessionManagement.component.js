import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { FAB, Card, Button, Text } from "react-native-paper";

const SessionManagement = ({ route }) => {
  const classId = route?.params?.classId;

  if (!classId) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Không tìm thấy lớp học.</Text>
      </View>
    );
  }
  const sampleSessions = [
    {
      id: 1,
      date: "2023-12-01",
      teacher: "Nguyễn Văn A",
      comments: "Phiên đầu tiên",
    },
    { id: 2, date: "2023-12-02", teacher: "Nguyễn Văn A", comments: "" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={sampleSessions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={`Ngày: ${item.date}`} />
            <Card.Content>
              <Text>Giáo viên: {item.teacher}</Text>
              <Text>Nhận xét: {item.comments || "Không có nhận xét"}</Text>
            </Card.Content>
            <Card.Actions>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Card.Actions>
          </Card>
        )}
      />
      <FAB style={styles.fab} icon="plus" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F5F5F5" },
  card: { marginVertical: 8 },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#8BC34A",
  },
});

export default SessionManagement;
