
import Sidebar, { SidebarBody, SidebarLink } from "../Components/sidebar";
import { IconHome, IconUser } from "@tabler/icons-react"; // Example icons

const links = [
  { label: "Home", href: "/", icon: <IconHome /> },
  { label: "Profile", href: "/profile", icon: <IconUser /> },
    
];

export default function MyPage() {
  return (
    <Sidebar>
      <SidebarBody>
        {links.map((link) => (
          <SidebarLink key={link.href} link={link} />
        ))}
      </SidebarBody>
    
    </Sidebar>
  );
}