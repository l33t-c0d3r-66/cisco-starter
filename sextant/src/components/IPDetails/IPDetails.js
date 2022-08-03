import React, { useEffect, useState } from 'react';

const IPDetails = (props) => {
    const [ipAddress, setIPAddress] = useState("");

    useEffect(function () {
        fetch(props.url)
        .then(response => response.json())
        .then(data => setIPAddress(data.ip));
    }, []);

    return (
        <span>
            {ipAddress}
        </span>
    );
}

export default IPDetails;