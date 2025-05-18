import React from 'react';
import { View, Pressable, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useRef } from 'react';

export const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const buttons = [
    {
      name: 'Brain',
      icon: <MaterialCommunityIcons name="brain" size={26} />,
      route: 'BrainScreen',
    },
    {
      name: 'Calendar',
      icon: <Ionicons name="calendar-outline" size={24} />,
      route: 'CalendarScreen',
    },
    { name: 'Home', icon: <Ionicons name="home-outline" size={28} />, route: 'HomeScreen' },
    {
      name: 'Chat',
      icon: <Ionicons name="chatbubble-ellipses-outline" size={24} />,
      route: 'ChatScreen',
    },
    {
      name: 'Settings',
      icon: <Ionicons name="settings-outline" size={24} />,
      route: 'SettingsScreen',
    },
  ];

  return (
    <View
      className="bg-dark-primary border-dark-outline flex-row justify-around rounded-full border-x-4 py-3 shadow-md"
      style={{
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
      }}>
      {buttons.map((btn, index) => {
        const isActive = route.name === btn.route;
        const rippleAnim = useRef(new Animated.Value(0)).current;

        const handlePress = () => {
          Animated.sequence([
            Animated.timing(rippleAnim, {
              toValue: 1,
              duration: 200,
              useNativeDriver: false,
            }),
            Animated.timing(rippleAnim, {
              toValue: 0,
              duration: 200,
              useNativeDriver: false,
            }),
          ]).start(() => {
            navigation.navigate(btn.route as never);
          });
        };

        const rippleScale = rippleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 2],
        });

        const rippleOpacity = rippleAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.2, 0],
        });

        return (
          <Pressable key={index} onPress={handlePress} style={styles.pressable}>
            <View style={styles.iconWrapper}>
              <Animated.View
                style={[
                  styles.ripple,
                  {
                    transform: [{ scale: rippleScale }],
                    opacity: rippleOpacity,
                    backgroundColor: isActive ? '#60A5FA' : '#FFFFFF',
                  },
                ]}
              />
              {btn.icon &&
                React.cloneElement(btn.icon, {
                  color: isActive ? '#60A5FA' : '#FFFFFF',
                })}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: 40,
    height: 40,
    borderRadius: 25,
    position: 'relative',
  },
  iconWrapper: {
    position: 'relative',
    zIndex: 2,
  },
  ripple: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    zIndex: 1,
  },
});
