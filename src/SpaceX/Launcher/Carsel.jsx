import React from "react";
import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Carsel = () => {
  return (
    <div>
      <Box position="relative">
        <LazyLoadImage
          effect="blur"
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/PSN_Satria_pad39a_DSC_6855_desktop_6dd3f9c0d0.jpg"
          alt=""
          style={{ width: "100%" }}
        />
        <Box
          position="absolute"
          bottom={46}
          left={10}
          bgcolor="rgba(0, 0, 0, -3.5)"
          p={2}
          color="white"
        >
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            style={{
              fontWeight: "400",
              fontSize: "1rem",
              textAlign: "initial",
              fontFamily: "sans-serif",
            }}
          >
            Upcoming Launch
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            style={{ fontWeight: "900", fontSize: "2.5rem" }}
          >
            STARLINK MISSION
          </Typography>
        </Box>
      </Box>
      <br />
    </div>
  );
};

export default Carsel;
