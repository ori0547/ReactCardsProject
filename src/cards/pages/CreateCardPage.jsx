import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import { Container } from "@mui/material";
import CreateCardForm from "../components/CreateCardForm";
import cardSchema from "../models/cardSchema";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import { useCurrentUser } from "../../users/providers/UserProvider";
import normalizeCard from "../helpers/normalization/normalizeCard";
import { createCard } from "../services/cardsApiService";

export default function CreateCardPage() {
  const navigate = useNavigate();

  const handleCreate = async (cardDetails) => {
    const normalizedCard = normalizeCard(cardDetails);

    try {
      const data = await createCard(normalizedCard);
      navigate(`${ROUTES.CARD_INFO}/${data._id}`);
    } catch (e) {
      // do something with error
    }
  };

  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialCardForm, cardSchema, handleCreate);

  const { user, isLoading } = useCurrentUser();

  if (!isLoading && (!user || !user.isBusiness)) {
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
        title="create card"
        errors={errors}
        data={data}
        onInputChange={handleChange}
      />
    </Container>
  );
}