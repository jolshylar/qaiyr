import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { ChevronLeftIcon, CogIcon } from "react-native-heroicons/outline";

const PostScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 items-center justify-center">
      {/* Navigation */}
      <View className="absolute top-14 flex-row w-full justify-between px-8 py-2">
        <TouchableOpacity onPress={navigation.goBack}>
          <ChevronLeftIcon size={24} color="#3B7F8E" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <CogIcon size={24} color="#3B7F8E" />
        </TouchableOpacity>
      </View>
      {/* Post Content */}
      <View className="bg-white m-4 rounded-xl">
        <View className="p-6">
          <View className="flex-row items-center gap-2">
            <Image
              source={{
                uri: "https://bigredcloud.com/wp-content/uploads/2015/10/4-tips-for-taking-professional-profile-pictures.jpg",
              }}
              className="h-10 w-10 bg-gray-300 p-4 rounded-full"
            />
            <Text className="font-bold text-xl">Babulovs Family</Text>
          </View>
          <Text className="mt-4">
            Help us! We suffer from amogus disease. We need 1 mil dollars to
            become imposter! We believe in you
          </Text>
        </View>
        <View className="my-20">
          <Image
            source={{
              uri: "https://www.brisbanekids.com.au/wp-content/uploads/2014/07/shutterstock_162013601.jpg",
            }}
            className="max-w-max h-48"
          />
        </View>
      </View>
      {/* Total Earned */}
      <View className="absolute bottom-10 items-center justify-center gap-2">
        <Text className="text-2xl font-extrabold">Total Earned</Text>
        <Text className="text-xl text-[#3B7F8E] font-bold">
          500 000 / 1 000 000
        </Text>
        <Progress.Bar
          progress={0.5}
          color="#3B7F8E"
          width={200}
          height={20}
          className="rounded-full"
        />
      </View>
    </View>
  );
};

export default PostScreen;
