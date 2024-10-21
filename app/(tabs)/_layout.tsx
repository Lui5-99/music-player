import { Tabs } from "expo-router";
import { colors, fontSize } from "../../constants/tokens";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { Ionicons, FontAwesome6, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const TabsNavigation = () => {
  return(
    <Tabs screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarStyle: {
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 0,
        paddingTop: 8
      },
      tabBarLabelStyle:{
        fontSize: fontSize.xs,
        fontWeight: '500'
      },
      headerShown: false,
      tabBarBackground: () => (
        <BlurView intensity={95} style={{ ...StyleSheet.absoluteFillObject, overflow: 'hidden', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
      )
    }}>
      <Tabs.Screen 
        name="favorites" 
        options={{ 
          title: 'Favorites', 
          tabBarIcon: ({ color }) => <FontAwesome name="heart" size={20} color={color} /> 
        }} 
      />
      <Tabs.Screen 
        name="playlist" 
        options={{ 
          title: 'Playlist', 
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="playlist-play" size={20} color={color} /> 
        }} 
      />
      <Tabs.Screen 
        name="(songs)" 
        options={{ 
          title: 'Songs', 
          tabBarIcon: ({ color }) => <Ionicons name="musical-notes-sharp" size={20} color={color} /> 
        }} 
      />
      <Tabs.Screen 
        name="artists" 
        options={{ 
          title: 'Artists', 
          tabBarIcon: ({ color }) => <FontAwesome6 name="users-line" size={20} color={color} /> 
        }} 
      />
    </Tabs>
  )
}

export default TabsNavigation;