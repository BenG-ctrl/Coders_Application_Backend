import { CoderModel } from "../../../models/Coder";
import nodemailer from "nodemailer";

const coders = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnsohn@example.com",
    password: "passkeyclacal",
  },
  {
    id: 2,
    name: "Ben Johnson",
    email: "Ben.johnsohn@example.com",
    password: "passkey2clacal",
  },
  {
    id: 3,
    name: "aria Johnson",
    email: "aria .johnsohn@example.com",
    password: "passkey3clacal",
  },
  {
    id: 4,
    name: "Aliyia Johnson",
    email: "Aliyia.johnsohn@example.com",
    password: "passkey4clacal",
  },
];

const createCoder = (data) => {
  return CoderModel.create({ data });
};

const checkIfCoderExists = (email) => {
  return CoderModel.findOne({ email });
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

const VerifyUserEmail = async (name, email, role, token) => {
  try {
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Please verify your email",
      text: "Verify with this link",
      html: "http://localhost:5000/verify?token=" + token,
    });
  } catch (error) {}
};

const getCoderHeatMap = (heatmap) => {
  return coders.filter(heatmap.start_date, heatmap.end_date);
};

export {
  coders,
  checkIfCoderExists,
  createCoder,
  getCoderHeatMap,
  VerifyUserEmail,
};
