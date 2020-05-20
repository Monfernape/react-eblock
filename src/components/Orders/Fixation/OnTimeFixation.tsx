import React, { useState, useEffect } from 'react'
import { Grid, Button, TextField, TextareaAutosize } from "@material-ui/core";
import { MapComponent } from "../../../shared/components/MapComponent"
import { OrderStyles } from '../../../styles/Create';
import { Car } from '../../../models/Car';
import { fixationOrder } from '../../../services/CreateOrderService';

export const OnTimeFixation = () => {
    const [fixation, setFixation] = useState<Car>(new Car());
    const classes = OrderStyles();

    const handleSubmit = () => {
        fixationOrder(fixation);
        setFixation(new Car());
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(displayLiveLocation);
        }
    });

    const displayLiveLocation = (position: Position) => {
        const { latitude, longitude } = position.coords;
        setFixation({ ...fixation, position: { lat: latitude, lng: longitude } })
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

                    <TextField
                        rowsMax={2}
                        type="text"
                        multiline={true}
                        value={fixation.problemDetail}
                        aria-label="maximum height"
                        placeholder="Problem Detail"
                        onChange={(e) => setFixation({ ...fixation, problemDetail: e.target.value })}
                        className={classes.FullWidth}
                        style={{ marginTop: 10, marginRight: 0 }}
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
            <MapComponent position={fixation.position} zoom={13} />
        </form>
    )
}

export default OnTimeFixation;
