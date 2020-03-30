import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Button,
  TextField
} from "@material-ui/core/";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  priceTag: {
    fontWeight: "bold",
    marginLeft: "50px"
  },
  fraudRiskRed: {
    color: "red",
    fontWeight: "bold"
  },
  fraudRiskGreen: {
    color: "green",
    fontWeight: "bold"
  }
}));

export default function TicketCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ticketStartDate = props.event.startDate.slice(0, 10);
  const ticketStartTime = props.event.startDate.substr(11, 5);
  const ticketEndDate = props.event.endDate.slice(0, 10);
  const ticketEndTime = props.event.endDate.substr(11, 5);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            image={props.ticketData.imageUrl}
          ></Avatar>
        }
        title={props.ticketData.title}
        subheader={`Ticket owner: ${props.ticketData.ownerName}`}
      />
      <CardMedia className={classes.media} image={props.ticketData.imageUrl} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Start: {ticketStartDate} {ticketStartTime} | End: {ticketEndDate}{" "}
          {ticketEndTime}
          <br></br>
          {props.ticketData.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Typography
          className={
            props.ticketData.fraudRisk > 50
              ? classes.fraudRiskRed
              : classes.fraudRiskGreen
          }
        >
          FR {props.ticketData.fraudRisk}%
        </Typography>
        <Typography className={classes.priceTag}>
          € {props.ticketData.price}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <CardActions disableSpacing>
        <Button
          href="/cart"
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => props.addProductToCart(props.ticketData)}
        >
          BUY NOW
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.ticketData.comments.map((comment, index) => {
            return <Typography key={index}>{comment.comment}</Typography>;
          })}
          <form onSubmit={props.handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Comment"
              variant="outlined"
              fullWidth
              name="comment"
              value={props.comment}
              onChange={props.handleChange}
            />
            <Button type="submit" color="primary" variant="contained" fullWidth>
              Comment
            </Button>
          </form>
        </CardContent>
      </Collapse>
    </Card>
  );
}
