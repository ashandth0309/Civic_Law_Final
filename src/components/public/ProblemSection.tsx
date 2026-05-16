import SectionWrapper from '../ui/SectionWrapper';
import SectionHeader from '../ui/SectionHeader';

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <SectionHeader num="01" sub="Problem Statement" title="The Democratic Moment Sri Lanka Cannot Miss" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

        {/* Body copy */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            fontWeight: 300,
            lineHeight: 1.85,
            color: '#2a2520',
          }}
        >
          <p>Sri Lanka is undergoing a period of democratic reflection and institutional reform following the political and economic crisis of 2022. The crisis sparked widespread public protests, particularly the Aragalaya movement, where youth demanded accountability, transparency, and stronger adherence to the rule of law.</p>
          <p className="mt-5">While civic engagement was high, these events revealed gaps in structured civic education, legal literacy, and platforms for dialogue between citizens, legal professionals, and policymakers.</p>
          <p className="mt-5">This is especially true in urban and post-conflict regions such as Jaffna and Batticaloa, where youth and early-career legal professionals have limited access to national-level discussions on governance and civic responsibility.</p>
        </div>

        {/* Pull quote */}
        <blockquote
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.25rem, 2.8vw, 1.8rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: 1.5,
            color: 'var(--blue)',
            borderTop: '3px solid var(--blue)',
            paddingTop: '1.4rem',
            alignSelf: 'start',
            margin: 0,
          }}
        >
          "Many young Sri Lankans remain politically engaged but lack opportunities to translate civic awareness into meaningful participation."
        </blockquote>

      </div>
    </SectionWrapper>
  );
}