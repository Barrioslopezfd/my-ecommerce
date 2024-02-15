export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Black",
        href: `/products?category=ui_kits`,
        imageSrc: "/nav/ui-kits/black.png",
      },
      {
        name: "Blue",
        href: "/products?category=ui_kits&sort=desc",
        imageSrc: "/nav/ui-kits/blue.png",
      },
      {
        name: "Green",
        href: "/products?category=ui_kits",
        imageSrc: "/nav/ui-kits/green.png",
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Solid",
        href: `/products?category=icons`,
        imageSrc: "/nav/icons/solid.png",
      },
      {
        name: "Regular",
        href: "/products?category=icons&sort=desc",
        imageSrc: "/nav/icons/regular.png",
      },
      {
        name: "Light",
        href: "/products?category=icons",
        imageSrc: "/nav/icons/light.png",
      },
      {
        name: "Thin",
        href: "/products?category=icons",
        imageSrc: "/nav/icons/thin.png",
      },
    ],
  },
];
