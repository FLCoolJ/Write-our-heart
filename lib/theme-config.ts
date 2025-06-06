// Theme configuration for different contexts
export const themeConfig = {
  // Main site theme
  main: {
    header: {
      background: "bg-white",
      text: "text-gray-900",
      border: "border-gray-200",
      logo: {
        text: "text-gray-900",
        accent: "text-yellow-500",
      },
      navigation: {
        link: "text-gray-600 hover:text-gray-900",
        activeLink: "text-gray-900 font-medium",
      },
      cta: {
        primary: "bg-yellow-500 hover:bg-yellow-600 text-black",
        secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50",
      },
    },
    hero: {
      background: "bg-gradient-to-br from-yellow-50 to-orange-50",
      title: "text-gray-900",
      subtitle: "text-gray-600",
      cta: {
        primary: "bg-yellow-500 hover:bg-yellow-600 text-black",
        secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50",
      },
    },
    card: {
      background: "bg-white",
      border: "border-gray-200",
      shadow: "shadow-sm hover:shadow-md",
      title: "text-gray-900",
      text: "text-gray-600",
    },
    button: {
      primary: "bg-yellow-500 hover:bg-yellow-600 text-black font-medium",
      secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
      ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    },
  },

  // Beta site theme
  beta: {
    header: {
      background: "bg-gray-900",
      text: "text-white",
      border: "border-gray-700",
      logo: {
        text: "text-white",
        accent: "text-yellow-400",
      },
      navigation: {
        link: "text-gray-300 hover:text-white",
        activeLink: "text-white font-medium",
      },
      cta: {
        primary: "bg-yellow-500 hover:bg-yellow-600 text-black",
        secondary: "border border-gray-600 text-gray-300 hover:bg-gray-800",
      },
    },
    hero: {
      background: "bg-gray-900",
      title: "text-white",
      subtitle: "text-gray-300",
      cta: {
        primary: "bg-yellow-500 hover:bg-yellow-600 text-black",
        secondary: "border border-gray-600 text-gray-300 hover:bg-gray-800",
      },
    },
    card: {
      background: "bg-gray-800",
      border: "border-gray-700",
      shadow: "shadow-lg",
      title: "text-white",
      text: "text-gray-300",
    },
    button: {
      primary: "bg-yellow-500 hover:bg-yellow-600 text-black font-medium",
      secondary: "bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700",
      ghost: "text-gray-300 hover:text-white hover:bg-gray-800",
    },
  },
} as const

// Utility function to get theme based on context
export function getTheme(context: "main" | "beta" = "main") {
  return themeConfig[context]
}

// Utility function to combine classes
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}

// Common component variants
export const componentVariants = {
  button: {
    sizes: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl",
    },
    variants: {
      primary: "font-medium rounded-lg transition-colors duration-200",
      secondary: "font-medium rounded-lg transition-colors duration-200",
      ghost: "font-medium rounded-lg transition-colors duration-200",
    },
  },
  card: {
    variants: {
      default: "rounded-lg transition-shadow duration-200",
      elevated: "rounded-xl transition-all duration-200",
      flat: "rounded-lg border transition-colors duration-200",
    },
    padding: {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
  },
  input: {
    variants: {
      default: "rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2",
      filled: "rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2",
    },
    sizes: {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
} as const

export type ThemeContext = keyof typeof themeConfig
export type ButtonSize = keyof typeof componentVariants.button.sizes
export type ButtonVariant = keyof typeof componentVariants.button.variants
export type CardVariant = keyof typeof componentVariants.card.variants
export type CardPadding = keyof typeof componentVariants.card.padding
