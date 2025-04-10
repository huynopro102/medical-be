const dayjs = require("dayjs");

const PASSWORD_DEFAULT = "123456";


const adminAccountDefault = {
  password: PASSWORD_DEFAULT,
  activeStatus: true,
  userType: "admin",
  email: "admin@gmail.com",
  fullName: "Admin",
  gender: "male",

};

const TYPE_EMPLOYEE = {
  admin: "admin",
  user: "user",
  doctor: "doctor",
  administrative: "administrative",
  sales: "sales",
};


module.exports = { PASSWORD_DEFAULT, TYPE_EMPLOYEE, adminAccountDefault };
