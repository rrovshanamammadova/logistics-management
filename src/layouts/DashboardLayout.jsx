import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function DashboardLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-[#eeeeee] flex">
      <Sidebar />

      <div className="flex-1 ml-[235px]">
        <Header title={title} subtitle={subtitle} />

        <main className="p-3 md:p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;