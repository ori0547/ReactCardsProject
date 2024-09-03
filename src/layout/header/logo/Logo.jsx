import React from "react";
import { Typography } from "@mui/material";
import NavBarLink from "../../../routes/components/NavBarLink";
import ROUTES from "../../../routes/routesModel";
import { useTheme } from "../../../providers/CustomThemeProvider";

export default function Logo() {
  const { isDark } = useTheme();
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <Typography
          variant="h2"
          sx={{
            marginRight: 2,
            fontFamily: "sarif",
            display: { xs: "none", md: "inline-flex" },
            color: isDark ? "white" : "black",
          }}
        >
          BCard
        </Typography>
      </NavBarLink>
    </>
  );
}
