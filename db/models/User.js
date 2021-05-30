"use strict";
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

module.exports = (mongoose) => {
  console.log("7");
  const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      password: {
        type: String,
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  );

  // Hashes password automatically
  userSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
    this.password = hash;
    next();
  });

  const User = mongoose.model("User", userSchema);
  return User;
};
