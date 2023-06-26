import { FlatList, View, Text, StyleSheet } from 'react-native';

import Expense from '../../models/Expense';
import { COLORS } from '../../constants/styles';

import ExpenseListItem from './ExpenseListItem';

interface IProps {
  data: Array<Expense>;
  onPress: any;
}

export default (props: IProps) => {
  const categoryItemPressHandler = (id: string) => {
    props.onPress(id);
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={(item) => (
        <ExpenseListItem
          expense={item.item}
          onPress={categoryItemPressHandler}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});