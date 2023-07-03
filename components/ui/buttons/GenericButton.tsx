import { Pressable, StyleSheet, Platform, View } from 'react-native';

import { COLORS } from '../../../constants/styles';
import { FunctionComponent } from 'react';

interface IProps {
  onPress?: any;
  children: React.ReactElement;
  containerStyle?: StyleSheet.AbsoluteFillStyle | {};
  androidRippleColor?: string;
  backgroundColor: string;
  disabled?: boolean
}

const GenericButton: FunctionComponent<IProps> = (props) => {
  const getPressableStyle = (pressed: boolean) => {
    const pressableStyles: Array<any> = [
      styles.pressable,
      { backgroundColor: props.backgroundColor }
    ];
    if (pressed && Platform.OS === 'ios')
      pressableStyles.push(styles.itemPressed);
    return pressableStyles;
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Pressable
        style={({ pressed }) => getPressableStyle(pressed)}
        onPress={props.onPress}
        disabled={props.disabled}
        android_ripple={{ color: props.androidRippleColor }}
      >
        {props.children}
      </Pressable>
    </View>
  );
};

GenericButton.defaultProps = {
  disabled: false,
  containerStyle: {},
  androidRippleColor: COLORS.bg500
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  pressable: {
    backgroundColor: COLORS.accent500,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 10
  },
  itemPressed: {
    opacity: 0.7,
  },
});

export default GenericButton