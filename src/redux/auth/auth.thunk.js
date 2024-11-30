import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../helpers/api";

export const getTokenThunk = createAsyncThunk(
  "auth/getTokenThunk",
  async () => {
    const token = await AsyncStorage.getItem("token");
    return token;
  }
);
export const loginThunk = createAsyncThunk("auth/loginThunk", async (data) => {
  const { username, password } = data;
  const response = await instance.post("/auth/login", { username, password });
  const {
    data: { token },
  } = response.data;

  await AsyncStorage.setItem("token", token);
  return token;
});
