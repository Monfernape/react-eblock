import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Button, FormControl, InputLabel, Input, Select, MenuItem, TextField } from "@material-ui/core"
import { Car, generateId, MaintenanceType } from '../../models/Car';
import { MaintenanceTypes } from '../../config/Constants';
import { setOrder } from '../../services/CreateOrderService';

const CreateOrder = () => {
    const [car, setCar] = useState<Car>(new Car());

    const handleSubmit = () => {
        setCar({ ...car, Id: generateId() })
        console.log('car:', car)
        setOrder([car])
    }

    const handleCancel = () => {
        console.log('Cancel button clicked.')
    }

    return (
        <div>
            <div>
                <FormControl>
                    <InputLabel>Car Name</InputLabel>
                    <Input
                        id="carNameId"
                        value={car.Name}
                        onChange={(e) => setCar({ ...car, Name: e.target.value })}
                    />
                </FormControl>
            </div>

            <div>
                <FormControl>
                    <InputLabel>Car Model</InputLabel>
                    <Input
                        id="carModelId"
                        value={car.Model}
                        onChange={(e) => setCar({ ...car, Model: e.target.value })}
                    />
                </FormControl>
            </div>

            <div>
                <FormControl>
                    <InputLabel>Maintenance Type</InputLabel>
                    <Select
                        value={car.MaintenanceType}
                        onChange={e => setCar({...car, MaintenanceType: e.target.value as string})}
                    >
                        {MaintenanceTypes.map((type: MaintenanceType, index) => (
                            <MenuItem key={index} value={type.id}>{type.option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div>
                <FormControl>
                    <InputLabel>Car Color</InputLabel>
                    <Input
                        type="color"
                        value={car.Color}
                        onChange={(e) => setCar({ ...car, Color: e.target.value })}
                    />
                </FormControl>
            </div>

            {/* <div>
                <TextField
                    label="Expected Return Date"
                    type="date"
                    value={new Date(car.ExpectedReturnDate)}
                    onChange={(e) => setCar({ ...car, ExpectedReturnDate: e.target.value })}
                />
            </div> */}

            <div>
                <FormControlLabel
                    value={car.Inspection}
                    control={<Checkbox color="primary" />}
                    label="Would you like to have complete inspection?"
                    labelPlacement="end"
                />
            </div>

            <div>
                <Button
                    variant="contained"
                    onClick={handleCancel}
                    className="right-align"
                    style={{ marginTop: 8, marginRight: 120 }} >
                    Cancel
                </Button>
            </div>

            <div>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    className="right-align"
                    style={{ marginTop: 8, marginRight: 120 }} >
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default CreateOrder;