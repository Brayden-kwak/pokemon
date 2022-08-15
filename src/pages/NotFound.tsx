import React from "react";
import { Card, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Lottie from 'react-lottie';
import notFound from '../assets/notFound.json';

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
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(to right bottom, #ffe63f, #e54631)",
        boxSizing: "content-box",
        borderWidth: "4px",
        borderStyle: "solid",
        borderImage: "linear-gradient(to right bottom, #ffeb61, #c93825)",
        borderImageSlice: 1,
    },
    textBox: {
        marginTop: -60,
        fontSize: 18,
        fontFamily: 'IndigoRegular'
    },
});

const lottieOptions = {
    animationData: notFound,
    loop: true,
    autoplay: true
};

function NotFound() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
        <Card className={classes.subContainer}>
            <Lottie 
                options={lottieOptions}
                style={{width: 250, height: 250}}
            />
            <Box className={classes.textBox}>
                <Typography variant="h6" align="center" color="white">Hm... an unknown <br/> pokemon perhaps?</Typography>
            </Box>
        </Card>
    </Box>
  );
}

export default NotFound;
