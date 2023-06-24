import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    card: {
      width: "26rem",
      height: "100%",
    },
    cardMedia: {
      width: "100%",
    },
  },
};
export default function CapsuleDetails() {
  const { capsule_serial } = useParams();
  const [capsuleData, setCapsuleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (capsule_serial) {
      fetchCapsuleData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [capsule_serial]);

  const fetchCapsuleData = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api.spacexdata.com/v3/capsules?capsule_serial=${capsule_serial}`
      )
      .then((response) => {
        setCapsuleData(response.data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <CircularProgress size={120} />
      </div>
    );
  }

  if (!capsuleData) {
    return <div>No data available.</div>;
  }

  const { capsule_id, status, type } = capsuleData;
  return (
    <div style={styles.cardContainer}>
      <Card sx={styles.card}>
        <CardMedia
          component="img"
          src="https://images.unsplash.com/photo-1551871812-10ecc21ffa2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=381&q=80"
          title="h"
          style={{ height: "23rem", objectFit: "none" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Capsule Serial: {capsule_serial}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "initial" }}
          >
            Capsule ID: {capsule_id}
          </Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "initial" }}
            color="text.secondary"
          >
            Mission Details:{capsuleData.details}
          </Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "initial" }}
            color="text.secondary"
          >
            Landings:{capsuleData.landings}
          </Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "initial" }}
            color="text.secondary"
          >
            Mission Flight: {capsuleData.missions[0].flight}
          </Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "initial" }}
            color="text.secondary"
          >
            Mission Name: {capsuleData.missions[0].name}
          </Typography>
          <Typography
            variant="body2"
            style={{ textAlign: "initial" }}
            color="text.secondary"
          >
            Original_Launch: {capsuleData.original_launch}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Status: {status}</Button>
          <Button size="small">Type: {type}</Button>
        </CardActions>
      </Card>
    </div>
  );
}
