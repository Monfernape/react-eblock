import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core";
import { Car } from "../../models/Car";

interface IProps {
  order?: Car;
}

export const UserOrder: React.FC<IProps> = ({ order }) => {
  return (
      <Card style={{margin: "15px"}}>
        <CardHeader title={"Car Name"} subheader={"Car Model - Car Color"} />
        <CardContent>
            <Typography>Details</Typography>
            <Typography>Status</Typography>
            <Typography>Time Since Booked</Typography>
        </CardContent>
      </Card>
  );
};
