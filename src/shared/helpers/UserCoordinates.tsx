const displayCurrentLocationInfo = (position: any) => {
    const { longitude, latitude } = position.coords;
    localStorage.setItem("currentLocation", JSON.stringify([{ "latitude": latitude, "longitude": longitude }]))
};

const displayLiveLocation = (position: any) => {
    const { longitude, latitude } = position.coords;
    localStorage.setItem("liveLocation", JSON.stringify([{ "latitude": latitude, "longitude": longitude }]))
}

const handleLocationError = (error: any) => {
    switch (error.code) {
        case 3:
            // let's provide a default location:
            displayCurrentLocationInfo({ coords: { longitude: 33.631839, latitude: 27.380583 } });

            // now let's make a non-cached request to get the actual position
            navigator.geolocation.getCurrentPosition(displayCurrentLocationInfo, handleLocationError);
            break;
        case 2:
            // ...device can't get data
            break;
        case 1:
        // ...user said no ☹️
    }
}

export const UserCoordinates = () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayCurrentLocationInfo, handleLocationError);
    }
}

const watcher = navigator.geolocation.watchPosition(displayLiveLocation);

setTimeout(() => {
    navigator.geolocation.clearWatch(watcher);
}, 15000);
