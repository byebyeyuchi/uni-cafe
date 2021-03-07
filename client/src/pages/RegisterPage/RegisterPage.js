import React, { useState, useContext, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "../../components/Header/Header.js";
import HomeLinks from "../../components/Header/HomeLinks.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

import image from "../../assets/img/pickpen.jpeg";

// context
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

const useStyles = makeStyles(styles);

const RegisterPage = (props) => {
   const authContext = useContext(AuthContext);
   const { register, error, clearErrors, isAuthenticated } = authContext;
   const alertContext = useContext(AlertContext);
   const { setAlert } = alertContext;

   useEffect(() => {
      if (isAuthenticated) {
         props.history.push("/landing-page"); // redirect to home page if authenticated
      }
      if (error === "User already exists") {
         setAlert(error, "error");
         clearErrors();
      }
      //eslint-disable-next-line
   }, [error, isAuthenticated, props.history]);

   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      password2: "",
   });
   const { name, email, password, password2 } = user;

   const validateEmail = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
   };

   const onChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const onSubmit = (e) => {
      e.preventDefault();
      if (name === "" || email === "" || password === "")
         setAlert("Please enter all fileds", "warning");
      else if (!validateEmail(email))
         setAlert(
            "Please enter valid email address",
            "warning"
         );
      else if (password.length < 6)
         setAlert(
            "Password length must not be shorter than 6 digits",
            "warning"
         );
      else if (password !== password2)
         setAlert("Password do not match", "warning");
      else {
         register({
            name,
            email,
            password,
         });
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
            leftLinks={<HomeLinks />}
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
                        <form className={classes.form} onSubmit={onSubmit}>
                           <br></br>
                           <br></br>
                           <div
                              color="info"
                              class="card-header"
                              className={classes.cardHeader}
                           >
                              <h3>Register</h3>
                           </div>
                     
                           <CardBody>
                              <CustomInput
                                 labelText="Name..."
                                 id="first"
                                 formControlProps={{
                                    fullWidth: true,
                                 }}
                                 inputProps={{
                                    type: "text",
                                    name: "name",
                                    onChange: onChange,
                                    endAdornment: (
                                       <InputAdornment position="end">
                                          <People
                                             className={classes.inputIconsColor}
                                          />
                                       </InputAdornment>
                                    ),
                                 }}
                              />
                              <CustomInput
                                 labelText="Email..."
                                 id="email"
                                 formControlProps={{
                                    fullWidth: true,
                                 }}
                                 inputProps={{
                                    type: "email",
                                    name: "email",
                                    onChange: onChange,
                                    endAdornment: (
                                       <InputAdornment position="end">
                                          <Email
                                             className={classes.inputIconsColor}
                                          />
                                       </InputAdornment>
                                    ),
                                 }}
                                 onChange={onChange}
                              />
                              <CustomInput
                                 id="password"
                                 onChange={onChange}
                                 labelText="Password"
                                 formControlProps={{
                                    fullWidth: true,
                                 }}
                                 inputProps={{
                                    type: "password",
                                    name: "password",
                                    onChange: onChange,
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
                              <CustomInput
                                 id="password2"
                                 labelText="Confirm Password"
                                 formControlProps={{
                                    fullWidth: true,
                                 }}
                                 inputProps={{
                                    type: "password",
                                    name: "password2",
                                    onChange: onChange,
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
                                 onChange={onChange}
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

export default RegisterPage;
