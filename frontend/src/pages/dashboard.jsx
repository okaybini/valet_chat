import Drawer from "../components/drawer"; 
import ChatPanel from "./chatscreen";
import NavBar from "../components/navbar";
import ReceiptList from "../components/receiptList"; 
import Header from "../components/header"; 
import { useState } from "react";
const Dashboard = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
  const receipts = [
    {
      id: 1,
      fileName: "Receipt_01.pdf",
      timestamp: "2024-12-10 14:30",
      autoSync: true,
    },
    {
      id: 2,
      fileName: "Receipt_02.pdf",
      timestamp: "2024-12-09 18:45",
      autoSync: false,
    },
    {
      id: 3,
      fileName: "Receipt_03.pdf",
      timestamp: "2024-12-08 12:15",
      autoSync: true,
    },
    {
      id: 4,
      fileName: "Receipt_04.pdf",
      timestamp: "2024-12-07 11:30",
      autoSync: false,
    },
    {
        id: 1,
        fileName: "Receipt_01.pdf",
        timestamp: "2024-12-10 14:30",
        autoSync: true,
      },
      {
        id: 2,
        fileName: "Receipt_02.pdf",
        timestamp: "2024-12-09 18:45",
        autoSync: false,
      },
      {
        id: 3,
        fileName: "Receipt_03.pdf",
        timestamp: "2024-12-08 12:15",
        autoSync: true,
      },
      {
        id: 4,
        fileName: "Receipt_04.pdf",
        timestamp: "2024-12-07 11:30",
        autoSync: false,
      },
      {
        id: 1,
        fileName: "Receipt_01.pdf",
        timestamp: "2024-12-10 14:30",
        autoSync: true,
      },
      {
        id: 2,
        fileName: "Receipt_02.pdf",
        timestamp: "2024-12-09 18:45",
        autoSync: false,
      },
      {
        id: 3,
        fileName: "Receipt_03.pdf",
        timestamp: "2024-12-08 12:15",
        autoSync: true,
      },
      {
        id: 4,
        fileName: "Receipt_04.pdf",
        timestamp: "2024-12-07 11:30",
        autoSync: false,
      },
      {
          id: 1,
          fileName: "Receipt_01.pdf",
          timestamp: "2024-12-10 14:30",
          autoSync: true,
        },
        {
          id: 2,
          fileName: "Receipt_02.pdf",
          timestamp: "2024-12-09 18:45",
          autoSync: false,
        },
        {
          id: 3,
          fileName: "Receipt_03.pdf",
          timestamp: "2024-12-08 12:15",
          autoSync: true,
        },
        {
          id: 4,
          fileName: "Receipt_04.pdf",
          timestamp: "2024-12-07 11:30",
          autoSync: false,
        },
  ];

  return (
    <div className="relative h-screen bg-purple-950">
      {/* Header */}
      <Header />

      {/* Drawer */}
      <Drawer />

      {/* Receipt List */}
      <div className="h-[calc(100vh-6rem)] overflow-y-auto pb-16">
        <ReceiptList receipts={receipts} />
      </div>

      {/* Chat Panel */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="w-full sm:w-1/2 md:w-1/3 h-full bg-gray-900 shadow-lg text-white">
            <ChatPanel onClose={() => setIsChatOpen(false)} />
          </div>
        </div>
      )}

      {/* Navbar */}
      <NavBar toggleChat={() => setIsChatOpen(!isChatOpen)} />
    </div>
  );
};

export default Dashboard;