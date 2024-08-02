
export interface TypographyStyle {
  fontSize: number;
  weight?: string; // Optional, if not all entries have weight
}


export const typographyDefaults: Record<string, TypographyStyle> = {
  caption1: {
    fontSize: 12,
  },
  body1: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
  body3: {
    fontSize: 12,
  },
  subtitle1: {
    fontSize: 20,
    weight: "bold",
  },
  subtitle2: {
    fontSize: 18,
    weight: "bold",
  },
  h1: {
    fontSize: 44,
  },
  h2: {
    fontSize: 36,
  },
  h3: {
    fontSize: 32,
  },
  h4: {
    fontSize: 30,
  },
  h5: {
    fontSize: 28,
  },
  h6: {
    fontSize: 26,
  },
  h7: {
    fontSize: 24,
  },
  h8: {
    fontSize: 22,
  },
};
