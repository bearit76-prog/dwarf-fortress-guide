import {
  Anchor,
  Axe,
  Brain,
  Castle,
  Droplets,
  Factory,
  Flag,
  Gem,
  Hammer,
  LayoutGrid,
  Map,
  Shield,
  Sparkles,
  Wrench,
} from 'lucide-react';
import interfaceBanner from '../assets/chapter-banners/interface-controls.jpg';
import embarkBanner from '../assets/chapter-banners/perfect-embark.jpg';
import industryBanner from '../assets/chapter-banners/industry-automation.jpg';
import hydrologyBanner from '../assets/chapter-banners/hydrology-engineering.jpg';
import militaryBanner from '../assets/chapter-banners/military-defense.jpg';
import moodsBanner from '../assets/chapter-banners/strange-moods-stress.jpg';
import endgameBanner from '../assets/chapter-banners/masterclass-endgame.jpg';

export const chapters = [
  {
    number: '01',
    title: 'Interface & Controls',
    slug: 'interface-controls',
    icon: LayoutGrid,
    image: interfaceBanner,
    summary:
      'Learn the Steam interface, labor screens, burrows, hotkeys, alerts, stockpile tools, and the first habits that keep a fortress readable.',
    blueprint: 'UI layers, alert lanes, stockpile zones',
    sections: [
      'Reading the main toolbar without losing context',
      'Building repeatable camera, squad, and stockpile habits',
      'Using alerts before small problems become fortress-wide events',
    ],
  },
  {
    number: '02',
    title: 'The Perfect Embark',
    slug: 'perfect-embark',
    icon: Map,
    image: embarkBanner,
    summary:
      'Pick a forgiving site, pack useful skills, judge neighbors and aquifers, and start with a plan that survives the first winter.',
    blueprint: 'Site filters, wagon loadout, first dig order',
    sections: [
      'Choosing terrain with soil, wood, stone, water, and trade access',
      'Balancing miners, growers, craftsdwarves, and emergency militia',
      'Planning the first stairwell before the wagon is unpacked',
    ],
  },
  {
    number: '03',
    title: 'Industry & Automation',
    slug: 'industry-automation',
    icon: Factory,
    image: industryBanner,
    summary:
      'Build dependable production chains for food, drink, furniture, metal, cloth, trade goods, and manager-driven workshop orders.',
    blueprint: 'Workshop lanes, stockpile logic, manager orders',
    sections: [
      'Designing workshop blocks that shorten hauling paths',
      'Using work orders with item conditions and material limits',
      'Preventing stockpile clutter from strangling production',
    ],
  },
  {
    number: '04',
    title: 'Hydrology & Engineering',
    slug: 'hydrology-engineering',
    icon: Droplets,
    image: hydrologyBanner,
    summary:
      'Approach water, magma, pumps, cisterns, wells, drawbridges, and floodgates with engineering-first safety rules.',
    blueprint: 'Pump stacks, drains, floodgate controls',
    sections: [
      'Understanding pressure, source tiles, and safe drainage',
      'Creating cisterns and hospital wells with clean access',
      'Testing every lever before trusting it with lives',
    ],
  },
  {
    number: '05',
    title: 'Military & Defense',
    slug: 'military-defense',
    icon: Shield,
    image: militaryBanner,
    summary:
      'Create training squads, equipment policies, layered entrances, kill corridors, safe burrows, and civilian evacuation plans.',
    blueprint: 'Barracks, gates, trap halls, squad routes',
    sections: [
      'Building a militia before the first siege arrives',
      'Separating civilian paths from defensive choke points',
      'Using drawbridges and burrows without trapping your own dwarves',
    ],
  },
  {
    number: '06',
    title: 'Strange Moods & Stress',
    slug: 'strange-moods-stress',
    icon: Brain,
    image: moodsBanner,
    summary:
      'Support temples, guildhalls, bedrooms, dining rooms, hospitals, justice, artifacts, and the social systems that shape morale.',
    blueprint: 'Need coverage, mood materials, stress triage',
    sections: [
      'Keeping common mood materials available and visible',
      'Reading stress as a logistics problem, not just a personality problem',
      'Improving meeting areas without turning the fort into a palace',
    ],
  },
  {
    number: '07',
    title: 'Masterclass & Endgame',
    slug: 'masterclass-endgame',
    icon: Gem,
    image: endgameBanner,
    summary:
      'Scale toward megaprojects, noble demands, magma industry, cavern control, artifact wealth, and late-game threats.',
    blueprint: 'Mega layouts, magma economy, legacy planning',
    sections: [
      'Expanding without making hauling times unbearable',
      'Turning wealth into leverage instead of siege bait',
      'Designing monuments, libraries, and long-term fortress identity',
    ],
  },
];

export const features = [
  { title: 'Beginner Friendly', icon: Anchor, copy: 'Clear first steps for players who know the game is deep but want the first fort to make sense.' },
  { title: 'Steam UI Focused', icon: Wrench, copy: 'Menus, alerts, hotkeys, and workflows are written around the modern Steam release.' },
  { title: 'Fortress Blueprints', icon: Castle, copy: 'Layout patterns for bedrooms, workshops, stockpiles, taverns, farms, wells, and defenses.' },
  { title: 'Engineering Guides', icon: Hammer, copy: 'Water, magma, bridges, pumps, and levers explained with safety margins first.' },
  { title: 'Military Layouts', icon: Axe, copy: 'Training, equipment, trap corridors, and evacuation ideas that keep civilians out of the mess.' },
  { title: 'Endgame Strategies', icon: Flag, copy: 'Guidance for wealth, nobles, megaprojects, caverns, and the moments when success becomes dangerous.' },
];

export const chapterCallouts = {
  tip: {
    label: 'Pro Tip',
    icon: Sparkles,
    body: 'Name critical levers by outcome and location. A label like "Seal East Trade Gate" is worth more than a legendary mechanic when panic starts.',
  },
  warning: {
    label: 'Warning',
    icon: Shield,
    body: 'Never connect water, magma, or bridges to an untested control path. Build a tiny test chamber first and prove the design under harmless conditions.',
  },
  note: {
    label: 'Note',
    icon: Wrench,
    body: 'The strongest forts are readable forts. If you can explain a hallway, stockpile, or stairwell in one sentence, future-you can repair it under pressure.',
  },
};
