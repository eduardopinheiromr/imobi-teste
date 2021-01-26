import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ul: {
    padding: "0 0 20px 0",
    "& li button:before": {
      color: "#fff!important",
    },
  },
});

const Carousel = ({ children }) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul className={classes.ul}>{dots}</ul>
      </div>
    ),
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
