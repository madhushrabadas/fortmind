import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ">{children}</div>
    </div>
  );
}

export default Layout;
