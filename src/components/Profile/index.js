import React from "react";
import { Image } from "react-native";

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  Refresh,
  RefreshText,
} from "./styles";

export default function Profile({ data, onRefresh }) {
  return (
    <Container>
      <Image
        source={{ uri: data.avatar_url }}
        style={{ flexGrow: 2, width: 100, height: 100 }}
      />
      <Name>{data.login}</Name>
      <Description>{data.id}</Description>

      {/* <Stats>
        <Stat>
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats> */}

      {/* <Refresh onPress={onRefresh}>
        <RefreshText>ATUALIZAR</RefreshText>
      </Refresh> */}
    </Container>
  );
}
