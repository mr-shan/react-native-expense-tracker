import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';

import { COLORS } from '../../constants/styles';
import Expense from '../../models/Expense';

import Input from '../ui/Input';
import ExpenseFooter from './ExpenseFooter';

import { required } from './../../helpers/validators';

interface IProps {
  data?: Expense | null;
  onSubmit: any;
  onCancel: any;
}

export default (props: IProps) => {
  const [formData, setFormData] = useState({
    id: { value: Math.random().toFixed(2), isValid: true, isTouched: false },
    name: { value: '', isValid: false, isTouched: false },
    description: { value: '', isValid: false, isTouched: false },
    amount: { value: '', isValid: false, isTouched: false },
    date: { value: '', isValid: false, isTouched: false },
    category: { value: '', isValid: false, isTouched: false },
    type: { value: '', isValid: false, isTouched: false },
  });

  const [error, setError] = useState(false);

  const inputChangeHandler = (identifier: string, text: string, isValid: boolean) => {
    setFormData((oldState) => {
      return { ...oldState, [identifier]: { value: text, isValid: isValid, isTouched: true } };
    });
  };

  const onCancelHandler = () => {
    props.onCancel();
  };

  const onSubmitHandler = () => {
    const submitData: any = {};
    let isValid = true;
    for (let item in formData) {
      submitData[item] = formData[item].value;
      if (!formData[item].isValid) {
        setError(true);
        Alert.alert('Invalid details', 'Please complete all required details before submit');
        return;
      }
    }
    props.onSubmit({
      ...submitData,
      amount: parseFloat(formData.amount.value) || 0,
    });
  };

  useEffect(() => {
    if (props.data) {
      const data: any = {
        ...props.data,
        amount: props.data.amount.toString(),
        date: props.data.date.toString(),
      };
      const formattedData: any = {};
      for (let item in data) {
        formattedData[item] = { value: data[item], isValid: true };
      }
      setFormData(formattedData);
    }
  }, [props.data]);

  const submitButtonText = props.data ? 'Save' : 'Add';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Input
          label='name'
          displayName='Name'
          {...formData.name}
          onChange={inputChangeHandler}
          rules={[required]}
          containerStyle={styles.textInputWrapper}
          inputConfig={{ autoCorrect: false, maxLength: 40 }}
        />
        <View style={styles.inlineWrapper}>
          <Input
            label='amount'
            displayName='Amount'
            {...formData.amount}
            onChange={inputChangeHandler}
            rules={[required]}
            containerStyle={{ ...styles.textInputWrapper, flex: 1 }}
            inputConfig={{ autoCorrect: false, keyboardType: 'decimal-pad' }}
          />
          <Input
            label='date'
            displayName='Date'
            {...formData.date}
            onChange={inputChangeHandler}
            rules={[required]}
            containerStyle={{ ...styles.textInputWrapper, flex: 1 }}
            inputConfig={{
              autoCorrect: false,
              autoCapitalize: 'none',
              placeholder: 'YYYY-MM-DD',
              maxLength: 10,
            }}
          />
        </View>
        <View style={styles.inlineWrapper}>
          <Input
            label='category'
            displayName='Category'
            {...formData.category}
            onChange={inputChangeHandler}
            rules={[required]}
            containerStyle={{ ...styles.textInputWrapper, flex: 1 }}
            inputConfig={{
              autoCorrect: false,
              maxLength: 20,
              placeholder: 'e.g. Shopping, Food',
            }}
          />
          <Input
            label='type'
            displayName='Type'
            {...formData.type}
            onChange={inputChangeHandler}
            rules={[required]}
            containerStyle={{ ...styles.textInputWrapper, flex: 1 }}
            inputConfig={{
              autoCorrect: false,
              maxLength: 20,
              placeholder: 'e.g. Essential, Luxury',
            }}
          />
        </View>
        <Input
          label='description'
          displayName='Description'
          {...formData.description}
          onChange={inputChangeHandler}
          rules={[required]}
          containerStyle={styles.textInputWrapper}
          inputConfig={{ maxLength: 80, multiline: true }}
          inputStyle={styles.multilineInput}
        />
      </View>

      <ExpenseFooter
        submitButtonLabel={submitButtonText}
        onCancel={onCancelHandler}
        onSubmit={onSubmitHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg700,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    padding: 20,
    marginBottom: 40,
  },
  formContainer: {},
  textInputWrapper: {
    marginBottom: 18,
  },
  multilineInput: {
    height: 80,
    paddingTop: 10,
  },
  inlineWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 14,
  },
});
