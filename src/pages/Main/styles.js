import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled(LinearGradient).attrs({
  colors: ["#534EFF", "#E86A15"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
  font-size: 22;
  color: #fafafa;
  font-weight: normal;
  text-align: center;
`;

export const Form = styled.View`
  margin: 5px 20px;
`;

export const Submit = styled.TouchableOpacity`
  background: #f5bb5d;
  text-align: center;
  margin: 5px 0px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: "white"
})`
  background: #0e0a29;
  color: #fff;
`;
export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false
})`
  background-color: rgba(255, 255, 255, 0.2);
`;
