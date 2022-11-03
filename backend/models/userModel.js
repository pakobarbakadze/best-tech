import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      requre: true,
    },
    lastName: {
      type: String,
      requre: true,
    },
    pId: {
      type: String,
      require: true,
      unique: true,
      minLength: 11,
      maxLength: 11,
    },
    phone: {
      type: Number,
      require: true,
      unique: true,
      min: 100000000,
      max: 999999999,
    },
    email: {
      type: String,
      requre: true,
      unique: true,
    },
    password: {
      type: String,
      requre: true,
    },
    isAdmin: {
      type: Boolean,
      requre: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//hash password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
