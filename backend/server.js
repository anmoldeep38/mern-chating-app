const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const chatRoutes = require("./routes/chatRoutes.js");
const messageRoutes = require("./routes/messageRoutes");
const {notFound,errorHandler} = require('./middleware/errorMiddleware.js');

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running sucess");
});

// app.get("/api/chat", (req, res) => {
//     // const chatsJSON = JSON.stringify(chats);
//     // res.send(chatsJSON);
//     res.send(chats);
//   });
  
//   app.get("/api/chat/:id", (req, res) => {
//   //  console.log(req.params.id);
//   const singleChat = chats.find((c)=> c._id === req.params.id);
//   res.send(singleChat);
//   });
  
app.use('/api/user',userRoutes);
app.use("/api/chat",chatRoutes);
app.use("/api/message",messageRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5000, () => {
  console.log('\x1b[31m%s\x1b[0m', `Server Started on PORT ${PORT}`);
});
