import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { icons } from '@/constants/icons';

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { route: '/', icon: icons.home },
    { route: '/calendar', icon: icons.calendar },
    { route: '/post', icon: icons.post },
    { route: '/inbox', icon: icons.inbox },
    { route: '/profile', icon: icons.profile },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <Pressable
          key={index}
          onPress={() => router.push(tab.route)}
          style={[styles.tab, pathname === tab.route && styles.activeTab]}
        >
          <Image source={tab.icon} style={styles.icon} />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
  }
});

export default NavigationBar;