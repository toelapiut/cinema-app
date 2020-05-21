import * as React from "react"
import Svg, {G, Path} from "react-native-svg"

export const SearchIcon = ({focused, height, width, fill, stroke}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 56 54">
      <G fill={fill} fillRule="nonzero" stroke={stroke} strokeWidth={focused ? 1.5 : 0}>
        <Path
          d="M24 2C11.87 2 2 11.87 2 24c0 12.131 9.87 22 22 22 12.131 0 22-9.869 22-22 0-12.13-9.869-22-22-22zm0 39.939C14.109 41.939 6.062 33.89 6.062 24S14.109 6.062 24 6.062c9.891 0 17.938 8.047 17.938 17.938 0 9.891-8.047 17.939-17.938 17.939z"/>
        <Path
          d="M53.356 48.248L40.752 35.644a2.197 2.197 0 10-3.108 3.108l12.604 12.604c.429.43.991.644 1.554.644a2.197 2.197 0 001.554-3.752z"/>
      </G>
    </Svg>
  )
};


SearchIcon.defaultProps = {
  width:24,
  height:22,
  focused:false,
  fill:'#fff',
  stroke:'#fff'
}
