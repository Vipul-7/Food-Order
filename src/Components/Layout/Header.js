import react, { Fragment } from "react";
import foodsPhoto from "../../Assets/Food.jpg";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={foodsPhoto} alt="Foods table" />
      </div>
    </Fragment>
  );
};

export default Header;
