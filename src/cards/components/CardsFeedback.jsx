import React from "react";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Typography } from "@mui/material";
import Cards from "./Cards";

export default function CardsFeedback({
  isLoading,
  cards,
  error,
  handleDelete,
  handleLike,
  handleEdit,
}) {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length === 0)
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );

  if (cards)
    return (
      <Cards
        cards={cards}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleLike={handleLike}
      />
    );

  return null;
}
