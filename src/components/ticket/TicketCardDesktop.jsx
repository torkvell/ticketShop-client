import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./ticketCardDesktop.css";
import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
  TextField,
  List,
  Container,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@material-ui/core/";
import Alert from "@material-ui/lab/Alert";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  priceTag: {
    fontWeight: "bold",
    marginLeft: "145px",
    fontSize: "2em",
  },
  fraudRiskRed: {
    color: "red",
    fontWeight: "bold",
  },
  fraudRiskGreen: {
    color: "green",
    fontWeight: "bold",
  },
  navLinkWhite: {
    color: "white",
    textDecoration: "none !important",
    "&:hover, &:focus": {
      color: "white",
    },
  },
  fraudTicket: {
    boxShadow: "2px 2px 15px 0px #FF0000",
  },
  commentArea: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    marginTop: "-200px",
    marginBottom: "20px",
  },
  commentItemHeading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentFormWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginRight: "-15px",
  },
  row: {
    display: "flex",
    flexDirection: "column",
  },
  comment: {
    minWidth: "380px",
  },
  cardActions: {
    marginTop: "30px",
  },
  cardActionDescription: {
    maxHeight: "80px",
  },
}));

export default function TicketCard(props) {
  const classes = useStyles();
  const ticketStartDate =  moment(props.event.startDate).format('MMMM Do YYYY, h:mm');
  const ticketEndDate = moment(props.event.endDate).format('MMMM Do YYYY, h:mm');

  return (
    <div>
      <Alert severity={props.getSeverityRatingTicket(props.ticketData.fraudRisk)}>
        We calculated a fraud rating of {props.ticketData.fraudRisk} %
      </Alert>
      <div className="ticket">
        <div className="ticketContentWrapper">
          <div className="ticketContent">
            <CardMedia
              className="ticketPicture"
              image={props.ticketData.imageUrl}
            />
            <div className="ticketInfo">
              <CardContent>
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
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.cardActionDescription}
                >
                  Start: {ticketStartDate}
                  <br></br>
                  End: {ticketEndDate}
                  <br></br>
                  <br></br>
                  {props.ticketData.description}
                  <br></br>
                  <br></br>
                </Typography>
                <CardActions disableSpacing className={classes.cardActions}>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={() => props.addProductToCart(props.ticketData)}
                  >
                    <Link
                      className={classes.navLinkWhite}
                      to={process.env.PUBLIC_URL + "/cart"}
                    >
                      BUY NOW
                    </Link>
                  </Button>
                </CardActions>
                <CardActions disableSpacing className={classes.cardActions}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Typography className={classes.priceTag}>
                    € {props.ticketData.price}
                  </Typography>
                </CardActions>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
      <Container className={classes.commentArea}>
        <h3>Comments</h3>
        <List className={classes.root}>
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
