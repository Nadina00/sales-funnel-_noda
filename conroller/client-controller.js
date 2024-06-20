const { Client } = require("../models/client");
//const RequestError = require("../../helpers/RequstError").default;

const clientList = async (req, res, next) => {
  const { departmentNum } = req.body;
  console.log(departmentNum);
  let result = {};
  if (departmentNum === "Головний офіс") {
    result = await Client.find({});
  } else if(departmentNum === "charge"){
    result = []
  }
   else {
    result = await Client.find({ departmentNum });
  }
  if (!result) {
    throw RequestError(404, "Not found");
  }
  console.log(result);
  res.json({
    status: "success",
    code: 200,
    result,
  });
};

const addClient = async (req, res, next) => {
  const { name, ipn, tel, credit, targetCredit, sum, intrest, departmentNum } =
    req.body;
  console.log({ name, ipn, tel, credit, intrest, targetCredit });
  const client = await Client.create({
    name,
    ipn,
    tel,
    credit,
    targetCredit,
    sum,
    intrest,
    departmentNum,
  });

  res.json({
    status: "success",
    code: 200,
    client,
  });
};

const delClient = async (req, res, next) => {
  const { id } = req.params;
  console.log({ id });
  const result = await Client.findByIdAndDelete(id);
  console.log(result);
  res.json({
    status: "success",
    code: 200,
    result,
  });
};

module.exports = {
  clientList,
  addClient,
  delClient,
};
