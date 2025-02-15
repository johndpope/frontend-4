import { Paper, Stack, Chip } from "@mui/material";
import React from "react";
import { appBarHeight } from "../config";

interface Props {
  /**
   * use card component to wrap the category card
   */
  useCard: boolean;
  keywords: string[];
}

export default function CategoryCard({ useCard, keywords }: Props) {
  const chips = (
    <Stack direction={"row"} spacing={2} p={2}>
      {keywords.map((keyword, index) => (
        <Chip key={keyword} label={keyword} variant="outlined" />
      ))}
    </Stack>
  );

  if (useCard) {
    return (
      <Paper
        sx={{
          position: "sticky",
          top: appBarHeight,
          borderLeft: 0,
          borderRight: 0,
          borderTop: 0,
        }}
        variant="outlined"
      >
        {chips}
      </Paper>
    );
  }

  return chips;
}
