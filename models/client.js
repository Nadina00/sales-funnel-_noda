const Schema = require('mongoose').Schema;
const {model} = require("mongoose")
const mongoose = require('mongoose');

const clientSchema = new Schema({
  name: {
    type: String,
  },
  ipn: {
    type: Number,
  },
  tel: {
    type: Number,
  },
  credit: {
    type: String,
  },
  targetCredit: {
    type: String,
  },
  sum: {
    type: Number,
  },
  intrest: {
    type: String,
  },
  departmentNum: {
    type: Number,
  }, 
  note: {
   type: String, 
  }
  
});
const Client = model("Client", clientSchema);

module.exports = { Client };
