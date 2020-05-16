import React, { useState, useEffect } from 'react'
import { Grid, Button, TextField, TextareaAutosize } from "@material-ui/core";
import { OrderStyles } from '../../../styles/Create';
import { Fix } from '../../../models/Fixation';
import { fixationOrder } from '../../../services/CreateOrderService';

export const OnTimeFixation = () => {
    const [fixation, setFixation] = useState<Fix>(new Fix());

    const classes = OrderStyles();

    const handleSubmit = () => {
        fixationOrder(fixation);
        console.log("fixation:", fixation);
        setFixation(new Fix());
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(displayLiveLocation);
        }
    });

    const displayLiveLocation = (position: any) => {
        const { longitude, latitude } = position.coords;
        setFixation({ ...fixation, liveLocation: [{ latitude: latitude, longitude: longitude }] })
    }

    const handleCancel = () => {
        console.log('cancel fixation.');
    }

    return (
        <form>
            <Grid container direction={"column"} className={classes.Flex}>
                <Grid item xs={6} sm={12} >
                    <TextField
                        id="carNameId"
                        value={fixation.number}
                        label="Car Number"
                        onChange={(e) => setFixation({ ...fixation, number: e.target.value })}
                        className={classes.FullWidth}
                    />

                    <TextField
                        label="Car Color"
                        type="color"
                        value={fixation.color}
                        className={classes.FullWidth}
                        onChange={(e) => setFixation({ ...fixation, color: e.target.value })}
                    />

                    <TextareaAutosize
                        rowsMax={4}
                        aria-label="maximum height"
                        placeholder="Problem Detail"
                        className={classes.FullWidth}
                        style={{ marginTop: 10, marginRight: 0 }}
                        defaultValue=""
                    />

                    <Button
                        variant="contained"
                        onClick={handleCancel}
                        style={{ textAlign: "center" }}>
                        Cancel
                        </Button>

                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        style={{ textAlign: "right" }}>
                        Submit
                        </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default OnTimeFixation;
