import React from "react";
import { useRouter } from "next/dist/client/router";
import { Typography } from "@material-ui/core";

export default function Pages() {
  const router = useRouter();
  return (
    <div>
      <Typography variant="h1">{router.asPath}</Typography>
    </div>
  );
}
