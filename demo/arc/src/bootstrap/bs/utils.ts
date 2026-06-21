import { isString } from '@/utils'

// export const BREAKPOINTS = {
//   sm: true as boolean,
//   md: true as boolean,
//   lg: true as boolean,
//   xl: true as boolean,
//   xxl: true as boolean,
// }

export const BREAKPOINTS = ['sm', 'md', 'lg', 'xl', 'xxl'] as const
export type TBreakpoints = (typeof BREAKPOINTS)[number]

export function getBreakpoint(
  sm: boolean | undefined,
  md: boolean | undefined,
  lg: boolean | undefined,
  xl: boolean | undefined,
  xxl: boolean | undefined,
  breakpoint: boolean | undefined | TBreakpoints
): boolean | undefined | TBreakpoints {
  return isString(breakpoint)
    ? BREAKPOINTS.includes(breakpoint) && breakpoint
    : breakpoint ||
        (xxl && 'xxl') ||
        (xl && 'xl') ||
        (lg && 'lg') ||
        (md && 'md') ||
        (sm && 'sm')
}

// export const THEMES = ['light', 'dark'] as const
// export type TThemes = (typeof THEMES)[number]

// export function getTheme(
//   light: boolean | undefined,
//   dark: boolean | undefined,
//   theme: undefined | TThemes
// ): undefined | TThemes {
//   return isString(theme) && THEMES.includes(theme)
//     ? theme
//     : (dark && 'dark') || (light && 'light') || void 0
// }

export const VARIANTS = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',
] as const
export type TVariants = (typeof VARIANTS)[number]

export function getVariant(
  primary: boolean | undefined,
  secondary: boolean | undefined,
  success: boolean | undefined,
  info: boolean | undefined,
  warning: boolean | undefined,
  danger: boolean | undefined,
  light: boolean | undefined,
  dark: boolean | undefined,
  variant: undefined | TVariants
): undefined | TVariants {
  return isString(variant) && VARIANTS.includes(variant)
    ? variant
    : (dark && 'dark') ||
        (light && 'light') ||
        (danger && 'danger') ||
        (warning && 'warning') ||
        (info && 'info') ||
        (success && 'success') ||
        (secondary && 'secondary') ||
        (primary && 'primary') ||
        void 0
}

export const BUTTON_VARIANTS = [...VARIANTS, 'link'] as const
export type TButtonVariants = (typeof BUTTON_VARIANTS)[number]

export function getButtonVariant(
  primary: boolean | undefined,
  secondary: boolean | undefined,
  success: boolean | undefined,
  info: boolean | undefined,
  warning: boolean | undefined,
  danger: boolean | undefined,
  light: boolean | undefined,
  dark: boolean | undefined,
  link: boolean | undefined,
  variant: undefined | TButtonVariants
): undefined | TButtonVariants {
  return variant === 'link' || link
    ? 'link'
    : getVariant(
        primary,
        secondary,
        success,
        info,
        warning,
        danger,
        light,
        dark,
        variant
      )
}

// export const TEXT_COLOR_VARIANTS = [
//   ...VARIANTS,
//   'black',
//   'white',
//   'muted',
//   'reset',
// ] as const
// export type TTextColorVariants = (typeof TEXT_COLOR_VARIANTS)[number]

// export function getTextColorVariant(
//   primary: boolean | undefined,
//   secondary: boolean | undefined,
//   success: boolean | undefined,
//   info: boolean | undefined,
//   warning: boolean | undefined,
//   danger: boolean | undefined,
//   light: boolean | undefined,
//   dark: boolean | undefined,
//   black: boolean | undefined,
//   white: boolean | undefined,
//   muted: boolean | undefined,
//   reset: boolean | undefined,
//   variant: undefined | TTextColorVariants
// ): undefined | TTextColorVariants {
//   return isString(variant)
//     ? TEXT_COLOR_VARIANTS.includes(variant)
//       ? variant
//       : void 0
//     : variant ||
//         (reset && 'reset') ||
//         (muted && 'muted') ||
//         (white && 'white') ||
//         (black && 'black') ||
//         (dark && 'dark') ||
//         (light && 'light') ||
//         (danger && 'danger') ||
//         (warning && 'warning') ||
//         (primary && 'primary') ||
//         (info && 'info') ||
//         (success && 'success') ||
//         (secondary && 'secondary') ||
//         (primary && 'primary') ||
//         void 0
// }
