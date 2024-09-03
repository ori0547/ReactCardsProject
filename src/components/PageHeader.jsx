import { Divider, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../providers/CustomThemeProvider";

export default function PageHeader({ title, subtitle }) {
  const {isDark} = useTheme()
  return (
    <>
      <Typography variant="h2" component="h1"   sx={{
          color: isDark ? "white" : "black", m:2
        }}>
        {title}
      </Typography>
      <Typography variant="h5" component="h2"   sx={{
          color: isDark ? "white" : "black", m:2
        }}>
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
}
