import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Lottie from 'react-lottie';
import LoadingAnimation from '../assets/loadingPokemon.json';

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
        background: "linear-gradient(to right bottom, #ffe63f, #e54631)",
        boxSizing: "content-box",
        borderWidth: "4px",
        borderStyle: "solid",
        borderImage: "linear-gradient(to right bottom, #ffeb61, #c93825)",
        borderImageSlice: 1,
    },
    text: {
        marginTop: 30,
    }
});

const lottieOptions = {
    animationData: LoadingAnimation,
    loop: true,
    autoplay: true
};

function Loading() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
        <Card className={classes.subContainer}>
            <Lottie 
                options={lottieOptions}
                style={{width: 250, height: 250}}
            />
            <Box className={classes.text}>
                <Typography variant="h4" color="#fff">Loading ...</Typography>
            </Box>
        </Card>
    </Box>
  );
}

export default Loading;
