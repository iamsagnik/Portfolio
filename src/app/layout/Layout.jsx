import { Outlet } from "react-router-dom"


function Layout() {
  return (
    <main className="w-full min-h-screen bg-[#e8d1c3] overflow-hidden">
      <Outlet />
    </main>
  )
}

export default Layout