import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/#problem', label: 'Problem' },
  { to: '/#objectives', label: 'Objectives' },
  { to: '/#locations', label: 'Locations' },
  { to: '/#timeline', label: 'Timeline' },
  { to: '/#sustainability', label: 'Sustainability' },
  { to: '/#performance', label: 'Performance' },
  { to: '/#mission', label: 'Mission' },
  { to: '/#team', label: 'Team' },
  { to: '/#partners', label: 'Partners' },
  { to: '/apply', label: 'Apply' },
  { to: '/#contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = '';
      NAV_LINKS.forEach(({ to }) => {
        if (to.startsWith('/#')) {
          const id = to.substring(2);
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPos) current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location]);

  return (
    <nav
      className="fixed left-0 right-0 z-40 flex items-center justify-center gap-3 sm:gap-4 px-3 sm:px-4 border-b border-[var(--line)] overflow-x-auto"
      style={{
        top: 44,
        height: 48,
        background: 'rgba(247,244,239,0.96)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        scrollbarWidth: 'none',
      }}
    >
      {NAV_LINKS.map(({ to, label }) => {
        const id = to.startsWith('/#') ? to.substring(2) : '';
        const isActive = id && active === id;
        const isApply = to === '/apply';
        return (
          <Link
            key={to}
            to={to}
            className="no-underline whitespace-nowrap flex-shrink-0 transition-colors duration-200"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.58rem',
              letterSpacing: '0.1em',
              color: isApply ? 'var(--red)' : isActive ? 'var(--red)' : 'var(--ink)',
              fontWeight: isActive ? 500 : isApply ? 500 : 400,
              textTransform: 'uppercase',
              padding: isApply ? '0.25rem 0.6rem' : '0',
              border: isApply ? '1px solid var(--red)' : 'none',
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
