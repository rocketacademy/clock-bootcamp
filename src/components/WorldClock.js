import React from "react";
import Clock from "./Clock";
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
class WorldClock extends React.Component {
  render(props) {
    const { clockData } = this.props;
    return clockData.map((data, idx) => {
      return (
        <Tr key={idx}>
          <Th color="red.300">{data}</Th>
          <Th>
            <Clock timeZone={data} />
          </Th>
        </Tr>
      );
    });
  }
}
export default WorldClock;
