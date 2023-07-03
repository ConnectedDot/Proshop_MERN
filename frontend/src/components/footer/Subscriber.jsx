import React from "react";
import styled from "styled-components";
import { SubscribeForm } from "./SubscribeForm";
import { Box } from "@mui/material";

export const Subscriber = () => {
  return (
    <StyledSubscribeContainer>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={1}
          gap={1}
        >
          <h1 style={{ color: "#fff", textAlign: "center" }}>
            Join Thousand Of Happy Customers!
          </h1>
          <h6 style={{ color: "#fff", textAlign: "center" }}>
            Subscribe to our newsletter & get latest news and updates!
          </h6>
        </Box>

        <SubscribeForm />
      </Container>
    </StyledSubscribeContainer>
  );
};

const StyledSubscribeContainer = styled.div`
  width: 100%;
  margin: 3rem 0;
  height: 300px;
  background-image: linear-gradient(
      95.9deg,
      rgba(25, 45, 75, 0.9) 46.21%,
      rgba(25, 45, 75, 0.9) 64.68%
    ),
    url("https://www.studyinjapan.go.jp/en/_mt/2020/05/kv_01.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;
