export const CLIENTS_SCHEMA = "clients";

export const ClientsSchema = {
  name: CLIENTS_SCHEMA,
  primaryKey: "id",
  properties: {
    id: "int",
    nome: "string"
  }
};
