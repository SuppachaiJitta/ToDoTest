import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: "blue",
    padding: 24,
  },
  header_title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  flagList: {
    padding: 20,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  text_input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  add_new_button: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  text_button: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },
  remove_button: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
