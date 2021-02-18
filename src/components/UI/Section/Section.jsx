import React from "react";
import PropTypes from "prop-types";
import {CSSTransition} from 'react-transition-group'
import s from "./Section.module.css";

const Section = ({ title, children }) => (
  <CSSTransition  in={true}  timeout={1000} classames={s} unmountOnExit>
    <section className={s.Section}>
        
          <h2 className={s.title}>{title}</h2>
          {children}
   
    </section>
  
</CSSTransition>
    
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
