import React from 'react';
import { Grid } from "@material-ui/core";
import { CardComponent } from '../../shared/components/Card';
import { withRouter } from 'react-router-dom';
import './index.css';

const HomeComponent = (props: any) => {
    const onTimeFix = {
        title: 'On Time Fixation',
        description: ['Let us know if your car ran into problem'],
        image: 'assets/images/onTimeFixation.png'
    };

    const serviceLater = {
        title: 'Pick Car for Service',
        description: ['Let us know if you want service of your beloved car'],
        image: 'assets/images/carService.png'       
    };

    const navigateTo = (title: string) => {
        if (title === onTimeFix.title) {
            props.history.push('/fixation');
        } else {
            props.history.push('/create-order');
        }
    }

    return (
        <Grid className="home">
            <CardComponent
                title={onTimeFix.title}
                description={onTimeFix.description}
                viewType="grid"
                image={onTimeFix.image}
                goto={navigateTo}
            />
            <CardComponent
                title={serviceLater.title}
                description={serviceLater.description}
                viewType="grid"
                image={serviceLater.image}
                goto={navigateTo}
            />
        </Grid>
    );
}

export default withRouter(HomeComponent);
