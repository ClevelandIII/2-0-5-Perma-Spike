const port = process.env.PORT || 3000
const express = require("express");
app = express();
require("dotenv").config();
require("express-async-errors");
const connection = require('./DB/connect')

//Make sure to add middleware, error handler and authcheck eventually

const challenge = require("./routes/challenge");
const login = require("./routes/login");
const odyssey = require("./routes/odyssey");

//SECURITY stuff
const xss = require("xss-clean");
const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");
const cors = require("cors");
const minutes = 1000 * 60;
const limit = 15 * minutes;

//Swagger stuff, need way later
// const YAML = require("yamljs");
// const swaggerUI = require("swagger-ui-express");
// const swaggerDoc = YAML.load("./swagger.yaml");

app
  //random stuff from peck
  .set("trust proxy", 1)
  .use(rateLimiter({ windowMs: limit, max: 100 }))
  .use([express.urlencoded({ extended: false }), express.json()])
  .use(helmet())
  .use(cors())
  .use(xss())
  // .use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc))

  .get("/", (req, res) => {
    res.send("Hello");
  })
  .use("/api/v1/challenge", challenge)
  .use("/api/v1/login", login)
  .use("/api/v1/odyssey", odyssey);

//Peck startup
const startup = async () => {
  try {
    await connection(process.env.local.MONGO_URL);
    app.listen(port, () => console.log(`server is listening at port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
startup();
