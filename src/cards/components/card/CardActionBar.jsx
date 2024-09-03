import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";

export default function CardActionBar({
  card,
  handleDelete,
  handleEdit,
  handleLike,
}) {
  const { user } = useCurrentUser();
  const cardId = card._id;
  const userId = card.user_id
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && user._id) {
      const isLiked = card.likes.includes(user._id);
      setLiked(isLiked);
    }
  }, [user]);

  const toggleLike = () => {
    setLiked(!liked);
    handleLike(cardId);
  };





  return (
    <CardActions sx={{ justifyContent: "space-between" }}>
      <Box>
        {user && user._id === userId ? (
          <>
            <IconButton onClick={() => handleDelete(cardId)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => handleEdit(cardId)}>
              <ModeEditIcon />
            </IconButton>
          </>
        ) : null}
      </Box>
      <Box>
        <a href={"tel:" + card.phone}>
          <IconButton>
            <CallIcon />
          </IconButton>
        </a>
        {user ? (
          <IconButton onClick={toggleLike}>
            <FavoriteIcon style={{ color: liked ? "red" : "grey" }} />
          </IconButton>
        ) : null}
      </Box>
    </CardActions>
  );
}
