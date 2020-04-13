import React from "react";
import { Link } from "react-router-dom";
import {
  fade,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import EventIcon from "@material-ui/icons/Event";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1400,
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
  navLinkBlack: {
    color: "black",
    textDecoration: "none",
    "&:hover, &:focus": {
      color: "black",
      textDecoration: "none"
    }
  },
  navLinkWhite: {
    color: "white",
    textDecoration: "none !important",
    "&:hover, &:focus": {
      color: "white"
    }
  },
  desktopUserActions: {
    display: "flex"
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
      {props.user.token ? (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <PermIdentityOutlinedIcon></PermIdentityOutlinedIcon>
            <Link className={classes.navLinkBlack} to={`${process.env.PUBLIC_URL}/profile`}>
              &nbsp;&nbsp;Profile
            </Link>
          </MenuItem>
          <MenuItem
            onClick={() => {
              props.logOut();
              handleMenuClose();
            }}
          >
            <ExitToAppOutlinedIcon />
            &nbsp;&nbsp;Log Out
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <VpnKeyIcon />
            <Link className={classes.navLinkBlack} to={`${process.env.PUBLIC_URL}/login`}>
              &nbsp;&nbsp;Log in
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <PersonAddIcon />
            <Link className={classes.navLinkBlack} to={`${process.env.PUBLIC_URL}/cart`}>
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
      {props.user.token ? (
        <div>
          <MenuItem onClick={handleMenuClose}>
            <PermIdentityOutlinedIcon></PermIdentityOutlinedIcon>
            <Link className={classes.navLinkBlack} to={`${process.env.PUBLIC_URL}/profile`}>
              &nbsp;&nbsp;Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ListAltIcon></ListAltIcon>
            <Link className={classes.navLinkBlack} to={`${process.env.PUBLIC_URL}/mytickets`}>
              &nbsp;&nbsp;My tickets
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <EventIcon></EventIcon>
            <Link className={classes.navLinkBlack} to={`${process.env.PUBLIC_URL}/myevents`}>
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
            <Link className={classes.navLinkBlack} to={`${process.env.PUBLIC_URL}/login`}>
              &nbsp;&nbsp;Log in
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <PersonAddIcon />
            <Link className={classes.navLinkBlack} to={`${process.env.PUBLIC_URL}/signup`}>
              &nbsp;&nbsp;Sign up
            </Link>
          </MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/ticket-shop/" className={classes.navLinkWhite}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography className={classes.title} variant="h6" noWrap>
            TicketShop
          </Typography>
          {/* <----SEARCH ICON----> <div className={classes.search}>
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
          </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {props.user.token ? (
              <div className={classes.desktopUserActions}>
                <MenuItem onClick={handleMenuClose}>
                  <ListAltIcon></ListAltIcon>
                  <Link className={classes.navLinkWhite} to={`${process.env.PUBLIC_URL}/mytickets`}>
                    &nbsp;&nbsp;My Tickets
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <EventIcon></EventIcon>
                  <Link className={classes.navLinkWhite} to={`${process.env.PUBLIC_URL}/myevents`}>
                    &nbsp;&nbsp;My Events
                  </Link>
                </MenuItem>
              </div>
            ) : (
              <div className={classes.desktopUserActions}>
                <MenuItem onClick={handleMenuClose}>
                  <VpnKeyIcon />
                  <Link className={classes.navLinkWhite} to={`${process.env.PUBLIC_URL}/login`}>
                    &nbsp;&nbsp;Log in
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <PersonAddIcon />
                  <Link className={classes.navLinkWhite} to={`${process.env.PUBLIC_URL}/signup`}>
                    &nbsp;&nbsp;Sign up
                  </Link>
                </MenuItem>
              </div>
            )}
            <Link className={classes.navLinkWhite} to={`${process.env.PUBLIC_URL}/cart`}>
              <IconButton aria-label="shopping cart icon" color="inherit">
                <Badge badgeContent={props.cart.length} color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Link>
            {props.user.token ? (
              <IconButton
                edge="end"
                aria-label="account menu of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <div></div>
            )}
          </div>
          <div className={classes.sectionMobile}>
            {props.user.token ? (
              <div className={classes.desktopUserActions}>
                <Link className={classes.navLinkWhite} to={`${process.env.PUBLIC_URL}/cart`}>
                  <IconButton aria-label="shopping cart icon" color="inherit">
                    <Badge badgeContent={props.cart.length} color="secondary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                </Link>
                <IconButton
                  aria-label="account menu of current user"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            ) : (
              <div className={classes.desktopUserActions}>
                <MenuItem onClick={handleMenuClose}>
                  <VpnKeyIcon />
                  <Link className={classes.navLinkWhite} to={`${process.env.PUBLIC_URL}/login`}>
                    &nbsp;&nbsp;Log in
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <PersonAddIcon />
                  <Link className={classes.navLinkWhite} to={`${process.env.PUBLIC_URL}/signup`}>
                    &nbsp;&nbsp;Sign up
                  </Link>
                </MenuItem>
                <Link className={classes.navLinkWhite} to={`${process.env.PUBLIC_URL}/cart`}>
                  <IconButton aria-label="shopping cart icon" color="inherit">
                    <Badge badgeContent={props.cart.length} color="secondary">
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                </Link>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
