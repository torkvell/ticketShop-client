import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  media: {
    height: 200
  },
  cardAction: {
    justifyContent: "center"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return props.events.map(event => {
    return (
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={event.imageUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {event.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {event.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardAction}>
            <Link to={"/ticket?eventId=" + event.id}>
              <Button size="small" color="primary">
                See all tickets
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
  });
}
