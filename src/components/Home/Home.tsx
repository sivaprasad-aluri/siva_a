import { Avatar, Box, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Element } from "react-scroll";
import dp from "../../assets/main.jpeg";

const Home = () => {
  return (
    <Element name="Home" className="element">
      <Box
        height="100vh"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#464030 !important",
        }}
      >
        <Box sx={{ p: 5 }}>
          <Typography
            textAlign="center"
            my={1}
            fontWeight={300}
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Hello!
            <WavingHandIcon sx={{ color: "#e0aa15", fontSize: "26px" }} />
          </Typography>
          <Box width="100%" display="flex" justifyContent="center" my={1}>
            <Avatar
              alt="Siva"
              src={dp}
              sx={{
                width: { xs: 156, sm: 156, md: 250 },
                height: { xs: 156, sm: 156, md: 250 },
              }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.5rem",
                md: "3.5rem",
                fontWeight: 200,
              },
            }}
            textTransform="uppercase"
            textAlign="center"
          >
            {" "}
            I'M{" "}
            <span style={{ color: "#e0aa15", fontWeight: 600 }}>
              Sivaprasad
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.6rem" },
            }}
            textTransform="uppercase"
            fontWeight={200}
            textAlign="center"
          >
            {" "}
            Senior UI Developer
          </Typography>
        </Box>
      </Box>
    </Element>
  );
};

export default Home;
