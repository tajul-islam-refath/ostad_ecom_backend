const User = require("../models/UserModel"); // Assuming you have a User model defined
async function createFirstUser() {
  const userCount = await User.countDocuments();

  if (userCount === 0) {
    const newUser = new User({
      email: "admin@gmail.com",
      password: "$2a$09$hZRnYTiDPCnJ4uZPitB1HO5Nuvr9xOi6uuE1RiKZn99.xFtKf9zTu",
      name: "Tajul Islam Refath",
      role: "admin",
    });

    await newUser.save();
    console.log("First user created!");
  }
}

module.exports = createFirstUser;
