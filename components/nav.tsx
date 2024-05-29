import { FaHome } from "react-icons/fa";
import { FloatingNav } from "./ui/floating-navbar";
import { navItems } from "@/data";

export default function Nav() {
  return <FloatingNav navItems={navItems} />;
}
