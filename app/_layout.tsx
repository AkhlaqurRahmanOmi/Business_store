import CustomButton from "@/components/CustomButton";
import WelcomeScreen from "@/components/WelcomeScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { View ,Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

export default function RootLayout() {
  useFonts({
    'PlayWrite': require('../assets/fonts/PlaywriteDEGrund-Regular.ttf')
  })
  return (
    <ClerkProvider publishableKey={publishableKey}>
    <SignedIn>
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(tabs)"/>
    </Stack>
    </SignedIn>
    <SignedOut>
      <WelcomeScreen/>
    </SignedOut>
    </ClerkProvider>
  );
}
