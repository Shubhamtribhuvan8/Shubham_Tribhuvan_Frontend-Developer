import React, { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function CapsuleSearchForm({ onSearch }) {
  const [serial, setSerial] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [launchDate, setLaunchDate] = useState("");
  const [mission, setMission] = useState("");
  const [landings, setLandings] = useState("");
  const [type, setType] = useState("");
  const [reuseCount, setReuseCount] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = () => {
    const searchQuery = {
      serial,
      id,
      status,
      launchDate,
      mission,
      landings,
      type,
      reuseCount,
    };
    fetchCapsuleData(searchQuery);
  };

  const fetchCapsuleData = (queryParams) => {
    axios
      .get("https://api.spacexdata.com/v3/capsules", { params: queryParams })
      .then((response) => {
        setSearchResults(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const cardsPerPage = 6;
  const pageCount = Math.ceil(searchResults.length / cardsPerPage);
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = page * cardsPerPage;
  return (
    <Box>
      <br /> <br />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Capsule Serial"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Capsule ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Original Launch Date"
            value={launchDate}
            onChange={(e) => setLaunchDate(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Mission"
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Landings"
            value={landings}
            onChange={(e) => setLandings(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Reuse Count"
            value={reuseCount}
            onChange={(e) => setReuseCount(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            style={{ width: "10rem" }}
            onClick={handleSearch}
            fullWidth
          >
            Search
          </Button>
        </Grid>
      </Grid>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <Grid container spacing={2}>
            {searchResults.slice(startIndex, endIndex).map((capsule) => (
              <Grid item key={capsule.capsule_id} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.shutterstock.com/image-vector/click-typography-hand-finger-logo-260nw-356209952.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Link to={`/capsule/${capsule.capsule_serial}`}>
                      <Typography gutterBottom variant="h5" component="div">
                        Serial: {capsule.capsule_serial}
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ textAlign: "initial" }}
                    >
                      ID: {capsule.capsule_id}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{ textAlign: "initial" }}
                      color="text.secondary"
                    >
                      {capsule.details}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Status:{capsule.status}</Button>
                    <Button size="small">type:{capsule.type}</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box mt={4} display="flex" justifyContent="center">
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
            />
          </Box>
        </div>
      )}
    </Box>
  );
}
