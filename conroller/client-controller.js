const { Client } = require("../models/client");
//const RequestError = require("../../helpers/RequstError").default;

const clientList = async (req, res, next) => {
  const { departmentNum } = req.body;
  let result = {};
  if (departmentNum === "Головний офіс") {
    result = await Client.find({});
  } else if (departmentNum === "charge") {
    result = [];
  } else {
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
  const {
    date,
    name,
    ipn,
    tel,
    credit,
    targetCredit,
    sum,
    intrest,
    departmentNum,
    textNote,
  } = req.body;
  console.log({
    date,
    name,
    ipn,
    tel,
    credit,
    intrest,
    targetCredit,
    textNote,
  });
  const client = await Client.create({
    date,
    name,
    ipn,
    tel,
    credit,
    targetCredit,
    sum,
    intrest,
    departmentNum,
    textNote,
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

const updateClient = async (req, res, next) => {
  const {
    id,
    date,
    name,
    ipn,
    tel,
    credit,
    targetCredit,
    sum,
    intrest,
    departmentNum,
    textNote,
  } = req.body;
  console.log(
    id,
    date,
    name,
    ipn,
    tel,
    credit,
    targetCredit,
    sum,
    intrest,
    departmentNum
  );
  await Client.findOneAndUpdate(
    { _id: id },
    {
      date,
      name,
      ipn,
      tel,
      credit,
      targetCredit,
      sum,
      intrest,
      departmentNum,
      textNote,
    }
  );
  const result = await Client.find({ departmentNum });
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
  updateClient,
};
