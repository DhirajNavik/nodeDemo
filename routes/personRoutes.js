const express = require("express");
const router = express.Router();
const Person = require("./../models/person");

router.delete("/:id", async (req, res) => {
  try {
    const userID = req.params.id;

    const response = await Person.findByIdAndDelete(userID);
    if (!response) {
      return res.status(404).json({ status: 404, error: "User not found" });
    }
    res.status(200).json({ status: 200, response: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to Update Data" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const updateData = req.body;

    const response = await Person.findByIdAndUpdate(userID, updateData, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ status: 404, error: "User not found" });
    }
    res.status(200).json({ status: 200, response: response,message:"Person deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to Update Data" });
  }
});

router.get("/:work", async (req, res) => {
  try {
    const workType = req.params.work;
    if (
      workType == "chef" ||
      workType == "waiter" ||
      workType == "manager" ||
      workType == "software"
    ) {
      const response = await Person.find({ work: workType });
      res.status(200).json({
        status: 200,
        response: response,
      });
    }
  } catch (err) {
    res.status(404).json({ error: "Invalid Type" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();

    console.log("data saved");
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Server Error" });
  }

  // const data = req.body;

  // const newPerson = new Person(data);
  // newPerson.save((error,savedPerson)=>{
  //     if(error){
  //         console.log("ERROR");
  //         res.status(500).json({error:'Internal Error'})
  //     }else{
  //         console.log("Success");
  //         res.status(200).json(savedPerson)
  //     }
  // })
  // newPerson.name = data.name;
  // newPerson.age = data.age;
  // newPerson.mobile = data.mobile;
  // newPerson.email = data.email;
  // newPerson.address = data.address;
});

router.get("/", async (req, res) => {
  try {
    const response = await Person.find();
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
