import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Autocomplete, createFilterOptions } from "@mui/material";

// https://mui.com/material-ui/react-autocomplete/#country-select

const OPTIONS_LIMIT = 10;
const filterOptions = createFilterOptions({
  limit: OPTIONS_LIMIT,
  stringify: (option) => option.label,
  ignoreAccents: true,
  ignoreCase: true,
  trim: true,
});

export default function SelectWithFlag(props) {
  const [inputValue, setinputValue] = React.useState("");
  const [value, setValue] = React.useState(null);
  return (
    <Autocomplete
      sx={{ maxWidth: 600, margin: "auto", flexGrow: 1 }}
      noOptionsText="No matching cities" // display when no options available
      autoHighlight={true} // always select first option
      value={value} // actual value in react component
      inputValue={inputValue} // string value in the input element
      onInputChange={(event, inputString, reason) => {
        setinputValue(inputString); // input change handler
      }}
      onChange={(event, value) => {
        props.selectHandler(value);
        setValue(null);
        setinputValue("");
      }}
      filterOptions={filterOptions} // used to limit/configure filter
      options={inputValue.length ? props.data : props.DEFAULT_DATA} // change to most popular cities
      key={(option) => option.label} // key of each option
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt={`${option.code}`}
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="type a city name (e.g. Singapore, Tokyo, London)"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-autocomplete", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
