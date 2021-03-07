import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PostAddIcon from "@material-ui/icons/PostAdd";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "../../../assets/img/me.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>The Team</h2>
      <div>
        <GridContainer>
          <GridItem xs={6} sm={6} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={5} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Yuqi Liu
                <br />
                <small className={classes.smallTitle}>Full Stack Developer</small>
              </h4>
              
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.linkedin.com/in/yuqi-liu-ilovepizza"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.instagram.com/byebyeyuchii/"
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://www.facebook.com/yuqi.liu.5283"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <div>
            <GridContainer>
               <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                     title="Post Whatever"
                     description="Anything but illegal stuff..."
                     icon={PostAddIcon}
                     iconColor="info"
                     vertical
                  />
               </GridItem>
               <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                     title="Users Protection"
                     description="We protect your personal info at the best"
                     icon={VerifiedUser}
                     iconColor="success"
                     vertical
                  />
               </GridItem>
               <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                     title="Feedback"
                     description="Send me suggestion if you have any. I hope you're happy with the forum"
                     icon={InsertEmoticonIcon}
                     iconColor="warning"
                     vertical
                  />
               </GridItem>
            </GridContainer>
         </div>
    </div>
  );
}
