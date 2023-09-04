import { Button, Card, Container, Grid, Snackbar, Typography } from "@mui/material";
import React from "react";
import "./Album.css";

const CopyButtons = (props) => {
  const data = props.data;
  const [open, setOpen] = React.useState(false);

  const handleClick = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setOpen(true);
      })
      .catch((error) => {});
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Container style={{ py: 8 }} maxWidth="xl">
      <Grid container spacing={4}>
        {data.map((d) => (
          <Grid item>
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
              }}
            >
              <Button className="dataButton" onClick={() => handleClick(d)}>
                <Typography variant="body1" component="pre">
                  {d}
                </Typography>
              </Button>
            </Card>
          </Grid>

          
        ))}
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleSnackbarClose}
        message="Text Copied!"
      />
    </Container>
            
  );
};

export default CopyButtons;
