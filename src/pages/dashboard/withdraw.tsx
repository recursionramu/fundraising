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
  IconBan,
  IconCreditCard,
  IconWallet,
  IconDownload,
  IconRefresh,
  IconCheck,
  IconX,
  IconAlertCircle,
  IconInfoCircle
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

// Sample withdrawal history
const withdrawalHistory = [
  {
    id: 1,
    amount: 2500,
    method: "Bank Transfer",
    status: "Completed",
    date: "2024-01-15",
    account: "****1234",
    campaign: "Medical Treatment Fund"
  },
  {
    id: 2,
    amount: 1800,
    method: "PayPal",
    status: "Pending",
    date: "2024-01-12",
    account: "john.doe@email.com",
    campaign: "Education Fund"
  },
  {
    id: 3,
    amount: 3200,
    method: "Bank Transfer",
    status: "Failed",
    date: "2024-01-10",
    account: "****5678",
    campaign: "Community Project"
  },
  {
    id: 4,
    amount: 950,
    method: "Stripe",
    status: "Completed",
    date: "2024-01-08",
    account: "****9012",
    campaign: "Animal Shelter"
  }
];

// Sample refund requests
const refundRequests = [
  {
    id: 1,
    donorName: "Sarah Johnson",
    amount: 100,
    reason: "Accidental donation",
    status: "Pending",
    date: "2024-01-14",
    campaign: "Medical Treatment Fund"
  },
  {
    id: 2,
    donorName: "Mike Chen",
    amount: 50,
    reason: "Changed mind",
    status: "Approved",
    date: "2024-01-13",
    campaign: "Education Fund"
  },
  {
    id: 3,
    donorName: "Emily Rodriguez",
    amount: 200,
    reason: "Duplicate transaction",
    status: "Rejected",
    date: "2024-01-12",
    campaign: "Community Project"
  }
];

