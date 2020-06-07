import React, { useState, useEffect } from 'react';
import { Button, Select, MenuItem, TextField, Checkbox, FormControlLabel } from "@material-ui/core";
import ToggleButton from '@material-ui/lab/ToggleButton';
import CheckIcon from '@material-ui/icons/Check';
import { Car, MaintenanceType } from '../../../models/Car';
import { MaintenanceTypes } from '../../../config/Constants';
import { maintenanceOrder } from '../../../services/CreateOrderService';
import { OrderStyles } from '../../../styles/Create';
import { Grid } from "@material-ui/core";

interface ICreateOrderProps {
    openDrawer: Function
}

const CreateOrder = (props: ICreateOrderProps) => {
    const [car, setCar] = useState<Car>(new Car());
    const { openDrawer } = props;

    const displayLiveLocation = (position: any) => {
        const { longitude, latitude } = position.coords;
        setCar({ ...car, liveLocation: [{ latitude: latitude, longitude: longitude }] })
    }

    const handleSubmit = () => {
        maintenanceOrder(car)
        // openDrawer(false);
        setCar(new Car());
    }

    useEffect(() => {
        if (navigator.geolocation && car.enableLocation === true) {
            navigator.geolocation.getCurrentPosition(displayLiveLocation);
        }
    }, [car.enableLocation])

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
                        value={car.name}
                        label="Car Name"
                        onChange={(e) => setCar({ ...car, name: e.target.value })}
                        className={classes.FullWidth}
                    />

                    <TextField
                        id="carModelId"
                        value={car.model}
                        label="Car Model"
                        onChange={(e) => setCar({ ...car, model: e.target.value })}
                        className={classes.FullWidth}
                    />

                    <TextField
                        label="Car Color"
                        type="color"
                        value={car.color}
                        className={classes.FullWidth}
                        onChange={(e) => setCar({ ...car, color: e.target.value })}
                    />

                    <Select
                        value={car.maintenanceType}
                        label="Maintenance Type"
                        onChange={e => setCar({ ...car, maintenanceType: e.target.value as string })}
                        className={classes.FullWidth}
                        style={{ marginTop: 26 }}
                    >
                        {MaintenanceTypes.map((type: MaintenanceType, index) => (
                            <MenuItem key={index} value={type.id}>{type.option}</MenuItem>
                        ))}
                    </Select>

                    <FormControlLabel
                        value={car.inspection}
                        control={<Checkbox color="primary" onChange={(e) => setCar({ ...car, inspection: e.target.checked })} />}
                        label="Would you like to have complete inspection?"
                        className={classes.FullWidth}
                        labelPlacement="end"
                    />

                    <TextField
                        rowsMax={2}
                        type="text"
                        multiline={true}
                        aria-label="maximum height"
                        placeholder="Enter your address here"
                        value={car.address}
                        onChange={(e) => setCar({ ...car, address: e.target.value })}
                        className={classes.FullWidth}
                        style={{ marginTop: 10, marginRight: 0 }}
                    />

                    <div className={classes.FullWidth}>
                        <ToggleButton
                            value="check"
                            selected={car.enableLocation}
                            onChange={() => setCar({ ...car, enableLocation: car.enableLocation ? false : true })}
                        >
                            <CheckIcon />
                        </ToggleButton>Enable your current location
                    </div>

                    <TextField
                        rowsMax={2}
                        type="text"
                        multiline={true}
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