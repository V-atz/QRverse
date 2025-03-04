const express = require("express");
const app = express();
const cors = require("cors");
require("./config/dotenv");
// const connectToMongoDb = require("./config/connect");
const uploadRoutes = require('./routes/uploadRoutes')
const qrRoutes = require('./routes/qrRoutes')
const port = process.env.PORT || 5000;
// const mongoUrl = process.env.MONGO_URL || null;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/upload', uploadRoutes)
app.use('/api/qr', qrRoutes)

//server
const serverStart = async () => {
  try {
    //database
    // await connectToMongoDb(mongoUrl);

    //server setup
    app.listen(port, () => {
      console.log(`Server started at PORT ${port?port:'5000'}`);
    });
  } catch (error) {
    console.error("Server failed to start due to Database connection issue.");
    process.exit(1);
  }
};

serverStart();
