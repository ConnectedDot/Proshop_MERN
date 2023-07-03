import React from "react";
import { footerMenuItems } from "./footer/footer-menu-items";
import styled from "styled-components";
import { Box } from "@mui/material";
import { Subscriber } from "./footer/Subscriber";
import { Link } from "react-router-dom";

const Footer = () => {
  const { companyInfo, navigation, categories, help_support, downloads } =
    footerMenuItems;

  return (
    <StyledFooterContainer>
      <Subscriber />
      <StyledSection
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        <SectionContainer>
          <SectionTitleContainer
            // onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <Link to="/">
              <img
                src={companyInfo.logo}
                alt=""
                width="40%"
                height="100%"
                style={{
                  objectFit: "contain",
                }}
              />
            </Link>
          </SectionTitleContainer>

          <div>{companyInfo.address}</div>
          <div>
            <StyledLink href={`mailto:${companyInfo.email}`}>
              {companyInfo.email}
            </StyledLink>
          </div>
          <div>
            <StyledLink href={`tel:${companyInfo.tel}`}>
              {companyInfo.tel}
            </StyledLink>
          </div>
        </SectionContainer>

        <FooterCard section={navigation} />
        <FooterCard section={categories} />
        <FooterCard section={help_support} />
        <SectionContainer>
          <SectionTitleContainer style={{ minWidth: "150px" }}>
            <h3>{downloads.title}</h3>
          </SectionTitleContainer>
          {downloads.menu.map(({ icon: Icon, link, title, sub }, i) => (
            <Box
              border="1px solid #ccc"
              sx={{
                borderRadius: "5px",
                padding: 1,
              }}
              key={i}
            >
              <Box display="flex" gap={1.5} alignItems="center">
                <Icon fontSize="2rem" color="#da0b4e"></Icon>
                <StyledLink href={link}>{title}</StyledLink>
              </Box>
              <Box display="flex" justifyContent="center">
                {sub}
              </Box>
            </Box>
          ))}
        </SectionContainer>
      </StyledSection>
    </StyledFooterContainer>
  );
};

export default Footer;

const StyledFooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const StyledSection = styled.div`
  width: 100%;
  height: 300px;
  background: #fff;
  display: flex;
  width: 85%;
  margin: auto;
  gap: 3rem;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #da0b4e;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitleContainer = styled.div``;

const FooterCard = ({ section }) => {
  return (
    <SectionContainer>
      <SectionTitleContainer style={{ minWidth: "150px" }}>
        <h3>{section.title}</h3>
      </SectionTitleContainer>
      {section.menu.map((item, i) => (
        <StyledLink href={item.link} key={i}>
          {item.title}
        </StyledLink>
      ))}
    </SectionContainer>
  );
};
