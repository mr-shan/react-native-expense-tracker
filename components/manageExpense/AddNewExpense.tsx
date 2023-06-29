import { View, Text, StyleSheet } from 'react-native';

import { COLORS } from '../../constants/styles';

interface IProps {
}

export default (props: IProps) => {
  return (
      <View style={styles.expenseDetailsWrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>Expense name</Text>
          <Text style={styles.amount}>$ Amount</Text>
        </View>

        <Text style={styles.text}>Date</Text>
        <Text style={styles.text}>Description</Text>
        <Text style={styles.text}>Category</Text>
        <Text style={styles.text}>Type</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  expenseDetailsWrapper: {
    backgroundColor: COLORS.bg500,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingBottom: 5,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: COLORS.bg700,
    padding: 12,
    paddingVertical: 14,
  },
  title: {
    fontSize: 17,
    color: COLORS.accent500,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 18,
    color: COLORS.text400,
    fontWeight: '500',
  },
  text: {
    color: COLORS.text400,
    marginBottom: 5,
    paddingHorizontal: 12,
    paddingVertical: 5,
  }
});
