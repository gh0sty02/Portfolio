import styles from "styles/Home.module.css";
import { Container, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Profile from "components/Profile";
const Stack = dynamic(() => import("components/skills/TechStack"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      {/* <Head></Head> */}
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
