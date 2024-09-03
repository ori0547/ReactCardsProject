import { Navigate, useNavigate, useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import useForm from "../../forms/hooks/useForm";
import cardSchema from "../models/cardSchema";
import { Container } from "@mui/material";
import CreateCardForm from "../components/CreateCardForm";
import { useCurrentUser } from "../../users/providers/UserProvider";
import { useEffect } from "react";
import mapCardToModel from "../helpers/normalization/mapCardToModel";
import normalizeCard from "../helpers/normalization/normalizeCard";
import { editCard } from "../services/cardsApiService";
import ROUTES from "../../routes/routesModel";

export default function EditCardPage() {
  const { card, isLoading, error, getCardById } = useCards();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (cardDetails) => {
    const normalizedCard = normalizeCard(cardDetails);

    try {
      await editCard(id, normalizedCard);
      navigate(`${ROUTES.CARD_INFO}/${id}`);
    } catch (e) {
      // do something with error
    }
  };
  const {
    data,
    errors,
    setData,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(card, cardSchema, handleSubmit);

  const { user } = useCurrentUser();

  useEffect(() => {
    getCardById(id);
  }, [id]);

  useEffect(() => {
    if (card) {
      setData(mapCardToModel(card));
    }
  }, [card]);

  if (isLoading || !data) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!user || user._id != card.user_id) {
    return <Navigate to={ROUTES.ROOT} replace />;
  }

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CreateCardForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title="edit card"
        errors={errors}
        data={data}
        onInputChange={handleChange}
      />
    </Container>
  );
}