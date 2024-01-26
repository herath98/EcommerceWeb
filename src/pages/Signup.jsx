import React from "react";
import { Container, Typography, Link } from "@mui/material";
import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
  return (
    <Container maxWidth="sm">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="Login.jsx"
      />
      <Signup />
    </Container>
  );
}
