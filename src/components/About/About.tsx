import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { Element, Link } from "react-scroll";
import dp from "../../assets/about.jpg";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../assets/SivaprasadAluri_Resume.pdf"; // Ensure this file is in the "public" folder
    link.download = "Sivaprasad.pdf"; // File name for download
    link.click();
  };

  return (
    <Element name="About" className="element" style={{ marginTop: "80px" }}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          py: 1,
          boxSizing: "border-box",
          paddingTop: { xs: "100px", md: "6px" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "1.3rem", md: "3rem" },
              fontWeight: { xs: 400, md: 100 },
              letterSpacing: 5,
              textAlign: { xs: "right", md: "left" },
              px: { xs: 2, md: 1 },
            }}
          >
            ABOUT ME
          </Typography>
          <Divider sx={{ borderBottom: "0.5px solid #eeb136" }} />
          <Box
            sx={{
              minHeight: "80vh",
              // background: "#ccc",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              gap: 3,
              p: 3,
            }}
          >
            <Box
              width="75%"
              margin="auto"
              display="flex"
              gap={3}
              sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
            >
              <Box sx={{ width: { xs: "100%", md: "70%" } }}>
                <Typography
                  variant="h3"
                  sx={{
                    p: 0,
                    m: 0,
                    fontWeight: 100,
                    textTransform: "uppercase",
                    fontSize: { xs: "22px", sm: "38px", md: "48px" },
                    textAlign: { xs: "center", sm: "left", md: "left" },
                  }}
                >
                  I'm{" "}
                  <span style={{ color: "#be8d39", fontWeight: 500 }}>
                    {" "}
                    Sivaprasad Aluri
                  </span>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    py: 1,
                    mb: 2,
                    fontWeight: 500,
                    color: "#393939",
                    fontSize: { xs: "20px", sm: "24px", md: "32px" },
                    textAlign: { xs: "center", sm: "left", md: "left" },
                  }}
                >
                  WEB / UI DEVELOPER
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 300, textAlign: "justify" }}
                >
                  I'm a passionate UI Developer with over 12 years of experience
                  in frontend development, specializing in React, Next.js,
                  JavaScript, and TypeScript. Based in Hyderabad, India, I craft
                  responsive, high-performance web applications with a strong
                  focus on design, usability, and performance
                </Typography>
                <Typography
                  variant="body1"
                  py={2}
                  sx={{ fontWeight: 300, textAlign: "justify" }}
                >
                  I bridge the gap between UI/UX design and development,
                  creating seamless, interactive experiences for web and mobile.
                  If you're looking to build a modern, scalable web application,
                  let’s connect!
                </Typography>
                <Typography
                  variant="body1"
                  fontSize="3.3rem"
                  className="sign"
                  sx={{ color: "#76561f" }}
                >
                  - Siva
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: 1, md: 2 },
                    my: { xs: 1, md: 2 },
                  }}
                >
                  <Box>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        p: { xs: 0, md: 2 },
                        px: { xs: 2 },
                        background: "#be8d39",
                        fontSize: { xs: "12px" },
                      }}
                      onClick={handleDownload}
                    >
                      Download Resume <FileDownloadIcon sx={{ ml: 2 }} />
                    </Button>
                  </Box>
                  <Box>
                    <Link
                      activeClass="active"
                      className="Contact"
                      to="Contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      containerId="scroll-container"
                      style={{ color: "#464030" }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          p: { xs: 0, md: 2 },
                          px: { xs: 2 },
                          background: "#775a26",
                          fontSize: { xs: "12px" },
                        }}
                        onClick={(e) => e.preventDefault()}
                      >
                        Contact Me <ConnectWithoutContactIcon sx={{ ml: 2 }} />
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "30%" } }}>
                <Avatar
                  alt="Siva"
                  src={dp}
                  variant="square"
                  sx={{
                    flexGrow: "1",
                    width: { xs: 256, sm: 316, md: 350 },
                    height: { xs: 356, sm: 356, md: 420 },
                    border: "5px groove #db9e03",
                    boxShadow: "1px 2px 5px 1px #dca715",
                    borderRadius: "5px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

export default About;