const WithdrawPage = () => {
  const [activeTab, setActiveTab] = useState("withdraw");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [bankDetails, setBankDetails] = useState({
    accountNumber: "",
    routingNumber: "",
    accountName: ""
  });
  const [paypalEmail, setPaypalEmail] = useState("");
  const [stripeAccount, setStripeAccount] = useState("");

  const availableBalance = 12500; // Sample balance
  const pendingAmount = 1800;
  const totalRaised = 15600;

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Processing withdrawal:", {
      amount: withdrawAmount,
      method: selectedMethod,
      bankDetails,
      paypalEmail,
      stripeAccount
    });
    alert("Withdrawal request submitted successfully!");
  };

  const handleRefundAction = (refundId: number, action: "approve" | "reject") => {
    console.log(`${action} refund:`, refundId);
    alert(`Refund ${action}d successfully!`);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
      case "approved":
        return "text-green-600 bg-green-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "failed":
      case "rejected":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
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
        <main className="flex-grow pb-40 px-4 md:px-10 pt-0 flex flex-col">
          <div className="max-w-6xl w-full mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Withdraw & Refunds</h1>

            {/* Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Available Balance</h3>
                    <p className="text-3xl font-bold text-green-600">${availableBalance.toLocaleString()}</p>
                  </div>
                  <IconWallet className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Pending Amount</h3>
                    <p className="text-3xl font-bold text-yellow-600">${pendingAmount.toLocaleString()}</p>
                  </div>
                  <IconRefresh className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Raised</h3>
                    <p className="text-3xl font-bold text-blue-600">${totalRaised.toLocaleString()}</p>
                  </div>
                  <IconCoinFilled className="w-8 h-8 text-blue-500" />
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  <button
                    onClick={() => setActiveTab("withdraw")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "withdraw"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Withdraw Funds
                  </button>
                  <button
                    onClick={() => setActiveTab("history")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "history"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Withdrawal History
                  </button>
                  <button
                    onClick={() => setActiveTab("refunds")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "refunds"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    Refund Requests
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {/* Withdraw Funds Tab */}
                {activeTab === "withdraw" && (
                  <div className="max-w-2xl">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Request Withdrawal</h2>
                    
                    <form onSubmit={handleWithdraw} className="space-y-6">
                      {/* Amount */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Withdrawal Amount ($)
                        </label>
                        <input
                          type="number"
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter amount"
                          min="1"
                          max={availableBalance}
                          required
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Available: ${availableBalance.toLocaleString()}
                        </p>
                      </div>

                      {/* Payment Method */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Payment Method
                        </label>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="method"
                              value="bank"
                              checked={selectedMethod === "bank"}
                              onChange={(e) => setSelectedMethod(e.target.value)}
                              className="text-blue-500"
                            />
                            <IconBan className="w-5 h-5 text-gray-600" />
                            <span>Bank Transfer</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="method"
                              value="paypal"
                              checked={selectedMethod === "paypal"}
                              onChange={(e) => setSelectedMethod(e.target.value)}
                              className="text-blue-500"
                            />
                            <IconCreditCard className="w-5 h-5 text-gray-600" />
                            <span>PayPal</span>
                          </label>
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="method"
                              value="stripe"
                              checked={selectedMethod === "stripe"}
                              onChange={(e) => setSelectedMethod(e.target.value)}
                              className="text-blue-500"
                            />
                            <IconWallet className="w-5 h-5 text-gray-600" />
                            <span>Stripe</span>
                          </label>
                        </div>
                      </div>

                      {/* Method-specific fields */}
                      {selectedMethod === "bank" && (
                        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Account Name
                            </label>
                            <input
                              type="text"
                              value={bankDetails.accountName}
                              onChange={(e) => setBankDetails({...bankDetails, accountName: e.target.value})}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Account holder name"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Account Number
                              </label>
                              <input
                                type="text"
                                value={bankDetails.accountNumber}
                                onChange={(e) => setBankDetails({...bankDetails, accountNumber: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Account number"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Routing Number
                              </label>
                              <input
                                type="text"
                                value={bankDetails.routingNumber}
                                onChange={(e) => setBankDetails({...bankDetails, routingNumber: e.target.value})}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Routing number"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedMethod === "paypal" && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            PayPal Email
                          </label>
                          <input
                            type="email"
                            value={paypalEmail}
                            onChange={(e) => setPaypalEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="your-email@paypal.com"
                            required
                          />
                        </div>
                      )}

                      {selectedMethod === "stripe" && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Stripe Account ID
                          </label>
                          <input
                            type="text"
                            value={stripeAccount}
                            onChange={(e) => setStripeAccount(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="acct_xxxxxxxxxxxxx"
                            required
                          />
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                      >
                        Request Withdrawal
                      </button>
                    </form>
                  </div>
                )}

                {/* Withdrawal History Tab */}
                {activeTab === "history" && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Withdrawal History</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Method
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Account
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Campaign
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {withdrawalHistory.map((withdrawal) => (
                            <tr key={withdrawal.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {new Date(withdrawal.date).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                ${withdrawal.amount.toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {withdrawal.method}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {withdrawal.account}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {withdrawal.campaign}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(withdrawal.status)}`}>
                                  {withdrawal.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Refund Requests Tab */}
                {activeTab === "refunds" && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Refund Requests</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Donor
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Campaign
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Reason
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {refundRequests.map((refund) => (
                            <tr key={refund.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {new Date(refund.date).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {refund.donorName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                ${refund.amount.toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {refund.campaign}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {refund.reason}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(refund.status)}`}>
                                  {refund.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                {refund.status === "Pending" && (
                                  <div className="flex space-x-2">
                                    <button
                                      onClick={() => handleRefundAction(refund.id, "approve")}
                                      className="text-green-600 hover:text-green-900"
                                    >
                                      <IconCheck className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleRefundAction(refund.id, "reject")}
                                      className="text-red-600 hover:text-red-900"
                                    >
                                      <IconX className="w-4 h-4" />
                                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <IconInfoCircle className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Withdrawal Information</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Minimum withdrawal: $50</li>
                      <li>• Processing time: 3-5 business days</li>
                      <li>• Bank transfers may take 1-3 days</li>
                      <li>• PayPal transfers are instant</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <IconAlertCircle className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">Refund Policy</h3>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Refunds processed within 7 days</li>
                      <li>• Valid reasons required for approval</li>
                      <li>• Duplicate transactions automatically refunded</li>
                      <li>• Contact support for urgent refunds</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default WithdrawPage;