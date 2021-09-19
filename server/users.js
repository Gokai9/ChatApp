const users = [];

export const userJoin = (id, name, room) => {
  const user = { id, name, room };
  const len = users.find((us) => us.id === user.id);
  if (!len) {
    users.push(user);
  }

  console.log(users);

  return user;
};

export const getUser = (id) => {
  return users.find((user) => user.id === id);
};

export const userDisconnect = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};
