import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import Alert from '../../components/alert/Alert';

function PushNotification() {
    const [notification, setNotification] = useState<any | undefined>();

    useEffect(() => {
        const pusher = new Pusher(`${import.meta.env.VITE_PUSH_API_KEY}`, {
            cluster: 'eu',
        });

        const channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function (data: any) {
            setNotification(data);
            console.log({ notification });
        });

        return () => {
            pusher.unbind();
            channel.unbind();
        }
    }, []);

    if (notification)
        return <Alert title='title' content='content' onClose={() => setNotification(undefined)} />

    return <></>;
}

export default PushNotification;
