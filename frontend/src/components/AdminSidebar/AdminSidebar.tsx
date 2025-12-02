import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Menu, Home, Layers, Tags, LogOut, Box } from "lucide-react";

type Props = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const AdminSidebar = ({ collapsed, setCollapsed }: Props) => {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setCollapsed(true);
    logout();
    navigate("/portfolio/admin/login");
  };
  return (
    <aside
      className={`
        bg-gray-900 text-gray-100 h-full border-r border-gray-800 shadow-xl flex flex-col transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
        
        {/* Title hides when collapsed */}
        {!collapsed && (
          <h1 className="text-lg font-semibold tracking-wide">Admin Panel</h1>
        )}

        {/* Hamburger Toggle */}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-800"
        >
          <Menu size={22} className="text-indigo-400" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-2">

        <NavItem
          collapsed={collapsed}
          to="/portfolio/admin"
          label="Dashboard"
          icon={<Home size={18} />}
        />

        <NavItem
          collapsed={collapsed}
          to="/portfolio/admin/skills"
          label="Skills"
          icon={<Layers size={18} />}
        />

        <NavItem
          collapsed={collapsed}
          to="/portfolio/admin/skillscategories"
          label="Skill Categories"
          icon={<Tags size={18} />}
        />

        <NavItem
          collapsed={collapsed}
          to="/portfolio/admin/portfolios"
          label="Portfolios"
          icon={<Box size={18} />}
        />

      </nav>

      {/* Footer */}
      <div onClick={handleLogout} className="mt-auto px-4 py-4 border-t border-gray-800">
        <button className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-400 bg-gray-900/40 hover:bg-gray-800 transition-all
          ${collapsed ? "justify-center" : ""}
        `}>
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>

    </aside>
  );
};

export default AdminSidebar;


// Reusable Nav Item
function NavItem({
  to,
  label,
  icon,
  collapsed,
}: {
  to: string;
  label: string;
  icon: React.ReactNode;
  collapsed: boolean;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200
        ${collapsed ? "justify-center" : ""}
        ${
          isActive
            ? "bg-indigo-600 text-white shadow-md shadow-indigo-700/20"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }
      `
      }
      end
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}
