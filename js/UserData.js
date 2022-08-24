class User {
  constructor(u, p) {
    this.name = u;
    this.pass = p;
  }
}

function pushUserData(user) {
  users_data.push(user);
}

const users_data = [];
