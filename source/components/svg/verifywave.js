import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <Path
        fill="#fff"
        d="M0 160h9.2c9.3 0 27.8 0 45.8 10.7C73.8 181 92 203 111 192c18.2-11 37-53 55-58.7 18.6-5.3 37 26.7 56 58.7 18 32 36 64 55 58.7 18.4-5.7 37-47.7 55-48 18.8.3 37 42.3 56 48 18.2 5.3 37-26.7 55-42.7 18.5-16 37-16 55-10.7 18.9 5.7 37 15.7 56 0 18.3-16.3 37-58.3 55-69.3 18.7-11 37 11 56 26.7 18.1 16.3 37 26.3 55 32 18.5 5.3 37 5.3 55 0 18.8-5.7 37-15.7 56-10.7 18.2 5 37 27 55 0 18.6-27 37-101 56-90.7C960 96 978 192 997 224c18.4 32 37 0 55-10.7 18.8-10.3 37-.3 56-21.3 18.2-21 37-75 55-64 18.5 11 37 85 55 96 18.9 11 37-43 56-53.3 18.3-10.7 37 21.3 55 48 18.7 26.3 37 48.3 56 64 18.1 16.3 37 26.3 46 32l9 5.3V0H0z"
      />
    </Svg>
  );
}

export default SvgComponent;