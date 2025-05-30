import {
  FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { TodoModel } from "../models/ToDoModel";
import styleSheet from "../utils/styleSheet";
import Checkbox from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [todoList, setTodoList] = useState<TodoModel[]>([
    { id: 1, title: "Do Home Work1", isCompleted: false },
    { id: 2, title: "Do Home Work2", isCompleted: true },
    { id: 3, title: "Do Home Work3", isCompleted: false },
  ]);

  const [addNewTodo, setAddNewTodo] = useState<string>("");

  useEffect(() => {
    const setStorageItem = async () => {
      const saveStorage = await AsyncStorage.getItem("setTodo");
      if (saveStorage) setTodoList(JSON.parse(saveStorage));
    };
    setStorageItem();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("setTodo", JSON.stringify(todoList));
  }, [todoList]);

  const markAsCompleted = (id: number) => {
    setTodoList((prevList) => {
      return prevList.map((itemList) => {
        if (itemList.id === id) {
          return { ...itemList, isCompleted: !itemList.isCompleted, id };
        }
        return itemList;
      });
    });
  };

  const addTodo = () => {
    if (addNewTodo?.trim() === "") return;

    const newTodo: TodoModel = {
      id: Date.now(),
      title: addNewTodo,
      isCompleted: false,
    };

    setTodoList((item) => [...item, newTodo]);
    setAddNewTodo("");
  };

  const removeTodo = (id: number) => {
    const removeTodo = todoList.filter((item) => item.id !== id);
    setTodoList(removeTodo);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="To-do List" />
      <FlatList
        data={todoList}
        renderItem={({ item }) => {
          return (
            <View style={styleSheet.flagList}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  value={item.isCompleted}
                  onValueChange={() => markAsCompleted(item.id)}
                />
                <Text> {item.title}</Text>
              </View>
              <TouchableOpacity
                style={styleSheet.remove_button}
                onPress={() => {
                  removeTodo(item.id);
                }}
              >
                <Text style={styleSheet.text_button}>Remove</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={{ flexDirection: "row", margin: 10 }}>
        <TextInput
          style={styleSheet.text_input}
          placeholder="New To Do "
          onChangeText={setAddNewTodo}
          value={addNewTodo}
        ></TextInput>
        <TouchableOpacity
          style={styleSheet.add_new_button}
          onPress={() => {
            addTodo();
          }}
        >
          <Text style={styleSheet.text_button}>Add New</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
