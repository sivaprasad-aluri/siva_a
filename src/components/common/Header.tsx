import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import Person4Icon from "@mui/icons-material/Person4";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArticleIcon from "@mui/icons-material/Article";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-scroll";

export const menuItemsList = (iconSize: string) => [
  {
    navItem: "Home",
    // 1.8em
    icon: <HomeIcon sx={{ fontSize: iconSize, color: "#e0aa15" }} />,
  },
  {
    navItem: "About",
    icon: <Person4Icon sx={{ fontSize: iconSize, color: "#e0aa15" }} />,
  },
  {
    navItem: "Resume",
    icon: <ArticleIcon sx={{ fontSize: iconSize, color: "#e0aa15" }} />,
  },
  {
    navItem: "Portfolio",
    icon: <BusinessCenterIcon sx={{ fontSize: iconSize, color: "#e0aa15" }} />,
  },
  {
    navItem: "Contact",
    icon: <CallIcon sx={{ fontSize: iconSize, color: "#e0aa15" }} />,
  },
];

const Header = ({
  toggleDrawer,
  menuToggler,
}: {
  menuToggler: boolean;
  toggleDrawer: (item: boolean) => void;
}) => {
  //   ["Home", "About", "Resume", "Portfolio", "Contact"];
  return (
    <Box sx={{ flexGrow: 1, width: "100%", pt: 5 }}>
      <AppBar
        position="fixed"
        sx={{ px: 2, py: 1, background: "#fff", color: "#000" }}
        // color="default"
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "1.8em",
              fontWeight: 300,
              "&::first-letter": {
                color: "#e0aa15",
                fontWeight: 300,
                fontSize: 45,
              },
            }}
          >
            Sivaprasad
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ borderRadius: 0 }}
            onClick={() => toggleDrawer(!menuToggler)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        open={menuToggler}
        onClose={() => toggleDrawer(false)}
        anchor="top"
      >
        <IconButton
          aria-label="delete"
          sx={{ position: "fixed", right: 25, top: 20 }}
          onClick={() => toggleDrawer(false)}
        >
          <CloseIcon sx={{ fontSize: "1.8rem" }} />
        </IconButton>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          role="presentation"
        >
          <List>
            {menuItemsList("1.8em")?.map((menu, index) => (
              <Link
                activeClass="active"
                className={menu.navItem}
                to={menu.navItem}
                spy={true}
                smooth={true}
                duration={500}
                containerId="scroll-container"
                style={{ color: "#464030" }}
              >
                <ListItem
                  key={index}
                  disablePadding
                  onClick={() => toggleDrawer(false)}
                >
                  <ListItemButton>
                    <ListItemIcon sx={{ mr: 0 }}>{menu.icon}</ListItemIcon>
                    <ListItemText
                      primary={menu.navItem}
                      sx={{
                        "& .MuiListItemText-primary": {
                          fontSize: "22px",
                          fontWeight: "300",
                          ml: 0,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
