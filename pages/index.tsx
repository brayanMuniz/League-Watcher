import Head from "next/head";
import type { NextPage } from "next";

// *** mui
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Turbo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ margin: 3, maxWidth: 1400 }}></Box>
    </div>
  );
};

export default Home;
