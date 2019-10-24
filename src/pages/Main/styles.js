import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled(LinearGradient).attrs({
  colors: ["#6503A6", "#4227F2"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
  font-size: 22;
  color: #ffffff;
  margin-top: 30;
  margin-bottom: 30;
  font-weight: normal;
  text-align: center;
`;

export const Form = styled.View`
  flex-direction: column;
`;

export const Submit = styled.TouchableOpacity`
  background: #0D0D0D;
  text-align: center;
  margin-bottom: 5;
  margin-left: 5;
  margin-right: 5;
  padding: 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "white"
})`
  background: #0D0D0D;
  margin-left: 5;
  margin-bottom: 10;
  margin-right: 5;
  color: #fff;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  padding-top: 20;
  background-color: rgba(255, 255, 255, 0);
`;
