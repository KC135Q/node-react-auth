"use strict";

module.exports = {
  up: async (models, mongoose) => {
    return await models.User.create({
      name: "Danny K",
      email: "d.a.kaltenbaugh@gmail.com",
      password: "abcd@1234",
    }).then((res) => {
      console.log("res", res);
    });
  },

  down: (models, mongoose) => {
    return models.User.bulkWrite([
      {
        deleteOne: {
          filter: {
            name: "Danny K",
          },
        },
      },
    ]).then((res) => {
      console.log(res.deletedCount);
    });
  },
};
