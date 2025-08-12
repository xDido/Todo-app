import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
const TabsLayout = () => {
    const { colors } = useTheme();
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopWidth: 1,
                    borderTopColor: '#eee',
                    shadowColor: '#000',
                    height: 90,
                    paddingBottom: 10,
                    paddingTop: 10,
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    elevation: 2
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 6,
                    fontWeight: '600',
                
                },
                headerShown: false
            }}
        >
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: "Todos",
                    tabBarIcon: ({ color, size }) => <Ionicons name='flash-outline' size={size} color={color} />
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;