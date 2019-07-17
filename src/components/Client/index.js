import React from "react";

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  Refresh,
  RefreshText
} from "./styles";

export default function Client({ data, onRefresh }) {
  return (
    <Container>
      <Name>{data.nome}</Name>
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
