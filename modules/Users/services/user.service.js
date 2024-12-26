import { UserModel } from "../../../models/User";

const users = [
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

const createUser = (data) => {
  return UserModel.create({ data });
};

const checkIfUserExists = (email) => {
  return UserModel.findOne({ email });
};

const getHeatMap = (heatmap) => {
  return users.filter(heatmap.start_date, heatmap.end_date);
};

export { users, getHeatMap, createUser, checkIfUserExists };
