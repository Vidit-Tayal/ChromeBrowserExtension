import { Box, Typography } from "@mui/material";

export default function Copyright2() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
    <Typography variant="body2" color="text.secondary" align="center">
        Use '\n' for new line
    </Typography>
    </Box>
  );
}
