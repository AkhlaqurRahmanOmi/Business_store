import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';

export default function useWarmUpBrowser() {
    useEffect(() => {
        const warmUp = async () => {
            await WebBrowser.warmUpAsync();
        };

        warmUp();

        return () => {
            const coolDown = async () => {
                await WebBrowser.coolDownAsync();
            };

            coolDown();
        };
    }, []);
}
