import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";

import image1 from "../../assets/img/invi1.png";
import image2 from "../../assets/img/invi2.png";
import image3 from "../../assets/img/invi3.png";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
   const classes = useStyles();
   const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
   };
   return (
      <div className={classes.section}>
         <div className={classes.container}>
            <GridContainer>
               <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
              <h2 >Events Gallery</h2>
                  <Card carousel>
                     <Carousel {...settings}>
                        <div>
                           <img
                              src={image2}
                              alt="First slide"
                              className="slick-image"
                           
                           />
                           <div className="slick-caption"></div>
                        </div>
                        <div>
                           <img
                              src={image1}
                              alt="Second slide"
                              className="slick-image"
                           />
                        </div>
                        <div>
                           <img
                              src={image3}
                              alt="Third slide"
                              className="slick-image"
                           />
                        </div>
                     </Carousel>
                  </Card>
               </GridItem>
            </GridContainer>
         </div>
      </div>
   );
}
