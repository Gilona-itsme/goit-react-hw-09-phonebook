import React from "react";
import PropTypes from "prop-types";
//import {CSSTransition} from 'react-transition-group'
import s from "./Section.module.css";

const Section = ({ title, children }) => (
  // <CSSTransition in={true} appear={true} timeout={250} classames={s} unmountOnExit>
  //   {stage => {
  //     return (
 <section className={s.Section}>
        
      <h2 className={s.title}>{title}</h2>
          {/* <CSSTransition in={stage === "entered"} timeout={250} classames={s} unmountOnExit> */}
            {children}
      {/* </CSSTransition> */}
          
   
    </section>
// )
//     }}
   
  
// </CSSTransition>
    
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
