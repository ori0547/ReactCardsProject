import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import axios from "axios";
import CardsFeedback from "../components/CardsFeedback";
import { useSnack } from "../../providers/SnackbarProvider";
import useCards from "../hooks/useCards";
import { useTheme } from "../../providers/CustomThemeProvider";
import AddCardButton from "../components/AddCardButton";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function CardsPage() {
  const { user } = useCurrentUser();

  const { filterCards, error, isLoading, getAllCards, handleDelete, handleEdit, handleLike } =
    useCards();

  const { isDark } = useTheme();


  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div>
      <PageHeader
        sx={{
          color: isDark ? "white" : "black",
        }}
        title="Cards"
        subtitle="On this page you can find all bussines cards from all categories"
      />
      <CardsFeedback
        cards={filterCards}
        isLoading={isLoading}
        error={error}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleLike={handleLike}
      />
      {user && user.isBusiness ? <AddCardButton /> : null}
    </div>
  );
}
