import {
  ArrowUp,
  Mail,
} from 'lucide-react';

import firstImage from '../../assets/first-image.png';
import secondImage from '../../assets/second-image.jpeg';
import thirdImage from '../../assets/third-image.png';
import fourthImage from '../../assets/fourth-image.png';

import './Footer.css';

const logos = [
  {
    image: firstImage,
    alt: 'Sri Lanka',
  },
  {
    image: secondImage,
    alt: 'Civic Law Initiative',
  },
  {
    image: thirdImage,
    alt: 'United States',
  },
  {
    image: fourthImage,
    alt: 'Freedom 250',
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      id="contact"
      className="civic-footer"
    >
      {/* LARGE BACKGROUND WORD */}
      <span
        className="civic-footer-background-word"
        aria-hidden="true"
      >
        CIVIC
      </span>

      <div className="civic-footer-inner">
        {/* TOP */}
        <div className="civic-footer-main">
          {/* LEFT */}
          <div className="civic-footer-identity">
            <span className="civic-footer-kicker">
              Law · Liberty · Civic Responsibility
            </span>

            <h2>
              LAW,
              <br />
              LIBERTY
              <span> &amp;</span>
              <br />
              CIVIC
              <br />
              RESPONSIBILITY
            </h2>

            <p>
              An independent civic initiative
              strengthening rule-of-law awareness,
              legal literacy and meaningful
              democratic participation across
              Sri Lanka.
            </p>

            <div className="civic-footer-origin">
              <span>
                SUSI Rule of Law Alumni
              </span>

              <i />

              <span>
                Sri Lanka · 2026
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="civic-footer-right">
            {/* CONTACT */}
            <div className="civic-footer-contact">
              <span className="civic-footer-label">
                Contact
              </span>

              <a
                href="mailto:civiclawinitiative@gmail.com"
                className="civic-footer-email"
              >
                <div className="civic-footer-email-icon">
                  <Mail
                    size={19}
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <span>
                    Get in touch
                  </span>

                  <strong>
                    civiclawinitiative@gmail.com
                  </strong>
                </div>
              </a>
            </div>

            {/* LOGOS */}
            <div className="civic-footer-partners">
              <span className="civic-footer-label">
                Partners &amp; Support
              </span>

              <div className="civic-footer-logos">
                {logos.map(
                  (logo, index) => (
                    <div
                      className="civic-footer-logo"
                      key={index}
                    >
                      <img
                        src={logo.image}
                        alt={logo.alt}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="civic-footer-values">
          <span>
            Rule of Law
          </span>

          <i />

          <span>
            Civic Participation
          </span>

          <i />

          <span>
            Legal Literacy
          </span>

          <i />

          <span>
            Responsible Citizenship
          </span>
        </div>

        {/* BOTTOM */}
        <div className="civic-footer-bottom">
          <div className="civic-footer-bottom-left">
            <span>
              © 2026 Civic Law Initiative
            </span>

            <span>
              Independent · Non-partisan ·
              Non-governmental
            </span>
          </div>

          <div className="civic-footer-bottom-right">
            <span className="civic-footer-credit">
              Website designed &amp; developed by{' '}
              <strong>
                Ashandth Uthayashankar
              </strong>
            </span>

            <button
              type="button"
              className="civic-footer-top-button"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>
                Back to top
              </span>

              <ArrowUp
                size={16}
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
