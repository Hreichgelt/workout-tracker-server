const { users } = require("../models");

const userData = [
    {
        name: "Bucky",
        email: "F_EmBucky@email.com",
        password: "thisisapassword123987",
    },
    {
        username: "Golpher",
        email: "Golpher@gmail.com",
        password: "thispassword33",
      },
      {
        username: "CornHusk",
        email: "CornHusk@gmail.com",
        password: "thispassword33",
      },
      {
        username: "Perdue",
        email: "Perdue@gmail.com",
        password: "thispassword33",
      },
];

const userSeed = () => users.bulkCreate(userData);
module.exports = userSeed;