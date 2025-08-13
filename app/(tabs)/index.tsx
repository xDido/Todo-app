import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/component/Header";
import TodoInput from "@/component/TodoInput";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Make sure the Header component exists at the specified path and use the correct extension if needed

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const todos = useQuery(api.todos.getTodos);
  const createTodo = useMutation(api.todos.createTodo);
  const clearAllTodos = useMutation(api.todos.deleteAllTodos);
  const homeStyles = createHomeStyles(colors);
  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <TouchableOpacity
          onPress={() => {
            toggleDarkMode();
          }}
        >
          <Text>Press Me</Text>
        </TouchableOpacity>
        <Header />
      <TodoInput />
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
      </SafeAreaView></LinearGradient>
  );
}
