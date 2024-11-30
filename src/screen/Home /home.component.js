import { View, FlatList } from "react-native";
import { FAB, Card, Button, Text } from "react-native-paper";
import styles from "./home.style";
const YogaManagementScreen = ({ navigation }) => {
  const sampleData = [
    {
      id: 1,
      name: "Yoga Flow",
      weekday: "Thứ Hai",
      time: "10:00 AM",
      capacity: 20,
      duration: 60,
      price: 10,
    },
    {
      id: 2,
      name: "Yoga Aerial",
      weekday: "Thứ Ba",
      time: "11:00 AM",
      capacity: 15,
      duration: 45,
      price: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={sampleData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title
              title={item.name}
              subtitle={`${item.weekday}, ${item.time}`}
            />
            <Card.Content>
              <Text>Sức chứa: {item.capacity} người</Text>
              <Text>Thời gian: {item.duration} phút</Text>
              <Text>Giá: £{item.price}</Text>
            </Card.Content>
            <Card.Actions>
              <Button
                onPress={() =>
                  navigation.navigate("SessionManagementScreen", {
                    classId: item.id,
                  })
                }
              >
                Quản lý phiên học
              </Button>
              <Button>Edit</Button>
            </Card.Actions>
          </Card>
        )}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate("add-yoga")}
      />
    </View>
  );
};
export default YogaManagementScreen;
