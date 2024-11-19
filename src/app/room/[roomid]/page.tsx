'use client';
import React, { useEffect, useRef, useState } from 'react';
import useUser from '@/app/hooks/useUser';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { v4 as uuid } from 'uuid';

const Room = ({ params }: { params: Promise<{ roomid: string }> }) => {
    const resolvedParams = React.use(params);
    const { fullName } = useUser();
    const roomID = resolvedParams.roomid || 'valorPorDefecto';
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isRoomJoined, setIsRoomJoined] = useState(false);

    useEffect(() => {
        console.log('useEffect ejecutado');

        if (containerRef.current && !isRoomJoined) {
            const appID = parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID!);
            const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET!;

            const initRoom = () => {
                const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                    appID,
                    serverSecret,
                    roomID,
                    uuid(),
                    fullName || 'user' + Date.now(),
                    720
                );

                const zp = ZegoUIKitPrebuilt.create(kitToken);
                console.log('Intentando unirse a la sala');
                zp.joinRoom({
                    container: containerRef.current,
                    sharedLinks: [
                        {
                            name: 'link',
                            url:
                                window.location.protocol +
                                '//' +
                                window.location.host +
                                window.location.pathname +
                                '?roomID=' +
                                roomID,
                        },
                    ],
                    scenario: {
                        mode: ZegoUIKitPrebuilt.VideoConference,
                    },
                });
                setIsRoomJoined(true); // Evita que se intente unir de nuevo
            };

            initRoom();
        }

        return () => {
            console.log('Limpiando efecto');
            // Aquí podrías agregar lógica de limpieza si el SDK de ZEGOCLOUD lo requiere
        };
    }, [roomID, fullName, isRoomJoined]); // isRoomJoined se asegura de que el efecto se ejecute una sola vez

    return (
        <div
            className="myCallContainer"
            ref={containerRef}
            style={{ width: '100vw', height: '100vh' }}
        ></div>
    );
};

export default Room;