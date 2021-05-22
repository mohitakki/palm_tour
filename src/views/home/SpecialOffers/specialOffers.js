import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import CardContent from "@material-ui/core/CardContent";
import { BsCalendar } from "react-icons/bs";
import Button from "@material-ui/core/Button";
import { MdFlight, MdFreeBreakfast } from "react-icons/md";
import { CardComponent, Typography } from "../../../components";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import Box from "@material-ui/core/Box";
import firstImage from "../../../images/4.jpg";
import secondImage from "../../../images/5.jpg";
import thirdImage from "../../../images/6.jpg";
import Carousel, { consts } from "react-elastic-carousel";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const places = [
  {
    location: "Paris, France",
    rating: 4,
    date: "from 1.5.2021",
    days: "2 days",
    text1: "flight from kiev",
    text2: "breakfast is not included",
    price: "$600",
    img: firstImage,
  },
  {
    location: "Rome, Italy",
    rating: 5,
    date: "from 2.5.2021",
    days: "3 days",
    text1: "flight from kiev",
    text2: "breakfast is included",
    price: "$800",
    img: secondImage,
  },
  {
    location: "Istanbul, Turkey",
    rating: 5,
    date: "from 3.5.2021",
    days: "7 days",
    text1: "flight from kiev",
    text2: "breakfast is included",
    price: "$400",
    img: thirdImage,
  },
  {
    location: "Paris, France",
    rating: 4,
    date: "from 1.5.2021",
    days: "2 days",
    text1: "flight from kiev",
    text2: "breakfast is not included",
    price: "$600",
    img: firstImage,
  },
  {
    location: "Rome, Italy",
    rating: 5,
    date: "from 2.5.2021",
    days: "3 days",
    text1: "flight from kiev",
    text2: "breakfast is included",
    price: "$800",
    img: secondImage,
  },
  {
    location: "Istanbul, Turkey",
    rating: 5,
    date: "from 3.5.2021",
    days: "7 days",
    text1: "flight from kiev",
    text2: "breakfast is included",
    price: "$400",
    img: thirdImage,
  },
];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const useStyles = makeStyles({
  media: {
    paddingTop: "90.25%",
    margin: "20px"
  },
  content: {
    padding: 3,
    backgroundColor: "#fffae5",
  },
});

const OfferCards = (item) => {
  const classes = useStyles();
  return (
    <CardComponent>
      <CardMedia className={classes.media} image={item.img}/>
      <CardContent className={classes.content}  >
        <Box p={3}>
          <Grid direction="column" alignItems="center">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              fontWeight={500}
              
            >
              <Typography variant="subtitle1">{item.location}</Typography>
              <Rating name="simple-controlled" value={4} size="small" />
            </Box>
            <Box display="flex" flexDirection="row" mt={2}>
              <BsCalendar />
              <Box ml={2} display="flex" flexDirection="row">
                <Typography variant="caption">from 1.5.2021</Typography>
                <Typography variant="caption">- 2 days</Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" mt={2}>
              <MdFlight />
              <Box ml={2} display="flex" flexDirection="row">
                <Typography variant="caption">{item.text1}</Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" mt={2}>
              <MdFreeBreakfast />
              <Box ml={2} display="flex" flexDirection="row">
                <Typography variant="caption">{item.text2}</Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              mt={3}
            >
              <Box display="flex" flexDirection="row" alignItems="center">
                <Typography variant="body1">From</Typography>
                <Box ml={1}>
                  <Typography variant="caption">{item.price}</Typography>
                </Box>
              </Box>
              <Box ml={2} display="flex" flexDirection="row">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ fontSize: 10 }}
                >
                  <div color="#fff">Details</div>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </CardContent>
    </CardComponent>
  );
};

export function SpecialOffers() {
  const matches = useMediaQuery("(max-width:600px)");
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
                Special Offers
              </Typography>
              <Typography variant="subtitle1" marked="center">
                we have collected for you the best offers
              </Typography>
            </Box>
          </Box>
          {!matches ? (
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              style={{ width: 100 }}
            >
              <Box p={1} style={{ backgroundColor: "#fecf00", opacity: 0.5 }}>
                <GoTriangleLeft fontSize={20} />
              </Box>
              <Box p={1} style={{ backgroundColor: "#fecf00" }}>
                <GoTriangleRight fontSize={20} />
              </Box>
            </Box>
          ) : null}
        </Box>
        <Carousel
          itemsToShow={3}
          focusOnSelect={true}
          renderArrow={myArrow}
          pagination={false}
          breakPoints={breakPoints}
          // ref={ref => (carousel = ref)}
        >
          {places.map((item, index) => (
            <Grid item>
              <OfferCards
                location={item.location}
                rating={item.rating}
                date={item.date}
                days={item.days}
                text1={item.text1}
                text2={item.text2}
                price={item.price}
                img={item.img}
              />
            </Grid>
          ))}
        </Carousel>

        <Box display="flex" justifyContent="flex-end" mt={5}>
          <Box border={1} p={1} borderColor="#fecf00">
            <div>See All</div>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
