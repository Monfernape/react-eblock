import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core";
import { CardStyles, tileViewStyles } from "../../styles/Card";

interface ICards {
  title?: string;
  description: any[];
  viewType: any;
  image: any;
  goto?: Function;
}

export const CardComponent = (props: ICards) => {
  const classes = CardStyles();
  const tileViewClasses = tileViewStyles();
  const { title, description, viewType, image } = props;

  return (
    <Card
      className={viewType === "tile" ? tileViewClasses.root : classes.root}
      variant="outlined"
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        props.goto ? props.goto(title) : null
      }
    >
      {title ? <CardHeader title={title} /> : null}

      <CardMedia
        className={viewType === "tile" ? tileViewClasses.cover : classes.media}
        image={image}
      />

      <div className={tileViewClasses.details}>
        <CardContent
          className={`${viewType === "tile" ? tileViewClasses.content : ""}`}
        >
          {
          description.map((item, index) => {
            return (<div key={index}>
              <Typography
                className={classes.description}
                variant="h5"
                component="h2"
              >
                {item}
              </Typography>
            </div>)
          })
        }
        </CardContent>
      </div>
    </Card>
  );
};
