const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config({ path: __dirname + "/.env" });
const connectDB = require("./config/db");
const router = require("./routes");
const bodyParser = require("body-parser");
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
app.use("/api", router);

const PORT = 8000 || process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running " + PORT);
  });
});
