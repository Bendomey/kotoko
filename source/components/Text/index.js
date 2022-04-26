import React, { Fragment } from "react";
import { Text } from "react-native";

const TextComponent = ({ style, type, children }) => {
  const customStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <Fragment>
      <Text
        style={[
          {
            ...customStyles,
            fontFamily: `${
              type === "Black"
                ? "SFProText-Black"
                : type === "Heavy"
                ? "SFProText-Heavy"
                : type === "Bold"
                ? "SFProText-Bold"
                : type === "UltraLight"
                ? "SFProText-UltraLight"
                : type === "Light"
                ? "SFProText-Light"
                : type === "Medium"
                ? "SFProText-Medium"
                : type === "Regular"
                ? "SFProText-Regular"
                : type === "SemiBold"
                ? "SFProText-SemiBold"
                : "SFProText-Thin"
            }`,
          },
        ]}
      >
        {children}
      </Text>
    </Fragment>
  );
};

TextComponent.defaultProps = {
  type: "Regular",
};

export default TextComponent;
