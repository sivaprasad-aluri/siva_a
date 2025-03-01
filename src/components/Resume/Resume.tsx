import { Box, Divider, Typography } from "@mui/material";
import { Element } from "react-scroll";

const Resume = () => {
  return (
    <Element name="Resume" className="element" style={{ marginTop: "80px" }}>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          py: 1,
          boxSizing: "border-box",
          paddingTop: { xs: "100px", md: "6px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.3rem", md: "3rem" },
            fontWeight: { xs: 400, md: 100 },
            letterSpacing: 5,
            textAlign: { xs: "right", md: "left" },
            px: { xs: 2, md: 1 },
          }}
        >
          RESUME
        </Typography>
        <Divider sx={{ borderBottom: "0.5px solid #eeb136" }} />
      </Box>
    </Element>
  );
};

export default Resume;
