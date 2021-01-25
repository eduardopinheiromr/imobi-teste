import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    p5: {
      padding: "1.5rem",
    },
    tabs: {
      background: "#F7F7FC",
      borderRadius: "39px",
      width: "max-content",
    },
    tab: {
      display: "flex",
      alignItems: "center",
      padding: "4px 18px",
      height: "28px",
      background: "#fff",
      color: "#000",
      borderRadius: "100px",
      margin: "0px 4px",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.075)",
    },
    active: {
      background: "#0633C0",
      color: "#fff",
    },
    span: {
      whiteSpace: "nowrap",
    },
  })
);

const Tabs = ({ data }) => {
  const { accepted, confirmation, getKeys, inProgress } = data;
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.p5}>
      <Grid container spacing={3} className={classes.tabs}>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.tab}>
            <span className={classes.span}>Aceitas ({accepted.length})</span>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.tab}>
            <span className={classes.span}>
              Confirmação ({confirmation.length})
            </span>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.tab}>
            <span className={classes.span}>
              Buscar a chave ({getKeys.length})
            </span>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={classes.tab}>
            <span className={classes.span}>
              Em andamento ({inProgress.length})
            </span>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tabs;
