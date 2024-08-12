const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  item_name: {
    type: String,
    required: true,
    unique:true
  },
  indegrients: {
    type: [String],
    default: [],
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  taste: {
    type: String,
    enum: ["spicy", "sweet", "sour"],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total_sales: {
    type: Number,
    default: 0,
  },
});

const MenuItem = mongoose.model("MenuItem", menuSchema);
module.exports = MenuItem;
