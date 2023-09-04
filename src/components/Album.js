import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Album.css";
import Copyright from "./Copyright";
import Heading from "./Heading";
import CopyButtons from "./CopyButtons";
import { Link, NavLink } from "react-router-dom";
import { getUserData } from "./storage";

export default function Album() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getUserData((userData) => {
      if (userData) {
        setData(userData.sort((a,b)=>(a.length-b.length)));
      }
    });
  }, []);

  return (
    <>
      <main>
        <Heading></Heading>
        <CopyButtons data={data}></CopyButtons>
      </main>
      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <NavLink className="NavLinkClass" to="/edit">
          {data.length === 0 ? (
            <Button variant="contained">start adding items</Button>
          ) : (
            <Button variant="contained">Edit</Button>
          )}
        </NavLink>
      </Stack>
      <Copyright />
    </>
  );
}
