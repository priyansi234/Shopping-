import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const initialCartItems = [
  {
    id: '1',
    name: 'T-Shirt',
    price: 20,
    quantity: 1,
    image:
      'https://cdn.pixabay.com/photo/2016/08/03/23/46/t-shirt-1569804_960_720.png',
  },
  {
    id: '2',
    name: 'Jeans',
    price: 40,
    quantity: 1,
    image:
      'https://cdn.pixabay.com/photo/2013/07/12/12/58/jeans-146269_960_720.png',
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.controlBtn}
            onPress={() => updateQuantity(item.id, -1)}>
            <Text style={styles.controlText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.controlBtn}
            onPress={() => updateQuantity(item.id, 1)}>
            <Text style={styles.controlText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeItem(item.id)}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={22} color="#000" />
        <Text style={styles.headerText}>CART</Text>
        <View style={{ width: 22 }} /> {/* For spacing */}
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#eee' }} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemPrice: {
    marginVertical: 5,
    color: '#555',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    width: 110,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  controlBtn: {
    padding: 6,
  },
  controlText: {
    fontSize: 16,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeText: {
    color: '#F44363',
    marginLeft: 10,
    fontWeight: '600',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  totalLabel: {
    fontSize: 16,
    color: '#666',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#F44363',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
