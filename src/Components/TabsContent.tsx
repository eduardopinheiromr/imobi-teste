import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

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

export default function TabsContent({ data }) {
  const classes = useStyles();
  return (
    <Grid>
      <h1 className={classes.title}>Todas as visitas aceitas (6)</h1>
      <p style={{ marginBottom: 24 }}>
        Confira todas as visitas que foram aceitas pelos corretores:
      </p>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6].map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Apartamento 60m2"
                  height="140"
                  image="/images/1.png"
                  title="Apartamento 60m2"
                />
                <CardContent style={{ padding: 0 }}>
                  <Typography className={classes.px16}>
                    <h3 style={{ marginBottom: 0 }}>Apartamento 60m2</h3>
                    <p style={{ color: "#6E7A91", marginTop: 0 }}>
                      Rua Avenida patente,
                      <br /> São Bernardo, São Paulo
                    </p>
                  </Typography>
                  <Typography style={{ marginBottom: 0 }}>
                    <div className={classes.when}>
                      <p style={{ color: "#6E7A91" }}>Quando?</p>
                      <div className={classes.date}>16 de set 2020 | 14:30</div>
                    </div>
                  </Typography>
                  <div className={classes.profile}>
                    <Image
                      src="/images/profile.png"
                      width={32}
                      height={32}
                      layout="fixed"
                    />
                    <Typography style={{ marginLeft: 8 }}>
                      <h4 className={classes.brokerName}>
                        Vanessa Vasconcelos
                      </h4>
                      <p className={classes.brokerRole}>Corretora</p>
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  style={{ margin: "0 auto" }}
                >
                  Visualizar anúncio
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
