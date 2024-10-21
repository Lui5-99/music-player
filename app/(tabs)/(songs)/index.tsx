import { ScrollView, Text, View } from "react-native"
import { defaultStyles } from "../../../styles"
import { TrackList } from "../../../components/TrackList"

const SongScreen = () => {
  return(
    <View style={defaultStyles.container}>
      <ScrollView>
        <TrackList />
      </ScrollView>
    </View>
  )
}

export default SongScreen