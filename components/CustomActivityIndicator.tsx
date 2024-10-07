import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

interface CustomActivityIndicatorProps {
    isVisible: boolean; // To control visibility of the loader
}

const CustomActivityIndicator: React.FC<CustomActivityIndicatorProps> = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <View className="flex-1 justify-center items-center">
            <LottieView
                source={require('../assets/images/ActivityIndicator.json')} // Local JSON file path
                autoPlay
                loop
                style={{ width: 150, height: 150 }}
            />
        </View>
    );
};

export default CustomActivityIndicator;
