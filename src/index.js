require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectionDB = require('./database/database');
const userRoute = require("./users/users.route");
const authRoute = require("./auth/auth.route");
const character = require("./rickandmorty/rickandmorty.route");
const swaggerRoute = require("./swagger/swagger.route");

const port = process.env.PORT || 3001;
const application = express();

connectionDB();

application.use(cors());
application.use(express.json());

application.use("/users", userRoute);
application.use("/auth", authRoute);
application.use("/characters", character);
application.use("/api", swaggerRoute);


application.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
