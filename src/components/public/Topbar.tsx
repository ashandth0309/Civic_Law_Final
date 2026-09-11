import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import './Topbar.css';

export default function Topbar() {
  return (
    <div className="civic-topbar">
      <div className="civic-topbar-inner">
        {/* LEFT */}
        <div className="civic-topbar-left">
          <span className="civic-topbar-dot" />

          <span className="civic-topbar-meta">
            SUSI Rule of Law Alumni
          </span>

          <span className="civic-topbar-divider">
            /
          </span>

          <span className="civic-topbar-country">
            Sri Lanka
          </span>
        </div>

        {/* CENTRE */}
        <Link
          to="/"
          className="civic-topbar-brand"
          aria-label="Civic Law Initiative home"
        >
          <span>
            Civic Law Initiative
          </span>

          <i />
        </Link>

        {/* RIGHT */}
        <div className="civic-topbar-right">
          <span className="civic-topbar-year">
            2026
          </span>

          <span className="civic-topbar-divider">
            /
          </span>

          <Link
            to="/#contact"
            className="civic-topbar-contact"
          >
            Contact

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
