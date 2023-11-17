import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function ViewDetails() {
  const location = useLocation();
  console.log(location.state.data);
  const pdfRef = useRef();
  const pdfDownload = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imge = canvas.toDataURL("image/png");
      const pdf = new jsPdf("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const sizeing = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * sizeing) / 2;
      const imgY = 30;
      pdf.addImage(
        imge,
        "PNG",
        imgX,
        imgY,
        imgHeight * sizeing,
        imgWidth * sizeing
      );
      pdf.save("formpage.pdf");
    });
  };

  return (
    <Box sx={{ bgcolor: "#f3e5f5" }} ref={pdfRef}>
      <Grid container display={"flex"} flexDirection={"column"}>
        <Grid item bgcolor={"#9c27b0"} lg={12}>
          <Typography fontSize={"30px"} color={"#ffffff"}>
            Insurance Details
          </Typography>
        </Grid>

        <Grid item container pl={5} display={"flex"} flexDirection={"row"}>
          <Typography mt={2}  fontSize={'20px'}>Personal Details</Typography>

          <Grid item container>
            <Grid item  pl={4} lg={3}>
              <Typography> Name </Typography>
            </Grid>
            <Grid item>
              <Typography>  :{location.state.data.name} </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item  pl={4} lg={3}>
              <Typography> Email</Typography>
            </Grid>
            <Grid item>
              <Typography>:{location.state.data.email}</Typography>
            </Grid>
          </Grid>
          <Grid item container >
            <Grid item  pl={4} lg={3}>
              <Typography> Phone </Typography>
            </Grid>
            <Grid item>
              <Typography>: {location.state.data.phone}</Typography>
            </Grid>
          </Grid>
          <Grid item container >
            <Grid item  pl={4} lg={3} >
              <Typography> Address</Typography>
            </Grid>
            <Grid item >
              <Typography> : {location.state.data.address}</Typography>
            </Grid>
          </Grid>
          <Grid item container >
            <Grid item  pl={4} lg={3} >
              <Typography> Location</Typography>
            </Grid>
            <Grid item >
              <Typography> : {location.state.data.location}</Typography>
            </Grid>
          </Grid>
          <Grid item container >
            <Grid item  pl={4} lg={3} >
              <Typography> State</Typography>
            </Grid>
            <Grid item >
              <Typography> : {location.state.data.state}</Typography>
            </Grid>
          </Grid>
          <Grid item container >
            <Grid item  pl={4} lg={3} >
              <Typography> Pincode</Typography>
            </Grid>
            <Grid item >
              <Typography> : {location.state.data.pincode}</Typography>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item container pl={5} display={"flex"} flexDirection={"row"}>
          <Typography mt={2}  fontSize={'20px'}>Vehical Details</Typography>

          <Grid item container>
            <Grid item  pl={4} lg={3}>
              <Typography>Vehical Name </Typography>
            </Grid>
            <Grid item>
              <Typography>  : {location.state.data.vname}</Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item  pl={4} lg={3}>
              <Typography> Vehical Type</Typography>
            </Grid>
            <Grid item>
              <Typography>: {location.state.data.vtype}</Typography>
            </Grid>
          </Grid>
          <Grid item container >
            <Grid item  pl={4} lg={3}>
              <Typography> Registration.no </Typography>
            </Grid>
            <Grid item>
              <Typography>: {location.state.data.reg}</Typography>
            </Grid>
          </Grid>
          {/* <Grid item container >
            <Grid item  pl={4} lg={3}>
              <Typography> Registration.Date </Typography>
            </Grid>
            <Grid item>
              <Typography>: {location.state.data.rdate}</Typography>
            </Grid>
          </Grid> */}
          <Grid item container >
            <Grid item  pl={4} lg={3}>
              <Typography> Maker Name </Typography>
            </Grid>
            <Grid item>
              <Typography>: {location.state.data.mname}</Typography>
            </Grid>
          </Grid>
          <Grid item container >
            <Grid item  pl={4} lg={3}>
              <Typography> Model </Typography>
            </Grid>
            <Grid item>
              <Typography>: {location.state.data.model}</Typography>
            </Grid>
          </Grid>
         
        </Grid>
        
        <Grid item container pl={5} display={"flex"} flexDirection={"row"}>
          <Typography mt={2}  fontSize={'20px'}>Insurance Details</Typography>

          <Grid item container mt={2}>
            <Grid item  pl={4} lg={3}>
              <Typography> Insurance Company Name </Typography>
            </Grid>
            <Grid item>
              <Typography>  : {location.state.data.cname} </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item  pl={4} lg={3}>
              <Typography> Insurance Type</Typography>
            </Grid>
            <Grid item>
              <Typography>: {location.state.data.itype} </Typography>
            </Grid>
          </Grid>
          <Grid item container >
            <Grid item  pl={4} lg={3}>
              <Typography> Policy.No </Typography>
            </Grid>
            <Grid item>
              <Typography>: {location.state.data.policyno}</Typography>
            </Grid>
          </Grid>
          {/* <Grid item container >
            <Grid item  pl={4} lg={3}>
              <Typography> Policy Date</Typography>
            </Grid>
            <Grid item>
              <Typography>: {location.state.data.pdate}</Typography>
            </Grid>
          </Grid> */}
          
        </Grid>
        <Grid item mt={4} display={'flex'} justifyContent={'center'}>
          <Button
            variant="contained"
            size="small"
            sx={{ bgcolor: "#9c27b0" }}
            onClick={pdfDownload}
          >
            Download
          </Button>
        </Grid>
      </Grid>
    </Box>
  
  );
}
