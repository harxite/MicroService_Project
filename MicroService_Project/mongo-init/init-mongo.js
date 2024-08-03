db.createUser({
  user: "admin",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "yourdb",
    },
  ],
});

db.createCollection("yourcollection");
