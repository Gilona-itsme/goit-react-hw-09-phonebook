import React from "react";
import PropTypes from "prop-types";
import s from "./Section.module.scss";

const Section = ({ title, children }) => (
  <section className={s.Section}>
    <h2 className={s.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
