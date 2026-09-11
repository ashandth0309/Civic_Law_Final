import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { gsap } from 'gsap';
import { User } from 'lucide-react';

import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';
import AccordionGallery, {
  AccordionGalleryItem,
} from '../ui/AccordionGallery';

import { supabase } from '../../lib/supabase';
import type { TeamMember } from '../../types/database';

const COMMITTEE_ORDER = [
  'Chairperson',
  'Secretary',
  'Finance',
  'Logistics',
  'PR',
];

export default function TeamSection() {
  const sectionContentRef = useRef<HTMLDivElement | null>(
    null,
  );

  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadTeam = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('sort_order', { ascending: true });

      if (!mounted) return;

      if (error) {
        console.error(
          'Unable to load team members:',
          error,
        );
        setMembers([]);
      } else {
        setMembers((data ?? []) as TeamMember[]);
      }

      setLoading(false);
    };

    void loadTeam();

    return () => {
      mounted = false;
    };
  }, []);

  const groups = useMemo(() => {
    const knownCommittees = COMMITTEE_ORDER.map(
      (committee) => ({
        name: committee,
        members: members.filter(
          (member) =>
            (member.committee || member.department) ===
            committee,
        ),
      }),
    ).filter((group) => group.members.length > 0);

    const knownNames = new Set(COMMITTEE_ORDER);

    const otherNames = Array.from(
      new Set(
        members
          .map(
            (member) =>
              member.committee ||
              member.department ||
              'Team',
          )
          .filter(
            (name) => !knownNames.has(name),
          ),
      ),
    );

    const others = otherNames
      .map((name) => ({
        name,
        members: members.filter(
          (member) =>
            (member.committee ||
              member.department ||
              'Team') === name,
        ),
      }))
      .filter((group) => group.members.length > 0);

    return [...knownCommittees, ...others];
  }, [members]);

  useEffect(() => {
    if (
      loading ||
      !sectionContentRef.current ||
      !groups.length
    ) {
      return;
    }

    const root = sectionContentRef.current;

    const prefersReducedMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        root.querySelectorAll(
          '.team-committee-block',
        ),
        {
          opacity: 1,
          y: 0,
        },
      );

      return;
    }

    const blocks = root.querySelectorAll(
      '.team-committee-block',
    );

    gsap.set(blocks, {
      opacity: 0,
      y: 42,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.to(blocks, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          clearProps: 'transform',
        });

        observer.disconnect();
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(blocks);
    };
  }, [loading, groups.length]);

  const makeGalleryItems = (
    groupMembers: TeamMember[],
    groupName: string,
  ): AccordionGalleryItem[] =>
    groupMembers.map((member) => ({
      id: member.id,
      image: member.photo_url || null,
      name: member.name,
      role: member.position,
      group:
        member.committee ||
        member.department ||
        groupName,
      alt: `Portrait of ${member.name}`,
    }));

  return (
    <SectionWrapper id="team">
      <SectionHeader
        num="08"
        sub="Our People"
        title="Team"
      />

      <div
        ref={sectionContentRef}
        className="mt-8 md:mt-12"
      >
        {loading && (
          <div
            className="py-16 border-y border-[var(--line)]"
            style={{
              fontFamily:
                "'IBM Plex Mono', monospace",
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            Loading team...
          </div>
        )}

        {!loading && groups.length === 0 && (
          <div
            className="py-16 border-y border-[var(--line)]"
            style={{
              fontFamily:
                "'IBM Plex Mono', monospace",
              color: 'var(--muted)',
            }}
          >
            Team information will be available soon.
          </div>
        )}

        {!loading &&
          groups.map((group, groupIndex) => {
            const galleryItems = makeGalleryItems(
              group.members,
              group.name,
            );

            const singleMember =
              group.members.length === 1
                ? group.members[0]
                : null;

            return (
              <section
                key={group.name}
                className="team-committee-block border-t border-[var(--line)] py-10 md:py-14"
              >
                {/* Committee heading */}

                <div className="flex items-end justify-between gap-6 mb-7 md:mb-9">
                  <div className="flex items-start gap-4 md:gap-6">
                    <span
                      style={{
                        fontFamily:
                          "'IBM Plex Mono', monospace",
                        fontSize: '0.62rem',
                        letterSpacing: '0.14em',
                        color: 'var(--red)',
                        paddingTop: '0.55rem',
                      }}
                    >
                      {String(
                        groupIndex + 1,
                      ).padStart(2, '0')}
                    </span>

                    <div>
                      <p
                        className="mb-1"
                        style={{
                          fontFamily:
                            "'IBM Plex Mono', monospace",
                          fontSize:
                            'clamp(0.57rem, 0.9vw, 0.68rem)',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--muted)',
                        }}
                      >
                        Committee
                      </p>

                      <h3
                        style={{
                          margin: 0,
                          fontFamily:
                            "'Cormorant Garamond', Georgia, serif",
                          fontSize:
                            'clamp(1.8rem, 4vw, 3.4rem)',
                          fontWeight: 600,
                          lineHeight: 1,
                          letterSpacing: '-0.02em',
                          color: 'var(--ink)',
                        }}
                      >
                        {group.name}
                      </h3>
                    </div>
                  </div>

                  <span
                    className="hidden sm:block"
                    style={{
                      fontFamily:
                        "'IBM Plex Mono', monospace",
                      fontSize: '0.62rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                    }}
                  >
                    {group.members.length}{' '}
                    {group.members.length === 1
                      ? 'Member'
                      : 'Members'}
                  </span>
                </div>

                {/* One member */}

                {singleMember ? (
                  <div className="team-single-person">
                    {singleMember.photo_url ? (
                      <img
                        src={singleMember.photo_url}
                        alt={`Portrait of ${singleMember.name}`}
                      />
                    ) : (
                      <div className="team-portrait-placeholder">
                        <User
                          size={52}
                          strokeWidth={1.1}
                        />
                      </div>
                    )}

                    <div className="team-image-shade" />

                    <div className="team-person-content">
                      <span className="team-person-group">
                        {singleMember.committee ||
                          singleMember.department ||
                          group.name}
                      </span>

                      <h4 className="team-person-name">
                        {singleMember.name}
                      </h4>

                      <p className="team-person-role">
                        {singleMember.position}
                      </p>
                    </div>
                  </div>
                ) : (
                  <AccordionGallery
                    items={galleryItems}
                    defaultIndex={0}
                    height={540}
                    expandRatio={0.5}
                    gap={10}
                    radius={16}
                    duration={0.6}
                    ease="power3.out"
                    parallax={0.5}
                    tilt={3}
                  />
                )}
              </section>
            );
          })}
      </div>
    </SectionWrapper>
  );
}
