import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { COLORS } from '../../constants/styles';
import Expense from '../../models/Expense';

import Input from '../ui/Input';
import ExpenseFooter from './ExpenseFooter';

interface IProps {
  data?: Expense | null;
  onSubmit: any;
  onCancel: any;
}

export default (props: IProps) => {
  const [formData, setFormData] = useState({
    id: Math.random().toFixed(2),
    name: '',
    description: '',
    amount: '',
    date: '',
    category: '',
    type: '',
  });

  const inputChangeHandler = (identifier: string, text: string) => {
    setFormData((oldState) => {
      return { ...oldState, [identifier]: text };
    });
  };

  const onCancelHandler = () => {
    props.onCancel();
  };

  const onSubmitHandler = () => {
    props.onSubmit({ ...formData, amount: parseFloat(formData.amount) || 0 });
  };

  useEffect(() => {
    if (props.data) {
      const data = {
        ...props.data,
        amount: props.data.amount.toString(),
        date: props.data.date.toString(),
      };
      setFormData(data);
    }
  }, [props.data]);

  const submitButtonText = props.data ? 'Save' : 'Add'

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Input
          label='name'
          displayName='Name'
          value={formData.name}
          onChange={inputChangeHandler}
          containerStyle={styles.textInputWrapper}
          inputConfig={{ autoCorrect: false, maxLength: 40 }}
        />
        <View style={styles.inlineWrapper}>
          <Input
            label='amount'
            displayName='Amount'
            value={formData.amount}
            onChange={inputChangeHandler}
            containerStyle={{ ...styles.textInputWrapper, flex: 1 }}
            inputConfig={{ autoCorrect: false, keyboardType: 'decimal-pad' }}
          />
          <Input
            label='date'
            displayName='Date'
            value={formData.date}
            onChange={inputChangeHandler}
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
            value={formData.category}
            onChange={inputChangeHandler}
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
            value={formData.type}
            onChange={inputChangeHandler}
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
          value={formData.description}
          onChange={inputChangeHandler}
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
