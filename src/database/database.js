const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.log(`Not connected to MongoDB, erro: ${err}`));
};

module.exports = connection;