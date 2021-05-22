import Grid from "@material-ui/core/Grid";
import { CardComponent, Typography } from "../../../components";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import firstImage from "../../../images/1.jpg";
import secondImage from "../../../images/2.jpg";
import thirdImage from "../../../images/3.jpg";
import Box from "@material-ui/core/Box";
import "./destinations.css";
import Carousel, { consts } from "react-elastic-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const places = [
  {
    subLocation: "Valley of Cappadocia",
    location: "Cappadocia, Turkey",
    img: firstImage,
  },
  {
    subLocation: "Burj Al Arab",
    location: "Dubai, UAE",
    img: secondImage,
  },
  {
    subLocation: "Parthenon",
    location: "Athens, Greece",
    img: thirdImage,
  },
  {
    subLocation: "Valley of Cappadocia",
    location: "Cappadocia, Turkey",
    img: firstImage,
  },
  {
    subLocation: "Burj Al Arab",
    location: "Dubai, UAE",
    img: secondImage,
  },
  {
    subLocation: "Parthenon",
    location: "Athens, Greece",
    img: thirdImage,
  },
];

const DestinationCards = ({ subLocation, location, img }) => {
  return (
    <CardComponent>
      <div className="cardSubContainer">
        <img src={img} className="imageStyle" />
        <div className="bottomContainer">
          <div style={{ color: "#fecf00", fontSize: "18px" }}>
            {subLocation}
          </div>
          <div className="location">{location}</div>
        </div>
      </div>
    </CardComponent>
  );
};

export function PopularDestination() {
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <Box
          p={1}
          style={{
            backgroundColor: "#fecf00",
            position: "relative",
            left: "1330px",
            top: "-60px",
          }}
        >
          <GoTriangleLeft fontSize={20} />
        </Box>
      ) : (
        <Box
          p={1}
          style={{
            backgroundColor: "#fecf00",
            position: "relative",
            top: "-60px",
          }}
        >
          <GoTriangleRight fontSize={20} />
        </Box>
      );
    return (
      <>
        <Box onClick={onClick} disabled={isEdge}>
          {pointer}
        </Box>
      </>
    );
  };

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
          justifyContent="space-between"
        >
          <Box display="flex" flexDirection="column">
            <Box alignSelf="flex-start">
              <Typography variant="h4" marked="center">
                Popular Destinations
              </Typography>
              <Typography variant="subtitle1" marked="center">
                choose what you like the best
              </Typography>
            </Box>
          </Box>
        </Box>
        <Carousel
          itemsToShow={3}
          focusOnSelect={true}
          renderArrow={myArrow}
          pagination={false}
          breakPoints={breakPoints}
        >
          {places.map((item, index) => (
            <Grid item>
              <DestinationCards
                subLocation={item.subLocation}
                location={item.location}
                img={item.img}
              />
            </Grid>
          ))}
        </Carousel>

        <Box display="flex" justifyContent="flex-end" mt={5}>
          <Box border={1} p={1} borderColor="#fecf00">
            <div>See More</div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
