import React, { useState, useEffect, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";

// core components
import Header from "../../components/Header/Header.js";
import HomeLinks from "../../components/Header/HomeLinks.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import image from "../../assets/img/headphone.jpg";

// context
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const useStyles = makeStyles(styles);

const LoginPage = (props) => {
   const authContext = useContext(AuthContext);
   const alertContext = useContext(AlertContext);
   const { login, error, clearErrors, isAuthenticated } = authContext;
   const { setAlert } = alertContext;

   const [user, setUser] = useState({
      email: "",
      password: "",
   });
   const { email, password } = user;

   useEffect(() => {
      if (isAuthenticated) {
         props.history.push("/landing-page"); // redirect to home page if authenticated
      }
      if (error !== null) {
         setAlert(error, "error");
         clearErrors();
      }
      // eslint-disable-next-line
   }, [error, isAuthenticated, props.history]);

   const onChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const onSubmit = (e) => {
      e.preventDefault();
      try {
         if (email === "" || password === "") {
            setAlert("Please fill in all the fields!", "warning")
         } else {
            login({
               email,
               password,
            });
         }
      } catch (err) {
         console.log(err);
      }
   };

   const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
   setTimeout(function () {
      setCardAnimation("");
   }, 700);
   const classes = useStyles();
   const { ...rest } = props;
   return (
      <div>
         <Header
            absolute
            color="transparent"
            brand="UniCafe"
            leftLinks={<HomeLinks/>}
            rightLinks={<HeaderLinks />}
            {...rest}
         />
         {/* background */}
         <div
            className={classes.pageHeader}
            style={{
               backgroundImage: "url(" + image + ")",
               backgroundSize: "cover",
               backgroundPosition: "top center",
            }}
         >
            <div className={classes.container}>
               <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={4}>
                     <Card className={classes[cardAnimaton]}>
                        <form className={classes.form}>
                           <br></br>
                           <br></br>
                           <div
                              color="info"
                              className={classes.cardHeader}
                           >
                              <h3>Login</h3>
                              
                           </div>
                          
                           <CardBody>
                          
                              <CustomInput
                                 labelText="Email..."
                                 id="email"
                                 formControlProps={{
                                    fullWidth: true,
                                 }}
                                 inputProps={{
                                    type: "email",
                                    name:"email",
                                    onChange:onChange,
                                    endAdornment: (
                                       <InputAdornment position="end">
                                          <Email
                                             className={classes.inputIconsColor}
                                          />
                                       </InputAdornment>
                                    ),
                                 }}
                              />
                              <CustomInput
                                 labelText="Password"
                                 id="pass"
                                 formControlProps={{
                                    fullWidth: true,
                                 }}
                                 inputProps={{
                                    type: "password",
                                    name:"password",
                                    onChange:onChange,
                                    endAdornment: (
                                       <InputAdornment position="end">
                                          <Icon
                                             className={classes.inputIconsColor}
                                          >
                                             lock_outline
                                          </Icon>
                                       </InputAdornment>
                                    ),
                                    autoComplete: "off",
                                 }}
                              />
                           </CardBody>
                           <CardFooter className={classes.cardFooter}>
                              <Button
                                 simple
                                 color="primary"
                                 size="lg"
                                 onClick={onSubmit}
                              >
                                 Get started
                              </Button>
                           </CardFooter>
                        </form>
                     </Card>
                  </GridItem>
               </GridContainer>
            </div>
            <Footer whiteFont />
         </div>
      </div>
   );
};

export default LoginPage;
