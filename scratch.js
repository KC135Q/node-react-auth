// Hashes password automatically
userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
  this.password = hash;
  next();
});
