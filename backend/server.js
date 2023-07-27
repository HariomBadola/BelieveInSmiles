const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")

const app = express();


dotenv.config({path : './config.env'});


app.use(bodyParser.json());


  
app.use(cors());


// Connect to MongoDB
const DB = process.env.DATABASE;
const PORT = process.env.PORT;

app.use(express.json())
app.use(require('./route/auth'));

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});


const userDataSchema = new mongoose.Schema({
  firstName: {type:String,
  required : true},

  lastName: {type:String,
  required : true},

  phone: {type:String,
  required : true},
  
  email: {type:String,
    required : true},

  address: {type:String,
    required : true},

  message: {type:String,
    required : true},
});

const UserData = mongoose.model("UserData", userDataSchema);


app.post("/form", async (req, res) => {
  const { firstName, lastName, phone, email, address, message } = req.body;

  if (firstName && lastName && phone && email && address && message) {
    try {
      const feedbackData = new UserData({
        firstName,
        lastName,
        phone,
        email,
        address,
        message,
      });

      const savedFeedback = await feedbackData.save();
      console.log("Feedback saved successfully:", savedFeedback);

      res.status(200).json({ message: "Data stored successfully" });
    } catch (error) {
      console.error("Error saving feedback:", error);
      res.status(500).json({ error: "Error saving feedback" });
    }
  } else {
    res.status(400).json({ error: "Please fill all the fields" });
  }

});




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
