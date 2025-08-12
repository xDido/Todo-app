import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Index() {
 const {toggleDarkMode} = useTheme();
  return (
    <View
      style={Styles.container}
    >
      <Text style={Styles.text}>Edit app/index.tsx to edit this screen.</Text>
  
      <TouchableOpacity
        onPress={() => {
          toggleDarkMode();
        }}
      >
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});