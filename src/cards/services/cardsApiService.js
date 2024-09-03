import { FavoriteBorder } from "@mui/icons-material";
import axios from "axios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export async function getCards() {
  try {
    const res = await axios.get(apiUrl);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getCard(id) {
  try {
    const res = await axios.get(`${apiUrl}/${id}`);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getMyCards() {
  try {
    const res = await axios.get(`${apiUrl}/my-cards`);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function deleteCard(id) {
  try {
    const res = await axios.delete(`${apiUrl}/${id}`);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function createCard(card) {
  try {
    const res = await axios.post(apiUrl, card);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function editCard(id, card) {
  try {
    const res = await axios.put(`${apiUrl}/${id}`, card);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function changeLikeStatus(id) {
  try {
    const res = await axios.patch(`${apiUrl}/${id}`);
    return res.data;
  } catch (e) {
    throw new Error(e.message);
  }
}