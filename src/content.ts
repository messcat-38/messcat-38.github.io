export const site = {
  name: "messcat",
  tagline: "Nerd Engineer",
  blurb: "Exploring minds, machines, and everything in between.",
  githubUrl: "https://github.com/messcat-38",
  githubLabel: "github.com/messcat-38",
  bitcoinLabel: "Bitcoin",
  bitcoinAddress: "bc1q759dvlcepzy8dkjvh4fetc9jttz0qw7mge8gfk",
  protonWalletLabel: "Proton Wallet",
  protonWalletEmail: "uouoxoxou[at]protonmail.com",
} as const

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#product", label: "Product" },
  { href: "#contact", label: "Contact" },
] as const

export const product = {
  name: "messmap",
  description: "日記から生成する思考拡張マインドマップ",
  image: {
    src: "/messmap.png",
    alt: "messmap — circular cluster mind map",
    width: 886,
    height: 793,
  },
} as const
