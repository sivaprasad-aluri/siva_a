import { Container, Grid2 } from "@mui/material";
import Header from "./components/common/Header";
import Home from "./components/Home/Home";
import { useState } from "react";
import SideMenu from "./components/common/SideMenu";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";

function App() {
  const [drawMenu, setDrawMenu] = useState(false);
  const toggleDrawer = (toggle: boolean) => {
    setDrawMenu(toggle);
  };
  return (
    <Container
      maxWidth={"xl"}
      sx={{ xs: { pt: 3 }, sm: { pt: 3 }, md: { p: 0 } }}
      disableGutters
    >
      <Grid2 container width="100%">
        <Grid2
          size="auto"
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          <Header menuToggler={drawMenu} toggleDrawer={toggleDrawer} />
        </Grid2>
        <Grid2
          sx={{
            width: "100%",
            display: "flex",
            height: "100vh",
            maxHeight: "100vh",
          }}
        >
          <Grid2
            sx={{
              width: "20%",
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <SideMenu />
          </Grid2>
          <Grid2
            sx={{
              width: { xs: "100%", sm: "100%", md: "80%" },
              maxHeight: "100vh",
              overflowY: "auto",
            }}
            id="scroll-container"
          >
            <Home />
            <About />
            <Resume />
            <Portfolio />
            <Contact />
          </Grid2>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default App;
