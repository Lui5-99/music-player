import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { defaultStyles } from "../../../styles";
import { TrackList } from "../../../components/TrackList";
import { screenPadding } from "../../../constants/tokens";
import { useNavigationSearch } from "../../../hooks/useNavigationSearch";
import library from "../../../assets/data/library.json";
import { trackTitleFilter } from "../../../helpers/filter";

const SongScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in songs",
    },
  });

  const filteredSongs = useMemo(() => {
    if (!search) return library;
    return library.filter(trackTitleFilter(search));
  }, [search, library]);

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TrackList tracks={filteredSongs} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongScreen;
