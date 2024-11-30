import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import TabBar from "./src/component/tab-bar/tab-bar.component.js";
import { Provider, useDispatch } from "react-redux";
import store from "./src/redux/store";
import { injectStore } from "./src/helpers/api";
import { useEffect } from "react";
import { getTokenThunk } from "./src/redux/auth/auth.thunk";
import YogaManagementScreen from "./src/screen/Home /home.component.js";
import SessionManagement from "./src/screen/SessionManagement/SessionManagement.component.js";
import Filter from "./src/screen/Filters/filters.component.js";
import AddYoga from "./src/screen/AddYoga/add-yoga.component.js";
import ConfirmYogaClassScreen from "./src/screen/ConfirmYoga/ConfirmYoga.component.js";
// import AsyncStorage from "@react-native-async-storage/async-storage";

injectStore(store);
// AsyncStorage.clear();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const App = () => (
  <Provider store={store}>
    <Controller />
  </Provider>
);

const Controller = () => {
  const dispatch = useDispatch();

  const setup = async () => {
    await dispatch(getTokenThunk());
  };

  useEffect(() => {
    setup();
  }, []);

  return <ProtectedStack />;
};
const ProtectedStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="add-yoga" component={AddYoga} />
      <Stack.Screen name="confirm-yoga" component={ConfirmYogaClassScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
// const ShopStack = () => (
//   <Stack.Navigator
//     screenOptions={{ headerShown: false }}
//     initialRouteName="Shop"
//   >
//   </Stack.Navigator>
// );

const HomeStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="home"
        component={YogaManagementScreen}
        options={{ tabBarLabel: "Quản Lý Lớp Yoga", icon: "home-outline" }}
      />
      <BottomTab.Screen
        name="filter"
        component={Filter}
        options={{ tabBarLabel: "Tìm Kiếm & Lọc", icon: "search-outline" }}
      />
      <BottomTab.Screen
        name="management"
        component={SessionManagement}
        options={{ tabBarLabel: "Quản Lý Phiên Học", icon: "calendar-outline" }}
      />
    </BottomTab.Navigator>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
