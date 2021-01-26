import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Divisory from "./Divisory";
import TabsContent from "./TabsContent";

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
      margin: "0 auto",
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
    activeTab: {
      background: "#0633C0",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      padding: "4px 18px",
      height: "28px",
      borderRadius: "100px",
      margin: "0px 4px",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.075)",
    },
    span: {
      whiteSpace: "nowrap",
    },
  })
);

const Tabs = ({ data }) => {
  const { accepted, confirmation, getKeys, inProgress } = data;
  const classes = useStyles();

  const [tab, setTab] = useState("accepted");

  function handleTab(id) {
    setTab(id);
  }
  return (
    <>
      <Container maxWidth="md" className={classes.p5}>
        <Grid container spacing={3} className={classes.tabs}>
          <Grid item xs={12} sm={6} lg={3}>
            <div
              className={tab === "accepted" ? classes.activeTab : classes.tab}
              onClick={() => handleTab("accepted")}
            >
              <span className={classes.span}>Aceitas ({accepted.length})</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div
              className={
                tab === "confirmation" ? classes.activeTab : classes.tab
              }
              onClick={() => handleTab("confirmation")}
            >
              <span className={classes.span}>
                Confirmação ({confirmation.length})
              </span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div
              className={tab === "getKeys" ? classes.activeTab : classes.tab}
              onClick={() => handleTab("getKeys")}
            >
              <span className={classes.span}>
                Buscar a chave ({getKeys.length})
              </span>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <div
              className={tab === "inProgress" ? classes.activeTab : classes.tab}
              onClick={() => handleTab("inProgress")}
            >
              <span className={classes.span}>
                Em andamento ({inProgress.length})
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Divisory />
      <TabsContent data={data} tabName={tab} />
    </>
  );
};

export default Tabs;
