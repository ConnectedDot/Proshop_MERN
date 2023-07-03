import { Box, Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useIsSmallScreen } from "../footer/hooks";

export const SubscribeForm = () => {
  const sm = useIsSmallScreen();
  return (
    <StyledForm style={{ width: sm ? "90%" : "60%" }}>
      <StyledInput placeholder="Your Email Address" />
      <Box
        flex={0.5}
        display="flex"
        justifyContent="flex-end"
        boxSizing="border-box"
      >
        <Button
          color="primary"
          variant="contained"
          sx={{
            textTransform: "none",
            width: sm ? "100%" : "70%",
            padding: sm ? "" : "20px",
            boxSizing: "border-box",
          }}
          size={sm ? "small" : "large"}
        >
          Get Started
        </Button>
      </Box>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  background: #fff;
  width: 60%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-sizing: border-box;
`;
const StyledInput = styled.input`
  background: #fff;
  padding: 0 10px;
  border: none;
  box-sizing: border-box;
  flex: 1;
`;
