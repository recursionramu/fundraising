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
  IconSend,
  IconMessageCircle,
  IconMail,
  IconPhone
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

// Sample messages data
const sampleMessages = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "SJ",
    lastMessage: "Thank you for your donation!",
    time: "2 min ago",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "MC",
    lastMessage: "When will the campaign end?",
    time: "1 hour ago",
    unread: 0,
    online: false
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "ER",
    lastMessage: "I'd like to volunteer for your cause",
    time: "3 hours ago",
    unread: 1,
    online: true
  },
  {
    id: 4,
    name: "David Thompson",
    avatar: "DT",
    lastMessage: "Can you share more details about the project?",
    time: "1 day ago",
    unread: 0,
    online: false
  },
  {
    id: 5,
    name: "Lisa Wang",
    avatar: "LW",
    lastMessage: "The fundraiser is doing great!",
    time: "2 days ago",
    unread: 0,
    online: true
  }
];

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const filteredMessages = sampleMessages.filter(msg =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentChat = sampleMessages.find(msg => msg.id === selectedChat);

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
        <main className="flex-grow pb-40 px-4 md:px-10 pt-0 flex flex-col">
          <div className="max-w-6xl w-full mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Messages</h1>

            <div className="bg-white rounded-lg shadow-md h-[600px] flex">
              {/* Left Sidebar - Chat List */}
              <div className="w-1/3 border-r border-gray-200 flex flex-col">
                {/* Search Bar */}
                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search messages..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Chat List */}
                <div className="flex-1 overflow-y-auto">
                  {filteredMessages.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedChat === chat.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                            {chat.avatar}
                          </div>
                          {chat.online && (
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                            <span className="text-xs text-gray-500">{chat.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unread > 0 && (
                          <div className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {chat.unread}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Chat Area */}
              <div className="flex-1 flex flex-col">
                {currentChat ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                          {currentChat.avatar}
                        </div>
                        {currentChat.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{currentChat.name}</h3>
                        <p className="text-sm text-gray-500">
                          {currentChat.online ? "Online" : "Offline"}
                        </p>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                      <div className="space-y-4">
                        {/* Sample messages */}
                        <div className="flex justify-end">
                          <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs">
                            <p>Hi! How can I help you with your campaign?</p>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg px-4 py-2 max-w-xs shadow">
                            <p>Thank you for your donation!</p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs">
                            <p>You're welcome! I'm glad I could help.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex space-x-2">
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        />
                        <button
                          onClick={handleSendMessage}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          <IconSend className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <IconMessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                      <p>Select a conversation to start messaging</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MessagesPage;