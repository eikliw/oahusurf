export const colors = {
  sand: '#F7F3EE',      // Light sand color for backgrounds
  sage: '#DDE4E1',      // Soft sage green
  ocean: '#AFC8BE',     // Ocean blue-green
  coral: '#FFCEC2',     // Soft coral
  sunrise: '#FEECD1',   // Warm sunrise yellow
  
  // Semantic color mappings
  primary: '#AFC8BE',   // Using ocean as primary
  secondary: '#FFCEC2', // Using coral as secondary
  accent: '#FEECD1',    // Using sunrise as accent
  background: '#F7F3EE', // Using sand as main background
  surface: '#DDE4E1',    // Using sage for surface elements
  
  // Text colors
  text: {
    primary: '#2C3E50',    // Dark blue-gray for primary text
    secondary: '#34495E',  // Lighter blue-gray for secondary text
    light: '#F7F3EE',     // Light text (sand color)
    dark: '#2C3E50',      // Dark text
  }
} as const;

// Type for our color palette
export type ColorPalette = typeof colors;

// Utility function to get color with type safety
export const getColor = (color: keyof typeof colors) => colors[color]; 