import unknownArtist from '../assets/unknown_artist.png'
import unknownsong from '../assets/unknown_track.png'
import { Image } from 'react-native'

export const unknownTrackImageUri = Image.resolveAssetSource(unknownsong).uri
export const unknownArtistImageUri = Image.resolveAssetSource(unknownArtist).uri