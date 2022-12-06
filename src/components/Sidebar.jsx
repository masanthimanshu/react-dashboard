import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  Drawer,
  AppBar,
  Toolbar,
  ListItem,
  Container,
  Typography,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import { Home, Person, Plagiarism } from "@mui/icons-material";

export const Sidebar = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ width: "calc(100% - 250px)" }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Company Name</Typography>
          <Link
            to={"/"}
            onClick={() => sessionStorage.setItem("isLoggedIn", false)}
          >
            <b>LOGOUT</b>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 250,
          "& .MuiDrawer-paper": {
            width: 250,
          },
        }}
      >
        <img
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
          src="/images/logo.png"
          alt="Logo"
        />
        <br />
        <List>
          <FullListItem
            icon={<Home color="primary" />}
            text="Home"
            link="/home"
          />
          <FullListItem
            icon={<Person color="primary" />}
            text="Users"
            link="/users"
          />
          <FullListItem
            icon={<Plagiarism color="primary" />}
            text="Content"
            link="/content"
          />
        </List>
      </Drawer>
      <Container maxWidth="xl" sx={{ mt: 10, mb: 10 }}>
        {children}
      </Container>
    </Box>
  );
};

export const FullListItem = ({ text, icon, link }) => {
  const navigate = useNavigate();

  return (
    <ListItem>
      <ListItemButton onClick={() => navigate(`${link}`)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>
          <b>{text}</b>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
