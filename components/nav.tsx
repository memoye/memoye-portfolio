import { FaHome } from "react-icons/fa";
import { FloatingNav } from "./ui/floating-navbar";

export default function Nav() {
  return (
    <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />
  );
}
