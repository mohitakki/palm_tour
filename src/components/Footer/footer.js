import { makeStyles } from "@material-ui/styles";
import { GiPalmTree } from "react-icons/gi";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiFillBehanceCircle,
} from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  Container: {
    left: 0,
    bottom: 0,
    width: "100%",
    height: "8%",
    backgroundColor: "#fecf00",
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "cursive",
  },
  bottomTextStyles: {
    paddingLeft: 10,
    fontFamily: "Arial",
    fontSize: 12,
    letterSpacing: 0.5,
  },
  headerText: {},
}));
export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <div className={classes.subContainer}>
        <GiPalmTree fontSize={30} />
        <div className={classes.titleText}>Palm Tour</div>
      </div>
      <div className={[classes.subContainer]}>
        <div className={classes.bottomTextStyles}>Home</div>
        <div className={classes.bottomTextStyles}>Our Tours</div>
        <div className={classes.bottomTextStyles}>Special Offers</div>
        <div className={classes.bottomTextStyles}>Reviews</div>
        <div className={classes.bottomTextStyles}>Contacts</div>
      </div>
      <div className={classes.subContainer}>
        <AiOutlineTwitter style={{ paddingRight: 10 }} />
        <AiFillInstagram style={{ paddingRight: 10 }} />
        <AiFillFacebook style={{ paddingRight: 10 }} />
        <AiFillBehanceCircle style={{ paddingRight: 10 }} />
      </div>
    </div>
  );
};
