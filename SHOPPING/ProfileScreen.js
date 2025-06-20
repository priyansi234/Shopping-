import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {
  const menuItems = ['Account', 'Orders', 'Wishlist'];

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Priyansi Mishra</Text>
        <Text style={styles.email}>priyansimishra9@gmail.com</Text>
      </View>

      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
            <AntDesign name="right" size={16} color="#333" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 4,
    fontSize: 14,
    color: '#555',
  },
  menu: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuText: {
    fontSize: 16,
    color: '#000',
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: '#F44363',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
