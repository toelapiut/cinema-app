import * as React from "react"
import Svg, {Defs, G, Path, Use} from "react-native-svg"

export const HomeIcon = ({focused}) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 50 50">
      <Defs>
        <Path
          d="M25 0c.34 0 8.673 8.333 25 25v25H30V37c-3-4-7.827-4.327-11 0v13H0V25C16.327 8.333 24.66 0 25 0z"
          id="prefix__a"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Use fill={focused ? "#fff" : "transparent"} xlinkHref="#prefix__a"/>
        <Path
          stroke="#fff"
          strokeWidth={3.5}
          d="M25 2.308c-.163.154-.343.326-.541.516a361.79 361.79 0 00-4.727 4.663C15.656 11.564 9.662 17.64 1.75 25.714V48.25h15.5V36.427l.339-.462c3.8-5.18 10.033-5.052 13.811-.015l.35.467V48.25h16.5V25.714c-7.912-8.074-13.906-14.15-17.982-18.227a361.79 361.79 0 00-4.727-4.663c-.198-.19-.378-.362-.541-.516z"
        />
      </G>
    </Svg>
  )
};
