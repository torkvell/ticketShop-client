import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
  TextField,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@material-ui/core/";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Alert from "@material-ui/lab/Alert";
import moment from "moment";

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
    fontSize: "1.5em",
  },
  navLinkWhite: {
    color: "white",
    textDecoration: "none !important",
    "&:hover, &:focus": {
      color: "white"
    }
  },
  alertFraudRating: {
    marginBottom: '7%',
  },
  innerComments: {
    marginLeft: '-15px',
    marginRight: '-5px',
    marginBottom: '5%',
  },
  commentText: {
    minWidth: '255px',
  },
  actionWrapper: {
    justifyContent: 'space-between',
  }
}));

export default function TicketCard(props) {
  const classes = useStyles();
  const ticketStartDate =  moment(props.event.startDate).format('MMMM Do YYYY, h:mm');
  const ticketEndDate = moment(props.event.endDate).format('MMMM Do YYYY, h:mm');
  return (
    <div>
    <Alert className={classes.alertFraudRating} severity={props.getSeverityRatingTicket(props.ticketData.fraudRisk)}>
    We calculated a fraud rating of {props.ticketData.fraudRisk} %
  </Alert>
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
          Start: {ticketStartDate}
          <br></br>
          End: {ticketEndDate}
          <br></br>
          <br></br>
          {props.ticketData.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.actionWrapper}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography className={classes.priceTag}>
          € {props.ticketData.price}
        </Typography>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardActions disableSpacing>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => props.addProductToCart(props.ticketData)}
        >
        <Link className={classes.navLinkWhite} to={process.env.PUBLIC_URL + '/cart'}>
        BUY NOW
        </Link>
        </Button>
      </CardActions>
    </Card>
    <Container className={classes.commentArea}>
        <h3>Comments</h3>
        <List className={classes.root, classes.innerComments}>
          {props.ticketData.comments &&
            props.ticketData.comments.map((comment, index) => {
              const createdAt = moment(comment.createdAt).format("MMM Do YYYY");
              return (
                <div key={index}>
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar></Avatar>
                    </ListItemAvatar>
                    <div className={classes.row}>
                      <ListItemText
                        className={classes.commentItemHeading}
                        primary={comment.publisher}
                        secondary={createdAt}
                      />
                      <div className={classes.comment}>{comment.comment}</div>
                    </div>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </div>
              );
            })}
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <div className={classes.commentFormWrapper}>
              <ListItemText
                className={classes.commentItemHeading}
                primary={`${
                  props.user.firstName ? props.user.firstName : "Your name"
                } ${props.user.lastName ? props.user.lastName : "here"}`}
                secondary={moment(Date.now()).format("MMM Do YYYY")}
              />
              <TextField
                className={classes.commentText}
                id="outlined-basic"
                label="Comment"
                variant="outlined"
                fullWidth
                name="comment"
                value={props.comment}
                onChange={props.handleChange}
              />
            </div>
          </ListItem>
          <Typography>{props.user.error && props.user.error}</Typography>
          <Button
            type="submit"
            onClick={props.handleSubmit}
            color="primary"
            variant="contained"
            fullWidth
          >
            {props.user.token ? "Comment" : "You must be logged in to comment"}
          </Button>
        </List>
      </Container>
    </div>
  );
}
