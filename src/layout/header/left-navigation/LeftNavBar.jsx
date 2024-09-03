import React from "react";
import { Box } from "@mui/material";
import ROUTES from "../../../routes/routesModel";
import LogoIcon from "../logo/LogoIcon";
import Logo from "../logo/Logo";
import NavBarItem from "../../../routes/components/NavBarItem";
import { useCurrentUser } from "../../../users/providers/UserProvider";

export default function LeftNavBar() {
  const { user } = useCurrentUser();

  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavBarItem to={ROUTES.CARDS} label={"Cards"} />
      {
        user ?
          <NavBarItem to={ROUTES.FAV_CARDS} label={"Favorites"} /> : null
      }
      {
        user ?
          <NavBarItem to={ROUTES.MY_CARDS} label={"My Cards"} /> : null
      }
      <NavBarItem to={ROUTES.ABOUT} label={"About"} />
      {/* <NavBarItem to={ROUTES.SANDBOX} label={"Sandbox"} /> */}
    </Box>
  );
}
