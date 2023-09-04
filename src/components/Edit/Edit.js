/* global chrome */

import { Button, Stack, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../Heading";
import Copyright2 from "../Copyright2";
import { getUserData } from "../storage";

const Edit = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState([]); 

  useEffect(() => {
    getUserData((userData) => {
      if (userData) {
        setFormData(userData); 
      }
    });
  }, []);

  const handleInputChange = (index, value) => {
    const updatedData = [...formData];
    updatedData[index] = value;
    setFormData(updatedData);
  };

  const handleAddInput = () => {
    const updatedData = [...formData, ""];
    setFormData(updatedData);
  };

  const handleSaveChanges = () => {
    const updatedData = formData.filter((value) => value.trim() !== "");
    chrome.storage.local.set({ userData: updatedData }, () => {
      console.log("Data updated successfully");
      navigate("/");
    });
  };

  return (
    <div>
      <Heading></Heading>
      <form>
        {formData.map((value, index) => (
          <TextField
            key={index}
            type="text"
            value={value}
            variant="outlined"
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </form>

      <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
        <Button type="button" variant="contained" onClick={handleAddInput}>
          Add
        </Button>

        <Button type="button" variant="contained" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Stack>
      <Copyright2></Copyright2>
    </div>
  );
};

export default Edit;
