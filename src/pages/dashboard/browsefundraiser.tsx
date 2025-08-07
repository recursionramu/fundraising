import React, { useState } from "react";
import Sidebar, { SidebarBody, SidebarLink } from "../../Components/sidebar";
import {
  IconHome,
  IconUser,
  IconLogout,
  IconBellRingingFilled,
  IconCoinFilled,
  IconPlus,
  IconTableDashed,
  IconSearch,
  IconFilter,
  IconHeart,
  IconShare,
  IconEye
} from "@tabler/icons-react";
import Footer from "../../Components/Footer";

const links = [
  { label: "Overview", href: "/dashboard", icon: <IconHome /> },
  { label: "Profile", href: "/dashboard/profile", icon: <IconUser /> },
  { label: "Browse Fundraise", href: "/dashboard/browsefundraiser", icon: <IconTableDashed /> },
  { label: "Withdraw", href: "/dashboard/withdraw", icon: <IconCoinFilled /> },
  { label: "Messages", href: "/dashboard/messages", icon: <IconBellRingingFilled /> },
  { label: "Start Fundraiser", href: "/dashboard/startafundraiser", icon: <IconPlus /> },
];

const logoutLink = {
  label: "Logout",
  href: "/logout",
  icon: <IconLogout />,
};

// Sample fundraisers data
const sampleFundraisers = [
  {
    id: 1,
    title: "Help Sarah's Medical Treatment",
    category: "Medical & Health",
    image: "/images/home.jpeg",
    goal: 15000,
    raised: 12000,
    daysLeft: 15,
    organizer: "Sarah Johnson",
    description: "Supporting Sarah's cancer treatment journey.",
    featured: true
  },
  {
    id: 2,
    title: "Community Library Project",
    category: "Education",
    image: "/images/home2.jpeg",
    goal: 25000,
    raised: 18000,
    daysLeft: 8,
    organizer: "Local Education Foundation",
    description: "Building a new library for our community children.",
    featured: false
  },
  {
    id: 3,
    title: "Animal Shelter Renovation",
    category: "Animal Welfare",
    image: "/images/home3.jpeg",
    goal: 8000,
    raised: 6500,
    daysLeft: 22,
    organizer: "Paws & Care",
    description: "Renovating our animal shelter to provide better care.",
    featured: true
  },
  {
    id: 4,
    title: "Disaster Relief Fund",
    category: "Emergency & Disaster",
    image: "/images/home.jpeg",
    goal: 50000,
    raised: 42000,
    daysLeft: 5,
    organizer: "Relief Organization",
    description: "Providing immediate relief to affected communities.",
    featured: false
  },
  {
    id: 5,
    title: "Youth Sports Equipment",
    category: "Sports & Recreation",
    image: "/images/home2.jpeg",
    goal: 5000,
    raised: 3200,
    daysLeft: 30,
    organizer: "Community Sports Club",
    description: "Providing sports equipment for underprivileged youth.",
    featured: false
  },
  {
    id: 6,
    title: "Environmental Cleanup",
    category: "Environment",
    image: "/images/home3.jpeg",
    goal: 12000,
    raised: 8900,
    daysLeft: 12,
    organizer: "Green Earth Initiative",
    description: "Cleaning up local beaches and parks.",
    featured: true
  }
];

const CATEGORIES = [
  "All Categories",
  "Medical & Health",
  "Education",
  "Community & Social",
  "Emergency & Disaster",
  "Animal Welfare",
  "Arts & Culture",
  "Sports & Recreation",
  "Environment"
];

const BrowseFundraiserPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("featured");

  const filteredFundraisers = sampleFundraisers.filter(fundraiser => {
    const matchesSearch = fundraiser.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fundraiser.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || fundraiser.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedFundraisers = [...filteredFundraisers].sort((a, b) => {
    switch (sortBy) {
      case "featured":
        return b.featured ? 1 : -1;
      case "ending":
        return a.daysLeft - b.daysLeft;
      case "goal":
        return b.goal - a.goal;
      case "raised":
        return b.raised - a.raised;
      default:
        return 0;
    }
  });

  const handleDonate = (fundraiserId: number) => {
    console.log("Donating to fundraiser:", fundraiserId);
    // Here you would typically redirect to donation page
    alert("Redirecting to donation page...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 to-white flex flex-col">
      <div className="flex flex-1 min-h-screen">
        {/* Sidebar */}
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
        <main className="flex-grow pb-0 px-4 md:px-10 pt-0 flex flex-col">
          <div className="max-w-7xl w-full mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 pt-10 px-10">Browse Fundraisers</h1>

            {/* Filters and Search */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search fundraisers..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured First</option>
                  <option value="ending">Ending Soon</option>
                  <option value="goal">Highest Goal</option>
                  <option value="raised">Most Raised</option>
                </select>

                <div className="text-sm text-gray-600 flex items-center">
                  <IconFilter className="w-4 h-4 mr-2" />
                  {filteredFundraisers.length} fundraisers found
                </div>
              </div>
            </div>

            {/* Fundraisers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedFundraisers.map((fundraiser) => (
                <div key={fundraiser.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={fundraiser.image}
                      alt={fundraiser.title}
                      className="w-full h-48 object-cover"
                    />
                    {fundraiser.featured && (
                      <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <button className="bg-white bg-opacity-80 p-1 rounded-full hover:bg-opacity-100 transition-colors">
                        <IconHeart className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="bg-white bg-opacity-80 p-1 rounded-full hover:bg-opacity-100 transition-colors">
                        <IconShare className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                        {fundraiser.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {fundraiser.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {fundraiser.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>${fundraiser.raised.toLocaleString()} raised</span>
                        <span>${fundraiser.goal.toLocaleString()} goal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${Math.min((fundraiser.raised / fundraiser.goal) * 100, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                      <span>by {fundraiser.organizer}</span>
                      <span>{fundraiser.daysLeft} days left</span>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDonate(fundraiser.id)}
                        className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                      >
                        Donate Now
                      </button>
                      <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <IconEye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {sortedFundraisers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No fundraisers found matching your criteria.</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseFundraiserPage;