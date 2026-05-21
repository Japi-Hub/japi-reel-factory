// JAPI HUB Design Tokens
export const COLORS = {
  morado: '#4831E9',
  verdeLima: '#CEF13B',
  naranja: '#FF782C',
  negro: '#111111',
  blanco: '#FFFFFF',
  fondo: '#F5F5F7',
  cards: '#FAFAFA',
  cajasSuaves: '#F2F2F4',
  textoPrimario: '#111111',
  textoSecundario: '#555555',
  textoSutil: '#888888',
  waBubbleEnviado: '#111111',
  waBubbleRecibido: '#F2F2F4',
  waTextEnviado: '#FFFFFF',
  waTextRecibido: '#111111',
} as const;
export const FONTS = {
  heading: 'Inter, system-ui, sans-serif',
  body: 'Inter, system-ui, sans-serif',
} as const;
export const FONT_SIZES = {
  xs: 24, sm: 32, md: 44, lg: 56, xl: 72, xxl: 96, hero: 120,
} as const;
export const FONT_WEIGHTS = {
  regular: 400, medium: 500, semibold: 600, bold: 700, black: 900,
} as const;
export const SPACING = {
  xs: 16, sm: 24, md: 40, lg: 64, xl: 96, xxl: 128,
} as const;
export const RADIUS = {
  sm: 12, md: 20, lg: 32, pill: 999,
} as const;
export const DURATIONS = {
  fadeIn: 18, fadeOut: 12, slideIn: 20, bubble: 15, hold: 60, sceneMin: 90,
} as const;
