import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => (
  <View style={styles.spinner}>
    <ActivityIndicator size={size || 'large'} />
  </View>
);

const styles = {
  spinner: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
};

export { Spinner };
