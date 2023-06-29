import { Text, StyleSheet } from 'react-native';

import GenericButton from './GenericButton';
import { COLORS } from '../../../constants/styles';

interface IProps {
  label: string;
  onPress: any;
  containerStyle?: StyleSheet.AbsoluteFillStyle | {};
}

export default (props: IProps) => {
  return (
    <GenericButton
      onPress={props.onPress}
      androidRippleColor='#ffe96e'
      backgroundColor={COLORS.primary500}
      containerStyle={props.containerStyle}
    >
      <Text style={styles.text}>{props.label}</Text>
    </GenericButton>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.text100,
    fontWeight: '500',
    textAlign: 'center'
  },
});
