import { Box, Button, Grid, Icon, IconButton, Typography } from "@mui/material";
import React, {useState, useEffect} from "react"; 
import axios from 'axios';
import {Air, Cloud,Download,FileUpload,GitHub,Outbound,Thunderstorm, WaterDrop} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Switch from '@mui/material/Switch';

const Search = styled('div')(() => ({
    position: 'relative',
 borderRadius:20,
    margin: 2,
    background:'#ffffff'
    
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      borderRadius:20,
      [theme.breakpoints.up('sm')]: {
        width: '32ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
const KEY = 'cb3ef3fb6cf97c9633c12d18300cf252';

export default function Weather (){
const [city, setCity] = useState('')
    const  [data, setData] = useState(
      {
        celcius: 10,
        name: 'London',
        climate: 'ThunderStrom',
        humidity:   10,
        speed: 2,
        feelsLike:7,
        pressure: 25,
        minimum: 7

      }
    );
   
    const handleClick=() =>{
      
        const resp = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dcac1afa76d9ae9579bc08708af43d3&&units=metric`)
        .then((res)=>{
          console.log(res.data);
          console.log(res.data.weather[0].main);
          setData({...data, celcius: res.data.main.temp, name:res.data.name, 
            humidity:res.data.main.humidity, speed: res.data.wind.speed ,
            minimum: res.data.main.temp_min, feelsLike: res.data.main.feels_like,
            pressure:res.data.main.pressure, climate: res.data.weather[0].main})
        })
        .catch((err)=>{
          console.log(err);
        })
      

    }     
    return(
        <Box  height='100vh' >
            <Grid  container sx={{background:"#bbdefb"}} >
               <Grid item container display={'flex'} flexDirection={'row'} justifyContent={'space-between'} >
                <Grid item  >
                    <Typography fontSize='30px' fontWeight='bold' color={'#006064'}>ReactWeather</Typography> 
                </Grid>
                  <Grid item>
                    <IconButton ><Cloud sx={{color:"#000000"}} /></IconButton>
                    <IconButton ><GitHub sx={{color:"#000000"}} /></IconButton>
                  </Grid>
               </Grid>
               <Grid item container display={'flex'} flexDirection={'row'} justifyContent={'space-between'} >
                <Grid item lg={10} md={12} sm={12} xs={12}>
                <Search>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search by city name"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={e => setCity(e.target.value)}
                        />
                    </Search>
                    
                </Grid>
                <Grid item pl={2} lg={2} >
                  <Button sx={{borderRadius:5}} onClick={handleClick} variant="contained" >Search</Button>
                </Grid>
                </Grid>
                <Grid item container  mt={3} sx={{background:'#ffffff'}} display={'flex'}  borderRadius={5}  >
                   <Grid item container display={'flex'} flexDirection={'row'} justifyContent={'space-between'} >
                  <Typography p={2} fontSize={25} color={'#616161'}>Current Weather</Typography>
                   <Grid item p={2}>
                   <Switch defaultChecked />
                   </Grid>
                    </Grid>
                    <Grid item container display={'flex'} flexDirection={'row'} justifyContent={'space-between'} >
                        <Grid item lg ={6} display={'flex'} flexDirection={'column'}>           
                            <Typography fontSize={'25px'} pl={5}  color={'#00838f'} fontWeight={'bold'} fontFamily={'monospace'}>{data.name}</Typography>
                                
                                <Grid item container pl={5} display={'flex'} flexDirection={'row'} >
                                    <Grid item>
                                    <IconButton ><Thunderstorm sx={{fontSize:'150px', color:'#bbdefb'}}/></IconButton>
                                    </Grid>
                                 <Grid item pl={5}>
                                 <Typography fontSize={'80px'} color={'#00838f'} >{data.celcius} C</Typography>
                                 </Grid>    
                                </Grid>
                                <Typography p={3} fontStyle={"italic"} color={'#757575'} fontWeight={'bold'}>{data.climate}</Typography>
                            </Grid>
                             
                            <Grid item  lg ={6} pl={9} display={'flex'} flexDirection={'column'} >           
                                <Typography  p={4} color={'#00838f'} >feels like {data.feelsLike} C</Typography>                 
                                <Grid item container mb={5} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
                                    <Grid item pl={3} display={'flex'} flexDirection={'row'}>
                                       
                                        <Icon ><FileUpload sx={{color:'#9e9e9e'}}/></Icon>
                                    <Typography pl={3} color={'#00838f'} >{data.celcius} C</Typography>
                                        <Icon sx={{pl:6}}><Download sx={{color:'#9e9e9e'}}/></Icon>
                                    <Typography pl={3} color={'#00838f'} >{data.minimum} C</Typography>
                                  
                                    </Grid>
                                    <Grid item pl={3} mt={2} display={'flex'} flexDirection={'row'}>
                                       
                                        <Icon ><WaterDrop sx={{color:'#9e9e9e'}}/></Icon>
                                    <Typography pl={3} sx={{color:'#9e9e9e'}}>Humidity</Typography>
                                       
                                    <Typography pl={3} color={'#00838f'} >{data.humidity}%</Typography>
                                  
                                    </Grid>
                                    <Grid item pl={3} mt={2} display={'flex'} flexDirection={'row'}>
                                       
                                       <Icon ><Air sx={{color:'#9e9e9e'}} /></Icon>
                                   <Typography pl={3} sx={{color:'#9e9e9e'}}>Wind</Typography>
                                      
                                   <Typography pl={3} color={'#00838f'} >{data.speed} kph</Typography>
                                 
                                   </Grid> 
                                   <Grid item pl={3} mt={2} display={'flex'} flexDirection={'row'}>
                                       
                                        <Icon ><Outbound sx={{color:'#9e9e9e'}}/></Icon>
                                    <Typography pl={3} sx={{color:'#9e9e9e'}}>Pressure</Typography>
                                       
                                    <Typography pl={3} color={'#00838f'} >{data.pressure} hpa</Typography>
                                  
                                    </Grid>  
                                </Grid>                              
                            </Grid>
                        </Grid>
                  
                    </Grid>
                    <Grid item container mt={3} borderRadius={5} bgcolor={'#e3f2fd'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} >
                      <Typography p={3} color={'#616161'}>Extended Forecast</Typography>
                      <Grid item container display={'flex'} flexDirection={'row'} justifyContent={'space-around'} mb={3}>
                      <Grid item>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Sat</Typography>
                        <IconButton><Thunderstorm/></IconButton>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Rain</Typography>
                        <Typography color={'#01579b'}>24C/27C</Typography>
                      </Grid>
                      <Grid item>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Sun</Typography>
                        <IconButton><Thunderstorm/></IconButton>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Rain</Typography>
                        <Typography color={'#01579b'}>23C/24C</Typography>
                      </Grid>
                      <Grid item>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Mon</Typography>
                        <IconButton><Thunderstorm/></IconButton>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Rain</Typography>
                        <Typography color={'#01579b'} >18C/20C</Typography>
                      </Grid>
                      <Grid item>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Tue</Typography>
                        <IconButton><Thunderstorm/></IconButton>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Rain</Typography>
                        <Typography color={'#01579b'} >25C/26C</Typography>
                      </Grid>
                      <Grid item>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Wed</Typography>
                        <IconButton><Cloud/></IconButton>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Cloudy</Typography>
                        <Typography color={'#01579b'} >31C/34C</Typography>
                      </Grid>
                      <Grid item>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Thu</Typography>
                        <IconButton><Thunderstorm/></IconButton>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Rain</Typography>
                        <Typography color={'#01579b'} >23C/24C</Typography>
                      </Grid>
                      <Grid item>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Fri</Typography>
                        <IconButton><Thunderstorm/></IconButton>
                        <Typography color={'#01579b'} fontWeight={'bold'}>Rain</Typography>
                        <Typography color={'#01579b'} >23C/24C</Typography>
                      </Grid>
                      </Grid>
                    </Grid>
                    <Grid item container display={'flex'} flexDirection={'row'} justifyContent={'center'}>
                      <Typography color={'#0097a7'}>Developed By | Ehsan Azizi</Typography>
                    </Grid>
               </Grid>
              
          
        </Box>
    )
}