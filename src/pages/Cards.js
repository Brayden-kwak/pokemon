import React, {useState, useEffect} from "react";
import { Box, Card, CardMedia, Typography, CardContent } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiAbstract047 } from "react-icons/gi";
import quotes from '../data.json';

const useStyles = makeStyles({
    container: {
        width: 395,
        height: 580,
        marginTop: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#FFCC00",
        boxShadow: "1px 2px 15px #000" ,
        borderRadius: 20,
    },
    subContainer: {
        width: 350,
        height: 550,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        marginBottom: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(to right bottom, #FFDE00, #D55D27)",
        // background: "linear-gradient(to right bottom, #FFDE00, #EE6B2F)",
        boxSizing: "content-box",
        borderWidth: "4px",
        borderStyle: "solid",
        borderImage: "linear-gradient(to right top, #FFDE00, #D5A100)",
        borderImageSlice: 1,
    },
    cardImageContainer: {
        height: 300,
        width: 300,
        marginTop: 45,
        marginBottom: 20,
    },
    cardImageMedia: {
        marginTop: -35, 
        maxWidth: 290, 
        maxHeight: 350
    },
    nameContainer: {
        marginBottom: 15
    },
    randomText: {
        marginBottom: 20,
        height: 40,
        width: 300,
        overflow: "hidden",
    },
    bottomContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 340,
        height: 250,
    },
    bottomSubContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: 310,
    },
    idBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        padding: 10,
        width: 50,
        height: 15,
        backgroundColor: "#919191",
    },
    hpBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        padding: 10,
        width: 50,
        height: 15,
        backgroundColor: "#E3350D",
    },
    typeNameBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        padding: 10,
        width: 50,
        height: 15,
        backgroundColor: "#4DAD5B",
    },
    typeName: {
        marginLeft: 5, 
        color: "#fff"
    },
    weightBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        padding: 10,
        width: 50,
        height: 15,
        backgroundColor: "#1847D7",
    },
});

const titleTextTheme = createTheme({
    typography: {
        fontSize: 33,
        fontFamily: 'IndigoRegular'
    }
});

const subTextTheme = createTheme({
    typography: {
        fontSize: 12,
        fontFamily: 'IndigoRegular'
    }
});

const categoryTextTheme = createTheme({
    typography: {
        fontSize: 11,
        fontFamily: 'IndigoRegular'
    }
});

function Cards({ data }) {
  const classes = useStyles();

  const [index, setIndex] = useState();

  const quotesData = quotes;

  useEffect(() => {
    const index = Math.floor(quotesData.length * Math.random());
    setIndex(quotesData[index].quote);
  },[quotesData]);
  
  return (
    <Box className={classes.container}>
      <Card className={classes.subContainer}>
        <Box className={classes.cardImageContainer}>
          <CardMedia
            component="img"
            image={data.sprites.other.home.front_default}
            alt="pokemon"
            className={classes.cardImageMedia}
          />
        </Box>
        <CardContent className={classes.bottomContainer}>
            <Box className={classes.nameContainer}>
                <Typography theme={titleTextTheme} color="#fff">{data.name}</Typography>
            </Box>
            <Box>
                <Typography theme={subTextTheme} align="center" className={classes.randomText} color="#fff">{index}</Typography>
            </Box>
          <CardContent className={classes.bottomSubContainer}>
            <Box className={classes.idBox}>
              <Typography theme={categoryTextTheme} className={classes.typeName}>{`#${data.id}`}</Typography>
            </Box>
            <Box className={classes.hpBox}>
              <Typography theme={categoryTextTheme} className={classes.typeName}>{`HP.${data.stats[0].base_stat}`}</Typography>
            </Box>
            <Box className={classes.typeNameBox}>
              <GiAbstract047 color="#fff"/>
              <Typography theme={categoryTextTheme} className={classes.typeName}>
                {data.types[0].type.name}
              </Typography>
            </Box>
            <Box className={classes.weightBox}>
              <GiWeightLiftingUp color="#fff"/>
              <Typography theme={categoryTextTheme} className={classes.typeName}>
                {data.weight}kg
              </Typography>
            </Box>
          </CardContent>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Cards;
