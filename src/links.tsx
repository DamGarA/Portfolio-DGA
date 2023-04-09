interface Link {
  label: string;
  route: string;
}

const links: Link[] = [
  { label: "About", route: "/about" },
  { label: "Skills", route: "/skills" },
  { label: "Work", route: "/work" },
  { label: "Contact me", route: "/contact" },
];

export default links;
