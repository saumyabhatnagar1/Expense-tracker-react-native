import RNDateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import {Button, Input} from '@rneui/base';
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {RFPercentage} from 'react-native-responsive-fontsize';
import moment from 'moment';
export const AddExpense = () => {
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const toggleDateTime = () => {
    setShowDateTimePicker(!showDateTimePicker);
  };
  const confirmDate = (date: any) => {
    console.log(date);
    const formatDate = moment(date);
    // formatDate.getTime()
    setDate(formatDate.format('DD-MM-YYYY, HH:MM'));
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Input
          inputContainerStyle={styles.inputContainerStyle}
          value={category}
          onChangeText={setCategory}
          keyboardType="default"
          placeholder="Enter category"
          label="Category:"
          labelStyle={styles.label}
          placeholderTextColor={'#043E90'}
        />
        <Input
          value={subCategory}
          onChangeText={setSubCategory}
          keyboardType="default"
          placeholder="Enter sub category"
          label="Sub Category:"
          inputContainerStyle={styles.inputContainerStyle}
          labelStyle={styles.label}
          placeholderTextColor={'#043E90'}
        />
        <Input
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="Enter amount"
          label={'Amount:'}
          inputContainerStyle={styles.inputContainerStyle}
          labelStyle={styles.label}
          placeholderTextColor={'#043E90'}
        />
        <Input
          value={note}
          onChangeText={setNote}
          keyboardType="default"
          placeholder="Enter Note"
          label={'Any Note:'}
          multiline={true}
          numberOfLines={2}
          inputContainerStyle={styles.inputContainerStyle}
          labelStyle={styles.label}
          placeholderTextColor={'#043E90'}
        />
        <Input
          value={date}
          onChangeText={setDate}
          keyboardType="default"
          disabled
          label={'Date and Time:'}
          inputContainerStyle={[
            styles.inputContainerStyle,
            {borderColor: 'gray'},
          ]}
          labelStyle={[styles.label, {color: 'gray'}]}
        />

        <Button title={'Select date and time'} onPress={toggleDateTime} />
      </View>
      <DateTimePicker
        isVisible={showDateTimePicker}
        mode="datetime"
        onCancel={toggleDateTime}
        onConfirm={confirmDate}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderColor: '#043E90',
    borderWidth: 1,
    minWidth: RFPercentage(30),
    borderRadius: 8,
  },
  label: {
    fontWeight: 'normal',
    color: '#043E90',
  },
});
