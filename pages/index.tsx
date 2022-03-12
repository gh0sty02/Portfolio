import styles from "styles/Home.module.css";
import { Container, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Profile from "components/Profile";
import Stack from "components/skills/TechStack";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pranay Yadav | Home</title>
        <link rel="icon" href="/meta-image.svg" />
        <meta
          name="description"
          content="Pranay Yadav | Full stack developer "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pranayyadav.vercel.app" />
        <meta
          property="og:title"
          content="Pranay Yadav | Full stack developer "
        />
      </Head>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]}>
          <Profile />
          <Divider my={10} />
          <Stack />
        </Container>
      </main>
    </>
  );
};

export default Home;
