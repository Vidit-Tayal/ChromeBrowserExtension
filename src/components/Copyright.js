import { Box, Link, Typography } from "@mui/material";

export default function Copyright() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
    <Typography variant="body2" color="text.secondary" align="center">
      <Link
        style={{ textDecoration: "none" }}
        color="inherit"
        href="https://www.linkedin.com/in/vidit-tayal/"
      >
        Let's Connect !!
      </Link>
    </Typography>
    </Box>
  );
}
