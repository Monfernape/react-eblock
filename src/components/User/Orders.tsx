import React from "react";
import { Grid } from "@material-ui/core";
import { UserOrder } from "./UserOrder";

export const Orders: React.FC = () => {
  return (
    <Grid container style={{ display: "flex" }}>
      <Grid item sm={4}></Grid>
      <Grid item xs={12} sm={8}>
        {[0, 1, 2, 3, 4, 5].map((order, key) => (
          <React.Fragment key={key}>
            <UserOrder />
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );
};

export default Orders;
