import { Avatar, Box, Divider, Typography } from "@mui/material";
import { Element } from "react-scroll";
import dp from "../../assets/about.jpg";

const About = () => {
  return (
    <Element name="About" className="element" style={{ marginTop: "80px" }}>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          py: 1,
          boxSizing: "border-box",
          paddingTop: { xs: "100px", md: "6px" },
        }}
      >
        {/* <Divider sx={{ borderBottom: "0.5px solid #eeb136" }} /> */}
        <Box display="flex" height="100%">
          <Box width={{ md: "60%" }}>
            <Typography
              sx={{
                fontSize: { xs: "1.3rem", md: "3rem" },
                fontWeight: { xs: 400, md: 100 },
                textAlign: { xs: "right", md: "left" },
                position: "relative",
                color: "#000000",
                px: { xs: 2, md: 3 },
                "&:before": {
                  content: "''",
                  height: 2,
                  width: "94%",
                  background: "#eeb13697",
                  position: "absolute",
                  bottom: 0,
                  left: 20,
                },
              }}
            >
              ABOUT ME
            </Typography>
            <Box sx={{ py: 2, px: 3 }}>
              {/* <Typography
                variant="body1"
                sx={{ pl: 1, pt: 2, fontWeight: 300 }}
              >
                Hello, There! I'M,
              </Typography> */}
              <Typography variant="h4" sx={{ py: 2, my: 2, fontWeight: 400 }}>
                I'm Sivaprasad Aluri, a UI Developer
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 300 }}>
                I'm a passionate UI Developer with over 12 years of experience
                in frontend development, specializing in React, Next.js,
                JavaScript, and TypeScript. Based in Hyderabad, India, I craft
                responsive, high-performance web applications with a strong
                focus on design, usability, and performance
              </Typography>
              <Typography variant="body1" py={2} sx={{ fontWeight: 300 }}>
                I bridge the gap between UI/UX design and development, creating
                seamless, interactive experiences for web and mobile. If you're
                looking to build a modern, scalable web application, let’s
                connect!
              </Typography>
              {/* <Typography variant="body1" sx={{ fontWeight: 300 }}>
                If you're looking to build a modern, scalable, and engaging web
                experience, let’s connect!
              </Typography> */}
              <Box>
                <Box></Box>
                <Box></Box>
              </Box>
            </Box>
          </Box>
          <Box
            width={{
              md: "40%",
              display: "flex",
              height: "100%",
              alignItems: "center",
              background: "#f1f1f1",
            }}
          >
            <Box width="100%">
              <img src={dp} alt="about" width="100%" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

export default About;
