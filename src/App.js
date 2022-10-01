import React from "react";
import { CardGrid } from "./components/CardGrid";
import "./App.css";
import SelectWithFlag from "./components/SelectWithFlag";
import allCities from "./data/cities.json";
import { Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";
import ToastContainer from "./components/ToastContainer";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      allCities: allCities.map((city, i) => {
        return {
          id: `city-${i}`,
          label: `${city.city}, ${city.country}`,
          code: city.code,
          timeZone: city.timeZone,
        };
      }),
      selectedCities: [], // detect and fill up current city based on IP address
      toasts: [],
    };
    this.addCity = (city) => {
      this.setState({
        selectedCities: [...this.state.selectedCities, city],
        toasts: [
          ...this.state.toasts,
          {
            id: uuidv4(),
            message: `Added ${city.label}`,
          },
        ],
      });
    };
    this.removeCity = (city) => {
      this.setState({
        selectedCities: this.state.selectedCities.filter((c) => c !== city),
        toasts: [
          ...this.state.toasts,
          {
            id: uuidv4(),
            message: `Removed ${city.label}`,
            undoHandler: (ev) => this.addCity(city),
          },
        ],
      });
    };
  }

  render() {
    return (
      <>
        <Stack
          spacing={2}
          sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <Item>
            <SelectWithFlag // Only should re-render on change in selectedCities
              data={this.state.allCities.filter(
                (city) => !this.state.selectedCities.includes(city)
              )}
              selectHandler={this.addCity}
            />
          </Item>
          <Item sx={{ flexGrow: 1 }}>
            <CardGrid
              data={this.state.selectedCities}
              addCardHandler={this.addCity}
              removeCardHandler={this.removeCity}
            />
          </Item>
        </Stack>
        <ToastContainer toasts={this.state.toasts} />
      </>
    );
  }
}

export default App;
