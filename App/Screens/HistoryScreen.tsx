import {color} from '@rneui/base';
import {Icon} from '@rneui/themed';
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const dummyData = [
  {
    date: '29-03-2021',
    amount: '₹201',
    category: 'Shopping',
    sub_category: 'Clothes',
    type: 'credit',
    note: 'shopped from myntra',
  },
  {
    date: '29-03-2021',
    amount: '₹201',
    category: 'Shopping',
    sub_category: 'Clothes',
    type: 'credit',
    note: 'shopped from myntra',
  },
  {
    date: '29-03-2021',
    amount: '₹201',
    category: 'Shopping',
    sub_category: 'Clothes',
    type: 'credit',
    note: 'shopped from myntra',
  },
  {
    date: '29-03-2021',
    amount: '₹201',
    category: 'Shopping',
    sub_category: 'Clothes',
    type: 'credit',
    note: 'shopped from myntra',
  },
  {
    date: '29-03-2021',
    amount: '₹201',
    category: 'Shopping',
    sub_category: 'Clothes',
    type: 'credit',
    note: 'shopped from myntra',
  },
  {
    date: '29-03-2021',
    amount: '₹201',
    category: 'Shopping',
    sub_category: 'Clothes',
    type: 'credit',
    note: 'shopped from myntra',
  },
  {
    date: '29-03-2021',
    amount: '₹201',
    category: 'Shopping',
    sub_category: 'Clothes',
    type: 'credit',
    note: 'shopped from myntra',
  },
  {
    date: '29-03-2021',
    amount: '₹201',
    category: 'Shopping',
    sub_category: 'Clothes',
    type: 'credit',
    note: 'shopped from myntra',
  },
  {
    date: '29-03-2021',
    amount: '₹201',
    category: 'Shopping',
    sub_category: 'Clothes',
    type: 'credit',
    note: 'shopped from myntra',
  },
];

const HistoryRow = ({data}: {data: any}) => {
  return (
    <View style={styles.historyContainer}>
      <View>
        <Text style={styles.category}>{data?.category}</Text>
        <Text style={styles.subCategory}>{data?.sub_category}</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.amount}>{data?.amount}</Text>
        <Text style={styles.date}>{data.date}</Text>
      </View>
      <View>
        <Icon type="ionicon" name="chatbubble-ellipses-outline" />
      </View>
    </View>
  );
};

export const HistoryScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={dummyData}
        renderItem={item => <HistoryRow data={item.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f6f8fb',
    marginVertical: RFPercentage(1.5),
    paddingVertical: RFPercentage(1.5),
  },
  category: {
    fontSize: RFPercentage(1.8),
    color: '#043E90',
    marginBottom: RFPercentage(0.2),
    fontFamily: 'entypo',
  },
  subCategory: {
    fontSize: RFPercentage(1.5),
    color: '#043E90',
  },
  amount: {fontSize: RFPercentage(2), color: 'green'},
  date: {
    fontSize: RFPercentage(1.5),
    color: 'grey',
  },
});
