import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { CreditCardIcon } from "react-native-heroicons/solid";

const PaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center justify-center">
        <Image
          source={require("../assets/logo.png")}
          className="absolute top-20 h-10 w-40"
        />
      </View>
      <View className="flex-1 items-center justify-center">
        <View className="bg-white p-8 m-4 rounded-xl">
          <Text className="text-xl">
            Click the card below to donate. You'll get redirected to{" "}
            <Text className="font-bold text-red-600">Kaspi.kz</Text>
          </Text>

          <View className="flex-row items-center justify-center gap-2 my-6">
            <CreditCardIcon color="#3B7F8E" width={80} height={80} />
            <View>
              <Text className="text-lg font-bold">4203 2007 2006 2007</Text>
              <Text className="text-lg">Bek Darynov</Text>
            </View>
          </View>

          <View className="gap-2">
            <TouchableOpacity className="rounded-xl bg-[#3B7F8E]">
              <Text className="text-lg p-2 text-white font-bold text-center">
                Donate
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-xl bg-[#3B7F8E]">
              <Text className="text-lg p-2 text-white font-bold text-center">
                Switch Payment Methods
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="rounded-xl bg-red-500"
              onPress={navigation.goBack}
              activeOpacity={0.9}
            >
              <Text className="text-lg p-2 text-white font-bold text-center">
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
