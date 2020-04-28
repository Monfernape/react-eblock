import React, { useState } from 'react';
import {Checkbox, FormControlLabel, Button, FormControl, InputLabel, Input, Select, MenuItem} from "@material-ui/core"
import CreateOrderModel from '../../models/CreateOrderModel';
import { MaintenanceTypeData } from '../../config/Constants';
import { setOrder } from '../../services/CreateOrderService';
const uuid = require('react-uuid');

const CreateOrder = () => {
    const [model, setModel] = useState<CreateOrderModel>(new CreateOrderModel());
    const [maintenanceTypeData] = useState(MaintenanceTypeData);
    const [maintenanceTypeItemId, setMaintenanceTypeItemId] = useState(MaintenanceTypeData.find(x => x.id === model.selectedMaintenanceTypeId)?.id);
    
    const handleChange = (event: any) => {
        setMaintenanceTypeItemId(event.target.value);
    }

    const handleSubmit = () => {
        console.log('Submit button clicked.');
        let obj = {
            id: uuid(), userName: "usman", carName: model.carName, carModel: model.carModel,
            selectedMaintenanceTypeId: MaintenanceTypeData.find(x => x.id === maintenanceTypeItemId)?.id || "",
            dtExpectedReturnDate: model.dtExpectedReturnDate, carColor: model.carColor, isInspection: model.isInspection
        };
        console.log('obj:', obj)
        setOrder([obj]);
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
                        value={model.carName}
                        onChange={(e) => setModel({ ...model, carName: e.target.value })}
                        aria-describedby="component-helper-text"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl>
                    <InputLabel htmlFor="component-helper">Car Model</InputLabel>
                    <Input
                        id="carModelId"
                        value={model.carModel}
                        onChange={(e) => setModel({ ...model, carModel: e.target.value })}
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
                        value={model.carColor}
                        aria-describedby="component-helper-text"
                    />
                </FormControl>
            </div>

            <div>
                <FormControlLabel
                    value={model.isInspection}
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