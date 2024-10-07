import { View, Text, Image,TouchableOpacity,TextInput } from 'react-native'
import React,{useState} from 'react'
import { useUser } from '@clerk/clerk-expo'
import Ionicons from '@expo/vector-icons/Ionicons';


const Header = () => {
    const {user} = useUser()
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () =>{}
  return (
    <View className='p-3 py-8 bg-green-400 rounded-2xl'>
        {/* profile bar */}
        <View className='flex-row items-center gap-5'>
            <Image source={{uri:user?.imageUrl}} className='h-10 w-10 rounded-full'/>
            <View>
                <Text className='text-slate-50 font-playwrite'>Welcome</Text>
                <Text className='font-bold text-lg text-slate-50 font-playwrite'>{user?.fullName}</Text>
            </View>
        </View>

        {/* search bar */}
          <View className="flex-row items-center bg-white rounded-full shadow-md p-2 mt-2">
              <TextInput
                  className="flex-1 p-2 text-gray-700 font-playwrite"
                  placeholder="Search..."
                  value={searchTerm}
                  onChangeText={setSearchTerm}
                  returnKeyType="search"
                  onSubmitEditing={handleSearch}
              />
              <TouchableOpacity onPress={handleSearch} className="p-2">
                  <Ionicons name="search" size={24} color="gray" />
              </TouchableOpacity>
          </View>
    </View>
  )
}

export default Header