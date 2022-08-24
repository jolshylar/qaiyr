import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { CreditCardIcon } from "react-native-heroicons/solid";

const SupportAuthorsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-8">
      <Text className="px-8 text-xl font-semibold text-center">
        Donations are the only way our developers{" "}
        <Text className="font-extrabold text-purple-500">get money from.</Text>
      </Text>
      <View className="bg-white p-8 items-center justify-center rounded-xl">
        <View className="flex-row items-center gap-2">
          <CreditCardIcon width={50} height={50} color="#3B7F8E" />
          <View>
            <Text className="font-semibold">4633 2006 2006 2007</Text>
            <Text>Дулат Т.</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2">
          <CreditCardIcon width={50} height={50} color="#3B7F8E" />
          <View>
            <Text className="font-semibold">4633 2007 2007 2007</Text>
            <Text>Дастан Ө.</Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2">
          <CreditCardIcon width={50} height={50} color="#3B7F8E" />
          <View>
            <Text className="font-semibold">4633 2006 2006 2006</Text>
            <Text>Бек С.</Text>
          </View>
        </View>

        <TouchableOpacity
          className="mt-4 rounded-xl bg-red-500"
          onPress={navigation.goBack}
          activeOpacity={0.9}
        >
          <Text className="text-lg p-2 text-white font-bold text-center">
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="px-8 text-xl font-semibold text-center">
        Your donation helps us paying for{" "}
        <Text className="font-extrabold text-purple-500">
          hosting, database and storage!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default SupportAuthorsScreen;
