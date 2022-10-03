import React, { useEffect, useState } from "react";
import { CardGrid } from "./components/CardGrid";
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

const ToastObj = (message, attrs) => ({
  id: uuidv4(),
  message: message,
  ...attrs,
});

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

  useEffect(() => {
    const cityIds = new Set();
    searchParams.forEach((cityId, _) => cityIds.add(cityId));
    setSelectedCities(allCities.filter((city) => cityIds.has(city.id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run only on first load https://stackoverflow.com/a/55854902

  useEffect(() => {
    setSearchParams({ c: selectedCities.map((city) => city.id) });
  }, [selectedCities, setSearchParams]);

  const addCity = (city, isRestore) => {
    setSelectedCities(
      isRestore ? selectedCities : [...selectedCities, city],
      setToasts([...toasts, ToastObj(`Added ${city.label}`)])
    );
  };

  const removeCity = (city) => {
    setSelectedCities(
      selectedCities.filter((c) => c.id !== city.id),
      setToasts([
        ...toasts,
        ToastObj(`Removed ${city.label}`, {
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
              World Clock
            </Typography>
            <SelectWithFlag
              data={allCities.filter((city) => !selectedCities.includes(city))}
              selectHandler={addCity}
            />
            <IconButton
              sx={{ mx: "20px" }}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setToasts([
                  ...toasts,
                  ToastObj(`URL copied to clipboard!`, { duration: 1500 }),
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
