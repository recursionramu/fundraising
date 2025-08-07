import React, { useState } from "react";
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

// Navigation links (unchanged)
const links = [
  { label: "Overview", href: "/dashboard", icon: <IconHome /> },
  { label: "Profile", href: "/dashboard/profile", icon: <IconUser /> },
  { label: "Settings", href: "/dashboard/settings", icon: <IconSettings /> },
  { label: "Withdraw", href: "/dashboard/withdraw", icon: <IconCoinFilled /> },
  { label: "Messages", href: "/dashboard/messages", icon: <IconBellRingingFilled /> },
  { label: "Start Fundraiser", href: "/dashboard/start-fundraiser", icon: <IconPlus /> },
];

// Logout link (unchanged)
const logoutLink = {
  label: "Logout",
  href: "/logout",
  icon: <IconLogout />,
};

// Family member relation options (unchanged)
const RELATIONSHIPS = [
  "Father",
  "Mother",
  "Spouse",
  "Son",
  "Daughter",
  "Brother",
  "Sister",
  "Other",
];

// Occupation options (unchanged)
const OCCUPATIONS = [
  "Self Employed",
  "Businessman",
  "Salaried",
  "Government Employee",
  "Student",
  "Retired",
  "Unemployed",
  "Other",
];

// Sample countries for phone input with dial codes (unchanged)
const COUNTRIES = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Australia", code: "+61" },
  { name: "Canada", code: "+1" },
  { name: "Pakistan", code: "+92" },
  { name: "Bangladesh", code: "+880" },
  { name: "Nepal", code: "+977" },
];

const ProfilePage = () => {
  const [family, setFamily] = useState<{ name: string; relation: string }[]>([]);
  const [occupation, setOccupation] = useState(OCCUPATIONS[0]);
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [phone, setPhone] = useState("");

  const handleAddMember = () => {
    setFamily([...family, { name: "", relation: "" }]);
  };

  const handleMemberChange = (
    idx: number,
    key: "name" | "relation",
    value: string
  ) => {
    setFamily(family.map((f, i) => (i === idx ? { ...f, [key]: value } : f)));
  };

  const removeMember = (idx: number) => {
    setFamily(family.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-white">
      {/* Flex container for sidebar and content */}
      <div className="flex min-h-screen">
        {/* Sidebar with fixed width */}
        <Sidebar className="w-[300px] shrink-0">
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

        {/* Content area immediately next to sidebar */}
        <main
          className="flex-grow pt-0 px-110 pb-8"
          style={{ minHeight: "100vh" }}
        >
          {/* Removed mt-24 margin so card is at the very top */}
          <div className="max-w-2xl w-full">
            <h1 className="text-3xl font-bold text-gray-950 mb-6">Edit My Profile</h1>

            <div className="bg-white rounded-lg shadow-md pt-2 px-6 pb-6 space-y-8">
              {/* Profile Picture and Basic Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <IconUser className="w-10 h-10 text-gray-950" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-950">John Doe</h2>
                  <p className="text-gray-950">john.doe@example.com</p>
                </div>
              </div>

              <form className="space-y-8">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-950 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      defaultValue="Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-950 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      defaultValue="Last name"
                    />
                  </div>
                </div>

                {/* Email and Phone with Country Code */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-950 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      defaultValue="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-950 mb-1">
                      Phone
                    </label>
                    <div className="flex">
                      <select
                        className="border border-gray-300 rounded-l-md px-2 py-2 bg-gray-100 focus:outline-none"
                        value={country.code}
                        onChange={(e) => {
                          const c = COUNTRIES.find(
                            (ct) => ct.code === e.target.value
                          );
                          if (c) setCountry(c);
                        }}
                      >
                        {COUNTRIES.map((cty) => (
                          <option key={cty.code} value={cty.code}>
                            {cty.name} ({cty.code})
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border-t border-b border-r border-gray-300 rounded-r-md"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-950 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="123 Main St, Springfield"
                  />
                </div>

                {/* Occupation & Education */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-950 mb-1">
                      Occupation
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    >
                      {OCCUPATIONS.map((occ) => (
                        <option key={occ} value={occ}>
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-950 mb-1">
                      Education
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="College/University name"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-gray-950 mb-1">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    defaultValue="Passionate fundraiser helping communities in need."
                  />
                </div>

                {/* Family Members Section */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-950">
                      Family Members
                    </label>
                    <button
                      type="button"
                      className="flex items-center text-blue-600 px-2 py-1 rounded hover:bg-blue-50"
                      onClick={handleAddMember}
                    >
                      <IconPlus className="w-4 h-4 mr-1" /> Add Member
                    </button>
                  </div>
                  <div className="space-y-4">
                    {family.length === 0 && (
                      <div className="text-gray-950 text-sm">
                        No family members added.
                      </div>
                    )}
                    {family.map((member, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-gray-50 p-3 rounded-md"
                      >
                        <select
                          className="border border-gray-300 rounded px-2 py-1"
                          value={member.relation}
                          onChange={(e) =>
                            handleMemberChange(idx, "relation", e.target.value)
                          }
                          required
                        >
                          <option value="">Select Relation</option>
                          {RELATIONSHIPS.map((rel) => (
                            <option key={rel} value={rel}>
                              {rel}
                            </option>
                          ))}
                        </select>
                        <input
                          type="text"
                          placeholder="Name"
                          className="border border-gray-950 rounded px-2 py-1 flex-1"
                          value={member.name}
                          onChange={(e) =>
                            handleMemberChange(idx, "name", e.target.value)
                          }
                          required
                        />
                        <button
                          type="button"
                          className="text-red-500 px-2 py-1 hover:bg-red-100 rounded"
                          onClick={() => removeMember(idx)}
                          title="Remove"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Save button */}
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
