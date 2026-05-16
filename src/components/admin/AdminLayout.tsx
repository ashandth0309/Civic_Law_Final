import { useState } from 'react';
import { Outlet, NavLink, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import {
  LayoutDashboard,
  Users,
  Calendar,
  UserCog,
  Camera,
  FileBarChart,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

const NAV = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/admin/applicants', icon: Users, label: 'Applicants' },
  { to: '/admin/workshops', icon: Calendar, label: 'Workshops' },
  { to: '/admin/team', icon: UserCog, label: 'Team' },
  { to: '/admin/attendance', icon: Camera, label: 'Attendance' },
  { to: '/admin/media', icon: Camera, label: 'Media' },
  { to: '/admin/reports', icon: FileBarChart, label: 'Reports' },
];

export default function AdminLayout() {
  const { isAdmin, signOut, loading } = useAuth();

  const [mobileOpen, setMobileOpen] = useState(false);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: 'var(--paper)' }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.7rem',
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}
        >
          Loading...
        </span>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div
      className="min-h-screen flex"
      style={{ background: 'var(--paper)' }}
    >
      {/* Desktop Sidebar */}
      <aside className="w-56 border-r border-[var(--line)] flex-col flex-shrink-0 hidden lg:flex">
        <div className="px-5 py-6 border-b border-[var(--line)]">
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '1.2rem',
              letterSpacing: '0.06em',
              color: 'var(--ink)',
            }}
          >
            CLI Admin
          </span>
        </div>

        <nav className="flex-1 py-4">
          {NAV.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3 no-underline transition-colors duration-200 ${
                  isActive
                    ? 'bg-[var(--accent)] text-[var(--ink)]'
                    : 'text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--accent)]'
                }`
              }
            >
              <Icon size={16} />

              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="px-5 py-4 border-t border-[var(--line)]">
          <button
            onClick={signOut}
            className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--red)] transition-colors duration-200 cursor-pointer bg-transparent border-none"
          >
            <LogOut size={16} />

            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Sign Out
            </span>
          </button>
        </div>
      </aside>

      {/* Mobile + Tablet Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--paper)] border-b border-[var(--line)] px-4 py-3 flex items-center justify-between">
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '1rem',
            color: 'var(--ink)',
          }}
        >
          CLI Admin
        </span>

        <button
          onClick={() => setMobileOpen(true)}
          className="bg-transparent border-none cursor-pointer text-[var(--ink)]"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Drawer — slides in from the RIGHT */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <aside
            className="lg:hidden fixed top-0 right-0 h-full w-64 bg-[var(--paper)] border-l border-[var(--line)] z-50 flex flex-col"
            style={{ animation: 'slideInRight 0.25s ease forwards' }}
          >
            <style>{`
              @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to   { transform: translateX(0);    opacity: 1; }
              }
            `}</style>

            <div className="flex items-center justify-between px-5 py-5 border-b border-[var(--line)]">
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1rem',
                }}
              >
                CLI Admin
              </span>

              <button
                onClick={() => setMobileOpen(false)}
                className="bg-transparent border-none cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 py-4">
              {NAV.map(({ to, icon: Icon, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-5 py-3 no-underline transition-colors duration-200 ${
                      isActive
                        ? 'bg-[var(--accent)] text-[var(--ink)]'
                        : 'text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--accent)]'
                    }`
                  }
                >
                  <Icon size={16} />

                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {label}
                  </span>
                </NavLink>
              ))}
            </nav>

            <div className="px-5 py-4 border-t border-[var(--line)]">
              <button
                onClick={signOut}
                className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--red)] cursor-pointer bg-transparent border-none"
              >
                <LogOut size={16} />

                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Sign Out
                </span>
              </button>
            </div>
          </aside>
        </>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-14 lg:pt-0 overflow-auto">
        <div className="p-6 md:p-8 max-w-6xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}