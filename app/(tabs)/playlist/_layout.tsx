import { View, Text } from "react-native";
import { defaultStyles } from "../../../styles";
import { Stack } from "expo-router";
import { StackScreenWithSearchBar } from "../../../constants/layout";

const PlaylistScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ ...StackScreenWithSearchBar, headerTitle: "Playlist" }} />
      </Stack>
    </View>
  );
}

export default PlaylistScreenLayout;