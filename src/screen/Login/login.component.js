import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import PrimaryButton from "../../component/primary-button/primary-button.component";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./login.style";
import { loginThunk } from "../../redux/auth/auth.thunk";

function Login() {
  const username = useRef("");
  const password = useRef("");
  const dispatch = useDispatch();
  const onLogin = async () => {
    if (username.current === "") {
      alert("Tên đăng nhập không được bỏ trống");
      return;
    }

    if (password.current === "") {
      alert("Mật khẩu không được bỏ trống");
      return;
    }
    const formData = {
      username: username.current,
      password: password.current,
    };

    try {
      await dispatch(loginThunk(formData)).unwrap();
    } catch (error) {
      alert("Username or Password is not valid");
    }
  };

  return (
    <SafeAreaView style={[styles.container, { flex: 1 }]}>
      <View style={styles.containerLogin}>
        <Text style={styles.header}>Login</Text>
        <View>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(text) => (username.current = text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => (password.current = text)}
            style={styles.input}
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text>Forgot your password ?</Text>
            <Ionicons name="arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <PrimaryButton onPress={onLogin}>Login</PrimaryButton>
      </View>
      {/* <View style={styles.loginWithAccount}>
        <Text>or Login with social account </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.iconLogin}>
            <Ionicons name="logo-google" size={24} color="#EA4335" />
          </View>
          <View style={styles.iconLogin}>
            <Ionicons name="logo-facebook" size={24} color="#3B5998" />
          </View>
        </View>
      </View> */}
    </SafeAreaView>
  );
}
export default Login;
