var express = require('express');
var router = express.Router();
const ctrlWrapper = require("../helper/ctrlWrapper")

/* GET users listing. */
const {
  addClient, clientList, delClient, updateClient
} = require("../conroller/client-controller");

router.post("/add", ctrlWrapper(addClient));
router.post("/", ctrlWrapper(clientList))
router.delete("/delClients/:id", ctrlWrapper(delClient) )
router.put("/updateClients", ctrlWrapper(updateClient))

module.exports = router;
