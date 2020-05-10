import React, { useState, useEffect } from 'react';
import { Button, Select, MenuItem, TextField } from "@material-ui/core";
import { Car, generateId, MaintenanceType } from '../../../Models/Car';
import { MaintenanceTypes } from '../../../config/Constants';
import { setOrder } from '../../../services/CreateOrderService';
import { OrderStyles } from '../../../styles/Create';
import { Grid } from "@material-ui/core";
import UserCoordinates from '../Coordinates/UserCoordinates';

interface ICreateOrderProps {
    openDrawer: Function
}

const CreateOrder = (props: ICreateOrderProps) => {
    const [car, setCar] = useState<Car>(new Car());
    const {openDrawer} = props;

    useEffect(() => {
        UserCoordinates();
        let getUserCurrentPosition = localStorage.getItem("currentLocation");
        getUserCurrentPosition = getUserCurrentPosition ? JSON.parse(getUserCurrentPosition) : null;
        let getUserLivePosition = localStorage.getItem("liveLocation");
        getUserLivePosition = getUserLivePosition ? JSON.parse(getUserLivePosition) : null;
    })

    const handleSubmit = () => {
        setCar({ ...car, Id: generateId(), MaintenanceType: car.MaintenanceType })
        setOrder(car)
        openDrawer(false);
    }

    const handleCancel = () => {
        openDrawer(false);
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