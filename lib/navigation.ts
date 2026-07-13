export interface NavItem {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: "Explore", href: "#explore" },
  { label: "Workflow", href: "#workflow" },
  { label: "Tools", href: "#tools" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "About", href: "#about" },
]

export const footerNav: NavItem[] = mainNav