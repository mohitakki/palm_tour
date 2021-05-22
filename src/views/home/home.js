import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Footer, Typography } from "../../components";
import { PopularDestination } from "./popularDestinations";
import { SpecialOffers } from "./SpecialOffers";
import { Reviews } from "./reviews";
import { FrontComponent } from "./frontComponent";
import { ContactUs } from "./contactUs";

export const Home = () => {
  return (
    <div>
      <Grid container direction="column">
        <Box>
          <FrontComponent />
            <Box mt={25}>
            <PopularDestination /> 
            </Box>
            <Box mt={15}>
            <SpecialOffers />
            </Box>
            <Box mt={15} >
            <Reviews />
            </Box>
            <Box mt={15} mb={20}>
            <ContactUs />
            </Box>
        </Box>
      </Grid>
      <Footer />
    </div>
  );
};
