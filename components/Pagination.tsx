import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { OnboardingData } from '../data/data';
import { SharedValue } from 'react-native-reanimated';
import Dot from './Dot';

type Props = {
  data: OnboardingData[];
  x: SharedValue<number>;
};

const Pagination = ({ data, x }: Props) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => {
        return <Dot index={index} x={x} key={index} />;
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  }
});