import { View, Text } from "react-native";
import StyleSheet from "../utils/styleSheet";

export default function Header({ title }: { title: string }) {
  return (
    <View style={StyleSheet.header}>
      <Text style={StyleSheet.header_title}>{title}</Text>
    </View>
  );
}
