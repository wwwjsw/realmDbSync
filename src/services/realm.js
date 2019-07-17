const Realm = require("realm");

import { ClientsSchema } from "../schemas/allSchemas";

export default function getRealm() {
  const databaseOptions = {
    path: "banco.realm",
    schema: [ClientsSchema],
    schemaVersion: 0,
    deleteRealmIfMigrationNeeded: true
  };

  return Realm.open(databaseOptions);
}
