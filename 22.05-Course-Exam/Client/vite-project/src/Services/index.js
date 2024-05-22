import { BASE_URL } from "./constant.js";
import axios from "axios";

export async function getAllData() {
  const response = await axios(`${BASE_URL}/products`);
  return response;
}

export async function getDataById() {
  const response = await axios(`${BASE_URL}/products/${id}`);
  return response;
}

