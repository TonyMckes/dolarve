import axios from "axios";
import { API_URL } from "../constants";

async function getCurrency({ gap = "1w", slug }) {
  try {
    const { data } = await axios({
      url: `${API_URL}/coins/${slug}?gap=${gap}&base=usd`,
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export default getCurrency;
