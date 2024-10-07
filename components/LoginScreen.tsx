import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import CustomButton from './CustomButton';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);
const StyledTouchableOpacity = styled(TouchableOpacity);

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here (e.g., API call)
        console.log("Email: ", email);
        console.log("Password: ", password);
    };

    return (
        <StyledView className="flex-1 justify-center items-center bg-gray-100 px-4">
            <StyledText className="text-2xl font-bold mb-8">Login</StyledText>

            <StyledTextInput
                className="w-full h-12 bg-white px-4 mb-4 rounded-lg border border-gray-300"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <StyledTextInput
                className="w-full h-12 bg-white px-4 mb-6 rounded-lg border border-gray-300"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {/* adding custom button */}
            <CustomButton
                title="Login"
                onPress={handleLogin}
                color="bg-blue-500" // You can change the color if needed
                style="mt-4" // Optional custom styles for the button
                textStyle="font-semibold" // Optional custom styles for the text
            />
        </StyledView>
    );
};

export default LoginScreen;
