import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import StarIcon from "@material-ui/icons/Star";
import EventIcon from "@material-ui/icons/Event";

const useStyles = makeStyles(theme => ({
  navWrapper: {
    marginBottom: theme.spacing(3)
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  navLink: {
    color: "black !important",
    textDecoration: "none !important"
  }
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      className={classes.navWrapper}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {props.user.userLoggedIn ? (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <PermIdentityOutlinedIcon></PermIdentityOutlinedIcon>
            <Link className={classes.navLink} to="/profile">
              &nbsp;&nbsp;Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListAltIcon></ListAltIcon>
            <Link className={classes.navLink} to="/mytickets">
              &nbsp;&nbsp;My tickets
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <EventIcon></EventIcon>
            <Link className={classes.navLink} to="/myevents">
              &nbsp;&nbsp;My Events
            </Link>
          </MenuItem>
          <MenuItem onClick={props.logOut}>
            <ExitToAppOutlinedIcon />
            &nbsp;&nbsp;Log Out
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <VpnKeyIcon />
            <Link className={classes.navLink} to="/login">
              &nbsp;&nbsp;Log in
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <PersonAddIcon />
            <Link className={classes.navLink} to="/signup">
              &nbsp;&nbsp;Sign up
            </Link>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      className={classes.navWrapper}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
      {props.user.userLoggedIn ? (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <PermIdentityOutlinedIcon></PermIdentityOutlinedIcon>
            <Link className={classes.navLink} to="/profile">
              &nbsp;&nbsp;Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListAltIcon></ListAltIcon>
            <Link className={classes.navLink} to="/mytickets">
              &nbsp;&nbsp;My tickets
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <EventIcon></EventIcon>
            <Link className={classes.navLink} to="/myevents">
              &nbsp;&nbsp;My Events
            </Link>
          </MenuItem>
          <MenuItem onClick={props.logOut}>
            <ExitToAppOutlinedIcon />
            &nbsp;&nbsp;Log Out
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <VpnKeyIcon />
            <Link className={classes.navLink} to="/login">
              &nbsp;&nbsp;Log in
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <PersonAddIcon />
            <Link className={classes.navLink} to="/signup">
              &nbsp;&nbsp;Sign up
            </Link>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <div className={(classes.grow, classes.navWrapper)}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Ticketshop
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
