import React, { useState, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import * as emailjs from "emailjs-com";

import AlertContext from "../../../context/alert/alertContext";
import Alert from "../../Components/Alert";

const useStyles = makeStyles(styles);

export default function WorkSection() {
   const alertContext = useContext(AlertContext);
   const { setAlert } = alertContext;
   const classes = useStyles();
   const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
   });

   const { name, email, message } = form;

   const onChange = (e) =>
      setForm({ ...form, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
      e.preventDefault();
      if (email === "" || name === "" || message === "") {
         setAlert("Please fill in all the fields", "warning");
         return;
      }
      emailjs.sendForm(
        "gmail",
        "template_fNBYV3pr",
        ".contact_form_class",
        "user_KKRp0KXxzErKuupPSWJiP"
      )
      setAlert("Your message has been send successfully!", "success");
   };
   return (
      <div className={classes.section}>
         <Alert />
         <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8}>
               <h2 className={classes.title}>Contact Me</h2>
               <h4 className={classes.description}>
                  Any questions or ideas about this website?
               </h4>
               <form onSubmit={onSubmit} className="contact_form_class">
                  <GridContainer>
                     <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                           labelText="Your Name"
                           id="name"
                           formControlProps={{
                              name: "name",
                              onChange: onChange,
                              fullWidth: true,
                           }}
                           inputProps={{
                              name: "name",
                              onChange: onChange,
                           }}
                        />
                     </GridItem>
                     <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                           labelText="Your Email"
                           id="email"
                           formControlProps={{
                              fullWidth: true,
                           }}
                           inputProps={{
                              name: "email",
                              onChange: onChange,
                           }}
                        />
                     </GridItem>
                     <CustomInput
                        labelText="Your Message"
                        id="message"
                        formControlProps={{
                           fullWidth: true,
                           className: classes.textArea,
                        }}
                        inputProps={{
                           name: "message",
                           onChange: onChange,
                           multiline: true,
                           rows: 5,
                        }}
                     />
                     <GridItem xs={12} sm={12} md={4}>
                        <Button color="primary" type="submit">
                           Send Message
                        </Button>
                     </GridItem>
                  </GridContainer>
               </form>
            </GridItem>
         </GridContainer>
      </div>
   );
}
