fetch("https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user")
  .then(response => response.json())
  .then(users => {
    return new Promise((resolve, reject) => {
      const user = users.find(element => element.id === "8");
      if (user) {
        resolve(user.name);
      } else {
        reject("Data with ID 8 does not exist!");
      }
    });
  })
  .then(name => {
    console.log(name);
  })
  .catch(err => {
    console.error(err);
  });
