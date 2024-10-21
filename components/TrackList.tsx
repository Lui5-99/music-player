import { FlatList, FlatListProps, View } from "react-native";
import library from "../assets/data/library.json";
import TrackListItem from "./TrackListItem";
import { utilStyles } from "../styles";
import { Track } from "react-native-track-player";

export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[];
};

const ItemDivider = () => (
  <View
    style={{ ...utilStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);

export const TrackList = ({ tracks, ...flatlistProps }: TrackListProps) => {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ListFooterComponent={ItemDivider}
      renderItem={({ item: track }) => <TrackListItem track={track} />}
      ItemSeparatorComponent={ItemDivider}
    />
  );
};
