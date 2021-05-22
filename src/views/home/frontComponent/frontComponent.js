import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { RiUser3Fill } from "react-icons/ri";
import { VscTriangleDown } from "react-icons/vsc";
import { BsCalendarFill } from "react-icons/bs";
import { GiApolloCapsule } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import Box from "@material-ui/core/Box";
import Image1 from "../../../images/14.jpg";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { CardComponent, Typography } from "../../../components";
import { GiPalmTree } from "react-icons/gi";
import "./styles.css";
import { ButtonBase } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const textInputStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  textField: {
    width: 120,
    height: 30,
    padding: 10,
    paddingTop: 3,
    backgroundColor: "#edf0f2",
    borderRadius: 5,
    alignSelf: "center",
  },
  input: {
    color: "#696969",
    fontWeight: "400",
    fontSize: 12,
    alignSelf: "center",
  },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
}));

const useStyles = makeStyles({
  paperContainer: {
    height: "100vh",
    width: "100%",
    backgroundImage: `linear-gradient(black 0%, rgba(0,0,0,0.5) 0%),url(${Image1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    position: "relative",
  },
  cardContainer: {
    top: "70vh",
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  titleContainer: {
    top: "20vh",
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  header: {
    top: "2vh",
    position: "relative",
    width: "80vw",
    height: "10vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    marginLeft: "18vh",
  },
  headerTextStyle: {
    fontWeight: "600",
  },
  titleBox: {
    "&:hover": {
      borderTopWidth: 1,
      borderTopColor: "red",
    },
  },
  titleText: {
    fontFamily: "cursive",
    color: "white",
    fontSize: 20,
    alignSelf: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  cardStyle: {
    width: "80vw",
    height: 180,
    borderRadius: 40,
  },
  seatSelectorContainer: {
    height: 30,
    width: 80,
    backgroundColor: "#edf0f2",
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seatSelectorSubContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontalLineContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  horizontalLongLineSubContainer: {
    height: 60,
    width: 1,
    backgroundColor: "white",
    alignSelf: "center",
  },
  horizontalSmallLineSubContainer: {
    height: 30,
    width: 1,
    backgroundColor: "white",
    alignSelf: "center",
  },
});

const DatePickers = () => {
  const classes = textInputStyles();
  const date = new Date().toISOString().slice(0, 10);
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue={date}
        className={classes.textField}
        InputProps={{ classes }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.subContainer}>
        <GiPalmTree fontSize={30} color="#fecf00" />
        <div className={classes.titleText}>Palm Tour</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ButtonBase>
          <Box mr={5}>
            <Typography
              color="secondary"
              fontSize={24}
              className={classes.headerTextStyle}
            >
              Home
            </Typography>
          </Box>
        </ButtonBase>
        <Box mr={5}>
          <Typography
            fontSize={24}
            color="secondary"
            className={classes.headerTextStyle}
          >
            Our Tours
          </Typography>
        </Box>
        <Box mr={5}>
          <Typography
            fontSize={24}
            color="secondary"
            className={classes.headerTextStyle}
          >
            Special Offers
          </Typography>
        </Box>
        <Box mr={5}>
          <Typography
            fontSize={24}
            color="secondary"
            className={classes.headerTextStyle}
          >
            Reviews
          </Typography>
        </Box>
        <Box>
          <Typography
            fontSize={24}
            color="secondary"
            className={classes.headerTextStyle}
          >
            Contacts
          </Typography>
        </Box>
      </div>
    </div>
  );
};
const SeatSelector = () => {
  const classes = useStyles();
  return (
    <Box p={1} className={classes.seatSelectorContainer}>
      <Box className={classes.seatSelectorSubContainer}>
        <RiUser3Fill opacity={0.5} fontSize={10} />
        <Typography variant="caption" style={{ marginLeft: 2, opacity: 0.5 }}>
          2
        </Typography>
      </Box>
      <Box className={classes.seatSelectorSubContainer}>
        <VscTriangleDown fontSize={15} color="#fecf00" />
      </Box>
    </Box>
  );
};

const SocialMediaLines = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "25px",
      }}
    >
      <div className={classes.horizontalLineContainer}>
        <div className={classes.horizontalLongLineSubContainer} />
        <AiOutlineTwitter color="#FECF00" fontSize="20" />
      </div>
      <div className={classes.horizontalLineContainer}>
        <div className={classes.horizontalSmallLineSubContainer} />
        <AiFillInstagram color="#FECF00" fontSize="20" />
      </div>
      <div className={classes.horizontalLineContainer}>
        <div className={classes.horizontalSmallLineSubContainer} />
        <AiFillFacebook color="#FECF00" fontSize="20" />
      </div>
      <div className={classes.horizontalLineContainer}>
        <div className={classes.horizontalSmallLineSubContainer} />
        <AiFillBehanceCircle color="#FECF00" fontSize="20" />
      </div>
      <div className={classes.horizontalLineContainer}>
        <div className={classes.horizontalLongLineSubContainer} />
      </div>
    </div>
  );
};
const DateSelector = () => {
  const classes = useStyles();
  return (
    <Box p={1} className={classes.seatSelectorContainer} style={{ width: 100 }}>
      <Box className={classes.seatSelectorSubContainer}>
        <BsCalendarFill opacity={0.5} fontSize={10} />
      </Box>
      <Box className={classes.seatSelectorSubContainer}>
        <Typography variant="caption" style={{ marginLeft: 2, opacity: 0.5 }}>
          26.04.2021
        </Typography>
      </Box>
    </Box>
  );
};

const Destination = () => {
  const classes = useStyles();
  return (
    <Box p={1} className={classes.seatSelectorContainer} style={{ width: 100 }}>
      <Box className={classes.seatSelectorSubContainer}>
        <GiApolloCapsule opacity={0.5} fontSize={10} />
      </Box>
      <Box className={classes.seatSelectorSubContainer}>
        <Typography variant="caption" style={{ marginLeft: 2, opacity: 0.5 }}>
          France
        </Typography>
      </Box>
    </Box>
  );
};

const TitleComponent = () => {
  return <div></div>;
};
export function FrontComponent(props) {
  const [state, setState] = useState({});

  const classes = useStyles();
  return (
    <div className={classes.paperContainer}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Header />
      </div>
      <div className={classes.titleContainer}>
        <Box display="flex" flexDirection="row">
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row">
              <Typography color="secondary" style={{ fontWeight: "400" }}>
                Start your journey with us ________
              </Typography>
            </Box>
            <Box mt={2} display="flex" flexDirection="row">
              <Typography
                color="secondary"
                variant="h3"
                style={{ fontWeight: "600" }}
              >
                This will be your unforgettable &nbsp;
              </Typography>
              <Typography
                color="primary"
                variant="h3"
                style={{ fontWeight: "600" }}
              >
                journey
              </Typography>
            </Box>
            <Box mt={2} display="flex" flexDirection="row">
              <Typography
                color="secondary"
                variant="h3"
                style={{ fontWeight: "600" }}
              >
                Online Booking
              </Typography>
              <Typography
                color="primary"
                variant="h3"
                style={{ fontWeight: "600", marginLeft: 10 }}
              >
                24/7
              </Typography>
            </Box>
            <Box mt={4}>
              <Button
                variant="contained"
                color="primary"
                style={{ textTransform: "none", padding: ".8vw 2vw .8vw 2vw" }}
              >
                <Typography color="secondary" variant="subtitle1">
                  Start Tour
                </Typography>
              </Button>
            </Box>
            <Box
              style={{
                width: "6vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginLeft:"20px"
              }}
            >
              <div
                style={{
                  height: "10vw",
                  backgroundColor: "#fecf00",
                  width: "0.1vw",
                }}
                className="verticalDottedLine"
              />
            </Box>
          </Box>
          <Box ml={50}>
            <SocialMediaLines />
          </Box>
        </Box>
      </div>

      <div className={classes.cardContainer}>
        <CardComponent cardStyles={classes.cardStyle}>
          <Box p={5} display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography variant="subtitle1">Destination</Typography>
              <Typography variant="subtitle1">Check-In</Typography>
              <Typography variant="subtitle1">Check-Out</Typography>
              <Typography variant="subtitle1">Adults</Typography>
              <Typography variant="subtitle1">Children</Typography>
              <Typography variant="subtitle1">{``}</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={1}
            >
              <Destination />

              <DatePickers />

              <DatePickers />
              <SeatSelector />
              <SeatSelector />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{ backgroundColor: "#fecf00" }}
                p={1}
              >
                <BsSearch />
              </Box>
            </Box>
          </Box>
        </CardComponent>
      </div>
    </div>
  );
}
