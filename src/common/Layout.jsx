import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex h-full ">
      {/* <div className=" "> */}
      <Sidebar />
      {/* </div> */}
      <div className="flex-1 ">
        {children}
        <div className="text-center w-full text-gray-400 border-t-[1px] py-3 text-sm mt-4">
          copyright 2024 Cheeky
        </div>
      </div>
    </div>
  );
}

export default Layout;
