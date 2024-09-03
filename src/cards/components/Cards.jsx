import CardComponent from "./card/CardComponent";
import { Container } from "@mui/material";

export default function Cards({ cards, handleDelete, handleEdit, handleLike }) {


  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <CardComponent
          key={card._id}
          card={card}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleLike={handleLike}
        />
      ))}
    </Container>
  );
}
