import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HomeLinks from "../../components/Header/HomeLinks.js";
import ProfileLinks from  "../../components/Header/ProfileLinks";
import Parallax from "../../components/Parallax/Parallax.js";
import Description from "./Description";
import Favourites from "./Favourites";
import UserPosts from "./UserPosts";
import LocationSearchModal  from "../LandingPage/GoogleMap"

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
   const classes = useStyles();
   const { ...rest } = props;
   const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
   );

   return (
      <div>
         <Header
            color="transparent"
            brand="UniCafe"
            rightLinks={<ProfileLinks  />}
            fixed
            changeColorOnScroll={{
               height: 200,
               color: "white",
            }}
            {...rest}
         />
         <Parallax
            small
            filter
            image={require("../../assets/img/blue.jpg")}
         />
         <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
               <div className={classes.container}>
                  {/* Basic profile info and Description */}
                  <GridContainer>
                    <Description user={props.user}/>
                  </GridContainer>

                  {/* User post section */}
                  <GridContainer justify="center">
                     <UserPosts user={props.user} />
                  </GridContainer>

                  {/* Favourite avatar and lines */}
                  <GridContainer justify="center">
                     <GridItem
                        xs={12}
                        sm={12}
                        md={12}
                        className={classes.navWrapper}
                     >
                       
                     </GridItem>
                  </GridContainer>
                  <div className={classes.container}>
                  <LocationSearchModal />
                  <br></br><br></br><br></br><br></br>
                  <br></br><br></br><br></br><br></br>
                  <br></br><br></br><br></br><br></br>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
}
