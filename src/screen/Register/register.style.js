import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    justifyContent: "space-between",
  },
  containerLogin: {
    marginHorizontal: 22,
    justifyContent: "center",
  },
  header: {
    marginTop: 100,
    marginBottom: 70,
    fontSize: 32,
    fontWeight: "700",
    color: "#222222",
  },
  forgotPassword: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 25,
  },
  input: {
    // borderWidth: 1,
    backgroundColor: "#fff",

    paddingVertical: 20,
    paddingHorizontal: 5,
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 2 },
    marginVertical: 10,
  },
  loginWithAccount: {
    marginBottom: 20,
    alignItems: "center",
  },
  iconLogin: {
    marginVertical: 10,
    marginRight: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 27,
    paddingVertical: 17,
    // borderWidth: 1,
    borderRadius: 30,
  },
  closeButton: {
    position: "absolute",
    top: 70,
    left: 20,
    elevation: 6,
  },
});
export default styles;
