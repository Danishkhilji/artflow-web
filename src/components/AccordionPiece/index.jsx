import { AccordionTab } from "primereact/accordion";
import PropTypes from "prop-types";
import classes from "./AccordionPiece.module.css";

const AccordionPiece = ({ title, children }) => {
  return (
    <AccordionTab header={title} className={classes.accordionItem}>
      <div>{children}</div>
    </AccordionTab>
  );
};

AccordionPiece.propTypes = {
  title: PropTypes.string.isRequired, // title is now required
  children: PropTypes.node.isRequired, // Ensure children is required if necessary
};

export default AccordionPiece;
