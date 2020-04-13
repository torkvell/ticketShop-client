import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import './ticketCardDesktop.css'
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
  },
  navLinkWhite: {
    color: "white",
    textDecoration: "none !important",
    "&:hover, &:focus": {
      color: "white"
    }
  },
  fraudTicket: {
    boxShadow: '2px 2px 15px 0px #FF0000'
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
    <div className="ticket">
        <div className="ticketContentWrapper">
            <div className="ticketContent">
                <CardMedia className="ticketPicture" image={props.ticketData.imageUrl} />
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
                        <Typography variant="body2" color="textSecondary" component="p">
                        Start: {ticketStartDate} {ticketStartTime} | End: {ticketEndDate}{" "}
                        {ticketEndTime}
                        <br></br>
                        <br></br>
                        {props.ticketData.description}
                        <br></br>
                        <br></br>
                        </Typography>
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
                                Fraud Rating: {props.ticketData.fraudRisk}%
                            </Typography>
                            <Typography className={classes.priceTag}>
                                € {props.ticketData.price}
                            </Typography>
                        </CardActions>
                    </CardContent>
                </div>
            </div>
        </div>
    </div>
  );
}
