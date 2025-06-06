export function getTheme(subdomain: "main" | "beta" = "main") {
  const isBeta = subdomain === "beta"

  return {
    header: {
      background: isBeta ? "bg-gray-900" : "bg-black",
      border: "border-gray-800",
      text: isBeta ? "text-white" : "text-white",
      logo: {
        text: "text-white",
        accent: "text-yellow-500",
      },
      navigation: {
        link: "text-gray-300 hover:text-yellow-500",
      },
      cta: {
        primary: "bg-yellow-500 hover:bg-yellow-600 text-black",
      },
    },
  }
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ")
}
