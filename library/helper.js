import axios from "axios";

export default async function helper() {
  const response = await axios.get("http://localhost:3000/api/washingMachinesUnder10000");
  const data = await response.data;
  return data;
};