import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import Alert from 'src/components/alert/Alert';

interface PushBody {
    title: string;
    message: string;
}

function PushNotification() {
    const [notification, setNotification] = useState<any | undefined>();

    useEffect(() => {
        const pusher = new Pusher(`${import.meta.env.VITE_PUSH_API_KEY}`, {
            cluster: 'eu',
        });

        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function (data: PushBody) {
            setNotification(data);
        });

        return () => {
            pusher.unbind();
            channel.unbind();
        }
    }, []);

    if (notification)
        return (
            <Alert
                title={notification?.title}
                content={notification?.message}
                onClose={() => setNotification(undefined)}
            />)

    return <></>;
}

export default PushNotification;
