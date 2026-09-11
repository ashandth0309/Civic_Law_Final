import {
  useEffect,
  useState,
} from 'react';

import {
  Link,
  useLocation,
} from 'react-router-dom';

import {
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';

import secondImage from '../../assets/second-image.jpeg';

import './Navbar.css';

const NAV_LINKS = [
  {
    to: '/#problem',
    label: 'About',
  },
  {
    to: '/#objectives',
    label: 'Objectives',
  },
  {
    to: '/#locations',
    label: 'Reach',
  },
  {
    to: '/#performance',
    label: 'Engagements',
  },
  {
    to: '/#mission',
    label: 'Purpose',
  },
  {
    to: '/#team',
    label: 'Team',
  },
  {
    to: '/#partners',
    label: 'Partners',
  },
];

export default function Navbar() {
  const [active, setActive] =
    useState('');

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const location = useLocation();

  /* =====================================
     HASH SCROLLING
  ===================================== */

  useEffect(() => {
    if (!location.hash) {
      setMenuOpen(false);
      return;
    }

    const id =
      location.hash.replace(
        '#',
        '',
      );

    const timer =
      window.setTimeout(() => {
        const element =
          document.getElementById(
            id,
          );

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);

    setMenuOpen(false);

    return () =>
      window.clearTimeout(timer);
  }, [location]);

  /* =====================================
     ACTIVE SECTION
  ===================================== */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 130;

      setScrolled(
        window.scrollY > 20,
      );

      let current = '';

      NAV_LINKS.forEach(
        ({ to }) => {
          const id =
            to.substring(2);

          const element =
            document.getElementById(
              id,
            );

          if (
            element &&
            element.offsetTop <=
              scrollPosition
          ) {
            current = id;
          }
        },
      );

      setActive(current);
    };

    handleScroll();

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      },
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll,
      );
  }, []);

  /* =====================================
     MOBILE BODY LOCK
  ===================================== */

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      'hidden';

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [menuOpen]);

  /* =====================================
     ESCAPE
  ===================================== */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown,
    );

    return () =>
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
  }, []);

  return (
    <>
      <header
        className={`civic-navbar ${
          scrolled
            ? 'is-scrolled'
            : ''
        }`}
      >
        {/* =================================
            BRAND
        ================================= */}

        <Link
          to="/"
          className="civic-navbar-brand"
          aria-label="Civic Law Initiative home"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          <div className="civic-navbar-logo-wrap">
            <img
              src={secondImage}
              alt="Civic Law Initiative"
              className="civic-navbar-logo"
            />
          </div>

          <div className="civic-navbar-brand-copy">
            <strong>
              LAW, LIBERTY
              <span> &amp;</span>
            </strong>

            <small>
              CIVIC RESPONSIBILITY
            </small>
          </div>
        </Link>

        {/* =================================
            DESKTOP NAVIGATION
        ================================= */}

        <nav
          className="civic-navbar-links"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(
            ({
              to,
              label,
            }) => {
              const id =
                to.substring(2);

              const isActive =
                active === id;

              return (
                <Link
                  key={to}
                  to={to}
                  className={`civic-navbar-link ${
                    isActive
                      ? 'is-active'
                      : ''
                  }`}
                >
                  <span>
                    {label}
                  </span>
                </Link>
              );
            },
          )}
        </nav>

        {/* =================================
            DESKTOP ACTIONS
        ================================= */}

        <div className="civic-navbar-actions">
  <Link
    to="/#contact"
    className="civic-navbar-apply"
  >
    <span>
      Contact
    </span>

    <ArrowRight
      size={15}
      strokeWidth={1.7}
    />
  </Link>
</div>

        {/* =================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          type="button"
          className={`civic-navbar-menu-button ${
            menuOpen
              ? 'is-open'
              : ''
          }`}
          onClick={() =>
            setMenuOpen(
              (current) =>
                !current,
            )
          }
          aria-label={
            menuOpen
              ? 'Close navigation'
              : 'Open navigation'
          }
          aria-expanded={
            menuOpen
          }
        >
          {menuOpen ? (
            <X
              size={23}
              strokeWidth={1.5}
            />
          ) : (
            <Menu
              size={24}
              strokeWidth={1.5}
            />
          )}
        </button>
      </header>

      {/* ===================================
          MOBILE NAVIGATION
      =================================== */}

      <div
        className={`civic-mobile-menu ${
          menuOpen
            ? 'is-open'
            : ''
        }`}
        aria-hidden={!menuOpen}
      >
        <span
          className="civic-mobile-background"
          aria-hidden="true"
        >
          CIVIC
        </span>

        <div className="civic-mobile-menu-inner">
          <div className="civic-mobile-menu-top">
            <span>
              Navigation
            </span>

            <span>
              Sri Lanka · 2026
            </span>
          </div>

          <nav
            className="civic-mobile-links"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(
              (
                {
                  to,
                  label,
                },
                index,
              ) => {
                const id =
                  to.substring(2);

                const isActive =
                  active === id;

                return (
                  <Link
                    key={to}
                    to={to}
                    className={`civic-mobile-link ${
                      isActive
                        ? 'is-active'
                        : ''
                    }`}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                  >
                    <span className="civic-mobile-index">
                      {String(
                        index + 1,
                      ).padStart(
                        2,
                        '0',
                      )}
                    </span>

                    <strong>
                      {label}
                    </strong>

                    <ArrowRight
                      size={19}
                      strokeWidth={1.4}
                    />
                  </Link>
                );
              },
            )}
          </nav>

          <div className="civic-mobile-actions">
            <Link
              to="/#contact"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Contact
            </Link>

            <Link
              to="/apply"
              className="civic-mobile-apply"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Apply

              <ArrowRight
                size={17}
              />
            </Link>
          </div>

          <div className="civic-mobile-footer">
            <span>
              Law · Liberty ·
              Civic Responsibility
            </span>

            <span>
              Independent ·
              Non-partisan
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
