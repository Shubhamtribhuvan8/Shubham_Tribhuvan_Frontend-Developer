import React, { useEffect } from "react";
import { Action } from "../Redux/Action";
// import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
export default function Launcher() {
  const dispatch = useDispatch();

  async function Mrequest(URL) {
    try {
      const response = await axios.get(URL);
      const data = response.data;
      Action(dispatch, data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    Mrequest("https://api.spacexdata.com/v3/rockets");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let data = useSelector((store) => {
    return store.products;
  });

  return (
    <div>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item key={item.rocket_id} xs={6}>
            <Card>
              <LazyLoadImage
                effect="blur"
                src={item.flickr_images}
                alt="green iguana"
                height={500}
                width="100%"
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.rocket_name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textAlign: "initial" }}
                >
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{item.company}</Button>
                <Button size="small">{item.rocket_type}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
