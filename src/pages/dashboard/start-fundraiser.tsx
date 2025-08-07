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
  IconUpload,
  IconCalendar,
  IconTarget,
  IconPhoto
} from "@tabler/icons-react";
import Footer from "../../Components/Footer";

const links = [
  { label: "Overview", href: "/dashboard", icon: <IconHome /> },
  { label: "Profile", href: "/dashboard/profile", icon: <IconUser /> },
  { label: "Browse Fundraise", href: "/dashboard/browsefundraiser", icon: <IconTableDashed /> },
  { label: "Withdraw", href: "/dashboard/withdraw", icon: <IconCoinFilled /> },
  { label: "Messages", href: "/dashboard/messages", icon: <IconBellRingingFilled /> },
  { label: "Start Fundraiser", href: "/dashboard/start-fundraiser", icon: <IconPlus /> },
];

const logoutLink = {
  label: "Logout",
  href: "/logout",
  icon: <IconLogout />,
};

const CATEGORIES = [
  "Medical & Health",
  "Education",
  "Community & Social",
  "Emergency & Disaster",
  "Animal Welfare",
  "Arts & Culture",
  "Sports & Recreation",
  "Environment",
  "Other"
];

const StartFundraiserPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    goal: "",
    endDate: "",
    description: "",
    story: "",
    image: null as File | null
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating fundraiser:", formData);
    // Here you would typically send the data to your backend
    alert("Fundraiser created successfully!");
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
        <main className="flex-grow pb-0 px-4 md:px-10 pt-2 flex flex-col">
          <div className="max-w-4xl w-full mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 pt-0">Start a Fundraiser</h1>

            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Basic Information
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Campaign Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your campaign title"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select a category</option>
                        {CATEGORIES.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fundraising Goal ($) *
                      </label>
                      <input
                        type="number"
                        name="goal"
                        value={formData.goal}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0.00"
                        min="1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date *
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Campaign Image */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Campaign Image
                  </h2>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {imagePreview ? (
                      <div className="space-y-4">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-64 h-48 object-cover rounded-lg mx-auto"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImagePreview(null);
                            setFormData(prev => ({ ...prev, image: null }));
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove Image
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <IconPhoto className="w-12 h-12 text-gray-400 mx-auto" />
                        <div>
                          <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            <IconUpload className="w-4 h-4 inline mr-2" />
                            Upload Image
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                              className="hidden"
                            />
                          </label>
                        </div>
                        <p className="text-sm text-gray-500">
                          Upload a compelling image for your campaign (JPG, PNG, max 5MB)
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Campaign Description */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Campaign Details
                  </h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Short Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Brief description of your campaign (max 200 characters)"
                      maxLength={200}
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {formData.description.length}/200 characters
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Story *
                    </label>
                    <textarea
                      name="story"
                      value={formData.story}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell your story. Why are you fundraising? What will the funds be used for?"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Create Fundraiser
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default StartFundraiserPage;