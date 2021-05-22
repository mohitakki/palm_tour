import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "../../../components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { ImLocation} from 'react-icons/im';
import { FaPhoneAlt} from 'react-icons/fa';
import { TiMessage } from 'react-icons/ti'

const textInputStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  textField: {
    width: 200,
    height: 30,
    padding: 1,
    paddingTop: 3,
    borderRadius: 5,
    alignSelf: "center",
  },
  input: {
    color: "#696969",
    fontWeight: "400",
    fontSize: 12,
    alignSelf: "center",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#fecf00",
  },
}));

export function ContactUs() {
  const classes = textInputStyles();
  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        flexDirection="column"
        paddingLeft={30}
        paddingRight={30}
      >
        <Box
          mb={3}
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
        >
          <Box display="flex" flexDirection="column">
            <Box alignSelf="flex-start">
              <Typography variant="h5" marked="center">
                Contact Us
              </Typography>
              <Typography variant="body" marked="center">
                Leave your phone no we will call you back
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box mt={1} display="flex" flexDirection="row">
          <TextField
            variant="outlined"
            className={classes.textField}
            InputProps={{ classes, style: { height: 35 } }}
            placeholder="Phone Number"
          />
          <Box
            ml={3}
            mt={1}
            display="flex"
            flexDirection="column"
            alignSelf="center"
          >
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "none" }}
            >
              <Typography color="secondary" variant="caption">
                Send
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box mt={2} display='flex' flexDirection='column'>
         <Box display='flex'  flexDirection='row' alignItems='center'>
          <ImLocation fontSize={20} color='#fecf00'/>
          <Box ml={2}>
           <Typography variant='subtitle1'>
               Location 123
           </Typography>
          </Box>
         </Box>
         <Box display='flex'  flexDirection='row' alignItems='center'>
          <FaPhoneAlt fontSize={18} color='#fecf00'/>
          <Box ml={2}>
           <Typography variant='subtitle1'>
               +91-9090909090
           </Typography>
          </Box>
         </Box>
         <Box display='flex'  flexDirection='row' alignItems='center'>
          <TiMessage fontSize={20} color='#fecf00'/>
          <Box ml={2}>
           <Typography variant='subtitle1'>
              123 ,Dummy Address
           </Typography>
          </Box>
         </Box>
        </Box>
      </Box>
    </div>
  );
}
