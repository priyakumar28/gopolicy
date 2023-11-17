import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate} from "react-router-dom";
export default function FormPage() {
    
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().min(10).max(13).required(),
    address: yup.string(),
    location: yup.string(),
    state: yup.string(),
    pincode: yup.string().min(6).max(6),
    vtype:yup.string(),
    vname:yup.string(),
    reg:yup.string(),  
    ftype:yup.string(),
    mname:yup.string(),
    oname:yup.string(),
    model:yup.string(),
    cname:yup.string(),
    itype:yup.string(),
    policyno:yup.string(),
  
  });
  const {
    register,
    handleSubmit,
    getValues,
    reset,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
const onSubmit = async (data) => {
    console.log(data);
try{
    let body = {       
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        location: data.location,
        state: data.state,
          pincode: data.pincode,
          vtype:data.vtype,
          vname:data.vname,
          reg:data.reg,
          ftype:data.ftype,
          mname:data.mname,
          oname:data.oname,
          model:data.model,
          cname:data.cname,
          itype:data.itype,
          policyno:data.policyno,
    }

    navigate("/details" ,{state:{data:body}});

}
catch (error) {
    console.log(error);
}
    
  };

  return (
    <Box sx={{ bgcolor: "#f3e5f5" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          item
          sx={{ background: "#9c27b0", height: "50px" }}
          borderRadius={3}
        >
          <Typography color={"#ffffff"} fontSize={"30px"} pl={2}>
            Insurance Details
          </Typography>
        </Grid>
        <h2>Personal Details</h2>
        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
        >
          <Grid item>
            <Grid
              item
              container
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Name</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Your Name"
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("name", { require: true })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Email</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Your mail"
                  variant="outlined"
                  type="email"
                  size="small"
                  {...register("email", { require: true })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Phone</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Your Phone Number"
                  type="text"
                  variant="outlined"
                  size="small"
                  {...register("phone", { require: true })}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              item
              container
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Address</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Address line"
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("address", { require: true })}
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Location</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Your Location"
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("location", { require: true })}
                  error={!!errors.location}
                  helperText={errors.location?.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>State</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter State"
                  type="text"
                  variant="outlined"
                  size="small"
                  {...register("state", { require: true })}
                  error={!!errors.state}
                  helperText={errors.state?.message}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              item
              container
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Pincode</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Your Pincode"
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("pincode", { require: true })}
                  error={!!errors.pincode}
                  helperText={errors.pincode?.message}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <h2>Vehicle Details</h2>
        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
        >
          <Grid item>
            <Grid
              item
              container
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Vehicle Type</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Type of your vehicle"
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("vtype", { require: true })}
                  error={!!errors.vtype}
                  helperText={errors.vtype?.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Vehicle Name</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Your Name"
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("vname", { require: true })}
                  error={!!errors.vname}
                  helperText={errors.vname?.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Registration.no</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Your Reg Number"
                  type="text"
                  variant="outlined"
                  size="small"
                  {...register("reg", { require: true })}
                  error={!!errors.reg}
                  helperText={errors.reg?.message}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Fuel Type</Typography>
              </Grid>
              <Grid item pl={5}>
                <TextField
                  placeholder="Enter Fuel Type"
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("ftype", { require: true })}
                  error={!!errors.ftype}
                  helperText={errors.ftype?.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Maker name</Typography>
              </Grid>
              <Grid item pl={2}>
                <TextField
                  placeholder="Enter Maker name"
                  type="text"
                  variant="outlined"
                  size="small"
                  {...register("mname", { require: true })}
                  error={!!errors.mname}
                  helperText={errors.mname?.message}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              item
              container
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Maker Model</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Maker Model "
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("model", { require: true })}
                  error={!!errors.model}
                  helperText={errors.model?.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Owner Name</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Owner Nmae "
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("oname", { require: true })}
                  error={!!errors.oname}
                  helperText={errors.oname?.message}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <h2>Insurance Details</h2>
        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
        >
          <Grid item>
            <Grid
              item
              container
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Insurance Type</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Type of your Insurance"
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("itype", { require: true })}
                  error={!!errors.itype}
                  helperText={errors.itype?.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Company Name</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Your Company Name"
                  variant="outlined"
                  type="text"
                  size="small"
                  {...register("cname", { require: true })}
                  error={!!errors.cname}
                  helperText={errors.cname?.message}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              mt={2}
              display={"flex"}
              flexDirection={"row"}
              columnGap={2}
            >
              <Grid item>
                <Typography>Policy Number</Typography>
              </Grid>
              <Grid item>
                <TextField
                  placeholder="Enter Your Policy Number"
                  type="text"
                  variant="outlined"
                  size="small"
                  {...register("policyno", { require: true })}
                  error={!!errors.policyno}
                  helperText={errors.policyno?.message}
                />
              </Grid>
            </Grid>
          </Grid>
         
        </Grid>


        <Grid item mt={3} display={"flex"} justifyContent={"center"}>
          <Button
            variant="contained"
            type="submit"
            size="small"
            sx={{ bgcolor: "#9c27b0" }}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
}
