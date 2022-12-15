const connection = require("./Config/db");
const { UserModel } = require("./Model/productmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const { BookmarkModel } = require("./Model/bookmarkModel")
const cors = require("cors");
app.use(cors());
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

//signup of application-----------------------------------------------------------------------------------------------------
app.post("/addingproduct", async (req, res) => {
  const { title,quantity,priority,description } = req.body;
 
 
        const new_user = new UserModel({
            title:title,
            quantity:quantity,
            priority:priority,
           
            description:description,
            date:new Date()
        });

        await new_user.save();
        res.send({ message: "sign up successful" });
      })
     
  



            app.delete(`/delete/:id`, async (req, res) => {
                let id = req.params.id;
              //   console.log(id)
                let items = await UserModel.deleteOne({ _id: id });
                  // res.send({ "id": id });
                res.send({ msg: "Success", item: items });
              });
              







      app.post("/bookmark", async (req, res) => {
        const { title,quantity,priority,description } = req.body;
       
       
              const new_user = new BookmarkModel({
                  title:title,
                  quantity:quantity,
                  priority:priority,
                 
                  description:description,
                  date:new Date()
              });
      
              await new_user.save();
              res.send({ message: "bookmark successful" });
            })



app.get("/dashboard", async (req, res) => {
 
  const data = await UserModel.find();
  res.send(data);
});

app.get("/bookmarkfind", async (req, res) => {
 
    const data = await BookmarkModel.find();
    res.send(data);
  });

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to db sucessfully");
  } catch (err) {
    console.log("not able to connect");
  }
});


