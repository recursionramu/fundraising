
import Sidebar, { SidebarBody, SidebarLink } from "../../Components/sidebar";
import { IconHome, IconUser, IconSettings, IconLogout,IconBellRingingFilled,IconCoinFilled} from "@tabler/icons-react";
import Footer from "../../Components/Footer";

const links = [
  { label: "Overview", href: "/dashboard", icon: <IconHome /> },
  { label: "Profile", href: "/Profile", icon: <IconUser /> },
  { label: "Settings", href: "/Settings", icon: <IconSettings/> },
  { label: "Withdraw", href: "/Withdraw", icon: <IconCoinFilled /> },
  { label: "Messages", href: "/Messages", icon: <IconBellRingingFilled />}
];

const logoutLink = {
  label: "Logout",
  href: "/logout",
  icon: <IconLogout />
};

export default function MyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-white">
      
      <Sidebar>
        <SidebarBody className="justify-between gap-10 pb-180 pt-30">
          {/* Main Navigation Links */}
          
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <SidebarLink key={link.href} link={link} />
            ))}
          </div>
          
          {/* Logout at Bottom */}
          <div className="border-t border-gray-200 pt-4">
            <SidebarLink link={logoutLink} />
          </div>
        </SidebarBody>
      </Sidebar>
      <Footer />
    </div>
  );
}
