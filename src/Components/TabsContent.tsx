import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Carousel from "./Carousel";
import UserActions from "./UserActions";

const useStyles = makeStyles({
  root: {
    maxWidth: 285,
    margin: "0 auto",
  },
  title: {
    padding: "26px 0 0",
    marginBottom: 0,
  },
  when: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px",
    borderTop: "1px solid #D3D7E4",
    borderBottom: "1px solid #D3D7E4",
  },
  date: {
    maxHeight: 64,
    padding: "16px 0",
    display: "flex",
    color: "#000",
  },
  profile: {
    maxHeight: 64,
    padding: "16px",
    display: "flex",
    borderBottom: "1px solid #D3D7E4",
  },
  brokerName: {
    fontSize: "14px",
    margin: 0,
  },
  brokerRole: {
    fontSize: "12px",
    color: "#6E7A91",
    margin: 0,
  },
  px16: {
    padding: "0 16px",
  },
});

export default function TabsContent({ data, tabName }) {
  const classes = useStyles();
  const [tab, setTab] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  function handleTitleAndSubtitle(tabName) {
    switch (tabName) {
      case "accepted": {
        setTitle("Todas as visitas aceitas ");
        setSubtitle(
          "Confira todas as visitas que foram aceitas por você e pelos corretores:"
        );
        return;
      }
      case "confirmation": {
        setTitle("Aguardando confirmação ");
        setSubtitle(
          "Confirme com o proprietário se a visita poderá acontecer no dia e horário indicado."
        );
        return;
      }
      case "getKeys": {
        setTitle("Buscando a chave ");
        setSubtitle(
          "A visita foi confirmada e o(a) corretor(a) está indo até a imobiliária buscar a chave do imóvel para realizar a visita."
        );
        return;
      }
      case "inProgress": {
        setTitle("Visitas em andamento ");
        setSubtitle("Confira todas visitas que estão em andamento no momento:");
        return;
      }
    }
  }

  useEffect(() => {
    setTab(data[tabName]);
    handleTitleAndSubtitle(tabName);
  }, [tabName]);

  return (
    <Grid>
      <h1 className={classes.title}>
        {title} ({tab !== undefined ? tab.length : ""})
      </h1>
      <p style={{ marginBottom: 24 }}>{subtitle}</p>
      <Grid container spacing={3}>
        {tab !== undefined
          ? tab.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <Carousel>
                      {card.images.map(image => (
                        <div>
                          <Image height={121} width={285} src={image} />
                        </div>
                      ))}
                    </Carousel>
                    <CardContent style={{ padding: 0 }}>
                      <Typography className={classes.px16}>
                        <h3 style={{ marginBottom: 0 }}>Apartamento 60m2</h3>
                        <p style={{ color: "#6E7A91", marginTop: 0 }}>
                          {card.street},
                          <br /> {card.district}, {card.state}
                        </p>
                      </Typography>
                      <Typography style={{ marginBottom: 0 }}>
                        <div className={classes.when}>
                          <p style={{ color: "#6E7A91" }}>Quando?</p>
                          <div className={classes.date}>
                            {card.date} | {card.time}
                          </div>
                        </div>
                      </Typography>
                      <div className={classes.profile}>
                        <Image
                          src={card.broker.profilePicture}
                          width={32}
                          height={32}
                          layout="fixed"
                        />
                        <Typography style={{ marginLeft: 8 }}>
                          <h4 className={classes.brokerName}>
                            {card.broker.name}
                          </h4>
                          <p className={classes.brokerRole}>
                            {card.broker.role}
                          </p>
                        </Typography>
                      </div>
                    </CardContent>
                  </CardActionArea>
                  {tabName === "accepted" || tabName === "confirmation" ? (
                    <CardActions>
                      <UserActions tab={tabName} />
                    </CardActions>
                  ) : (
                    ""
                  )}
                </Card>
              </Grid>
            ))
          : ""}
      </Grid>
    </Grid>
  );
}
