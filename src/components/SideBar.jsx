import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListItemIcon,
  ListItem,
  List,
  ListSubheader,
  ListItemText,
  Collapse,
  Box
} from "@material-ui/core";
import {
  ExpandLess,
  ExpandMore,
  Person,
  FiberManualRecordOutlined,
  ConfirmationNumberOutlined,
  AccessibilityNewOutlined,
  BusinessOutlined,
  PollOutlined,
  LocalShipping,
  LocationOnOutlined,
  SettingsEthernetOutlined,
  TodayOutlined,
  ViewComfy
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  borderBottomBar: {
    borderBottom: "1px solid #EBEFF2",
    "&:focus": {
      color: "blue"
    }
  },
  buttons: {
    "&:focus": {
      color: "blue"
    }
  },
  icons: {
    "&:focus": {
      color: "blue"
    }
  },
  linkRouter: {
    textDecorationLine: "none",
    color: "black"
  }
}));

const SideBar = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const {
    root,
    nested,
    roundIcons,
    borderBottomBar,
    buttons,
    icons,
    linkRouter
  } = classes;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          ></ListSubheader>
        }
        className={root}
      >
        <ListItem button className={buttons}>
          <ListItemIcon>
            <ViewComfy className={icons} />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItem>

        <ListItem button onClick={handleClick} className={buttons}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link className={linkRouter} to="/all-patients">
              <ListItem button className={(nested, buttons)}>
                <ListItemIcon>
                  <FiberManualRecordOutlined className={roundIcons} />
                </ListItemIcon>
                <ListItemText primary="All Patients" />
              </ListItem>
            </Link>
          </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link className={linkRouter} to="/">
              <ListItem button className={buttons}>
                <ListItemIcon>
                  <FiberManualRecordOutlined className={roundIcons} />
                </ListItemIcon>
                <ListItemText primary="Add new Patient" />
              </ListItem>
            </Link>
          </List>
        </Collapse>

        <ListItem button className={buttons}>
          <ListItemIcon>
            <ConfirmationNumberOutlined />
          </ListItemIcon>
          <ListItemText primary="Tickets" />
        </ListItem>

        <ListItem button className={buttons}>
          <ListItemIcon>
            <TodayOutlined />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItem>

        <ListItem button className={buttons}>
          <ListItemIcon>
            <AccessibilityNewOutlined />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>

        <ListItem button className={buttons}>
          <ListItemIcon>
            <BusinessOutlined />
          </ListItemIcon>
          <ListItemText primary="Vendors" />
        </ListItem>

        <ListItem button className={borderBottomBar}>
          <ListItemIcon>
            <PollOutlined />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>

        <ListItem button className={buttons}>
          <ListItemIcon>
            <LocalShipping />
          </ListItemIcon>
          <ListItemText primary="Drivers & Vans" />
        </ListItem>

        <ListItem button className={buttons}>
          <ListItemIcon>
            <LocationOnOutlined />
          </ListItemIcon>
          <ListItemText primary="Location" />
        </ListItem>

        <ListItem button className={buttons}>
          <ListItemIcon>
            <SettingsEthernetOutlined />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
