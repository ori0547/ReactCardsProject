import React, { useEffect, useMemo } from "react";
import PageHeader from "../../components/PageHeader";
import { useCurrentUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import { useTheme } from "../../providers/CustomThemeProvider";
import CardsFeedback from "../components/CardsFeedback";
export default function MyCardsPage() {
    const { user } = useCurrentUser();
    const { filterCards, error, isLoading, getAllCards, handleDelete, handleEdit, handleLike } = useCards();
    const { isDark } = useTheme();

    useEffect(() => {
        getAllCards();
    }, [getAllCards]);

    const myCards = useMemo(() => {
        return filterCards.filter(card => user && card.user_id === user._id);
    }, [user, filterCards]);

    return (
        <div>
            <PageHeader
                title="My Cards"
                subtitle="Here you will find the cards you created"
            />
            <CardsFeedback
                cards={myCards}
                isLoading={isLoading}
                error={error}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleLike={handleLike}
            />
        </div>
    );
}