import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const todos = useQuery(api.todos.getTodos);
  console.log(todos);
  const createTodo = useMutation(api.todos.createTodo);
  const clearAllTodos = useMutation(api.todos.deleteAllTodos);
  const Styles = createStyles(colors);
  return (
    <View
      style={Styles.container}
    >

      <TouchableOpacity
        onPress={() => {
          toggleDarkMode();
        }}
      >
        <Text>Press Me</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          createTodo({ text: "walk the dog" });
        }}
      >
        <Text>add a new Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          clearAllTodos();
        }}
      >
        <Text>clear all Todos</Text>
      </TouchableOpacity>
    </View>
  );
}
const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg,
      gap: 10,
    },
    text: {
      fontSize: 16,
      color: "#333",
    },
  });
  return styles;
}