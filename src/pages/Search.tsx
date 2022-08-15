import React, { useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Loading from "./Loading";
import NotFound from "./NotFound";
import {
  Container,
  CssBaseline,
  TextField,
  Grid,
  FormControl,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import { FcSearch } from "react-icons/fc";

const useStyles = makeStyles({ 
    title: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20,
    },
    searchBox: {
        marginTop: 25,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    searchFieldGrid: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    searchIconBox: {
        backgroundColor: "#5EBDFC", 
        width: 42, 
        height: 40, 
        borderRadius: 6
    },
    inputBox: {
        width: 345,
    },
});

const TextFieldColor = styled(TextField)({
  backgroundColor: "white",
  borderRadius: 5,
});

const theme = createTheme({
    palette: {
      background: {
        default: "#E3350D"
      },
    },
    typography: {
      fontFamily: 'IndigoRegular'
    }
  });

function Search() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [input, setInput] = useState("");

  const classes = useStyles();

  const submit = async (e: any) => {
    e.preventDefault();
    const cancelToken = axios.CancelToken.source();
  
    if (input !== "") {
      setLoading(false);

      try {
        setLoading(true);
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`, {cancelToken: cancelToken.token}
        );
        setData(response.data);
      } catch (e) {
        if(axios.isCancel(e)){
          console.log("cancelled!")
        }
        console.log(e);
        setData("");
      }

      setLoading(false);

      return () => {
        cancelToken.cancel();
      };
    }
    setInput("");
  };

  const onChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokemon Logo"
          width={380}
          className={classes.title}
        />
        <Box className={classes.searchBox} >
          <Box
            component="form"
            noValidate
            onSubmit={submit}
          >
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <Grid
                  item
                  className={classes.searchFieldGrid}
                >
                  <TextFieldColor
                    id="outlined-search"
                    label="Pokemon id or name"
                    type="search"
                    onChange={onChange}
                    value={input}
                    name="pokemonId"
                    size="small"
                    variant="outlined"
                    className={classes.inputBox}
                  />
                  <IconButton type="submit" aria-label="search">
                    <Box className={classes.searchIconBox}>
                        <FcSearch size="1.5em" />
                    </Box>
                  </IconButton>
                </Grid>
              </Grid>
            </FormControl>
          </Box>
          {(() => {
            if (loading) {
              return (
                <Loading />
              );
            } else if (data) {
              return (
                <Cards data={data}/>
              );
            } else {
              return (
                <NotFound/>
              );
            }
          })()}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Search;
