//

import React from "react";
import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Mission = () => {
  return (
    <div>
      <Box position="relative">
        <LazyLoadImage
          effect="blur"
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/STARSHIP_Testflight_DESKTOP_2b3bea613a.jpg"
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
            RECENT LAUNCH
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            style={{ fontWeight: "900", fontSize: "2.5rem" }}
          >
            Starship Flight Test
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Mission;
