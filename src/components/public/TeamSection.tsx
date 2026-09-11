import {
  PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  ArrowLeft,
  ArrowRight,
  X,
} from 'lucide-react';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

import {
  teamMembers,
  type TeamMember,
} from '../../data/team';

import './TeamSection.css';

export default function TeamSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const pointerStartX = useRef(0);
  const initialScrollLeft = useRef(0);
  const dragging = useRef(false);
  const dragged = useRef(false);

  const [selectedMember, setSelectedMember] =
    useState<TeamMember | null>(null);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(true);

  const updateScrollControls = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

    const maximumScroll =
      track.scrollWidth - track.clientWidth;

    setCanScrollLeft(track.scrollLeft > 8);

    setCanScrollRight(
      track.scrollLeft < maximumScroll - 8,
    );
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    updateScrollControls();

    track.addEventListener(
      'scroll',
      updateScrollControls,
      { passive: true },
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

  const scrollGallery = (direction: 'left' | 'right') => {
    const track = trackRef.current;

    if (!track) return;

    const firstCard =
      track.querySelector<HTMLElement>(
        '.civic-team-card',
      );

    const amount = firstCard
      ? firstCard.offsetWidth + 18
      : 340;

    track.scrollBy({
      left:
        direction === 'right'
          ? amount * 2
          : -amount * 2,
      behavior: 'smooth',
    });
  };

  const handlePointerDown = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const track = trackRef.current;

    if (!track) return;

    dragging.current = true;
    dragged.current = false;

    pointerStartX.current = event.clientX;
    initialScrollLeft.current = track.scrollLeft;

    track.setPointerCapture(event.pointerId);
    track.classList.add('is-dragging');
  };

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const track = trackRef.current;

    if (!track || !dragging.current) return;

    const distance =
      event.clientX - pointerStartX.current;

    if (Math.abs(distance) > 5) {
      dragged.current = true;
    }

    track.scrollLeft =
      initialScrollLeft.current - distance;
  };

  const handlePointerEnd = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const track = trackRef.current;

    dragging.current = false;

    if (track) {
      track.classList.remove('is-dragging');

      if (
        track.hasPointerCapture(event.pointerId)
      ) {
        track.releasePointerCapture(
          event.pointerId,
        );
      }
    }
  };

  const openMember = (member: TeamMember) => {
    if (dragged.current) {
      dragged.current = false;
      return;
    }

    setSelectedMember(member);
  };

  const closeMember = useCallback(() => {
    setSelectedMember(null);
  }, []);

  useEffect(() => {
    if (!selectedMember) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
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
  }, [selectedMember, closeMember]);

  return (
    <>
      <SectionWrapper id="team">
        <div className="civic-team-section">
          <SectionHeader
            num="07"
            sub="Our People"
            title="Team"
          />

          <div className="civic-team-intro">
            <div>
              <p className="civic-team-kicker">
                The people behind the initiative
              </p>

              <p className="civic-team-description">
                A multidisciplinary team working
                together to strengthen legal
                literacy, civic participation and
                community engagement.
              </p>
            </div>

            <div className="civic-team-counter">
              <strong>
                {String(
                  teamMembers.length,
                ).padStart(2, '0')}
              </strong>

              <span>Team Members</span>
            </div>
          </div>

          <div className="civic-team-navigation">
            <div className="civic-team-navigation-copy">
              <span>Explore the team</span>

              <span className="civic-team-navigation-line" />

              <span>
                Drag · Swipe · Click
              </span>
            </div>

            <div className="civic-team-arrows">
              <button
                type="button"
                className="civic-team-arrow"
                onClick={() =>
                  scrollGallery('left')
                }
                disabled={!canScrollLeft}
                aria-label="Previous team members"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                className="civic-team-arrow"
                onClick={() =>
                  scrollGallery('right')
                }
                disabled={!canScrollRight}
                aria-label="Next team members"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="civic-team-track"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
          >
            {teamMembers.map(
              (member, index) => (
                <button
                  type="button"
                  key={member.id}
                  className="civic-team-card"
                  onClick={() =>
                    openMember(member)
                  }
                  aria-label={`View ${member.name}, ${member.position}`}
                >
                  <div className="civic-team-card-image">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      draggable={false}
                    />

                    <div className="civic-team-image-overlay" />

                    <span className="civic-team-card-index">
                      {String(
                        index + 1,
                      ).padStart(2, '0')}
                    </span>

                    <span className="civic-team-view">
                      View profile
                      <ArrowRight
                        size={14}
                      />
                    </span>
                  </div>

                  <div className="civic-team-card-content">
                    <div className="civic-team-committee">
                      {member.committee}
                    </div>

                    <h3>
                      {member.name}
                    </h3>

                    <p>
                      {member.position}
                    </p>
                  </div>
                </button>
              ),
            )}

            <div
              className="civic-team-track-end"
              aria-hidden="true"
            >
              <span>
                Civic Law
              </span>

              <strong>
                One Team.
                <br />
                Shared Purpose.
              </strong>
            </div>
          </div>

          <div className="civic-team-bottom-rule">
            <span>
              {String(teamMembers.length).padStart(
                2,
                '0',
              )}{' '}
              people
            </span>

            <div />

            <span>
              Civic Law Initiative
            </span>
          </div>
        </div>
      </SectionWrapper>

      {selectedMember && (
        <div
          className="civic-team-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeMember();
            }
          }}
        >
          <article
            className="civic-team-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-member-name"
          >
            <button
              type="button"
              className="civic-team-modal-close"
              onClick={closeMember}
              aria-label="Close team member profile"
            >
              <X size={20} />
            </button>

            <div className="civic-team-modal-image">
              <img
                src={selectedMember.image}
                alt={`Portrait of ${selectedMember.name}`}
              />
            </div>

            <div className="civic-team-modal-content">
              <div>
                <span className="civic-team-modal-label">
                  {selectedMember.committee}
                </span>

                <h2 id="team-member-name">
                  {selectedMember.name}
                </h2>

                <p className="civic-team-modal-role">
                  {selectedMember.position}
                </p>
              </div>

              <div className="civic-team-modal-footer">
                <div>
                  <span>
                    Civic Law
                  </span>

                  <strong>
                    Team Member
                  </strong>
                </div>

                <span className="civic-team-modal-number">
                  {String(
                    selectedMember.id,
                  ).padStart(2, '0')}
                </span>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
