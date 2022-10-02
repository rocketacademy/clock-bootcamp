import React, { useEffect, useRef, useState } from "react";
import { CardGrid } from "./components/CardGrid";
import "./App.css";
import SelectWithFlag from "./components/SelectWithFlag";
import _allCities from "./data/cities.json";
import { Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import ToastContainer from "./components/ToastContainer";
import ShareIcon from "@mui/icons-material/Share";
import { useSearchParams } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 0,
  boxShadow: 0,
}));

const allCities = _allCities.map((city, i) => {
  return {
    id: `city-${i}`,
    label: `${city.city}, ${city.country}`,
    code: city.code,
    timeZone: city.timeZone,
  };
});

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCities, setSelectedCities] = useState([]);
  const [toasts, setToasts] = useState([]);
  // callback in addCity uses stale state for useState hooks,
  // so we use useRef https://stackoverflow.com/a/60643670
  const _selectedCities = useRef();
  _selectedCities.current = selectedCities;

  useEffect(() => {
    const cityIds = new Set();
    searchParams.forEach((cityId, _) => cityIds.add(cityId));
    setSelectedCities(allCities.filter((city) => cityIds.has(city.id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run only on first load https://stackoverflow.com/a/55854902

  useEffect(() => {
    setSearchParams({ c: selectedCities.map((city) => city.id) });
  }, [selectedCities, setSearchParams]);

  const addCity = (city) => {
    setSelectedCities([..._selectedCities.current, city]);
    setToasts([
      ...toasts,
      {
        id: uuidv4(),
        message: `Added ${city.label}`,
      },
    ]);
  };

  const removeCity = (city) => {
    setSelectedCities(selectedCities.filter((c) => c !== city));
    setToasts([
      ...toasts,
      {
        id: uuidv4(),
        message: `Removed ${city.label}`,
        undoHandler: (ev) => addCity(city),
      },
    ]);
  };

  return (
    <>
      <Stack sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" sx={{ paddingRight: "10px" }}>
              World Clock
            </Typography>
            <SelectWithFlag
              data={allCities.filter((city) => !selectedCities.includes(city))}
              selectHandler={addCity}
            />
            <IconButton
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setToasts([
                  ...toasts,
                  {
                    id: uuidv4(),
                    message: `URL copied!`,
                    duration: 1500,
                  },
                ]);
              }}
            >
              <ShareIcon />
            </IconButton>
          </Grid>
        </Item>
        <Item sx={{ flexGrow: 1 }}>
          <CardGrid
            data={selectedCities}
            addCardHandler={addCity}
            removeCardHandler={removeCity}
          />
        </Item>
      </Stack>
      <ToastContainer toasts={toasts} />
    </>
  );
}
