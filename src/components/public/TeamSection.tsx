import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Users,
  X,
} from 'lucide-react';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

import {
  teamMembers,
  type TeamMember,
} from '../../data/team';

import './TeamSection.css';

type TeamFilter =
  | 'All'
  | 'Leadership'
  | 'Finance'
  | 'Logistics'
  | 'PR, Media & Outreach';

const FILTERS: TeamFilter[] = [
  'All',
  'Leadership',
  'Finance',
  'Logistics',
  'PR, Media & Outreach',
];

const getCommitteeClass = (
  committee: string,
) => {
  switch (committee) {
    case 'Leadership':
      return 'leadership';

    case 'Finance':
      return 'finance';

    case 'Logistics':
      return 'logistics';

    case 'PR, Media & Outreach':
      return 'media';

    default:
      return 'default';
  }
};

export default function TeamSection() {
  const trackRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const [
    activeFilter,
    setActiveFilter,
  ] = useState<TeamFilter>('All');

  const [
    selectedMember,
    setSelectedMember,
  ] =
    useState<TeamMember | null>(
      null,
    );

  const [
    canScrollLeft,
    setCanScrollLeft,
  ] = useState(false);

  const [
    canScrollRight,
    setCanScrollRight,
  ] = useState(true);

  const filteredMembers =
    useMemo(() => {
      if (activeFilter === 'All') {
        return teamMembers;
      }

      return teamMembers.filter(
        (member) =>
          member.committee ===
          activeFilter,
      );
    }, [activeFilter]);

  const updateScrollControls =
    useCallback(() => {
      const track =
        trackRef.current;

      if (!track) return;

      const maximumScroll =
        track.scrollWidth -
        track.clientWidth;

      setCanScrollLeft(
        track.scrollLeft > 8,
      );

      setCanScrollRight(
        track.scrollLeft <
          maximumScroll - 8,
      );
    }, []);

  useEffect(() => {
    const track =
      trackRef.current;

    if (!track) return;

    const frame =
      requestAnimationFrame(
        () => {
          track.scrollTo({
            left: 0,
            behavior: 'auto',
          });

          updateScrollControls();
        },
      );

    return () =>
      cancelAnimationFrame(
        frame,
      );
  }, [
    activeFilter,
    updateScrollControls,
  ]);

  useEffect(() => {
    const track =
      trackRef.current;

    if (!track) return;

    updateScrollControls();

    track.addEventListener(
      'scroll',
      updateScrollControls,
      {
        passive: true,
      },
    );

    window.addEventListener(
      'resize',
      updateScrollControls,
    );

    return () => {
      track.removeEventListener(
        'scroll',
        updateScrollControls,
      );

      window.removeEventListener(
        'resize',
        updateScrollControls,
      );
    };
  }, [updateScrollControls]);

  const scrollGallery = (
    direction: 'left' | 'right',
  ) => {
    const track =
      trackRef.current;

    if (!track) return;

    const firstCard =
      track.querySelector<HTMLElement>(
        '.civic-team-card',
      );

    const amount =
      firstCard
        ? firstCard.offsetWidth +
          16
        : 330;

    track.scrollBy({
      left:
        direction === 'right'
          ? amount * 2
          : -amount * 2,

      behavior: 'smooth',
    });
  };

  const closeMember =
    useCallback(() => {
      setSelectedMember(null);
    }, []);

  useEffect(() => {
    if (!selectedMember) {
      return;
    }

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      'hidden';

    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === 'Escape'
      ) {
        closeMember();
      }
    };

    window.addEventListener(
      'keydown',
      handleEscape,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        'keydown',
        handleEscape,
      );
    };
  }, [
    selectedMember,
    closeMember,
  ]);

  return (
    <>
      <SectionWrapper id="team">
        <div className="civic-team-section">
          <SectionHeader
            num="07"
            sub="Our People"
            title="Team"
          />

          {/* INTRO */}
          <motion.div
            className="civic-team-intro"
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <div className="civic-team-intro-copy">
              <span>
                The people behind the
                initiative
              </span>

              <p>
                A multidisciplinary
                team united by a
                shared commitment to
                legal literacy, civic
                participation and
                meaningful community
                engagement across
                Sri Lanka.
              </p>
            </div>

            <div className="civic-team-counter">
              <strong>
                {String(
                  teamMembers.length,
                ).padStart(
                  2,
                  '0',
                )}
              </strong>

              <span>
                People
              </span>
            </div>
          </motion.div>

          {/* DIRECTORY HEADER */}
          <div className="civic-team-directory-header">
            <div className="civic-team-directory-title">
              <Users
                size={17}
                strokeWidth={1.5}
              />

              <span>
                Team Directory
              </span>
            </div>

            <span className="civic-team-directory-count">
              {String(
                filteredMembers.length,
              ).padStart(
                2,
                '0',
              )}{' '}
              shown
            </span>
          </div>

          {/* FILTERS */}
          <div className="civic-team-filter-wrap">
            <div className="civic-team-filters">
              {FILTERS.map(
                (filter) => {
                  const count =
                    filter ===
                    'All'
                      ? teamMembers.length
                      : teamMembers.filter(
                          (
                            member,
                          ) =>
                            member.committee ===
                            filter,
                        )
                          .length;

                  return (
                    <button
                      key={
                        filter
                      }
                      type="button"
                      className={`civic-team-filter ${
                        activeFilter ===
                        filter
                          ? 'is-active'
                          : ''
                      }`}
                      onClick={() =>
                        setActiveFilter(
                          filter,
                        )
                      }
                    >
                      <span>
                        {
                          filter
                        }
                      </span>

                      <small>
                        {
                          count
                        }
                      </small>
                    </button>
                  );
                },
              )}
            </div>

            {/* DESKTOP / LAPTOP ONLY */}
            <div className="civic-team-arrows">
              <button
                type="button"
                className="civic-team-arrow"
                onClick={() =>
                  scrollGallery(
                    'left',
                  )
                }
                disabled={
                  !canScrollLeft
                }
                aria-label="Previous team members"
              >
                <ArrowLeft
                  size={18}
                />
              </button>

              <button
                type="button"
                className="civic-team-arrow"
                onClick={() =>
                  scrollGallery(
                    'right',
                  )
                }
                disabled={
                  !canScrollRight
                }
                aria-label="Next team members"
              >
                <ArrowRight
                  size={18}
                />
              </button>
            </div>
          </div>

          {/* TEAM */}
          <div
            ref={trackRef}
            className="civic-team-track"
          >
            <AnimatePresence>
              {filteredMembers.map(
                (
                  member,
                  index,
                ) => {
                  const tone =
                    getCommitteeClass(
                      member.committee,
                    );

                  const isLeader =
                    member.position !==
                    'Volunteer';

                  return (
                    <motion.button
                      type="button"
                      key={
                        member.id
                      }
                      className={`civic-team-card civic-team-card-${tone} ${
                        isLeader
                          ? 'is-lead'
                          : ''
                      }`}
                      onClick={() =>
                        setSelectedMember(
                          member,
                        )
                      }
                      aria-label={`View ${member.name}, ${member.position}`}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale:
                          0.96,
                      }}
                      transition={{
                        duration:
                          0.35,
                        delay:
                          index *
                          0.035,
                      }}
                    >
                      <div className="civic-team-card-image">
                        <img
                          src={
                            member.image
                          }
                          alt={
                            member.name
                          }
                          loading="lazy"
                          decoding="async"
                          draggable={
                            false
                          }
                        />

                        <div className="civic-team-image-shade" />

                        <div className="civic-team-card-top">
                          <span>
                            {String(
                              index +
                                1,
                            ).padStart(
                              2,
                              '0',
                            )}
                          </span>

                          {isLeader && (
                            <strong>
                              Lead
                            </strong>
                          )}
                        </div>

                        {/* DESKTOP / LAPTOP ONLY */}
                        <div className="civic-team-card-view">
                          <span>
                            View
                            Profile
                          </span>

                          <ArrowRight
                            size={
                              15
                            }
                          />
                        </div>
                      </div>

                      <div className="civic-team-card-content">
                        <span className="civic-team-card-committee">
                          {
                            member.committee
                          }
                        </span>

                        <h3>
                          {
                            member.name
                          }
                        </h3>

                        <div className="civic-team-card-role">
                          <span>
                            {
                              member.position
                            }
                          </span>

                          {/* DESKTOP */}
                          <ArrowRight
                            className="team-role-arrow-desktop"
                            size={
                              14
                            }
                          />

                          {/* TABLET + MOBILE */}
                          <ArrowDown
                            className="team-role-arrow-touch"
                            size={
                              16
                            }
                          />
                        </div>
                      </div>
                    </motion.button>
                  );
                },
              )}
            </AnimatePresence>

            <div
              className="civic-team-end-card"
              aria-hidden="true"
            >
              <span>
                Civic Law Initiative
              </span>

              <div>
                <strong>
                  One Team.
                  <br />
                  Shared Purpose.
                </strong>

                <i />
              </div>
            </div>
          </div>

          {/* LEGEND */}
          <div className="civic-team-legend">
            <div>
              <i className="legend-maroon" />

              <span>
                Leadership
              </span>
            </div>

            <div>
              <i className="legend-gold" />

              <span>
                Finance
              </span>
            </div>

            <div>
              <i className="legend-teal" />

              <span>
                Logistics
              </span>
            </div>

            <div>
              <i className="legend-blue" />

              <span>
                PR, Media &
                Outreach
              </span>
            </div>
          </div>

          <div className="civic-team-bottom-rule">
            <span>
              {String(
                teamMembers.length,
              ).padStart(
                2,
                '0',
              )}{' '}
              people
            </span>

            <i />

            <span>
              One shared purpose
            </span>
          </div>
        </div>
      </SectionWrapper>

      {/* PROFILE MODAL */}
      {selectedMember && (
        <div
          className="civic-team-modal-backdrop"
          onMouseDown={(
            event,
          ) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeMember();
            }
          }}
        >
          <article
            className={`civic-team-modal civic-team-modal-${getCommitteeClass(
              selectedMember.committee,
            )}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-member-name"
          >
            <button
              type="button"
              className="civic-team-modal-close"
              onClick={
                closeMember
              }
              aria-label="Close team member profile"
            >
              <X size={20} />
            </button>

            <div className="civic-team-modal-image">
              <img
                src={
                  selectedMember.image
                }
                alt={`Portrait of ${selectedMember.name}`}
                decoding="async"
                draggable={
                  false
                }
              />

              <div className="civic-team-modal-image-overlay" />

              <span className="civic-team-modal-image-label">
                Our People
              </span>
            </div>

            <div className="civic-team-modal-content">
              <div>
                <span className="civic-team-modal-committee">
                  {
                    selectedMember.committee
                  }
                </span>

                <h2 id="team-member-name">
                  {
                    selectedMember.name
                  }
                </h2>

                <p className="civic-team-modal-role">
                  {
                    selectedMember.position
                  }
                </p>
              </div>

              <div className="civic-team-modal-statement">
                <span>
                  Law · Liberty ·
                  Civic
                  Responsibility
                </span>

                <p>
                  Working together
                  to strengthen civic
                  awareness, legal
                  literacy and
                  meaningful
                  participation.
                </p>
              </div>

              <div className="civic-team-modal-footer">
                <span>
                  Civic Law
                  Initiative
                </span>

                <span>
                  Team Member
                </span>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
