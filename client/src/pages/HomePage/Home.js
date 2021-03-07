import React, { useContext } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import HomeLinks from "../../components/Header/HomeLinks.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Posts from "./Posts.js";

import styles from "../../assets/jss/material-kit-react/views/components.js";
import AuthContext from "../../context/post/postContext";

import LocationSearchModal  from "../LandingPage/GoogleMap"

const useStyles = makeStyles(styles);

export default function Home(props) {
   const classes = useStyles();
   const { ...rest } = props;
   const authContext = useContext(AuthContext);

   return (
      <div>
         <Header
            brand="UniCafe"
            leftLinks={<HomeLinks />}
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
               height: 150,
               color: "black",
            }}
            {...rest}
         />
         <Parallax image={require("../../assets/img/blue3.jpg")}>
            <div className={classes.container}>
               <GridContainer>
                  <GridItem xs={12} sm={12} md={10}>
                     <div className={classes.brand}>
                        <h1 className={classes.title}>UniCafe.com</h1>
                        <h3>
                           <strong>News:</strong> The Middlesex-London Health Unit has declared an outbreak of COVID-19 at Western University’s Essex Hall. 
                           So far, seven students living in the residence hall have tested positive for COVID-19. 
                           The building is currently home to 338 students. According to Western, 
                           students who have tested positive and some of their close contacts have been 
                           relocated to a quarantine location outside of the building. “Out of an abundance of caution, 
                           the university is also providing on-site testing to other students isolating in place on the affected floors in Essex,” 
                           the university said in a statement posted to the Western website yesterday.
                        </h3>
                     </div>
                  </GridItem>
               </GridContainer>
            </div>
         </Parallax>

         <div className={classNames(classes.main, classes.mainRaised)}>
            <Posts />
         </div>
            
         <Footer />
      </div>
   );
}
