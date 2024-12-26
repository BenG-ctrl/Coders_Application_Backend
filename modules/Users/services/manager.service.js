import { ManagerModel } from "../../../models/Manager";
import nodemailer from "nodemailer";

const managers = [
  {
    id: 1,
    name: "Alice1 Johnson",
    email: "alice1.johnsohn@example.com",
    password: "passkey1clacal",
  },
  {
    id: 2,
    name: "Ben1 Johnson",
    email: "Ben1.johnsohn@example.com",
    password: "passkey12clacal",
  },
  {
    id: 3,
    name: "aria1 Johnson",
    email: "aria1.johnsohn@example.com",
    password: "passkey13clacal",
  },
  {
    id: 4,
    name: "Aliyia1 Johnson",
    email: "Aliyia1.johnsohn@example.com",
    password: "passkey14clacal",
  },
];

const createManager = (data) => {
  return ManagerModel.create({ data });
};

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 5000,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: coders,
    pass: "jn7jnAPss4f63QBp6D",
  },
});
const VerifyUserEmail = async (name, email, token) => {
  try {
    const info = await transporter.sendMail({
      from: "<example@gmail.com.>", // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Please verify your email",
      text: "Verify with this link",
      html: "http://localhost:5000/verify?token=" + token,
    });
  } catch (error) {}
};
const checkIfManagerExists = (email) => {
  return ManagerModel.findOne({ email });
};

const getManagerHeatMap = (heatmap) => {
  return managers.filter(heatmap.start_date, heatmap.end_date);
};

export {
  managers,
  VerifyUserEmail,
  getManagerHeatMap,
  createManager,
  checkIfManagerExists,
};
