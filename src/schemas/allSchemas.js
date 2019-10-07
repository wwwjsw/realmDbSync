export const FOLLOWERS_SCHEMA = "followers";

export const FollowersSchema = {
  name: FOLLOWERS_SCHEMA,
  primaryKey: "id",
  properties: {
    id: "int",
    login: "string",
    avatar_url: "string",
  },
};
