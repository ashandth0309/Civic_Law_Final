import abhimanyuImage from '../assets/team/abhimanyu-elanchezhian.png';
import ashandthImage from '../assets/team/ashandth-uthayashankar.png';
import senoliImage from '../assets/team/senoli-wickramasinghe.png';
import harinduImage from '../assets/team/harindu-dhanapala.png';
import keshihanImage from '../assets/team/keshihan-ilamuruganthan.png';
import nirujaImage from '../assets/team/niruja-suresh.png';
import rashmikaImage from '../assets/team/rashmika-vimashi.png';
import sachithmaImage from '../assets/team/sachithma-de-zoysa.png';
import sajeevImage from '../assets/team/sajeev-shanker.png';
import sanduniImage from '../assets/team/sanduni-rathnayake.png';
import shihanImage from '../assets/team/shihan-maharoof.png';
import sisuriImage from '../assets/team/sisuri-jayawardana.png';
import sohanImage from '../assets/team/sohan-vipulananda.png';

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  committee: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  // =========================
  // LEADERSHIP
  // =========================

  {
    id: 1,
    name: 'Shihan Maharoof',
    position: 'Chairperson',
    committee: 'Leadership',
    image: shihanImage,
  },

  {
    id: 2,
    name: 'Sanduni Rathnayake',
    position: 'Secretary',
    committee: 'Leadership',
    image: sanduniImage,
  },

  {
    id: 3,
    name: 'Senoli Wickramasinghe',
    position: 'Volunteer',
    committee: 'Leadership',
    image: senoliImage,
  },

  // =========================
  // FINANCE
  // =========================

  {
    id: 4,
    name: 'Abhimanyu Elanchezhian',
    position: 'Head of Finance',
    committee: 'Finance',
    image: abhimanyuImage,
  },

  {
    id: 5,
    name: 'Sajeev Shanker',
    position: 'Volunteer',
    committee: 'Finance',
    image: sajeevImage,
  },

  // =========================
  // LOGISTICS
  // =========================

  {
    id: 6,
    name: 'Sohan Vipulananda',
    position: 'Head of Logistics',
    committee: 'Logistics',
    image: sohanImage,
  },

  {
    id: 7,
    name: 'Niruja Suresh',
    position: 'Volunteer',
    committee: 'Logistics',
    image: nirujaImage,
  },

  {
    id: 8,
    name: 'Rashmika Vimashi',
    position: 'Volunteer',
    committee: 'Logistics',
    image: rashmikaImage,
  },

  {
    id: 9,
    name: 'Sisuri Jayawardana',
    position: 'Volunteer',
    committee: 'Logistics',
    image: sisuriImage,
  },

  // =========================
  // PR, MEDIA & OUTREACH
  // =========================

  {
    id: 10,
    name: 'Sachithma De Zoysa',
    position: 'Volunteer',
    committee: 'PR, Media & Outreach',
    image: sachithmaImage,
  },

  {
    id: 11,
    name: 'Ashandth Uthayashankar',
    position: 'Volunteer',
    committee: 'PR, Media & Outreach',
    image: ashandthImage,
  },

  {
    id: 12,
    name: 'Harindu Dhanapala',
    position: 'Volunteer',
    committee: 'PR, Media & Outreach',
    image: harinduImage,
  },

  {
    id: 13,
    name: 'Keshihan Ilamuruganthan',
    position: 'Volunteer',
    committee: 'PR, Media & Outreach',
    image: keshihanImage,
  },
];
