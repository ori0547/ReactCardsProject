import React, { useEffect, useMemo, useState } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { useTheme } from "../../providers/CustomThemeProvider";
import { useCurrentUser } from "../../users/providers/UserProvider";

export default function FavoriteCards() {
  const { user } = useCurrentUser();

  const { filterCards, error, isLoading, getAllCards, handleDelete, handleEdit, handleLike } =
    useCards();

  const { isDark } = useTheme();

  const faveCards = useMemo(() => {
    return filterCards.filter(card => user && card.likes.includes(user._id));
  }, [user, filterCards]);

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div>
      <PageHeader
        sx={{ color: isDark ? "white" : "black" }}
        title="Favorite Cards"
        subtitle="On this page you can find favorite bussines cards from all categories"
      />
      <CardsFeedback
        cards={faveCards}
        isLoading={isLoading}
        error={error}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleLike={handleLike}
      />
    </div>
  );
}
