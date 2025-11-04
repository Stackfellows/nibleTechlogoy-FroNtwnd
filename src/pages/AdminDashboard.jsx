import React, { useState, useEffect } from "react";
import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  User,
  Package,
  AlertCircle,
  BarChart3,
  MessageSquare,
  FileText,
  DollarSign as DollarSignIcon,
  Plus,
  Edit,
  Trash,
  Eye,
  X,
  Send,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// --- Helper Functions ---
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid Date";
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  } catch (e) {
    console.error("Error formatting date:", e);
    return "Invalid Date";
  }
};

const formatToPKR = (amount) => {
  if (isNaN(amount) || amount === null) return "N/A";
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const getStatusBadgeClass = (status) => {
  switch (status) {
    case "Active":
    case "Replied":
    case "Completed":
      return "bg-purple-100 text-purple-800";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800";
    case "New":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

const PIE_COLORS = ["#6B46C1", "#808080", "#A9A9A9", "#D3D3D3"];

// --- Main Component ---
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [agreements, setAgreements] = useState([]);
  const [messages, setMessages] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalReceivedPayments, setTotalReceivedPayments] = useState(0);
  const [newAgreement, setNewAgreement] = useState({
    client: "",
    email: "",
    project: "",
    amount: "",
    receivedPayment: "",
    deadline: "",
    status: "Active",
  });
  const [newExpense, setNewExpense] = useState({
    name: "",
    email: "",
    type: "Company",
    category: "",
    description: "",
    amount: "",
    date: new Date().toISOString().slice(0, 10),
    image: null, // ✅ New: Add state for the image file
  });
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [editingAgreement, setEditingAgreement] = useState(null);
  const [replyText, setReplyText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!loggedIn) {
      navigate("");
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const agreementsRes = await axios.get(
        "http://localhost:5000/api/agreements"
      );
      setAgreements(agreementsRes.data);

      const totalIncomeAmount = agreementsRes.data.reduce(
        (acc, curr) => acc + curr.totalAmount,
        0
      );
      setTotalIncome(totalIncomeAmount);

      const totalReceived = agreementsRes.data.reduce(
        (acc, curr) => acc + (curr.receivedPayment || 0),
        0
      );
      setTotalReceivedPayments(totalReceived);

      const messagesRes = await axios.get("http://localhost:5000/api/messages");
      setMessages(messagesRes.data);

      const expensesRes = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(expensesRes.data);
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("");
  };

  const handleNewAgreementChange = (e) => {
    const { name, value } = e.target;
    setNewAgreement((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewAgreementSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingAgreement) {
        await axios.put(
          `http://localhost:5000/api/agreements/${editingAgreement._id}`,
          {
            clientName: newAgreement.client,
            clientEmail: newAgreement.email,
            project: newAgreement.project,
            totalAmount: parseFloat(newAgreement.amount),
            receivedPayment: parseFloat(newAgreement.receivedPayment),
            agreementEnd: newAgreement.deadline,
            status: newAgreement.status,
          }
        );
        toast.success("Agreement updated successfully!");
        setEditingAgreement(null);
      } else {
        await axios.post("http://localhost:5000/api/agreements", {
          clientName: newAgreement.client,
          clientEmail: newAgreement.email,
          project: newAgreement.project,
          totalAmount: parseFloat(newAgreement.amount),
          receivedPayment: parseFloat(newAgreement.receivedPayment),
          agreementEnd: newAgreement.deadline,
          status: newAgreement.status,
        });
        toast.success("New agreement added successfully!");
      }
      fetchData();
      setShowModal(false);
      setNewAgreement({
        client: "",
        email: "",
        project: "",
        amount: "",
        receivedPayment: "",
        deadline: "",
        status: "Active",
      });
    } catch (error) {
      toast.error("Error saving agreement.");
      console.error("Error saving agreement:", error);
    }
  };

  const handleEditAgreement = (agreement) => {
    setEditingAgreement(agreement);
    setNewAgreement({
      client: agreement.clientName,
      email: agreement.clientEmail || "",
      project: agreement.project,
      amount: agreement.totalAmount,
      receivedPayment: agreement.receivedPayment,
      deadline: agreement.agreementEnd
        ? agreement.agreementEnd.split("T")[0]
        : "",
      status: agreement.status,
    });
    setModalType("agreement");
    setShowModal(true);
  };

  const handleDeleteAgreement = async (id) => {
    if (window.confirm("Are you sure you want to delete this agreement?")) {
      try {
        await axios.delete(`http://localhost:5000/api/agreements/${id}`);
        toast.success("Agreement deleted successfully!");
        fetchData();
      } catch (error) {
        toast.error("Error deleting agreement.");
        console.error("Error deleting agreement:", error);
      }
    }
  };

  const handleNewExpenseChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setNewExpense((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleNewExpenseSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = null;

    try {
      // ✅ New: Image ko Cloudinary par upload kar rahe hain
      if (newExpense.image) {
        const formData = new FormData();
        formData.append("image", newExpense.image);
        const uploadRes = await axios.post(
          "http://localhost:5000/api/images/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        imageUrl = uploadRes.data.imageUrl;
      }

      // ✅ Updated: Image URL ko expense data ke saath bhej rahe hain
      await axios.post("http://localhost:5000/api/expenses", {
        name: newExpense.name,
        email: newExpense.email,
        type: newExpense.type,
        category: newExpense.category,
        description: newExpense.description,
        amount: parseFloat(newExpense.amount),
        date: newExpense.date,
        imageUrl: imageUrl, // ✅ New field
      });

      toast.success("Expense added successfully!");
      fetchData();
      setShowModal(false);
      setNewExpense({
        name: "",
        email: "",
        type: "Company",
        category: "",
        description: "",
        amount: "",
        date: new Date().toISOString().slice(0, 10),
        image: null,
      });
    } catch (error) {
      toast.error("Error adding new expense.");
      console.error("Error adding new expense:", error);
    }
  };

  const handleEditExpense = (expense) => {
    // Implement edit functionality if needed
    // setEditingExpense(expense);
    // setModalType("expense");
    // setShowModal(true);
  };

  const handleDeleteExpense = async (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      try {
        await axios.delete(`http://localhost:5000/api/expenses/${id}`);
        toast.success("Expense deleted successfully!");
        fetchData();
      } catch (error) {
        toast.error("Error deleting expense.");
        console.error("Error deleting expense:", error);
      }
    }
  };

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    setModalType("view-message");
    setShowModal(true);
  };

  const handleReplyClick = (message) => {
    setSelectedMessage(message);
    setModalType("reply-message");
    setShowModal(true);
  };

  const handleSendReply = async () => {
    if (replyText.trim() === "") {
      toast.error("Please write a reply before sending.");
      return;
    }

    try {
      await axios.put(
        `http://localhost:5000/api/messages/${selectedMessage._id}`,
        {
          status: "Replied",
          reply: replyText,
          clientEmail: selectedMessage.email,
        }
      );

      toast.success("Reply sent successfully!");
      fetchData();
      setShowModal(false);
      setReplyText("");
    } catch (error) {
      toast.error("Error sending reply.");
      console.error("Error sending reply:", error);
    }
  };

  const expenseCategories = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const expenseChartData = Object.entries(expenseCategories).map(
    ([category, amount]) => ({
      name: category,
      value: parseFloat(amount.toFixed(2)),
    })
  );

  const agreementStatusData = agreements.reduce((acc, agreement) => {
    const status = agreement.status || "Unknown";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const agreementStatusChartData = Object.entries(agreementStatusData).map(
    ([status, count]) => ({
      name: status,
      count: count,
    })
  );

  const totalExpenses = expenses
    .reduce((acc, curr) => acc + curr.amount, 0)
    .toFixed(2);

  const dashboardStats = [
    {
      title: "Total Projects",
      value: agreements.length.toString(),
      change: "",
      icon: <Package className="h-6 w-6" />,
    },
    {
      title: "Active Clients",
      value: new Set(agreements.map((a) => a.clientName)).size.toString(),
      change: "",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Completed Projects",
      value: agreements
        .filter((a) => a.status === "Completed")
        .length.toString(),
      change: "",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Messages",
      value: messages.length.toString(),
      change: "",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Total Income",
      value: formatToPKR(totalIncome),
      change: "",
      icon: <DollarSignIcon className="h-6 w-6" />,
    },
    {
      title: "Received Payments",
      value: formatToPKR(totalReceivedPayments),
      change: "",
      icon: <DollarSignIcon className="h-6 w-6" />,
    },
    {
      title: "Total Expenses",
      value: formatToPKR(totalExpenses),
      change: "",
      icon: <DollarSignIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-16 h-16 bg-[#6B46C1] rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4 sm:ml-6">
                <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
                  Nible Tech Dashboard
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  Manage projects, clients, and company finances
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-md hover:bg-red-200 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex flex-wrap sm:flex-nowrap overflow-x-auto">
              {[
                {
                  id: "overview",
                  name: "Overview",
                  icon: <BarChart3 className="h-5 w-5" />,
                },
                {
                  id: "agreements",
                  name: "Client Agreements",
                  icon: <FileText className="h-5 w-5" />,
                },
                {
                  id: "messages",
                  name: "Messages",
                  icon: <MessageSquare className="h-5 w-5" />,
                },
                {
                  id: "expenses",
                  name: "Expenses",
                  icon: <DollarSign className="h-5 w-5" />,
                },
                {
                  id: "users",
                  name: "Manage Users",
                  icon: <Users className="h-5 w-5" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? "border-[#6B46C1] text-[#6B46C1]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-3 sm:px-6 border-b-2 font-medium text-sm flex items-center transition-colors duration-200`}
                >
                  {tab.icon}
                  <span className="ml-1 sm:ml-2">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
          <div className="p-4 sm:p-8">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Dashboard Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
                  {dashboardStats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                    >
                      <div className="flex items-center">
                        <div className="text-[#6B46C1] mr-4">{stat.icon}</div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">
                            {stat.value}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {stat.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Expense Breakdown
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={expenseChartData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          label
                        >
                          {expenseChartData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={PIE_COLORS[index % PIE_COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value, name) => [
                            formatToPKR(value),
                            name,
                          ]}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Agreement Status
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={agreementStatusChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#6B46C1" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "agreements" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Client Agreements
                  </h2>
                  <button
                    onClick={() => {
                      setModalType("agreement");
                      setShowModal(true);
                      setNewAgreement({
                        client: "",
                        email: "",
                        project: "",
                        amount: "",
                        receivedPayment: "",
                        deadline: "",
                        status: "Active",
                      });
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-[#6B46C1] text-white rounded-md shadow-md hover:bg-[#5A3AA8] transition-colors duration-200 text-sm"
                  >
                    <Plus size={18} />
                    <span>Add Agreement</span>
                  </button>
                </div>
                <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Client
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Project
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Payments
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {agreements.map((agreement) => (
                        <tr key={agreement._id}>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {agreement.clientName}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {agreement.project}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatToPKR(agreement.totalAmount)}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatToPKR(agreement.receivedPayment)}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                                agreement.status
                              )}`}
                            >
                              {agreement.status}
                            </span>
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex space-x-2">
                            <button
                              onClick={() => handleEditAgreement(agreement)}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <Edit size={18} />
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteAgreement(agreement._id)
                              }
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === "messages" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Client Messages
                </h2>
                <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {messages.map((message) => (
                        <tr key={message._id}>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {message.name}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {message.email}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatDate(message.date)}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                                message.status
                              )}`}
                            >
                              {message.status}
                            </span>
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex space-x-2">
                            <button
                              onClick={() => handleViewMessage(message)}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              <Eye size={18} />
                            </button>
                            <button
                              onClick={() => handleReplyClick(message)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <Send size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === "expenses" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Expenses
                  </h2>
                  <button
                    onClick={() => {
                      setModalType("expense");
                      setShowModal(true);
                      setNewExpense({
                        name: "",
                        email: "",
                        type: "Company",
                        category: "",
                        description: "",
                        amount: "",
                        date: new Date().toISOString().slice(0, 10),
                        image: null,
                      });
                    }}
                    className="flex items-center space-x-2 px-4 py-2 bg-[#6B46C1] text-white rounded-md shadow-md hover:bg-[#5A3AA8] transition-colors duration-200 text-sm"
                  >
                    <Plus size={18} />
                    <span>Add Expense</span>
                  </button>
                </div>
                <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {expenses.map((expense) => (
                        <tr key={expense._id}>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {expense.type}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {expense.category}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {expense.description}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatToPKR(expense.amount)}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatDate(expense.date)}
                          </td>
                          <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleDeleteExpense(expense._id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <Trash size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Modal for adding/editing agreements and expenses, and viewing/replying to messages */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {modalType === "agreement"
                        ? editingAgreement
                          ? "Edit Agreement"
                          : "Add New Agreement"
                        : modalType === "expense"
                        ? "Add New Expense"
                        : "Message Details"}
                    </h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-500 hover:text-gray-800"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  {modalType === "agreement" && (
                    <form onSubmit={handleNewAgreementSubmit}>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Client Name
                        </label>
                        <input
                          type="text"
                          name="client"
                          value={newAgreement.client}
                          onChange={handleNewAgreementChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Client Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={newAgreement.email}
                          onChange={handleNewAgreementChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Project
                        </label>
                        <input
                          type="text"
                          name="project"
                          value={newAgreement.project}
                          onChange={handleNewAgreementChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Total Amount (PKR)
                        </label>
                        <input
                          type="number"
                          name="amount"
                          value={newAgreement.amount}
                          onChange={handleNewAgreementChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Received Payment (PKR)
                        </label>
                        <input
                          type="number"
                          name="receivedPayment"
                          value={newAgreement.receivedPayment}
                          onChange={handleNewAgreementChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Deadline
                        </label>
                        <input
                          type="date"
                          name="deadline"
                          value={newAgreement.deadline}
                          onChange={handleNewAgreementChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Status
                        </label>
                        <select
                          name="status"
                          value={newAgreement.status}
                          onChange={handleNewAgreementChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                        >
                          <option value="Active">Active</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>
                      <div className="flex justify-end space-x-2 mt-6">
                        <button
                          type="button"
                          onClick={() => setShowModal(false)}
                          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#6B46C1] text-white rounded-md hover:bg-[#5A3AA8] transition-colors duration-200"
                        >
                          {editingAgreement
                            ? "Update Agreement"
                            : "Add Agreement"}
                        </button>
                      </div>
                    </form>
                  )}

                  {modalType === "expense" && (
                    <form onSubmit={handleNewExpenseSubmit}>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Expense Type
                        </label>
                        <select
                          name="type"
                          value={newExpense.type}
                          onChange={handleNewExpenseChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          required
                        >
                          <option value="Company">Company Expense</option>
                          <option value="Team">Team Expense</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Expense Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={newExpense.name}
                          onChange={handleNewExpenseChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          placeholder="Enter name of team member/person"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Recipient Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={newExpense.email}
                          onChange={handleNewExpenseChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          placeholder="Enter email to send confirmation"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Category
                        </label>
                        <input
                          type="text"
                          name="category"
                          value={newExpense.category}
                          onChange={handleNewExpenseChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Description
                        </label>
                        <input
                          type="text"
                          name="description"
                          value={newExpense.description}
                          onChange={handleNewExpenseChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Amount (PKR)
                        </label>
                        <input
                          type="number"
                          name="amount"
                          value={newExpense.amount}
                          onChange={handleNewExpenseChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={newExpense.date}
                          onChange={handleNewExpenseChange}
                          className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          required
                        />
                      </div>

                      <div className="flex justify-end space-x-2 mt-6">
                        <button
                          type="button"
                          onClick={() => setShowModal(false)}
                          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#6B46C1] text-white rounded-md hover:bg-[#5A3AA8] transition-colors duration-200"
                        >
                          Add Expense
                        </button>
                      </div>
                    </form>
                  )}
                  {modalType === "view-message" && selectedMessage && (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-800 font-bold">
                        From: {selectedMessage.name} ({selectedMessage.email})
                      </p>
                      <p className="text-gray-600 mt-2">
                        Message: {selectedMessage.message}
                      </p>
                    </div>
                  )}
                  {modalType === "reply-message" && selectedMessage && (
                    <div className="mt-4">
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <p className="text-gray-800 font-bold">
                          To: {selectedMessage.name} ({selectedMessage.email})
                        </p>
                        <p className="text-gray-600 mt-2">
                          Original Message: {selectedMessage.message}
                        </p>
                      </div>
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write your reply here..."
                        className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                        rows="4"
                      />
                      <div className="flex justify-end mt-4 space-x-2">
                        <button
                          onClick={() => setShowModal(false)}
                          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-200"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSendReply}
                          className="px-4 py-2 bg-[#6B46C1] text-white rounded-md hover:bg-[#5A3AA8] transition-colors duration-200"
                        >
                          Send Reply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
