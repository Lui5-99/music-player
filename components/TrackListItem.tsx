import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import FastImage from "react-native-fast-image";
import { unknownTrackImageUri } from "../constants/image";
import { colors, fontSize } from "../constants/tokens";
import { defaultStyles } from "../styles";
import { Track } from "react-native-track-player";

export type TrackListItemProps = {
  track: Track;
};

const TrackListItem = ({ track }: TrackListItemProps) => {
  const isActiveTrack = false;

  return (
    <TouchableHighlight>
      <View style={styles.trackItemContainer}>
        <View>
          {/* 
          <FastImage 
            source={{ 
              uri: track.image ?? unknownTrackImageUri, 
              priority: FastImage.priority.normal 
            }}
            style={{
              ...styles.trackArtworkImage,
              opacity: isActiveTrack ? 0.6 : 1,
            }}  
          />
          */}
          <Image
            source={{ uri: track.artwork ?? unknownTrackImageUri }}
            style={{
              ...styles.trackArtworkImage,
              opacity: isActiveTrack ? 0.6 : 1,
            }}
          />
        </View>
        {/* Track title and Artist*/}
        <View style={{ width: "100%" }}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.trackTitleText,
              color: isActiveTrack ? colors.primary : colors.text,
            }}
          >
            {track.title}
          </Text>
          {track.artist && (
            <Text numberOfLines={1} style={styles.trackArtistText}>
              {track.artist}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: "row",
    columnGap: 14,
    alignItems: "center",
    paddingRight: 20,
  },
  trackArtworkImage: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: "600",
    maxWidth: "90%",
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
});

export default TrackListItem;
