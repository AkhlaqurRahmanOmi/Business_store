import React, { useEffect,useCallback } from 'react';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import * as WebBrowser from 'expo-web-browser'
import AppButton from './CustomButton';
import useWarmUpBrowser from '@/hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

useEffect(() => {
    WebBrowser.maybeCompleteAuthSession();
}, []);
const WelcomeScreen: React.FC = () => {
    useWarmUpBrowser()
    const {startOAuthFlow} = useOAuth({strategy: 'oauth_google'})
    const onPress = useCallback(async () => {
        try {
            const response = await startOAuthFlow();
            console.log("OAuth Response:", response);
            const { createdSessionId, signIn, signUp,setActive } = response;

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else if (signUp) {
                // If signUp is available, ask for username
                const username = prompt("Please enter a username"); // Replace with your preferred input method
                const signUpResponse = await signUp.create({
                    username: username,
                    emailAddress: response.signUp.emailAddress,
                    // You might need to include other necessary fields
                });

                if (signUpResponse.createdUserId) {
                    console.log("User created successfully!");
                    setActive({ session: signUpResponse.createdSessionId });
                } else {
                    console.log("User creation was not successful.");
                }
            } else {
                console.log("User creation was not successful.");
            }
        } catch (err) {
            console.error("Error during OAuth flow:", err);
        }
    }, [startOAuthFlow]);



    const quotes = [
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Don’t wait for opportunity. Create it.",
        "Your limitation—it's only your imagination."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Reanimated values
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(50);

    // Animation styles for the text
    const animatedStyle = useAnimatedStyle(() => ({
        opacity: withTiming(opacity.value, { duration: 10000 }),
        transform: [{ translateY: withTiming(translateY.value, { duration: 1000 }) }],
    }));

    // Start animation when component mounts
    useEffect(() => {
        opacity.value = 1;
        translateY.value = 0;
    }, []);

    return (
        <View className="flex-1 justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 p-6">
            {/* Animated Quote Section */}
            <Animated.View style={animatedStyle}>
                <Text className="text-3xl font-bold text-emerald-950 text-center mb-8 tracking-wider">
                    <Text className="text-yellow-400">Success</Text> is not final,
                    <Text className="text-red-500"> failure</Text> is not fatal:
                    It is the courage to <Text className="text-blue-400">continue</Text> that counts.
                </Text>
            </Animated.View>

            {/* Navigate to Login */}
            <AppButton
                title="Get Started"
                onPress={onPress}
                color="bg-blue-600" // Pass the desired background color
            />
        </View>
    );
};

export default WelcomeScreen;
