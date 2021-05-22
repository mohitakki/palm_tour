import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import CardContent from "@material-ui/core/CardContent";
import { GoQuote } from "react-icons/go";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import Box from "@material-ui/core/Box";
import User1 from "../../../images/user1.jpeg";
import { CardComponent, Typography } from "../../../components";
import Rating from "@material-ui/lab/Rating";
import ButtonBase from "@material-ui/core/ButtonBase";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const useStyles = makeStyles({
  cardContainer: {
    width: "80%",
    height: (isFocused) => (isFocused ? 250 : 200),
    padding: 15,
    overflow: "hidden",
    opacity: (isFocused) => (isFocused ? 1 : 0.5),
  },
  content: {
    padding: 5,
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export function Reviews() {


  return (
    <div style={{ width: "100%" }}>
      <Box
        display="flex"
        flexDirection="column"
        paddingLeft={30}
        paddingRight={30}
      >
        <Box
          mb={5}
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
        >
          <Box display="flex" flexDirection="column">
            <Box alignSelf="flex-start">
              <Typography variant="h5" marked="center">
                Special Offers
              </Typography>
              <Typography variant="body" marked="center">
                we have collected for you the best offers
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

 
   <Box
        className="carousel owl-carousel"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        {[...new Array(3)].map((_, i) => {
          return i == 1 ? <CenterCard /> : <Item isFocused={false} />;
        })}
      </Box>
    </div>
  );
}

function CenterCard(props) {
  const classes = useStyles();

  return (


    <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="center"
  >
    <ButtonBase>
      <Box mr={5}>
        <GoTriangleLeft size={30} color="#fecf00" />
      </Box>
    </ButtonBase>
    <Item isFocused={true} />
    <ButtonBase>
      <Box ml={5}>
        <GoTriangleRight size={30} color="#fecf00" />
      </Box>
    </ButtonBase>
  </Box>
  );
}

function Item({ isFocused }) {
  const classes = useStyles(isFocused);
  return (
    <CardComponent cardStyles={classes.cardContainer}>
      <CardContent className={classes.content}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box alignItems="center">
            <GoQuote fontSize={45} opacity={0.4} />
          </Box>
          <Box alignItems="center">
            <img src={User1} className={classes.imageStyle} />
          </Box>
          <Box />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Typography variant="caption" style={{ opacity: 0.5 }}>
            {`Tour:`}
            {` `}
          </Typography>
          <Typography variant="caption">{`Unforgettable Turkey`}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mt={1}
        >
          <Rating name="simple-controlled" value={4} size="small" />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mt={1}
        >
          <Typography
            variant="caption"
            style={{ opacity: 0.5, textAlign: "center" }}
          >
            {`i liked everything. the trip was full of events and excursions.lot of impressions from istanbul and of course from cappadocia`}
            {` `}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Typography variant="caption">{`Kate Yan`}</Typography>
        </Box>
      </CardContent>
    </CardComponent>
  );
}
