import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, ActivityIndicator } from 'react-native';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/configs/FireBaseConfig';
import CustomActivityIndicator from '../CustomActivityIndicator';

const Slider = () => {
    const [sliderList, setSliderList] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch slider data from Firebase
    useEffect(() => {
        GetSliderList();
    }, []);

    const GetSliderList = async () => {
        try {
            setLoading(true); // Start loading
            const q = query(collection(db, 'Slider'));
            const querySnap = await getDocs(q);

            const sliders = [];
            querySnap.forEach((doc) => {
                sliders.push(doc.data());
            });

            setSliderList(sliders); // Set slider data
            console.log("Fetched Slider Data: ", sliders); // Log fetched data
        } catch (error) {
            console.error("Error fetching slider data: ", error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const screenWidth = Dimensions.get('window').width;

    return (
        <View>
            <Text className='font-playwrite font-extrabold text-lg p-4'>#Special for you</Text>

            {/* Show loading indicator while fetching data */}
            {loading ? (
                <CustomActivityIndicator isVisible={loading}/>
            ) : (
                <FlatList
                    data={sliderList}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View className="p-2">
                                <Image
                                    source={{ uri: item.imageURL }} // Use the correct field name
                                    style={{ width: screenWidth * 0.8, height: 200 }} // Set width and height
                                    resizeMode="cover" // Adjust the image size
                                    className="rounded-lg" // Rounded borders
                                />
                            </View>
                        );
                    }}
                    showsHorizontalScrollIndicator={false}
                />
            )}
        </View>
    );
};

export default Slider;
