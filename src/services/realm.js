const Realm = require('realm');

import { FollowersSchema } from '../schemas/allSchemas';

export default function getRealm() {
  const databaseOptions = {
    path: 'github.realm',
    schema: [FollowersSchema],
    schemaVersion: 0,
    deleteRealmIfMigrationNeeded: true,
  };

  return Realm.open(databaseOptions);
}
