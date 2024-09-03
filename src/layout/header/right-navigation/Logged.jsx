import React, { useRef, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { removeToken } from "../../../users/services/localStorageService";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import { Logout, Settings } from "@mui/icons-material";
import ROUTES from "../../../routes/routesModel";
import { useNavigate } from "react-router-dom";

export default function Logged() {
  const { user, setUser, setToken } = useCurrentUser();
  const avatar = useRef();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const handleLogoutClick = () => {
    removeToken();
    setToken(null);
    setUser(null);
  };
  const handleProfileClick = () => {
    navigate(ROUTES.MY_CARDS);
  };

  return (
    <>
      <Tooltip title="Account menu" ref={avatar}>
        <IconButton onClick={() => setOpen(!open)} size="small" sx={{ ml: 2 }}>
          <Avatar sx={{ width: 32, height: 32 }} src="/images/avatar.png" alt={user.email} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={avatar.current}
        open={open}
        onClick={closeMenu}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem onClick={handleProfileClick}>
          <Avatar src="/images/avatar.png" alt={user.email} /> Profile
        </MenuItem>
        <Divider />
        {/* <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={handleLogoutClick}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
