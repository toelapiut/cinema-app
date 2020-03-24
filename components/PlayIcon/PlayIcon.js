import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Circle, Path } from "react-native-svg"

export const  PlayIcon =({wHeight}) => {
  return (
    <Svg width={wHeight} height={wHeight} viewBox="0 0 49 49">
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.713}
          y1={0.098}
          x2={0.332}
          y2={0.934}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ff0215" />
          <Stop offset={1} stopColor="#831515" stopOpacity={0.98} />
        </LinearGradient>
      </Defs>
      <Circle cx={24.5} cy={24.5} r={24.5} fill="url(#prefix__a)" />
      <Path
        d="M33.883 22.864a2 2 0 010 3.273l-11.6 8.15a2 2 0 01-3.15-1.636V16.35a2 2 0 013.15-1.636z"
        fill="#fff"
      />
    </Svg>
  )
};

PlayIcon.defaultProps = {
  wHeight:55,
};