import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { images } from '@/constants/images';

type ImageKey = keyof typeof images;


interface JobCardProps {
  title: string;
  rate: string;
  description: string;
  duration: string;
  platform: ImageKey;
}

const JobCard = ({ title, rate, description, duration, platform }: JobCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rate}>{rate}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footer}>
        <Text style={styles.duration}>{duration}</Text>
        <Text style={styles.platform}>{platform}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 16,
    color: '#45B5AA',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  duration: {
    fontSize: 14,
    color: '#999',
  },
  platform: {
    fontSize: 14,
    color: '#45B5AA',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
    marginLeft: 200,
  },
});

export default JobCard;