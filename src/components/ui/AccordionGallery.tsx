import {
  CSSProperties,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { gsap } from 'gsap';
import { User } from 'lucide-react';
import './AccordionGallery.css';

export interface AccordionGalleryItem {
  id: string;
  image?: string | null;
  name: string;
  role: string;
  group?: string;
  alt?: string;
}

interface AccordionGalleryProps {
  items: AccordionGalleryItem[];
  defaultIndex?: number;
  height?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  className?: string;
}

type GalleryCSSProperties = CSSProperties & {
  '--ag-gap'?: string;
  '--ag-radius'?: string;
};

export default function AccordionGallery({
  items,
  defaultIndex = 0,
  height = 540,
  gap = 10,
  radius = 16,
  expandRatio = 0.5,
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.45,
  tilt = 3,
  className = '',
}: AccordionGalleryProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const safeDefault =
    items.length > 0
      ? Math.min(Math.max(defaultIndex, 0), items.length - 1)
      : 0;

  const [active, setActive] = useState(safeDefault);
  const [isMobile, setIsMobile] = useState(false);

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    setActive(
      items.length > 0
        ? Math.min(Math.max(defaultIndex, 0), items.length - 1)
        : 0,
    );
  }, [items.length, defaultIndex]);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 768px)');

    const update = () => {
      setIsMobile(query.matches);
    };

    update();
    query.addEventListener('change', update);

    return () => {
      query.removeEventListener('change', update);
    };
  }, []);

  const applyLayout = useCallback(
    (animate = true) => {
      if (!items.length) return;

      timelineRef.current?.kill();

      const reduced = prefersReducedMotion();
      const animationDuration =
        animate && !reduced ? duration : 0;

      const timeline = gsap.timeline();

      panelRefs.current.forEach((panel, index) => {
        if (!panel) return;

        const image = imageRefs.current[index];
        const content = contentRefs.current[index];
        const isActive = index === active;

        if (isMobile) {
          timeline.to(
            panel,
            {
              height: isActive ? 420 : 110,
              flexGrow: 0,
              rotateY: 0,
              duration: animationDuration,
              ease,
            },
            0,
          );
        } else {
          const ratio = Math.min(Math.max(expandRatio, 0.25), 0.75);
          const grow =
            items.length > 1
              ? (ratio * (items.length - 1)) / (1 - ratio)
              : 1;

          timeline.to(
            panel,
            {
              flexGrow: isActive ? grow : 1,
              rotateY: isActive
                ? 0
                : index < active
                  ? tilt
                  : -tilt,
              duration: animationDuration,
              ease,
            },
            0,
          );
        }

        if (image) {
          const drift = Math.max(
            -1.5,
            Math.min(1.5, active - index),
          );

          timeline.to(
            image,
            {
              x: isMobile || isActive
                ? 0
                : drift * parallax * 14,
              scale: isActive ? 1 : 1.04,
              filter: isActive
                ? 'grayscale(0%) brightness(100%)'
                : 'grayscale(75%) brightness(62%)',
              duration: animationDuration,
              ease,
            },
            0,
          );
        }

        if (content) {
          timeline.to(
            content,
            {
              opacity: isActive ? 1 : 0.35,
              y: isActive ? 0 : 12,
              duration: animationDuration * 0.8,
              ease,
            },
            0,
          );
        }
      });

      timelineRef.current = timeline;
    },
    [
      active,
      duration,
      ease,
      expandRatio,
      isMobile,
      items.length,
      parallax,
      tilt,
    ],
  );

  useEffect(() => {
    applyLayout(false);
  }, [isMobile, items.length]);

  useEffect(() => {
    applyLayout(true);
  }, [active, applyLayout]);

  useEffect(() => {
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  const handleKeyboard = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (!items.length) return;

    if (
      event.key === 'ArrowRight' ||
      event.key === 'ArrowDown'
    ) {
      event.preventDefault();

      const next = (index + 1) % items.length;
      setActive(next);

      requestAnimationFrame(() => {
        panelRefs.current[next]?.focus();
      });
    }

    if (
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowUp'
    ) {
      event.preventDefault();

      const previous =
        (index - 1 + items.length) % items.length;

      setActive(previous);

      requestAnimationFrame(() => {
        panelRefs.current[previous]?.focus();
      });
    }
  };

  if (!items.length) return null;

  const style: GalleryCSSProperties = {
    '--ag-gap': `${gap}px`,
    '--ag-radius': `${radius}px`,
    height: isMobile ? 'auto' : `${height}px`,
  };

  return (
    <div
      ref={rootRef}
      className={`team-accordion-gallery ${className}`}
      style={style}
      role="list"
      aria-label="Team members"
    >
      {items.map((item, index) => {
        const isActive = active === index;

        return (
          <button
            key={item.id}
            ref={(element) => {
              panelRefs.current[index] = element;
            }}
            type="button"
            className={`team-accordion-panel ${
              isActive ? 'team-accordion-panel--active' : ''
            }`}
            onMouseEnter={() => {
              if (!isMobile) setActive(index);
            }}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            onKeyDown={(event) =>
              handleKeyboard(event, index)
            }
            role="listitem"
            aria-expanded={isActive}
            aria-label={`${item.name}, ${item.role}`}
          >
            <div
              ref={(element) => {
                imageRefs.current[index] = element;
              }}
              className="team-accordion-image"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={
                    item.alt ||
                    `Portrait of ${item.name}`
                  }
                  draggable={false}
                />
              ) : (
                <div
                  className="team-portrait-placeholder"
                  aria-hidden="true"
                >
                  <User size={46} strokeWidth={1.2} />
                </div>
              )}
            </div>

            <div className="team-image-shade" />

            <div
              ref={(element) => {
                contentRefs.current[index] = element;
              }}
              className="team-person-content"
            >
              {item.group && (
                <span className="team-person-group">
                  {item.group}
                </span>
              )}

              <h4 className="team-person-name">
                {item.name}
              </h4>

              <p className="team-person-role">
                {item.role}
              </p>
            </div>

            <div
              className="team-panel-number"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </div>
          </button>
        );
      })}
    </div>
  );
}
