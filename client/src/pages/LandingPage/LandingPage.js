import React from "react";
import { Route, Redirect } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography"

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HomeLinks from "../../components/Header/HomeLinks.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

import LocationSearchModal from './GoogleMap';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
   const classes = useStyles();
   const { ...rest } = props;
   return (
      <div>
         <Header
            color="transparent"
            routes={dashboardRoutes}
            brand="UniCafe"
            leftLinks={<HomeLinks />}
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
               height: 400,
               color: "white",
            }}
            {...rest}
         />
         <Parallax image={require("../../assets/img/mansit.jpg") } class="float-right">
            <div className={classes.container}>
               <GridContainer>
                  <GridItem xs={12} sm={12} md={10}>
                     <Typography variant="h2" className={classes.title}>UniCafe.com</Typography>
                     <h3>
                       
                        “Zoom University” is tough. Much like the mental health of millions of students, mine has declined this year. 
                        Still, I am coping. I am writing essays, listening to pre-recorded lectures, 
                        talking to friends, and reminding myself to go on walks.                        
                       
                     </h3>
                     <h3>
                        UniCafe is a place designed for students to share their thoughts and stories, also possibly making new friends.
                     </h3>
                     <br />
                     <Button
                        color="primary"
                        size="lg"
                        href="https://thriveglobal.com/stories/is-zoom-university-worth-it/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <LibraryBooksIcon />
                           How Students Are Affected
                     </Button>
                  </GridItem>
               </GridContainer>
            </div>
         </Parallax>
         <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
               <ProductSection />
               <WorkSection />
               <LocationSearchModal />
               <TeamSection />
            </div>
         </div>
         <Footer />
      </div>
   );
}
