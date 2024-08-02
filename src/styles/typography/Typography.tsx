import React from "react";
import { TypographyStyle } from "./TypographyConst";

function Typography(
  tagDefaults: TypographyStyle,
  weight?: string,
  fontWeight?: number,
  fontHeight?: Number,
  color?: string,
  style?: Object,
  attr?: any,
) {
  const fontFamily =
    (weight == "light" && "PoppinsLight") ||
    (weight == "medium" && "PoppinsMedium") ||
    (weight == "bold" && "PoppinsBold") ||
    (weight == "black" && "PoppinsBlack") ||
    "PoppinsRegular";

  return (
    <div
      {...attr}
      style={{
        fontFamily: fontFamily,
        fontWeight: fontWeight || fontFamily,
        color: color || "white",
        ...tagDefaults,
        ...style,
      }}
    >
      {attr.children}
    </div>
  );
}

export default Typography;
