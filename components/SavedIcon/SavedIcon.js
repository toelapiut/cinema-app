import * as React from "react"
import Svg, {G, Path} from "react-native-svg"

export const SavedIcon = ({focused}) => {
  return (
    <Svg width={22} height={30} viewBox="0 0 63 51">
      <Path
        d="M56.917 1H6.083C3.281 1 1 3.435 1 6.43v32.582c0 2.995 2.281 5.43 5.083 5.43H31.5v2.716H20.062c-.702 0-1.27.607-1.27 1.357s.568 1.358 1.27 1.358h22.875c.703 0 1.271-.607 1.271-1.358 0-.75-.568-1.357-1.27-1.357H31.5v-2.715h25.417c2.802 0 5.083-2.436 5.083-5.43V6.43C62 3.435 59.719 1 56.917 1zM32.77 47.158h-2.542v-2.715h2.542v2.715zm26.687-8.146c0 1.497-1.139 2.715-2.541 2.715H6.083c-1.402 0-2.541-1.218-2.541-2.715V6.43c0-1.496 1.14-2.715 2.541-2.715h50.834c1.402 0 2.541 1.219 2.541 2.715v32.582z"
        fill="#fff"
        fillRule="nonzero"
        stroke="#fff"
        strokeWidth={focused ? 2 : 1}
      />
    </Svg>
  )
};

