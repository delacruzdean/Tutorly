import React, { useState } from 'react';
import { View, ScrollView, TextInput, StyleSheet, Text, Image, Pressable } from 'react-native';
import JobCard from '@/components/JobCard';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
//import NavigationBar from '@/components/NavigationBar';
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjects = [
    { id: 1, name: 'Math', icon: icons.math },
    { id: 2, name: 'Science', icon: icons.science },
    { id: 3, name: 'English', icon: icons.english },
    { id: 4, name: 'Technology', icon: icons.technology },
    { id: 5, name: 'Literature', icon: icons.literature },
  ];

  const tutorJobs = [
    {
      id: 1,
      title: 'Calculus Help',
      rate: '₱250/hr',
      description: 'Looking for assistance w/ Calculus. mga Derivatives n shit',
      duration: '2 hours',
      platform: <Image source={icons.zoom} className='h-5 w-auto' resizeMode='contain'/>,
      subject: 'Math'
    },
    {
      id: 2,
      title: 'Physics Help',
      rate: '₱200/hr',
      description: 'Sakit sa ulo ng p6, daming alam ni newton need help w the laws of motion',
      duration: '1½ hours',
      platform: <Image source={icons.teams} className='h-5 w-auto' resizeMode='contain'/>,
      subject: 'Science'
    },
    {
      id: 3,
      title: 'Cisco Packet Tracer Help',
      rate: '₱150/hr',
      description: 'Gawin m activity ko sa Cisco Packet Tracer',
      duration: '1 hour',
      platform: <Image source={icons.zoom} className='h-5 w-auto' resizeMode='contain'/>,
      subject: 'Technology'
    },
    {
      id: 4,
      title: 'ADS: TITAN GEL',
      rate: '₱750/100ml',
      description: 'Pampalaki ng ano',
      duration: '7 days',
      platform: <Image source={icons.zoom} className='h-5 w-auto' resizeMode='contain'/>,
      subject: 'Science'
    },
    {
      id: 5,
      title: 'xBet',
      rate: '₱10k/hr',
      description: '500 mo, magiging 10k dito !! Tara na! Karamihan sumusuko bago manalo ng malaking halaga!',
      duration: '1 hour',
      platform: <Image source={icons.zoom} className='h-5 w-auto' resizeMode='contain'/>,
      subject: 'Technology'
    },
  ];

  const filteredJobs = tutorJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject ? job.subject === selectedSubject : true;
    return matchesSearch && matchesSubject;
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.logoContainer}>
          <Image source={images.logo} style={styles.logo} />
        </View>

        <View style={styles.searchContainer}>
          <Image source={icons.search} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search topics"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.subjectsContainer}>
          {subjects.map((subject) => (
            <Pressable
              key={subject.id}
              onPress={() => setSelectedSubject(subject.name)}
              style={[
                styles.subjectButton,
                selectedSubject === subject.name && styles.selectedSubject
              ]}
            >
              <Image source={subject.icon} style={styles.subjectIcon} />
              <Text style={styles.subjectText}>{subject.name}</Text>
            </Pressable>
          ))}
      </ScrollView>
    </View>

      <ScrollView style={styles.jobsContainer}>
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            {...job}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerWrapper: {
    backgroundColor: '#45B5AA',
    paddingBottom: 16,
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  logo: {
    width: 32,
    height: 32,
  },
  searchContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 40,
    height: 40,
    marginRight: 0,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  subjectsContainer: {
    padding: 16,
  },
  subjectButton: {
    alignItems: 'center',
    marginRight: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 60,
  },
  selectedSubject: {
    backgroundColor: '#e0e0e0',
  },
  subjectIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  subjectText: {
    fontSize: 12,
  },
  jobsContainer: {
    flex: 1,
    padding: 16,
  },
});

export default HomePage;

