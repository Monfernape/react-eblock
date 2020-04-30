import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Button, FormControl, InputLabel, Input, Select, MenuItem, TextField } from "@material-ui/core"
import { Car, generateId } from '../../models/CreateOrderModel';
import { MaintenanceTypeData } from '../../config/Constants';
import { setOrder } from '../../services/CreateOrderService';

const CreateOrder = () => {
    const [car, setCar] = useState<Car>(new Car());
    const [maintenanceTypeData] = useState(MaintenanceTypeData);
    const [maintenanceTypeItemId, setMaintenanceTypeItemId] = useState(MaintenanceTypeData.find(x => x.id === car.selectedMaintenanceTypeId)?.id);

    const handleChange = (event: any) => {
        setMaintenanceTypeItemId(event.target.value);
    }

    const handleSubmit = () => {
        setCar({ ...car, id: generateId() })
        console.log('car:', car)
        setOrder([car])
    }

    const handleCancel = () => {
        console.log('Cancel button clicked.')
    }

    return (
        <div>
            <div >
                <FormControl>
                    <InputLabel htmlFor="component-helper">Car Name</InputLabel>
                    <Input
                        id="carNameId"
                        value={car.carName}
                        onChange={(e) => setCar({ ...car, carName: e.target.value })}
                        aria-describedby="component-helper-text"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl>
                    <InputLabel htmlFor="component-helper">Car Model</InputLabel>
                    <Input
                        id="carModelId"
                        value={car.carModel}
                        onChange={(e) => setCar({ ...car, carModel: e.target.value })}
                        aria-describedby="component-helper-text"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Maintenance Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={maintenanceTypeItemId}
                        onChange={(event) => handleChange(event)}
                    >
                        {/* { Generating dynamic MenuItems} */}
                        {maintenanceTypeData.map((item, index) => (
                            <MenuItem value={item.id}>{item.option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div>
                <FormControl>
                    <InputLabel htmlFor="component-helper">Car Color</InputLabel>
                    <Input
                        id="carColorId"
                        type="color"
                        value={car.carColor}
                        aria-describedby="component-helper-text"
                        style={{ width: 70 }}
                        onChange={(e) => setCar({ ...car, carColor: e.target.value })}
                    />
                </FormControl>
            </div>

            <div>
                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="date"
                    defaultValue={car.dtExpectedReturnDate}
                    onChange={(e) => setCar({ ...car, dtExpectedReturnDate: e.target.value })}
                />
            </div>

            <div>
                <FormControlLabel
                    value={car.isInspection}
                    control={<Checkbox color="primary" />}
                    label="Would you like to have complete inspection?"
                    labelPlacement="end"
                />
            </div>

            <div>
                <Button
                    variant="contained"
                    onClick={() => handleCancel()}
                    className="right-align"
                    style={{ marginTop: 8, marginRight: 120 }} >
                    Cancel
                </Button>
            </div>

            <div>
                <Button
                    variant="contained"
                    onClick={() => handleSubmit()}
                    className="right-align"
                    style={{ marginTop: 8, marginRight: 120 }} >
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default CreateOrder;