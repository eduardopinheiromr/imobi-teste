import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: "absolute",
    left: 0,
    borderBottom: "1px solid #D3D7E4",
  },
});

export default function Divisory(props) {
  const classes = useStyles(props);
  return <div className={classes.root} />;
}
