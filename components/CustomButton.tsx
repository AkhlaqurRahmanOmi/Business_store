import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

interface AppButtonProps {
    title: string;
    onPress: () => void;
    color: string; // Pass the button color as a prop
}

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const AppButton: React.FC<AppButtonProps> = ({ title, onPress, color }) => {
    return (
        <StyledTouchableOpacity
            className={`rounded-full justify-center items-center p-4 w-3/4 my-2 ${color}`} // Tailwind classes
            onPress={onPress}
        >
            <StyledText className={`text-white text-lg font-bold uppercase`}>
                {title}
            </StyledText>
        </StyledTouchableOpacity>
    );
};

export default AppButton;
