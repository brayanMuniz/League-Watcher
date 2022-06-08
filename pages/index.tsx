import Head from "next/head";
import type { NextPage } from "next";

// *** mui
import { Box, Stack, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  // Summmoner Name Handle
  const [summonerNames, setSummonerNames] = useState("");

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSummonerNames(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let allSummonerNames: string[] = [];
    let inputParts: string[] = summonerNames.trim().split("joined the lobby");
    inputParts.forEach((sumName) => {
      if (sumName.trim() !== "") allSummonerNames.push(sumName.trim());
    });

    if (allSummonerNames.length === 1)
      router.push({
        pathname: `/profile/[region]/[summonerName]`,
        query: { summonerName: allSummonerNames[0], region: "NA" },
      });
    else
      router.push({
        pathname: `/lobby`,
        query: { summonerName: allSummonerNames },
      });

    setSummonerNames("");
  }

  return (
    <div>
      <Head>
        <title>Turbo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ margin: 3, maxWidth: 1400 }}>
        <form onSubmit={handleSubmit}>
          <Stack direction="row">
            <TextField
              fullWidth
              onChange={handleNameChange}
              value={summonerNames}
              id="summonerField"
              label="Find A Player(s)"
              variant="outlined"
            />

            <Button type="submit" value="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
};

export default Home;
