import Typography from "./Typography";
import { typographyDefaults } from "./TypographyConst";


interface TextProps {
  tag: string;
  weight?: string;
  fontWeight?: number;
  fontHeight?: number;
  color?: string;
  style?: React.CSSProperties;
  [key: string]: any; // Allows for any additional props
}

const Text = ({
  weight,
  tag,
  fontWeight,
  fontHeight,
  color = 'black',
  style,
  ...attr
}: TextProps) => {
  return Typography(
    typographyDefaults[tag],
    weight,
    fontWeight,
    fontHeight,
    color,
    style,
    attr,
  );
};

export { Text };
