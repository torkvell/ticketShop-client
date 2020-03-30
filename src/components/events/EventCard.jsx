import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";

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

  return props.events.map((event, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} md={4} xl={3}>
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
            <Link to={"/eventTickets?eventId=" + event.id}>
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
