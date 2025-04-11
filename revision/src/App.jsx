// import {useState} from 'react'
// import { FriendContext } from './context/FriendProvide'
// import Nisha from './components/Nisha'
// import Anchal from './components/Anchal'



// function App(){
//   // declare a use 
//   const [message, setMessage] = useState("")

//   // make a provider 
//   return(
//     <> 

//       <FriendContext.Provider value={{message, setMessage}}>
//         <Nisha />
//         <Anchal />
//       </FriendContext.Provider>
//     </>
//   )
  
// }
// export default App;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Clock, ThumbsUp, Star, FileText, Phone, MessageCircle, CheckCircle, XCircle } from "lucide-react";

const DashboardCard = ({ title, icon: Icon, value }) => (
  <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-4">
    <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default function UserDashboard() {
  const data = {
    totalUsers: 120,
    workshopName: "Creative UI Design Principles",
    date: "Monday, April 15, 2025",
    platform: "Zoom",
    attendance: "Present",
    attendees: ["Alice", "Bob", "Charlie"],
    likes: 85,
    ratings: 4.6,
    trainer: "Jane Doe",
    time: "10:00 AM - 1:00 PM",
    duration: "April 10, 2025 - April 15, 2025",
    appliedUsers: 150,
    notAttended: 30,
    certificate: "Yes",
    category: "Design",
    contact: "+91-9876543210",
    feedback: "Submitted"
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Welcome to Your Workshop Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardCard title="Total Users Enrolled" icon={User} value={data.totalUsers} />
        <DashboardCard title="Workshop Name" icon={FileText} value={data.workshopName} />
        <DashboardCard title="Workshop Date" icon={Calendar} value={data.date} />
        <DashboardCard title="Platform" icon={MessageCircle} value={data.platform} />
        <DashboardCard title="Attendance" icon={CheckCircle} value={data.attendance} />
        <DashboardCard title="Attendees" icon={User} value={data.attendees.join(", ")} />
        <DashboardCard title="Likes" icon={ThumbsUp} value={data.likes} />
        <DashboardCard title="Ratings" icon={Star} value={data.ratings} />
        <DashboardCard title="Trainer Name" icon={User} value={data.trainer} />
        <DashboardCard title="Time Duration" icon={Clock} value={data.time} />
        <DashboardCard title="Workshop Duration" icon={Calendar} value={data.duration} />
        <DashboardCard title="Users Applied" icon={User} value={data.appliedUsers} />
        <DashboardCard title="Users Not Attended" icon={XCircle} value={data.notAttended} />
        <DashboardCard title="Certificate Available" icon={FileText} value={data.certificate} />
        <DashboardCard title="Workshop Category" icon={FileText} value={data.category} />
        <DashboardCard title="Support Contact" icon={Phone} value={data.contact} />
        <DashboardCard title="Feedback Status" icon={MessageCircle} value={data.feedback} />
      </div>
    </div>
  );
}
