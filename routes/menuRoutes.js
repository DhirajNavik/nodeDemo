const express = require("express");
const routes = express.Router();

const menuItems = require("./../models/Menu");

routes.delete("/menuItems/:id", async (req, res) => {
  try {
    const itemID = req.params.id;
    const response = await menuItems.findByIdAndDelete(itemID);

    if (!response) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      status: 200,
      message: "User has been Deleted",
      deletedData: response,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal error" });
  }
});
routes.put("/menuItems/:id", async (req, res) => {
  try {
    const itemID = req.params.id;
    const updatedItem = res.body;
    const response = await menuItems.findByIdAndUpdate(itemID, updatedItem, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json({
      status: 200,
      message: "Item has been updated",
      deletedData: response,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal error" });
  }
});

routes.get("/menuItems/:item", async (req, res) => {
  try {
    const itemType = req.params.item;
    if (itemType == "spicy" || itemType == "sweet" || itemType == "sour") {
      const response = await menuItems.find({ taste: itemType });
      res.status(200).json({ status: 200, response: response });
    }
    res.status(404).json({ message: "Item not found" });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

routes.get("/menuItems", async (req, res) => {
  try {
    const response = await menuItems.find();

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ message: "Data not f0und" });
  } finally {
    res.status(500).json({ lund: "fuck off" });
  }
});

routes.post("/addItems", async (req, res) => {
  try {
    const data = req.body;
    const newItem = new menuItems(data);
    const response = await newItem.save();
    console.log("data saved");
    res.status(200).json({
      status: 200,
      message: "Data Saved Successfully",
      data: response,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: 500,
      message: "Failed",
    });
    console.log("Internal Error");
  }
});

routes.get("/chiken", (req, res) => res.send("let me cook first"));

routes.get("/paneer", (req, res) => {
  var ingerident = {
    item1: "milk",
    item2: "expire in 2 days",
    item3: "teri maa ki chut",
  };
  res.send(ingerident);
});

module.exports = routes;
