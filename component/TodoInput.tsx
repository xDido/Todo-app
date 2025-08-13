import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

const TodoInput = () => {
    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);
    const [todoText, setTodoText] = useState('');
    const addTodo = useMutation(api.todos.createTodo);

    const handleAdd = async () => {
        if (todoText.trim()) {
            await addTodo({ text: todoText.trim() });
            setTodoText('');
        }
    };

    return (
        <View style={homeStyles.inputSection}>
            <View style={homeStyles.inputWrapper}>
                <TextInput
                    style={homeStyles.input}
                    placeholder="Add a new todo"
                    value={todoText}
                    onChangeText={setTodoText}
                    onSubmitEditing={handleAdd}
                    multiline
                    placeholderTextColor={colors.textMuted}
                />
                <TouchableOpacity onPress={handleAdd} activeOpacity={0.8} disabled={!todoText.trim()}>
                    <LinearGradient
                        colors={todoText.trim() ? colors.gradients.primary : colors.gradients.muted}
                        style={[homeStyles.addButton, !todoText.trim() && homeStyles.addButtonDisabled]}
                    >
                        <Ionicons name="add" size={24} color="#ffffff" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TodoInput;