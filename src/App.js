import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./components/Clock";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import WorldClock from "./components/WorldClock";
class App extends React.Component {
  render() {
    return (
      <ChakraProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <TableContainer>
              <Table variant="simple" size="lg">
                <TableCaption>World Clock Table</TableCaption>
                <Thead>
                  <Tr>
                    <Th color="tomato">TimeZone</Th>
                    <Th color="tomato">Time</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <WorldClock
                    clockData={[
                      "Africa/Accra",
                      "Africa/Abidjan",
                      "Africa/Algiers",
                    ]}
                  />
                </Tbody>
              </Table>
            </TableContainer>
          </header>
        </div>
      </ChakraProvider>
    );
  }
}

export default App;
