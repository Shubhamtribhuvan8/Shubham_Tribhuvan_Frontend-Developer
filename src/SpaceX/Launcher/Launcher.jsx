import React, { useEffect, useState } from "react";
import { Action } from "../Redux/Action";
// import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function Launcher() {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  async function Mrequest(URL) {
    let res = await fetch(URL);
    let data = await res.json();
    setTotal(data.totalPages);
    Action(dispatch, data);
  }

  useEffect(() => {
    HandleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // eslint-disable-next-line no-unused-vars
  let data = useSelector((store) => {
    return store.products;
  });

  function HandleFilter() {
    let sorting = document.getElementById("sorting").value;
    console.log(sorting);

    let limit = 12;
    let offset = 0;
    let sort = "flight_number";
    let order = sorting === "desc" ? "desc" : "asc";

    if (sorting === "sort") {
      Mrequest(
        `https://api.spacexdata.com/v3/rockets?limit=${limit}&offset=${offset}`
      );
    } else {
      Mrequest(
        `https://api.spacexdata.com/v3/rockets?limit=${limit}&offset=${offset}&sort=${sort}&order=${order}`
      );
    }
  }

  return (
    <div>
      <FormControl size="large" variant="outlined" style={{ width: "15rem" }}>
        <InputLabel id="sorting-label">Sort</InputLabel>
        <Select
          labelId="sorting-label"
          id="sorting"
          value=""
          onChange={HandleFilter}
          label="Sort"
        >
          <MenuItem value="">Sort</MenuItem>
          <MenuItem value="asc">Low to High</MenuItem>
          <MenuItem value="desc">High to Low</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item key={item.rocket_id} xs={6}>
            <Card>
              <CardMedia
                sx={{ height: 500 }}
                image={item.flickr_images}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.rocket_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
