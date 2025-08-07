import Sidebar, { SidebarBody, SidebarLink } from "../../Components/sidebar";
import {
  IconHome,
  IconUser,
  IconSettings,
  IconLogout,
  IconBellRingingFilled,
  IconCoinFilled,
  IconPlus,
} from "@tabler/icons-react";
import Footer from "../../Components/Footer";

const links = [
  { label: "Overview", href: "/dashboard", icon: <IconHome /> },
  { label: "Profile", href: "/dashboard/profile", icon: <IconUser /> },
  { label: "Settings", href: "/dashboard/settings", icon: <IconSettings /> },
  { label: "Withdraw", href: "/dashboard/withdraw", icon: <IconCoinFilled /> },
  { label: "Messages", href: "/dashboard/messages", icon: <IconBellRingingFilled /> },
  { label: "Start Fundraiser", href: "/dashboard/start-fundraiser", icon: <IconPlus /> },
];

const logoutLink = {
  label: "Logout",
  href: "/logout",
  icon: <IconLogout />,
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-white flex flex-col">
      <div className="flex flex-1 min-h-screen">
        {/* Sidebar fixed width and full height */}
        <div className="w-[300px] shrink-0">
          <Sidebar>
            <SidebarBody className="justify-between gap-10 pb-180 pt-30">
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <SidebarLink key={link.href} link={link} />
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <SidebarLink link={logoutLink} />
              </div>
            </SidebarBody>
          </Sidebar>
        </div>

        {/* Main Content */}
        <main
          className="flex-grow pb-40 px-4 md:px-10 pt-0 flex flex-col items-start"
          style={{ minHeight: "100vh" }}
        >
          <div className="max-w-4xl w-full mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Raised</h3>
                <p className="text-3xl font-bold text-green-600">$12,450</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Active Campaigns</h3>
                <p className="text-3xl font-bold text-blue-600">3</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Donors</h3>
                <p className="text-3xl font-bold text-purple-600">156</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {Array(5).fill(null).map((_, i) => (
                  <div
                    key={`donation-${i}`}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-gray-800">New donation received</p>
                      <p className="text-sm text-gray-600">$250 from John Doe</p>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                ))}

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-800">Campaign milestone reached</p>
                    <p className="text-sm text-gray-600">Education Fund - 75% complete</p>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
