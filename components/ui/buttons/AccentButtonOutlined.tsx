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
      androidRippleColor={COLORS.bg700}
      backgroundColor='transparent'
      containerStyle={{
        ...props.containerStyle,
        ...styles.container
      }}
    >
      <Text style={styles.text}>{props.label}</Text>
    </GenericButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.accent500,

  },
  text: {
    color: COLORS.accent500,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
