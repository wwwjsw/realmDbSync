import React, { useState } from "react";
import { Keyboard } from "react-native";

import api from "../../services/api";

import getRealm from "../../services/realm";

import { FOLLOWERS_SCHEMA } from "../../schemas/allSchemas";

import Profile from "../../components/Profile";

import { Container, Title, Input, Submit, List, Form } from "./styles";

export default function App() {
  const [size, setSize] = useState(0);
  const [profile, setProfile] = useState([]);
  const [text, setText] = useState("");
  const [oldText, setOldText] = useState("");

  function downloadClients() {
    api.get(`${text}/followers`).then(response => {
      getRealm().then(realm => {
        realm.write(() => {
          response.data.forEach(obj => {
            if (
              realm.objects(FOLLOWERS_SCHEMA).filtered(`id=${obj.id}`)
                .length === 0
            ) {
              realm.create(FOLLOWERS_SCHEMA, obj);
            }
          });

          setSize(realm.objects(FOLLOWERS_SCHEMA).length);

          setProfile(realm.objects(FOLLOWERS_SCHEMA));
        });
      });
    });
  }

  function clearAllClients() {
    getRealm()
      .then(realm => {
        realm.write(() => {
          const allClients = realm.objects(FOLLOWERS_SCHEMA);
          realm.delete(allClients);
          setSize(realm.objects(FOLLOWERS_SCHEMA));
        });
        setSize(0);
      })
      .catch(error => {});
  }

  function findName() {
    getRealm()
      .then(realm => {
        setProfile(
          realm
            .objects(FOLLOWERS_SCHEMA)
            .filtered(`login LIKE '*${text.toLowerCase()}*?'`)
        );
        Keyboard.dismiss();
      })
      .catch(error => {
        console.error(error);
      });
  }

  function DownloadClientsOrFindName() {
    if (oldText !== text) {
      clearAllClients()
      downloadClients(text)
    } else {
      findName()
    }
  }

  const info = "items no banco Realm: " + size;

  return (
    <Container>
      <Title>{info}</Title>
      <Form>
        <Submit onPress={() => DownloadClientsOrFindName()}>
          <Title>Search!</Title>
        </Submit>
        <Submit onPress={clearAllClients.bind(this)}>
          <Title>Deletar banco</Title>
        </Submit>
        <Input
          onChangeText={input => {
            setText(input);
          }}
          value={text}
          placeholder="Pesquisa por nome..."
        />
      </Form>
      <List
        keyboardShouldPersistTaps="handled"
        data={profile}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Profile data={item} />}
      />
    </Container>
  );
}
