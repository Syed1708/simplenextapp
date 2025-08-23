import Sidebar from "./_components/Sidebar";
import Topbar from "./_components/Topbar";


export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar with User Info */}
        <Topbar />

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
