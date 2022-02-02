import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb://jerrylxia:jerrylxia123@cluster0-shard-00-00.ryiwt.mongodb.net:27017,cluster0-shard-00-01.ryiwt.mongodb.net:27017,cluster0-shard-00-02.ryiwt.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-zz4ytf-shard-0&authSource=admin&retryWrites=true&w=majority";
// helped from: https://stackoverflow.com/questions/55499175/how-to-fix-error-querysrv-erefused-when-connecting-to-mongodb-atlas
// (changed node to version 2.2.12)

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
