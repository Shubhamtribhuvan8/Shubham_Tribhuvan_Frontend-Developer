import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Capsule({ onSearch }) {
  const [serial, setSerial] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [launchDate, setLaunchDate] = useState("");
  const [mission, setMission] = useState("");
  const [landings, setLandings] = useState("");
  const [type, setType] = useState("");
  const [reuseCount, setReuseCount] = useState("");
  const handleSearch = () => {
    const queryParams = {
      capsule_serial: serial,
      capsule_id: id,
      status,
      original_launch: launchDate,
      mission,
      landings,
      type,
      reuse_count: reuseCount,
    };

    onSearch(queryParams);
  };

  return (
    <div>
      <TextField
        label="Capsule Serial"
        value={serial}
        onChange={(e) => setSerial(e.target.value)}
      />
      <TextField
        label="Capsule ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <TextField
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <TextField
        label="Original Launch Date"
        value={launchDate}
        onChange={(e) => setLaunchDate(e.target.value)}
      />
      <TextField
        label="Mission"
        value={mission}
        onChange={(e) => setMission(e.target.value)}
      />
      <TextField
        label="Landings"
        value={landings}
        onChange={(e) => setLandings(e.target.value)}
      />
      <TextField
        label="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <TextField
        label="Reuse Count"
        value={reuseCount}
        onChange={(e) => setReuseCount(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}
