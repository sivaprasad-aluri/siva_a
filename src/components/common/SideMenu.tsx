import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { menuItemsList } from "./Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, animateScroll as scroll } from "react-scroll";

const SideMenu = () => {
  return (
    <Paper
      sx={{ height: "100%", overflowY: "auto", color: "#464030 !important" }}
      elevation={3}
    >
      <Box
        p={2}
        sx={{ boxSizing: "border-box", borderBottom: "1px solid #ccc" }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{
            px: 2,
            flexGrow: 1,
            color: "#464030",
            fontSize: { xs: "1.2rem", sm: "1.2rem", lg: "1.8rem" },
            fontWeight: 200,
            "&::first-letter": {
              color: "#e0aa15",
              fontWeight: 300,
              fontSize: 35,
            },
            letterSpacing: 2,
          }}
        >
          Sivaprasad
        </Typography>
      </Box>
      <Box
        // px={2}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        gap={5}
        height="88%"
      >
        <List sx={{ mt: 5, px: 2, py: 5 }}>
          {menuItemsList("1.4rem").map((menu, index) => (
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
                onClick={() => {}}
                sx={{
                  ":hover": {
                    background: "#464030",
                    color: "#fff",
                    borderRadius: 1,
                  },
                }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ mr: 0 }}>{menu.icon}</ListItemIcon>
                  <ListItemText
                    primary={menu.navItem}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: "1rem",
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
        <Box
          sx={{
            width: "100%",
            p: 1,
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "1px solid #ccc",
          }}
        >
          <IconButton
            aria-label="linkedin"
            size="medium"
            sx={{ ":hover": { color: "#0742d5" }, color: "#e0aa15" }}
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="medium"
            sx={{ ":hover": { color: "#0742d5" }, color: "#e0aa15" }}
          >
            <FacebookIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="medium"
            sx={{ ":hover": { color: "#d52d07ae" }, color: "#e0aa15" }}
          >
            <InstagramIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="medium"
            sx={{ ":hover": { color: "#0742d5" }, color: "#e0aa15" }}
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default SideMenu;
