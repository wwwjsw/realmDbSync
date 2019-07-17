import React, { Component } from "react";
import { Keyboard } from "react-native";

import api from "../../services/api";

import getRealm from "../../services/realm";

import { CLIENTS_SCHEMA } from "../../schemas/allSchemas";

import Client from "../../components/Client";

import { Container, Title, Input, Submit, List, Form } from "./styles";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
      clients: [],
      text: ""
    };
  }

  componentDidMount() {
    getRealm().then(realm => {
      this.setState({
        size: realm.objects(CLIENTS_SCHEMA).length,
        clients: realm.objects(CLIENTS_SCHEMA)
      });
    });
  }

  downloadClients() {
    api.get("api/clientes").then(response => {
      getRealm().then(realm => {
        realm.write(() => {
          response.data.forEach(obj => {
            if (
              realm.objects(CLIENTS_SCHEMA).filtered(`id=${obj.id}`).length ===
              0
            ) {
              realm.create(CLIENTS_SCHEMA, obj);
            }
          });
          this.setState({
            size: realm.objects(CLIENTS_SCHEMA).length,
            clients: realm.objects(CLIENTS_SCHEMA)
          });
        });
      });
    });
  }
  clearAllClients() {
    getRealm()
      .then(realm => {
        realm.write(() => {
          const allClients = realm.objects(CLIENTS_SCHEMA);
          realm.delete(allClients);
          this.setState({ size: realm.objects(CLIENTS_SCHEMA).length });
        });
      })
      .catch(error => {});
  }

  findName() {
    const text = this.state.text;
    getRealm()
      .then(realm => {
        const res = realm
          .objects(CLIENTS_SCHEMA)
          .filtered(`nome LIKE '*${text}*?'`);
        this.setState({ clients: res });
        Keyboard.dismiss();
      })
      .catch(error => {
        console.warn(error);
      });
  }

  render() {
    const info = "items no banco Realm: " + this.state.size;

    return (
      <Container>
        <Title>{info}</Title>
        <Form>
          <Submit onPress={this.downloadClients.bind(this)}>
            <Title>Download</Title>
          </Submit>
          <Submit onPress={this.clearAllClients.bind(this)}>
            <Title>Deletar banco</Title>
          </Submit>
          <Submit onPress={this.findName.bind(this)}>
            <Title>Pesquisar!</Title>
          </Submit>
          <Input
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            placeholder="Pesquisa por nome..."
          />
        </Form>
        <List
          keyboardShouldPersistTaps="handled"
          data={this.state.clients}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Client data={item} />}
        />
      </Container>
    );
  }
}
