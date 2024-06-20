const { Schema, model } = require("mongoose");

const departmentSchema = new Schema({
  name: {
    type: Number,
  },
});

const Department = model("department", departmentSchema);

module.exports = { Department };
