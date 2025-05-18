import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MindSyncLogo from '../../src/assets/svg/MindSyncLogo.svg';

export const TopBar = () => {
  return (
    <View className={styles.container}>
      {/* Avatar */}
      <View className={styles.avatar}>
        <Text className={styles.avatarText}>M</Text>
      </View>

      {/* Logo */}
      <View className={styles.logoWrapper}>
        <MindSyncLogo width={100} height={24} />
      </View>

      {/* Menu Icon */}
      <Pressable>
        <Ionicons name="menu-outline" size={32} color="#6B7280" />
      </Pressable>
    </View>
  );
};

const styles = {
  container:
    'bg-dark-primary flex-row items-center justify-between rounded-full px-4 py-4 shadow-md',
  avatar: 'bg-dark-secondary h-9 w-9 rounded-full items-center justify-center',
  avatarText: 'text-white font-semibold',
  logoWrapper: '-ml-5 -mb-2 flex-1 items-center',
};
