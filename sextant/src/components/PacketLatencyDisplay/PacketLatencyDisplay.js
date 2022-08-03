import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

const PacketLatencyDisplay = () => {

    const [letency, setLatency] = useState("");

    useEffect(function(){
        client.onmessage = (message) => {
            setLatency(new Date().getTime() - message.data);
        };
    }, []);
    return (
        <span>
            {letency}
        </span>
    );
}

export default PacketLatencyDisplay;