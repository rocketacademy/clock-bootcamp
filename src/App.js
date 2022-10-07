import React, { useEffect, useState } from "react";
import { CardGrid } from "./components/CardGrid";
import SelectWithFlag from "./components/SelectWithFlag";
import ALL_CITIES from "./data/cities.json";
import { Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import ToastContainer from "./components/ToastContainer";
import ShareIcon from "@mui/icons-material/Share";
import { useSearchParams } from "react-router-dom";
var slugify = require("slugify");

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 0,
  boxShadow: 0,
}));

const createToastObj = (message, attrs) => ({
  id: uuidv4(),
  message: message,
  ...attrs,
});

const allCities = ALL_CITIES.map((city, i) => {
  return {
    id: slugify(`${city.country}-${city.city}`.toLowerCase()),
    label: `${city.city}, ${city.country}`,
    code: city.code,
    timeZone: city.timeZone,
  };
});

const DEFAULT_CITY_SLUGS = new Set([
  "united-states-new-york-city",
  "russia-moscow",
  "united-states-los-angeles",
  "united-kingdom-london",
  "france-paris",
  "canada-sydney",
  "japan-tokyo",
  "hong-kong-hong-kong",
  "thailand-bangkok",
  "china-beijing",
]);

const DEFAULT_CITIES = allCities.filter((city) =>
  DEFAULT_CITY_SLUGS.has(city.id)
);

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCities, setSelectedCities] = useState([]);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const cityIds = new Map(); // prevent duplicate cards, guarantee insert order
    searchParams.forEach((cityId, _) => {
      cityIds.set(cityId, true);
    });
    allCities.forEach((city) => {
      if (cityIds.has(city.id)) {
        cityIds.set(city.id, city);
      }
    });
    setSelectedCities([...cityIds.values()]);
    // render searchParams only once, on first load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run only on first load https://stackoverflow.com/a/55854902

  useEffect(() => {
    setSearchParams({ c: selectedCities.map((city) => city.id) });
  }, [selectedCities, setSearchParams]);

  const addCity = (city, isRestore) => {
    setSelectedCities(
      isRestore ? selectedCities : [...selectedCities, city],
      setToasts([...toasts, createToastObj(`Added ${city.label}`)])
    );
  };

  const removeCity = (city) => {
    setSelectedCities(
      selectedCities.filter((c) => c.id !== city.id),
      setToasts([
        ...toasts,
        createToastObj(`Removed ${city.label}`, {
          undoHandler: (ev) => addCity(city, true),
        }),
      ])
    );
  };

  return (
    <>
      <Stack sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Item
          sx={{ position: "fixed", width: "100%", bgcolor: "#fff", zIndex: 1 }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" sx={{ px: "10px" }}>
              World Clocks
            </Typography>
            <SelectWithFlag
              data={allCities.filter((city) => !selectedCities.includes(city))}
              DEFAULT_DATA={DEFAULT_CITIES}
              selectHandler={addCity}
            />
            <IconButton
              sx={{ mx: "20px" }}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setToasts([
                  ...toasts,
                  createToastObj(`URL copied to clipboard!`, {
                    duration: 1500,
                  }),
                ]);
              }}
            >
              <ShareIcon />
            </IconButton>
          </Grid>
        </Item>
        <Item sx={{ flexGrow: 1, pt: 5, mt: 5 }}>
          <CardGrid
            data={selectedCities}
            addCardHandler={addCity}
            removeCardHandler={removeCity}
            setData={setSelectedCities}
          />
        </Item>
      </Stack>
      <ToastContainer toasts={toasts} />
    </>
  );
}
