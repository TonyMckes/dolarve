import axios from "axios";
import { API_URL } from "../constants";

async function fetchCurrencies(curType = "") {
  try {
    const response = await axios.get(`${API_URL}/coins/latest?type=${curType}`);
    const { data } = response;

    return data;
  } catch (error) {
    const { message } = error;
    if (message === "Network Error") {
      throw "Comprueba tu conexión! ⚠️";
    }

    console.log(error);
  }
}

export default fetchCurrencies;
