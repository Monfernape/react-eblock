import React, { useState, useEffect } from 'react';
import { Button, Select, MenuItem, TextField, Checkbox, FormControlLabel } from "@material-ui/core";
import { Car, MaintenanceType } from '../../../models/Car';
import { MaintenanceTypes } from '../../../config/Constants';
import { maintenanceOrder } from '../../../services/CreateOrderService';
import { OrderStyles } from '../../../styles/Create';
import { Grid } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

interface ICreateOrderProps {
    openDrawer: Function
}

const CreateOrder = (props: ICreateOrderProps) => {
    const [car, setCar] = useState<Car>(new Car());
    const { openDrawer } = props;

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(displayLiveLocation);
        }
    })

    const displayLiveLocation = (position: any) => {
        const { longitude, latitude } = position.coords;
        setCar({ ...car, liveLocation: [{ latitude: latitude, longitude: longitude }] })
    }

    const handleSubmit = () => {
        console.log("car:", car);
        maintenanceOrder(car)
        // openDrawer(false);
        setCar(new Car());
    }

    const handleCancel = () => {
        // openDrawer(false);
        console.log("car:", car);
    }

    const classes = OrderStyles();

    return (
        <form>
            <Grid container direction={"column"} className={classes.Flex}>
                <Grid item xs={6} sm={12} >
                    <TextField
                        id="carNameId"
                        value={car.Name}
                        label="Car Name"
                        onChange={(e) => setCar({ ...car, Name: e.target.value })}
                        className={classes.FullWidth}
                    />

                    <TextField
                        id="carModelId"
                        value={car.Model}
                        label="Car Model"
                        onChange={(e) => setCar({ ...car, Model: e.target.value })}
                        className={classes.FullWidth}
                    />

                    <TextField
                        label="Car Color"
                        type="color"
                        value={car.Color}
                        className={classes.FullWidth}
                        onChange={(e) => setCar({ ...car, Color: e.target.value })}
                    />

                    <Select
                        value={car.MaintenanceType}
                        label="Maintenance Type"
                        onChange={e => setCar({ ...car, MaintenanceType: e.target.value as string })}
                        className={classes.FullWidth}
                        style={{ marginTop: 26 }}
                    >
                        {MaintenanceTypes.map((type: MaintenanceType, index) => (
                            <MenuItem key={index} value={type.id}>{type.option}</MenuItem>
                        ))}
                    </Select>

                    <FormControlLabel
                        value={car.Inspection}
                        control={<Checkbox color="primary" onChange={(e) => setCar({ ...car, Inspection: e.target.checked })} />}
                        label="Would you like to have complete inspection?"
                        className={classes.FullWidth}
                        labelPlacement="end"
                    />

                    <TextareaAutosize
                        rowsMax={2}
                        aria-label="maximum height"
                        placeholder="Enter your address here"
                        value={car.address}
                        onChange={(e) => setCar({ ...car, address: e.target.value })}
                        className={classes.FullWidth}
                        style={{ marginTop: 10, marginRight: 0 }}
                    />

                    <TextareaAutosize
                        rowsMax={4}
                        aria-label="maximum height"
                        placeholder="Side Notes"
                        value={car.sideNote}
                        onChange={(e) => setCar({ ...car, sideNote: e.target.value })}
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
        </form>
    );
}

export default CreateOrder;