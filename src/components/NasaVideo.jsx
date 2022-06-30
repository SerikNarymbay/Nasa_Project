import React from "react";
import ReactPlayer from "react-player";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";



export function NasaVideo(){
    return(
        <Container>
        <Grid container spacing={2}>
            <ReactPlayer 
            playing={true}
            url="http://images-assets.nasa.gov/video/KSC-20211121-VP-MMS01-0001-DART_Investigation_and Engineering_Briefing_WON_3291073/KSC-20211121-VP-MMS01-0001-DART_Investigation_and Engineering_Briefing_WON_3291073~medium.mp4"/>
        </Grid>
      </Container>
    )


}











        //   
