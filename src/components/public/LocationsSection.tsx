import { motion } from 'framer-motion';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

import './LocationsSection.css';

const LOCATIONS = [
  {
    number: '01',
    city: 'Kandy',
    province: 'Central Province',
  },
  {
    number: '02',
    city: 'Matara',
    province: 'Southern Province',
  },
  {
    number: '03',
    city: 'Colombo',
    province: 'Western Province',
  },
  {
    number: '04',
    city: 'Jaffna',
    province: 'Northern Province',
  },
  {
    number: '05',
    city: 'Batticaloa',
    province: 'Eastern Province',
  },
];

export default function LocationsSection() {
  return (
    <SectionWrapper id="locations">
      <div className="locations-section">
        <SectionHeader
          num="03"
          sub="Geographic Reach"
          title="Five Regions, One Nation"
        />

        <motion.div
          className="locations-intro"
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>
            The initiative extended across five regions of Sri Lanka,
            creating a national footprint that connected young people
            from the Central, Southern, Western, Northern and Eastern
            Provinces.
          </p>

          <div className="locations-count">
            <strong>05</strong>
            <span>Regions</span>
          </div>
        </motion.div>

        <div className="locations-route">
          <motion.div
            className="locations-route-line"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <div className="locations-route-grid">
            {LOCATIONS.map((location, index) => (
              <motion.article
                key={location.city}
                className="location-route-item"
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="location-route-number">
                  {location.number}
                </span>

                <span className="location-route-dot" />

                <div className="location-route-copy">
                  <h3>{location.city}</h3>

                  <p>{location.province}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="locations-footer">
          <span>Central</span>
          <i />
          <span>Southern</span>
          <i />
          <span>Western</span>
          <i />
          <span>Northern</span>
          <i />
          <span>Eastern</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
