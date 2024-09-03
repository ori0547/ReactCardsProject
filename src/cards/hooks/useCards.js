import { useCallback, useEffect, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import { changeLikeStatus, deleteCard } from "../services/cardsApiService";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function useCards(url = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards") {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [filterCards, setFilterCards] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams()
  const setSnack = useSnack();

  useAxios();
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "")
  }, [searchParams])
  useEffect(() => {
    if (cards) {
      setFilterCards(cards.filter((card) => card.title.includes(query) || card.subtitle.includes(query)))
    }
  }, [cards, query])

  const getAllCards = useCallback(async () => {
    try {
      let response = await axios.get(url);
      setCards(response.data);
      setSnack("success", "All cards are here!");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const getCardById = useCallback(async (id) => {
    try {
      const response = await axios.get(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
      );
      const data = response.data;
      setCard(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleDelete = useCallback(async (id) => {
    if (confirm("Are you sure?")) {
      await deleteCard(id);
      setCards(cards => cards.filter(card => card._id != id));
    }
  }, []);

  const handleEdit = useCallback((id) => {
    navigate(`${ROUTES.EDIT_CARD}/${id}`);
  }, []);

  const handleLike = useCallback(async (id) => {
    await changeLikeStatus(id);
    // update cards or refetch logic
  }, []);



  return {
    cards,
    card,
    error,
    isLoading,
    getAllCards,
    getCardById,
    handleDelete,
    handleEdit,
    handleLike,
    filterCards,
  };
}
