import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardHeader } from "@material-ui/core";
import { CardStyles } from '../../styles/Card';

interface ICards {
    title: string;
    description: string;
    image: string;
    goto: Function
}

export const CardComponent = (props: ICards) => {
    const classes = CardStyles();
    const { title, description, image } = props;

    return (
        <Card className={classes.root} variant="outlined"
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => props.goto(title)}>
            <CardHeader title={title} />
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
                <Typography className={classes.description} variant="h5" component="h2">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
