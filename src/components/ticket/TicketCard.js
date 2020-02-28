import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 800
  },
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
  }
}));

export default function RecipeReviewCard(props) {
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
    <Card className={classes.root}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
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
        <Typography>Fraud risk: {props.ticketData.fraudRisk}</Typography>
        <Typography>Price: {props.ticketData.price}</Typography>
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
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => props.addToCart(props.ticketData.id)}
        >
          BUY NOW
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.ticketData.comments.map(comment => {
            return <Typography paragraph>{comment.comment}</Typography>;
          })}
          <Typography paragraph>
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
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                Comment
              </Button>
            </form>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
