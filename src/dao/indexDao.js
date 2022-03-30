const { pool } = require("../../config/database");

exports.example = async function (connection, params) {
  const Query = ``;
  const Params = [];

  const rows = await connection.query(Query, Params);

  return rows;
};
