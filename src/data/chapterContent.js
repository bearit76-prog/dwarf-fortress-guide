import bottomBarDiagram from '../assets/guide-images/page-05-image-01.png';
import zLevelDiagram from '../assets/guide-images/page-07-image-01.jpg';
import embarkSiteDiagram from '../assets/guide-images/page-11-image-01.jpg';
import startingPartyDiagram from '../assets/guide-images/page-17-image-01.jpg';
import feederStockpileDiagram from '../assets/guide-images/page-20-image-01.jpg';
import verticalIndustryDiagram from '../assets/guide-images/page-23-image-01.jpg';
import pumpStackDiagram from '../assets/guide-images/page-26-image-01.jpg';
import waterReactorDiagram from '../assets/guide-images/page-28-image-01.jpg';
import armorLayeringDiagram from '../assets/guide-images/page-32-image-01.jpg';
import trapCorridorDiagram from '../assets/guide-images/page-35-image-01.png';
import characterSheetDiagram from '../assets/guide-images/page-37-image-01.jpg';
import mistGeneratorDiagram from '../assets/guide-images/page-41-image-01.jpg';
import atomSmasherDiagram from '../assets/guide-images/page-44-image-01.jpg';
import adamantineDiagram from '../assets/guide-images/page-47-image-01.png';

export const chapterContent = {
  'interface-controls': {
    subtitle: 'The Steam Paradigm Shift',
    introduction: [
      'For over fifteen years, Dwarf Fortress was notorious for its visual opacity and complex, keyboard-driven interface. Players had to navigate labyrinthine menus and memorize dozens of ASCII symbols just to dig a simple hallway.',
      'With the Premium/Steam release, the core simulation remains as deep as ever, but the interface has shifted to a modern, graphical, mouse-driven system. This chapter focuses on mastering that interface, moving through Z-levels, configuring labor, and building efficient control habits.',
    ],
    sections: [
      {
        id: 'hud-layout',
        title: 'The Mouse-Driven Interface & HUD Layout',
        paragraphs: [
          'The Steam version replaces the text-heavy Classic sidebar with a graphical HUD. The screen is framed by essential information panels that let you read the health of the fort while keeping the map visible.',
        ],
        cards: [
          {
            title: 'Top Bar',
            body: 'Displays alerts, date and season, population, stress status, and stockpiled wealth once a bookkeeper is active.',
          },
          {
            title: 'Right Margin',
            body: 'Houses Z-level elevation controls and minimap navigation tools for moving through the vertical map.',
          },
          {
            title: 'Bottom Bar',
            body: 'The central command dashboard for construction, designations, zones, stockpiles, and administration.',
          },
        ],
      },
      {
        id: 'bottom-bar-tools',
        title: 'Bottom-Bar Command Dashboard',
        paragraphs: [
          'The bottom bar is divided into designation/building tools in the center and management dashboards on the bottom-left. Clicking icons works, but learning the hotkeys makes repeated fortress work much faster.',
        ],
        tables: [
          {
            caption: 'Designation & Building Tools',
            columns: ['Tool', 'Hotkey', 'Function'],
            rows: [
              ['Mining', 'm', 'Designate excavation, channels, ramps, and stairs.'],
              ['Wood Cutting', 'l', 'Designate trees for woodcutters.'],
              ['Gather Plants', 'g', 'Select shrubs and wild plants for herbalists.'],
              ['Smooth / Engrave', 'v', 'Smooth, engrave, or carve tracks into stone walls and floors.'],
              ['Remove Designation', 'x', 'Cancel pending mining, logging, or gathering orders.'],
              ['Build', 'b', 'Place workshops, furniture, traps, walls, bridges, and doors.'],
              ['Stockpiles', 'p', 'Draw storage areas for food, wood, stone, and other goods.'],
              ['Zones', 'z', 'Create meeting areas, bedrooms, dining halls, temples, and offices.'],
              ['Burrows', 'U', 'Define safety zones where citizens retreat during crises.'],
              ['Melt / Dump / Hide / Forbid', 'i', 'Apply mass item configurations such as dumping refuse or forbidding items.'],
            ],
          },
          {
            caption: 'Management Dashboards',
            columns: ['Dashboard', 'Hotkey', 'Function'],
            rows: [
              ['Creatures List', 'u', 'View citizens, pets, strangers, and dead or missing units.'],
              ['Tasks Monitor', 't', 'Inspect active, pending, suspended, and completed jobs.'],
              ['Places Dashboard', 'Shift + p', 'Manage zones, temples, taverns, and guildhalls.'],
              ['Labor & Work Details', 'y', 'Configure worker roles, task assignments, and Work Details.'],
              ['Work Orders', 'o', 'Create automated manufacturing requests through the Manager.'],
              ['Nobles & Administrators', 'n', 'Assign roles such as Manager, Broker, Bookkeeper, and Sheriff.'],
              ['Objects List', 'Shift + o', 'Locate items, weapons, furniture, or goods in the fort.'],
              ['Justice System', 'j', 'Review crimes, cold cases, interrogations, and punishments.'],
              ['Hauling Routes', 'Shift + h', 'Configure minecarts, tracks, stops, and automated routes.'],
              ['Traffic Designations', 'Shift + t', 'Adjust pathing priority with High, Normal, Low, and Restricted traffic.'],
            ],
          },
        ],
        callouts: [
          {
            type: 'note',
            label: 'NOTE',
            body: 'Hovering over a bottom-bar icon often reveals its keyboard shortcut. Some players use Steam Workshop interface mods to overlay hotkey letters directly on icons while learning.',
          },
        ],
        diagram: 'Bottom-Bar Command Dashboard UI',
        image: bottomBarDiagram,
      },
      {
        id: 'z-levels-camera',
        title: 'Navigating Verticality: Z-Levels & Camera Controls',
        paragraphs: [
          'Dwarf Fortress maps are fully three-dimensional. Every fortress is a stack of horizontal layers called Z-levels, and efficient camera movement is essential once workshops, farms, barracks, wells, caverns, and defenses are spread vertically.',
        ],
        tables: [
          {
            caption: 'Z-Level Navigation Controls',
            columns: ['Control Method', 'Input', 'Use'],
            rows: [
              ['Mouse Wheel', 'Scroll up / down', 'Ascend toward the surface or descend into mines and caverns.'],
              ['Keyboard Hotkeys', 'e / c', 'Move up or down one Z-level at a time.'],
              ['Jump Navigation', 'Shift + scroll or Shift + e/c', 'Jump 10 Z-levels at once for rapid traversal.'],
              ['Elevation Z-Slider', 'Right-margin slider', 'Scrub rapidly through the full vertical depth of the fortress.'],
            ],
          },
          {
            caption: 'Viewport Camera Controls',
            columns: ['Control', 'Binding', 'Action'],
            rows: [
              ['Panning', 'W, A, S, D', 'Slide the camera north, west, south, and east across the current Z-level.'],
              ['Mouse Panning', 'Middle mouse drag or edge scroll', 'Pan the viewport dynamically.'],
              ['Zooming', '[ / ] or Ctrl + scroll', 'Zoom in for details or out for a high-level overview.'],
              ['Recenter View', 'F1', 'Center the camera on the starting embark wagon.'],
            ],
          },
        ],
        callouts: [
          {
            type: 'strategy',
            label: 'STRATEGY',
            body: 'Create custom camera hotkeys for critical sites such as the trade depot, main barracks, hospital, magma works, and surface gate. Open the Hotkey menu with h, set a location, rename it clearly, then jump back instantly with the assigned function key.',
          },
        ],
        diagram: 'Z-Level Navigation Diagrams',
        image: zLevelDiagram,
      },
      {
        id: 'designations',
        title: 'Designations: Mouse Selection vs. Keyboard Cursor',
        paragraphs: [
          'The designations menu is where you tell dwarves to mine stone, chop wood, gather plants, and clear areas. Mouse-driven selection makes broad planning faster, while the keyboard cursor remains valuable for precision and macros.',
        ],
        subsections: [
          {
            title: 'Mouse Drag-Selection',
            steps: [
              'Open the desired tool, such as Mining with m.',
              'Left-click the starting tile of the planned excavation.',
              'Drag to the opposite corner and watch the yellow preview box.',
              'Release the click or click again, depending on settings, to finalize the designation.',
              'For multi-level work, drag on one Z-level and scroll or press e/c to extend the box vertically.',
            ],
          },
          {
            title: 'Classic Keyboard Cursor',
            steps: [
              'Open Settings from the Esc menu.',
              'Choose the Game tab.',
              'Set Keyboard cursor enabled to Yes.',
              'Open a designation tool and move the yellow cursor with the arrow keys.',
              'Press Enter to mark the start tile, move to the end tile, and press Enter again to confirm.',
            ],
          },
          {
            title: 'Recording Macros for Rapid Layouts',
            steps: [
              'Enable the keyboard cursor before recording.',
              'Open the designation tool you want to repeat.',
              'Move the cursor to the starting point of the layout.',
              'Press Ctrl + r to start recording.',
              'Use keyboard movement and Enter to designate the first room or pattern.',
              'Move the cursor to the next pattern start and press Ctrl + r again to stop.',
              'Place the cursor at a new start point and press Ctrl + p to play the macro.',
            ],
          },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'WARNING',
            body: 'If you make an error during mouse designation, do not click frantically. Select Remove Designation with x, then drag over the incorrect tiles to cancel the pending jobs.',
          },
          {
            type: 'pro-tip',
            label: 'PRO-TIP',
            body: 'Use mouse selection for large organic spaces and keyboard cursor macros for repeatable grid layouts such as bedroom blocks, tomb rows, and workshop modules.',
          },
        ],
      },
      {
        id: 'management-dashboards',
        title: 'Key Management Dashboards',
        paragraphs: [
          'A colony of 200 dwarves cannot be managed tile by tile. Three panels carry much of the administrative weight: Labor, Nobles, and Tasks.',
        ],
        codeTitle: 'Labor Screen Pattern',
        code: [
          '+-------------------------------------------------------------+',
          '| LABOR SCREEN (y)                                            |',
          '+-------------------------------------------------------------+',
          '| Work Details:                                               |',
          '| [X] Mining             -> Assign Dwarves: [Urist] [Dumed]   |',
          '| [ ] Wood Cutting       -> Assign Dwarves: [Kogan]           |',
          '| [X] Custom: Blacksmith -> Assign Dwarves: [Zon]             |',
          '+-------------------------------------------------------------+',
          '| Dwarf Occupation Modes:                                     |',
          '| [Urist] - Green Hammer: Generalist                          |',
          '| [Zon]   - Red Hammer: Specialist                            |',
          '+-------------------------------------------------------------+',
        ],
        subsections: [
          {
            title: 'Work Details',
            bullets: [
              'Work Details are job categories such as Mining, Carpentry, Hauling, or a custom Blacksmith assignment.',
              'Checking a dwarf next to a Work Detail assigns that dwarf to the category.',
              'A green hammer means the dwarf is a generalist: they prioritize assigned work but still perform chores when idle.',
              'A red hammer means the dwarf is a specialist: they only perform tasks covered by their assignments.',
            ],
          },
          {
            title: 'Nobles & Administrators',
            bullets: [
              'Manager: validates and runs automated Work Orders.',
              'Bookkeeper: turns vague stockpile estimates into exact inventory counts as accuracy improves.',
              'Broker: negotiates with trade caravans and benefits from social skills such as Negotiator and Appraiser.',
            ],
          },
          {
            title: 'Tasks Monitor',
            bullets: [
              'Suspended tasks often mean a worker cannot find materials or cannot path to the job site.',
              'Hover over problem tasks to identify missing requirements such as iron ore, blocks, tools, or access.',
              'Cancel or prioritize stuck jobs from the task list to keep industry moving.',
            ],
          },
        ],
        callouts: [
          {
            type: 'strategy',
            label: 'STRATEGY',
            body: 'Set high-value crafters such as weaponsmiths, armorsmiths, and legendary stonecarvers to Specialist mode so they do not spend masterpiece time hauling stones or cleaning refuse.',
          },
          {
            type: 'important',
            label: 'IMPORTANT',
            body: 'The Manager and Bookkeeper need an assigned Office before they can work properly. Place a chair and table, draw an Office zone with z, then assign the zone to the noble.',
          },
        ],
      },
    ],
    checklist: [
      'Learn the bottom-bar hotkeys for tools you use every season.',
      'Create camera hotkeys for the trade depot, barracks, hospital, industry level, and main gate.',
      'Enable the keyboard cursor before recording macros for repeatable layouts.',
      'Assign a Manager and Bookkeeper early, then give them offices.',
      'Use the Tasks monitor when jobs stall instead of guessing what went wrong.',
    ],
  },
  'perfect-embark': {
    subtitle: 'Founding the Colony',
    introduction: [
      'In Dwarf Fortress, the most important decision is made before your dwarves ever reach the map. Site selection, starting skills, resource budgeting, and livestock choices determine whether the settlement has breathing room or collapses into immediate crisis.',
      'This chapter explains how to read the embark screen, use the location finder, judge aquifers, customize the starting seven, and save reusable embark profiles for future forts.',
    ],
    sections: [
      {
        id: 'site-selection',
        title: 'Site Selection & World Generation',
        paragraphs: [
          'When a new world is generated, Dwarf Fortress simulates years of history, rivers, biomes, civilizations, and local threats. The embark map is a dense planning tool, and the right-hand biome panel is the first place to read it.',
        ],
        codeTitle: 'Biome Information Pattern',
        code: [
          '+-------------------------------------------------------------+',
          '| BIOME INFORMATION (Embark Screen)                           |',
          '+-------------------------------------------------------------+',
          '| Biome: Joyful Wilds                                         |',
          '| Temperature: Temperate                                      |',
          '| Trees: Heavily Forested                                     |',
          '| Vegetation: Thick                                           |',
          '| Surrounding Civs: Dwarves, Elves, Goblins                   |',
          '| Aquifer: Light                                              |',
          '| Clay: Yes                                                   |',
          '| Sand: Yes                                                   |',
          '| Flux Stone: Yes                                             |',
          '+-------------------------------------------------------------+',
        ],
        tables: [
          {
            caption: 'Savagery and Biome Risk',
            columns: ['Savagery Type', 'Indicators', 'Gameplay Impact'],
            rows: [
              ['Benign', 'Serene or Calm regions with few predators.', 'Very safe for beginners learning basic mechanics.'],
              ['Neutral', 'Typical wildlife and fantasy predator/prey distribution.', 'A manageable standard challenge for a growing fort.'],
              ['Savage', 'Untamed or Joyful Wilds with giant aggressive fauna.', 'Dangerous for early woodcutters, but useful for exotic animal capture.'],
              ['Evil', 'Sinister, Haunted, or Terrifying regions with undead wildlife or hostile weather.', 'Extremely lethal. Avoid for early fortresses.'],
            ],
          },
        ],
        subsections: [
          {
            title: 'Resource Indicators to Prioritize',
            bullets: [
              'Trees and vegetation support charcoal, beds, barrels, bins, herbalism, and emergency food gathering.',
              'Flux stone is essential for steel. Limestone, dolomite, chalk, marble, and calcite are common examples.',
              'Sand enables glassmaking, while clay supports pottery. Both can become powerful long-term industries.',
              'Soil lets farms start immediately without irrigation and makes the first underground food economy simpler.',
            ],
          },
        ],
        callouts: [
          {
            type: 'strategy',
            label: 'STRATEGY',
            body: 'Multi-biome embarks are highly valuable. Put the entrance in a safe temperate area while still accessing a neighboring savage or resource-rich biome for exotic wood, animals, or terrain.',
          },
        ],
        diagram: 'Embark Site Biome Selection Panel',
        image: embarkSiteDiagram,
      },
      {
        id: 'finder-tool',
        title: 'Using the Find Embark Location Tool',
        paragraphs: [
          'Manually searching for trees, flux stone, iron, sand, clay, a river, and no heavy aquifer can take far too long. The Steam release includes a finder that scans the world for sites matching your criteria.',
        ],
        subsections: [
          {
            title: 'Recommended Finder Parameters',
            bullets: [
              'Aquifer: No or Light. Avoid Heavy unless you are deliberately seeking an engineering challenge.',
              'Flux Stone: Yes. This keeps steel production realistic without expensive imports.',
              'River: Yes when possible. Rivers provide water and power options for wheels.',
              'Clay or Sand: Yes if you want pottery or glass industries.',
              'Soil: Some or Deep. Soil allows immediate farming without irrigation.',
            ],
          },
          {
            title: 'Finder Workflow',
            steps: [
              'Open the embark map and select Find Embark Location.',
              'Set the resource and safety parameters you want.',
              'Click Find and let the generator mark matching sites.',
              'Exit the finder with Esc, zoom in on the flashing markers, and inspect the local map manually.',
            ],
          },
        ],
        callouts: [
          {
            type: 'note',
            label: 'NOTE',
            body: 'The finder is not perfectly strict. If no site matches every requirement, it may highlight locations that match the highest number of criteria. Relax River, Sand, or Clay before giving up on a world.',
          },
        ],
      },
      {
        id: 'aquifers',
        title: 'Aquifer Mechanics: Light vs. Heavy',
        paragraphs: [
          'An aquifer is saturated soil or stone. Digging into it causes water to leak from the walls. The Steam embark screen marks aquifers as Light or Heavy, and the difference is enormous.',
        ],
        tables: [
          {
            caption: 'Aquifer Comparison',
            columns: ['Aquifer Type', 'Behavior', 'Recommended Response'],
            rows: [
              ['Light Aquifer', 'Leaks slowly and gives damp stone warnings before digging continues.', 'Recommended. Re-designate canceled jobs and wall off leaks with blocks.'],
              ['Heavy Aquifer', 'Fills dug tiles rapidly to dangerous depth and spreads quickly.', 'Avoid as a beginner. Piercing it requires pumps, cave-ins, or advanced planning.'],
              ['Variable Aquifer', 'May contain both light and heavy layers depending on tiles.', 'Treat as risky until inspected carefully. Search elsewhere for a calmer first fort.'],
            ],
          },
        ],
        callouts: [
          {
            type: 'important',
            label: 'IMPORTANT',
            body: 'Light aquifers can be useful. A small reservoir below a light aquifer can become a clean underground cistern, safe well source, or interior fishing pond when contained properly.',
          },
          {
            type: 'warning',
            label: 'WARNING',
            body: 'Heavy aquifers can drown miners and seal shafts almost instantly. Avoid them until you are intentionally practicing pump stacks or cave-in plugs.',
          },
        ],
      },
      {
        id: 'prepare-carefully',
        title: 'The Prepare Carefully UI',
        paragraphs: [
          'The default Play Now option gives you a generic and often wasteful loadout. Prepare Carefully lets you shift points from expensive finished goods into useful skills, raw materials, tools, seeds, alcohol, and animals.',
        ],
        codeTitle: 'Prepare Carefully Screen Pattern',
        code: [
          '+-------------------------------------------------------------+',
          '| PREPARE CAREFULLY SCREEN                                    |',
          '+-------------------------------------------------------------+',
          '| Left Panel: Dwarf Skills    | Right Panel: Items & Animals  |',
          '| Urist: Miner V, Mason V     | Copper Picks (2)              |',
          '| Dumed: Miner V, Crafter V   | Iron Anvil (1)                |',
          '| Kogan: Cutter V, Carp V     | Plump Helmet Spawn (30+)      |',
          '| Zon: Grower V, Brewer V     | Dogs, Turkeys, Pigs           |',
          '+-------------------------------------------------------------+',
        ],
        tables: [
          {
            caption: 'Optimal Starting Skill Distribution',
            columns: ['Dwarf', 'Role', 'Skills', 'Purpose'],
            rows: [
              ['Dwarf 1', 'Excavator', 'Miner L5, Mason L5', 'Digs primary halls and builds early stone defenses.'],
              ['Dwarf 2', 'Builder', 'Miner L5, Stonecrafter L5', 'Doubles mining speed and makes stone pots or trade goods.'],
              ['Dwarf 3', 'Woodsman', 'Wood Cutter L5, Carpenter L5', 'Supplies timber and crafts beds, bins, and barrels.'],
              ['Dwarf 4', 'Farmer', 'Grower L5, Herbalist L5', 'Starts farms and gathers wild plants immediately.'],
              ['Dwarf 5', 'Brewer/Cook', 'Brewer L5, Cook L5', 'Turns crops into meals and alcohol.'],
              ['Dwarf 6', 'Engineer', 'Mechanic L5, Architect L5', 'Builds traps, mechanisms, pumps, and bridges.'],
              ['Dwarf 7', 'Leader', 'Appraiser L2, Organizer L3, Negotiator L3, Record Keeper L2', 'Serves as Broker, Manager, and Bookkeeper.'],
            ],
          },
          {
            caption: 'Item Budget Adjustments',
            columns: ['Action', 'Items', 'Reason'],
            rows: [
              ['Remove', 'Crutches, buckets, bins, barrels', 'Easy to make from cheap wood on day one.'],
              ['Remove', 'Early metal weapons and armor', 'Usually unnecessary before the first serious threat.'],
              ['Remove', 'Excess prepared meals', 'Expensive compared with raw ingredients and brewing supplies.'],
              ['Add', 'Copper picks and one battle axe', 'Required for mining and logging immediately.'],
              ['Add', 'Iron anvil', 'Mandatory for metalworking and expensive from caravans.'],
              ['Add', 'Plump helmet spawn', 'Foundation of subterranean agriculture and brewing.'],
              ['Add', 'Raw logs', 'Cheap supply for beds, bins, wheelbarrows, and barrels.'],
              ['Add', 'Diverse alcohol', 'Keeps dwarves working and reduces early mood problems.'],
              ['Add', 'Gypsum plaster', 'Needed for setting broken bones in an early hospital.'],
            ],
          },
          {
            caption: 'Essential Livestock Selection',
            columns: ['Animal', 'Starting Ratio', 'Use'],
            rows: [
              ['Dogs', '1 male, 2 females', 'Train as war dogs or hunting dogs for early warnings and entrance defense.'],
              ['Turkeys', '1 gobbler, 3 hens', 'Strong egg layers when paired with nesting boxes.'],
              ['Pigs', '1 boar, 2 sows', 'Require no grass pasture and provide meat and leather underground.'],
            ],
          },
        ],
        diagram: 'Starting Party of Seven Dwarves',
        image: startingPartyDiagram,
      },
      {
        id: 'embark-profiles',
        title: 'Custom Embark Profiles',
        paragraphs: [
          'Once you have tuned skills, items, and animals, save the setup as a profile so the next fortress can start from the same foundation.',
        ],
        subsections: [
          {
            title: 'Saving a Profile',
            steps: [
              'Finish configuring skills, items, and animals on the Prepare Carefully screen.',
              'Click Save Profile at the bottom of the interface.',
              'Use a descriptive name such as Steel-Rush Subterranean or Standard Forest Starter.',
              'Press Enter to save the profile.',
            ],
          },
          {
            title: 'Sharing and Editing Profiles',
            bullets: [
              'Saved profiles are stored in the game prefs folder as embark_profiles.txt.',
              'The common path is inside the Dwarf Fortress install directory under prefs.',
              'You can share the text file or paste community-made profile blocks into your own file.',
            ],
          },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'WARNING',
            body: 'Loaded profiles depend on the chosen home civilization. If that civilization cannot provide an item such as a specific seed, the item is removed and the points are refunded. Always re-check the item list after loading.',
          },
        ],
      },
    ],
    checklist: [
      'Search for trees, soil, flux stone, and safe water before committing to a site.',
      'Prefer no aquifer or light aquifer for early forts.',
      'Use Prepare Carefully to buy tools, seeds, alcohol, an anvil, logs, plaster, and useful breeding animals.',
      'Assign starting skills around mining, farming, brewing, engineering, carpentry, and administration.',
      'Save a custom embark profile once the setup feels reliable.',
    ],
  },
  'industry-automation': {
    subtitle: 'Setting Up the Engine',
    introduction: [
      'Manually queuing beds, doors, and meals works for seven dwarves. It collapses once migration waves push the fortress toward 50, 100, or 200 citizens.',
      'This chapter focuses on the two pillars of scaling: conditional Work Orders and stockpile logistics, then ties them together with compact vertical industry layouts.',
    ],
    sections: [
      {
        id: 'work-orders',
        title: 'The Automation Engine: Work Orders',
        paragraphs: [
          'The Work Orders menu lets you write production rules that execute based on inventory levels. A good rule prevents shortages without flooding the fort with useless surplus.',
        ],
        subsections: [
          {
            title: 'Administrative Requirements',
            steps: [
              'Open Nobles and Administrators with n.',
              'Appoint a Manager and a Bookkeeper.',
              'Create an Office zone over a chair and table with z.',
              'Assign the office to the Manager so work orders can be validated.',
              'Let the Bookkeeper improve inventory accuracy so conditions can evaluate correctly.',
            ],
          },
          {
            title: 'Condition Dashboard Rules',
            bullets: [
              'Multiple conditions use logical AND by default, so all listed requirements must be true.',
              'Set important survival checks to daily so shortages are caught quickly.',
              'Use less than, greater than, at least, and at most to define safe thresholds.',
            ],
          },
        ],
        codeTitle: 'Work Order Condition Pattern',
        code: [
          '+-------------------------------------------------------------+',
          '| WORK ORDER CONDITIONS                                       |',
          '+-------------------------------------------------------------+',
          '| Order: Brew Drink from Plant (Quantity: 30)                 |',
          '| Conditions:                                                 |',
          '| 1. Drinks available is LESS THAN 150                        |',
          '| 2. Unrotten processable plants is AT LEAST 15               |',
          '| Frequency: Check daily                                      |',
          '| Status: Active                                              |',
          '+-------------------------------------------------------------+',
        ],
      },
      {
        id: 'automation-formulas',
        title: 'Essential Automation Formulas',
        paragraphs: [
          'Use repeatable formulas for survival loops first, then expand into luxury goods. The goal is controlled production, not infinite clutter.',
        ],
        tables: [
          {
            caption: 'Core Work Order Templates',
            columns: ['Product', 'Quantity', 'Input Condition', 'Output Condition', 'Goal'],
            rows: [
              ['Brew Drink from Plant', '30', 'Processable plants >= 15', 'Drinks available < 150', 'Prevents dry spells while protecting seed stock.'],
              ['Make Wooden Bed', '5', 'Usable logs >= 10', 'Beds in stockpiles < 5', 'Keeps furniture ready for migrant waves.'],
              ['Make Wooden Bin', '5', 'Usable logs >= 15', 'Bins in stockpiles < 10', 'Keeps finished goods storage from overflowing.'],
              ['Prepare Lavish Meal', '10', 'Cookable solid items >= 200', 'Prepared meals < 80', 'Creates high-quality food only during safe surplus.'],
            ],
          },
        ],
        callouts: [
          {
            type: 'pro-tip',
            label: 'PRO-TIP',
            body: 'Start with alcohol, beds, bins, and meals. Once those loops are stable, add metal bars, blocks, clothing, soap, paper, and trade goods.',
          },
        ],
      },
      {
        id: 'stockpile-links',
        title: 'Stockpile Logistics: Give, Take, and Feeders',
        paragraphs: [
          'Automation only works when materials reach workshops quickly. Stockpile links let you control exactly where workshops pull ingredients from and where finished goods should go.',
        ],
        subsections: [
          {
            title: 'Take from Links Only',
            bullets: [
              'By default, a workshop may pull from any valid stockpile on the map.',
              'A mason can waste huge amounts of time walking past nearby stone to fetch a specific boulder far away.',
              'Link the workshop to a nearby input stockpile and enable Take from links only to prevent long hauling walks.',
            ],
          },
          {
            title: 'Designing Feeder Stockpiles',
            steps: [
              'Create a small stockpile next to the workshop, usually 1x3 or 3x3 tiles.',
              'Configure it to accept only the workshop input, such as stone for masons.',
              'Enable wheelbarrows for heavy materials.',
              'Link the feeder pile to the main bulk stockpile.',
              'Link the workshop to the feeder and enable Take from links only.',
            ],
          },
        ],
        codeTitle: 'Feeder Stockpile Pipeline',
        code: [
          '+-------------------------------------------------------------+',
          '| FEEDER STOCKPILE PIPELINE                                   |',
          '+-------------------------------------------------------------+',
          '| Main Stone Pile -> Hauler + Wheelbarrow -> Feeder Pile      |',
          '|                                               |             |',
          '|                                               v             |',
          '|                                      Mason Workshop          |',
          '|                                      Takes from links only   |',
          '+-------------------------------------------------------------+',
        ],
        diagram: 'Feeder Stockpile Logistics Pipeline',
        image: feederStockpileDiagram,
      },
      {
        id: 'pipeline-layouts',
        title: 'Industrial Pipeline Layouts',
        paragraphs: [
          'Efficient industries group related stockpiles and workshops into compact chains. Each chain should have a clear input, processing step, assembly step, and storage endpoint.',
        ],
        tables: [
          {
            caption: 'Essential Production Pipelines',
            columns: ['Pipeline', 'Input', 'Processing', 'Assembly', 'Storage'],
            rows: [
              ['Wood-to-Metal', 'Raw timber feeds a wood furnace.', 'Logs become charcoal.', 'Smelter turns ore and fuel into bars; forge makes gear.', 'Bars, weapons, and armor move to output piles.'],
              ['Textile Loop', 'Pig tails from farms enter plant stockpiles.', 'Loom turns fiber into thread and cloth.', 'Clothier makes replacement garments.', 'Finished clothing moves to finished goods.'],
              ['Block Masonry', 'Stone moves from mines to feeder piles.', 'Mason cuts raw stone into blocks.', 'Blocks support faster building projects.', 'Block stockpiles feed construction sites.'],
            ],
          },
        ],
      },
      {
        id: 'vertical-hub',
        title: 'The Centralized Vertical Staircase Hub',
        paragraphs: [
          'Dwarf pathfinding is three-dimensional. Moving one Z-level vertically is effectively as cheap as walking one tile horizontally, so compact vertical forts outperform sprawling flat layouts.',
        ],
        subsections: [
          {
            title: 'Core Stairwell Design',
            bullets: [
              'Use a 3x3 up/down stair shaft through the center of living and working zones.',
              'Run primary corridors three tiles wide so haulers, animals, and caravans can pass cleanly.',
              'Install lockable hatches at key Z-level boundaries to isolate caverns, sieges, or accidents.',
            ],
          },
          {
            title: 'Vertical Industry Stack',
            bullets: [
              'Level Z+1: raw materials such as logs, stone, and ore.',
              'Level Z: workshop deck with carpenters, masons, smelters, and forges.',
              'Level Z-1: output storage for furniture, weapons, armor, blocks, and bins.',
            ],
          },
        ],
        codeTitle: 'Vertical Industry Stack',
        code: [
          '+-------------------------------------------------------------+',
          '| VERTICAL INDUSTRY STACK                                     |',
          '+-------------------------------------------------------------+',
          '| Z+1: RAW MATERIALS                                          |',
          '|      Wood, stone, ore stockpiles                            |',
          '|      |                                                      |',
          '| =====|====== 3x3 Central Staircase ======================== |',
          '|      v                                                      |',
          '| Z:   WORKSHOP DECK                                          |',
          '|      Carpenters, masons, smelters, forges                   |',
          '|      |                                                      |',
          '| =====|====== 3x3 Central Staircase ======================== |',
          '|      v                                                      |',
          '| Z-1: OUTPUT STORAGE                                         |',
          '|      Furniture, weapons, armor, bins                        |',
          '+-------------------------------------------------------------+',
        ],
        callouts: [
          {
            type: 'strategy',
            label: 'STRATEGY',
            body: 'Keep the workshop deck clean. Raw materials should feed down from above, while finished products leave below. The fewer objects sitting on workshop floors, the faster the fort feels.',
          },
        ],
        diagram: 'Centralized Vertical Staircase Industry Stack',
        image: verticalIndustryDiagram,
      },
    ],
    checklist: [
      'Assign a Manager, Bookkeeper, and office before relying on work orders.',
      'Set survival orders like drinks and meals to daily checks.',
      'Use feeder stockpiles with Take from links only for heavy or high-volume industries.',
      'Organize industries into input, processing, assembly, and output chains.',
      'Build around a central 3x3 stair hub to reduce hauling and pathfinding waste.',
    ],
  },
  'hydrology-engineering': {
    subtitle: 'Taming the Elements',
    introduction: [
      'As a fortress matures, mining and farming are no longer enough. Wells, cisterns, magma forges, obsidian casting, and deep extraction all require controlled fluid movement.',
      'Water and magma in Dwarf Fortress obey pressure and temperature rules. One incorrect tile or unsafe component can turn a clever machine into a flooded hallway or volcanic disaster.',
    ],
    sections: [
      {
        id: 'screw-pumps',
        title: 'Screw Pump Mechanics & Steam UI',
        paragraphs: [
          'A screw pump is a two-tile machine that draws liquid from one Z-level below its intake side and pushes it out horizontally on the current level.',
        ],
        subsections: [
          {
            title: 'UI Construction Pathway',
            steps: [
              'Open the Build menu with b.',
              'Open Machines & Fluids with Shift + M or the menu list.',
              'Select Screw Pump and choose orientation with the placement arrows.',
            ],
          },
        ],
        tables: [
          {
            caption: 'Screw Pump Bill of Materials',
            columns: ['Component', 'Workshop', 'Materials', 'Role'],
            rows: [
              ['Block', 'Masonry, carpentry, or forge', 'Rock, wood, or metal', 'Structural housing for the pump.'],
              ['Enormous Corkscrew', 'Carpentry, forge, or glass furnace', 'Wood, metal, or glass', 'Lifts fluid vertically from below.'],
              ['Pipe Section', 'Carpentry, forge, or glass furnace', 'Wood, metal, or glass', 'Channels fluid through the pump output.'],
            ],
          },
        ],
        callouts: [
          {
            type: 'important',
            label: 'IMPORTANT',
            body: 'The intake tile needs open space beneath it. The output tile acts like a solid barrier and ejects liquid onto the adjacent tile in the chosen direction.',
          },
        ],
        diagram: 'Screw Pump Intake and Output Orientation',
      },
      {
        id: 'pump-stacks',
        title: 'Vertical Pump Stack Engineering',
        paragraphs: [
          'To move fluid across many Z-levels, chain pumps in an alternating head-to-tail stack. Pumps cannot simply be copied straight upward because each one only pushes horizontally on its own level.',
        ],
        codeTitle: 'Alternating Pump Stack Pattern',
        code: [
          'Z+1: [Input North] [Pump North -> South] [Output South]',
          '                  ^',
          '                  | fluid lifted from below',
          'Z:   [Output North] [Pump South -> North] [Input South]',
        ],
        subsections: [
          {
            title: 'Repeating the Stack',
            bullets: [
              'Pump 1 draws from the reservoir below and outputs north.',
              'Pump 2 sits above with intake over Pump 1 output and pumps south.',
              'Pump 3 reverses orientation again, continuing the alternating pattern.',
              'Repeat the sequence for as many Z-levels as needed.',
            ],
          },
          {
            title: 'Power Transmission',
            bullets: [
              'Adjacent pumps in a stack can transmit mechanical power vertically.',
              'You only need to connect power to one pump or gear assembly in the stack.',
              'Each active screw pump consumes 10 power, so a 30-level stack needs 300 net power.',
            ],
          },
        ],
        diagram: 'Alternating Vertical Pump Stack Column',
        image: pumpStackDiagram,
      },
      {
        id: 'magma-materials',
        title: 'Magma Integration & Magma-Safe Materials',
        paragraphs: [
          'Pumping water is forgiving. Pumping magma is not. Every pump component and power-transmission part exposed to magma must be magma-safe.',
        ],
        tables: [
          {
            caption: 'Magma-Safe Material Matrix',
            columns: ['Material Class', 'Safe Choices', 'Unsafe Choices'],
            rows: [
              ['Metals', 'Iron, steel, pig iron, platinum, nickel', 'Bronze, copper, silver, gold, lead, tin'],
              ['Glass', 'Green glass, clear glass, crystal glass', 'None; all glass is magma-safe'],
              ['Stone', 'Basalt, gabbro, obsidian, quartzite, rhyolite', 'Granite, marble, limestone, chert, shale'],
              ['Wood', 'Nether-cap only', 'Oak, pine, birch, fungiwood, alder, and most woods'],
            ],
          },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'WARNING',
            body: 'Raw iron ore is not magma-safe, but refined iron bars and steel bars are. For stone, basalt and gabbro are common safe choices. A single unsafe component can melt and deconstruct the machine.',
          },
        ],
        subsections: [
          {
            title: 'Magma Smelter and Forge Alignment',
            steps: [
              'Dig a channel to route magma beneath the workshop deck.',
              'Channel out the specific magma tile shown in the workshop build preview.',
              'Build the magma workshop over the channel.',
              'Keep magma at least 4/7 deep below the workshop, but below 7/7 to avoid overflow.',
            ],
          },
        ],
      },
      {
        id: 'mechanical-power',
        title: 'Mechanical Power Generators',
        paragraphs: [
          'Large pump stacks should not depend on manual dwarf labor. Water wheels and windmills provide the mechanical power needed for serious engineering.',
        ],
        subsections: [
          {
            title: 'Dwarven Water Reactor Blueprint',
            steps: [
              'Dig a 3x3 lower reservoir.',
              'Dig a 3x3 upper reactor deck directly above it.',
              'Channel the eastern column so water can fall back into the lower reservoir.',
              'Place a screw pump on the upper deck with intake over the lower reservoir.',
              'Build two water wheels across the falling-water channel.',
              'Connect pump and wheels with a gear assembly.',
              'Prime the lower pool with a Pond zone until it reaches about 6/7 depth.',
              'Start the pump manually and let the loop become self-powering.',
            ],
          },
        ],
        callouts: [
          {
            type: 'pro-tip',
            label: 'PRO-TIP',
            body: 'Connect a lever to the gear assembly linking the water wheels to the pump. Pulling the lever disengages the gear and stops the reactor for maintenance.',
          },
        ],
        diagram: 'Dwarven Water Reactor Perpetual Loop Blueprint',
        image: waterReactorDiagram,
      },
      {
        id: 'aquifer-piercing',
        title: 'Aquifer-Piercing Strategies',
        paragraphs: [
          'Aquifers often block access to deeper metals. Light aquifers can be sealed with construction; heavy aquifers require more deliberate pressure control.',
        ],
        subsections: [
          {
            title: 'Dig-and-Wall Method for Light Aquifers',
            steps: [
              'Designate an up/down staircase through the aquifer layer.',
              'Re-designate after damp stone cancels the first job.',
              'Once the stair is dug, immediately construct stone walls around the four cardinal leaking tiles.',
              'Continue downward and repeat until the aquifer layer is cleared.',
            ],
          },
          {
            title: 'Hatch Stair Shield for Heavy Aquifers',
            steps: [
              'Dig to the tile immediately above the heavy aquifer.',
              'Build a hatch cover over the staircase tile.',
              'Have the miner dig the tile below while standing on the closed hatch.',
              'Use the hatch to block upward water pressure.',
              'Seal the shaft with constructed walls, then repeat.',
            ],
          },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'WARNING',
            body: 'Do not improvise around heavy aquifers with open stair shafts. Water pressure can move faster than your miners, and a single open path can flood the fort entrance.',
          },
        ],
      },
    ],
    checklist: [
      'Confirm pump intake and output orientation before construction.',
      'Calculate pump stack power at 10 power per active pump.',
      'Use only magma-safe components for magma pumps and exposed machinery.',
      'Prime water reactors carefully and add a lever failsafe.',
      'Use dig-and-wall for light aquifers and hatch shielding for heavy aquifers.',
    ],
  },
  'military-defense': {
    subtitle: 'The Bastion',
    introduction: [
      'Every prosperous fortress eventually attracts attention. Goblin sieges, necromancer raids, cavern beasts, and forgotten horrors will test whether your settlement is a home or a future ruin.',
      'This chapter covers the Steam military interface, squads, armor layering, barracks design, training schedules, and passive entrance defenses.',
    ],
    sections: [
      {
        id: 'squad-setup',
        title: 'Creating a Squad & Appointing Leaders',
        paragraphs: [
          'The Steam release moves military management into a graphical squad interface. Start small, appoint clear leadership, and build the first squad before danger arrives.',
        ],
        subsections: [
          {
            title: 'Step-by-Step Squad Setup',
            steps: [
              'Open Nobles and Administrators with n and appoint a Militia Commander.',
              'Open the Squads panel with the blue flag icon or q.',
              'Create a new squad.',
              'Choose Metal Armor for melee fighters, or No Uniform if you plan to build a custom set.',
              'Open the squad positions and assign recruits to empty slots.',
              'Put the intended captain in slot 1, since that dwarf leads the squad.',
            ],
          },
        ],
      },
      {
        id: 'melee-uniforms',
        title: 'The Melee Uniform & Armor Layering',
        paragraphs: [
          'Full armor protects against bolts, bites, blunt force, and blades. A badly configured uniform can leave soldiers unequipped even when the stockpile looks ready.',
        ],
        tables: [
          {
            caption: 'Standard Melee Steel Uniform',
            columns: ['Body Part', 'Armor Piece', 'Material', 'Purpose'],
            rows: [
              ['Head', 'Helm', 'Steel or iron', 'Protects the brain from blunt trauma and heavy strikes.'],
              ['Upper Body', 'Mail shirt and breastplate', 'Steel or iron', 'Mail catches slashes while the breastplate blocks piercing hits.'],
              ['Lower Body', 'Greaves', 'Steel or iron', 'Protects legs and major arteries.'],
              ['Hands', 'Gauntlets', 'Steel or iron', 'Prevents hand and finger loss in close combat.'],
              ['Feet', 'High boots', 'Steel or iron', 'Protects feet from cuts, bites, and movement injuries.'],
              ['Shield', 'Shield', 'Wood or metal', 'Primary active block. Wood is light and resists dragonfire heat.'],
              ['Weapon', 'Axe, warhammer, or spear', 'Steel or iron', 'Match damage type to target: slashing, blunt, or piercing.'],
            ],
          },
        ],
        callouts: [
          {
            type: 'important',
            label: 'IMPORTANT',
            body: 'Set the uniform to replace clothing. If soldiers try to wear metal over civilian clothing, body slots can be blocked and key armor pieces may be skipped.',
          },
          {
            type: 'warning',
            label: 'WARNING',
            body: 'Do not set replace clothing before armor exists. Soldiers may strip civilian clothes, fail to equip missing armor, and accumulate unhappy thoughts from embarrassment.',
          },
        ],
        diagram: 'Dwarven Melee Armor Layering Sequence',
        image: armorLayeringDiagram,
      },
      {
        id: 'barracks',
        title: 'Designing the Barracks',
        paragraphs: [
          'A squad needs a designated barracks to train, store gear, and rest near military supplies. Build it indoors and give it room to function safely.',
        ],
        subsections: [
          {
            title: 'Creating the Barracks Zone',
            steps: [
              'Open Zones with z.',
              'Draw a room containing beds, cabinets, and chests.',
              'Choose Barracks from the zone list and accept.',
              'Open the new zone and assign a squad with the blue flag control.',
              'Enable combat training, lodging, and equipment storage as needed.',
            ],
          },
        ],
        tables: [
          {
            caption: 'Barracks Options',
            columns: ['Option', 'Setting', 'Effect'],
            rows: [
              ['Combat Training', 'Active', 'Squad performs drills, sparring, and demonstrations.'],
              ['Barracks Lodging', 'Active', 'Off-duty or stationed soldiers can sleep in the barracks.'],
              ['Equipment Storage', 'Active', 'Soldiers store spare weapons, shields, and armor in containers.'],
            ],
          },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'WARNING',
            body: 'Never place a barracks next to open ledges, channels, pits, or reservoirs. Sparring dwarves dodge dynamically and can leap into disaster.',
          },
        ],
      },
      {
        id: 'scheduling',
        title: 'Scheduling & The Sparring Trick',
        paragraphs: [
          'Constant training creates skilled soldiers, but it also isolates dwarves from sleep, prayer, taverns, and family. Smart scheduling improves combat skill without breaking morale.',
        ],
        subsections: [
          {
            title: 'Recommended Schedule Patterns',
            bullets: [
              'Off Duty returns dwarves to civilian life so they can eat, sleep, socialize, and pray.',
              'Constant Training is useful for short bursts, not permanent fortress policy.',
              'Staggered Training keeps only part of the squad training each month while the rest recover.',
            ],
          },
          {
            title: 'The Sparring Trick',
            steps: [
              'Open the squad Schedule panel.',
              'Edit the active monthly training order.',
              'Change Train minimum from 10 to 2 or 3.',
              'Save the schedule.',
              'Let small groups form pairs or trios for sparring and demonstrations.',
            ],
          },
        ],
        callouts: [
          {
            type: 'pro-tip',
            label: 'PRO-TIP',
            body: 'Lower training minimums encourage sparring, which trains fighting, wrestling, weapon skills, Shield User, and Armor User much faster than solo drills.',
          },
          {
            type: 'note',
            label: 'NOTE',
            body: 'Sparring begins once at least two dwarves have reached roughly competent combat skill. Fresh recruits may perform basic drills first.',
          },
        ],
      },
      {
        id: 'trap-corridor',
        title: 'Active & Passive Entrance Defense',
        paragraphs: [
          'A trap corridor buys time for soldiers to gear up and assemble. It also filters smaller threats before they ever reach civilians.',
        ],
        codeTitle: 'Winding Trap Corridor',
        code: [
          'Outside Fortress',
          '=================================================+',
          '                                                 |',
          '======================+  [Weapon Trap]           |',
          '|                     |  [Cage Trap]             |',
          '| [Cage Trap]         |  [Weapon Trap]           |',
          '| [Cage Trap]         |                          |',
          '| [Weapon Trap]       +==========================+',
          '|                                                |',
          '+======================> Inside Depot & Airlock Bridge',
        ],
        subsections: [
          {
            title: 'Trap Corridor Components',
            bullets: [
              'Use a one-tile-wide winding path so invaders step over every trap sequentially.',
              'Place cage traps first to capture enemies cleanly and reduce corpse clutter.',
              'Place weapon traps behind cages for anything that gets through.',
              'Load weapon traps with serrated steel discs for repeated slicing hits.',
              'End the corridor with a raising drawbridge linked to a safe interior lever.',
            ],
          },
        ],
        callouts: [
          {
            type: 'strategy',
            label: 'STRATEGY',
            body: 'Use at least a 3x3 raising bridge as an airlock wall. Make sure it raises in the direction that blocks the corridor, then test it before the first siege.',
          },
        ],
        diagram: 'Winding Trap Corridor Chokepoint Layout',
        image: trapCorridorDiagram,
      },
    ],
    checklist: [
      'Appoint a Militia Commander before creating squads.',
      'Set melee uniforms to replace clothing only after armor exists.',
      'Build enclosed barracks away from ledges, channels, and water.',
      'Use staggered training and low minimums to encourage sparring.',
      'Protect the entrance with cage traps, weapon traps, and a levered drawbridge airlock.',
    ],
  },
  'strange-moods-stress': {
    subtitle: 'Sustaining Sanity',
    introduction: [
      'Dwarves are not programmable workers. They carry memories, preferences, beliefs, relationships, and grudges. Rain, corpses, tattered clothing, missing prayer, and overcrowding can all become long-term stress.',
      'This chapter explains how to read psychological distress, handle Strange Moods, build stress-relieving infrastructure, and contain tantrums before they become fortress-wide social failure.',
    ],
    sections: [
      {
        id: 'psychology-sheet',
        title: 'Dwarf Psychology & The Character Sheet',
        paragraphs: [
          'Open a dwarf directly or find them through the Creatures menu with u. The Thoughts and Needs tabs are the main diagnostic tools for mental health.',
        ],
        codeTitle: 'Mental Health Sheet Pattern',
        code: [
          '+-------------------------------------------------------------+',
          '| DWARF CHARACTER SHEET - MENTAL HEALTH                       |',
          '+-------------------------------------------------------------+',
          '| Overview | THOUGHTS | NEEDS | Skills | Relations            |',
          '| Thoughts Log:                                               |',
          '| - Felt blissful after passing through mist.                 |',
          '| - Was frustrated by wearing tattered clothes.               |',
          '| Needs Status:                                               |',
          '| - Critical: Pray to deity                                   |',
          '| - Minor: Acquire an item                                    |',
          '+-------------------------------------------------------------+',
        ],
        subsections: [
          {
            title: 'Thoughts Tab',
            bullets: [
              'Records recent positive and negative emotional events.',
              'Use repeated entries to identify stress vectors such as corpses, rain, tattered clothing, or bad rooms.',
              'The stress meter ranges from stable green to dangerous red tantrum states.',
            ],
          },
          {
            title: 'Needs Tab',
            bullets: [
              'Shows long-term urges such as prayer, family contact, alcohol, crafting, or acquiring objects.',
              'Spiritual needs require temples assigned to relevant deities.',
              'Social and creative needs require free time, taverns, guildhalls, and a schedule that is not pure labor.',
            ],
          },
        ],
        diagram: 'Dwarf Character Sheet Thoughts & Needs Screen',
        image: characterSheetDiagram,
      },
      {
        id: 'strange-moods',
        title: 'The Anatomy of Strange Moods',
        paragraphs: [
          'A Strange Mood causes a dwarf to abandon normal work, claim a workshop, and demand materials for an artifact. The dwarf will not eat, drink, or sleep until the artifact is complete or the mood fails.',
        ],
        tables: [
          {
            caption: 'Mood Profiles',
            columns: ['Mood Type', 'Behavior', 'Outcome'],
            rows: [
              ['Fey Mood', 'Standard inspiration with clearer material demands.', 'Artifact and legendary skill gain.'],
              ['Secretive Mood', 'Mute, communicates through sketches.', 'Artifact and legendary skill gain.'],
              ['Possessed Mood', 'Spirit-guided and unclear demands.', 'Artifact with no skill gain.'],
              ['Macabre Mood', 'Demands bones, skulls, or remains.', 'Artifact and legendary skill gain.'],
              ['Fell Mood', 'Murders a citizen and uses remains.', 'Artifact and legendary skill gain for the killer.'],
            ],
          },
          {
            caption: 'Cryptic Material Whispers',
            columns: ['Whisper', 'Demanded Material', 'Source'],
            rows: [
              ['Shimmering cloth', 'Silk cloth', 'Cave spider webs in caverns.'],
              ['Light cloth', 'Plant fiber cloth', 'Pig tail fiber woven at a loom.'],
              ['Warm cloth', 'Wool or yarn cloth', 'Sheared animals such as sheep, alpacas, or llamas.'],
              ['Rock / Stone', 'Raw boulder or block', 'Mined stone or constructed blocks.'],
              ['Raw metal', 'Metal ore or bar', 'Smelted bars or raw ore.'],
              ['Bones / Skulls', 'Animal or citizen remains', 'Butchery, hunting, refuse piles, or battlefield remains.'],
            ],
          },
          {
            caption: 'Mood Failure Outcomes',
            columns: ['Insanity Profile', 'Behavior', 'Response'],
            rows: [
              ['Melancholy', 'Wanders, stops eating and drinking, may fall into hazards.', 'Prepare burial and clean remains quickly.'],
              ['Catatonic', 'Collapses silently and may die of dehydration.', 'Move to hospital if possible and prepare burial.'],
              ['Berserk', 'Attacks citizens and pets.', 'Wall off, lock down, or deploy military immediately.'],
            ],
          },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'WARNING',
            body: 'If a moody dwarf has occupied a workshop for a month and required materials are unavailable, wall the workshop off. If they go berserk, containment prevents a fortress-wide fight.',
          },
        ],
      },
      {
        id: 'stress-mitigation',
        title: 'High-Impact Stress Mitigation',
        paragraphs: [
          'The best stress strategy is prevention. Build daily positive thoughts into normal movement paths and make sure basic needs have obvious places to resolve.',
        ],
        subsections: [
          {
            title: 'Mist Generators',
            bullets: [
              'Mist creates powerful happy thoughts when dwarves pass through it.',
              'Place mist over a central staircase, tavern entrance, or other high-traffic hub.',
              'Use a controlled pump loop, floor grates, and drainage so the system improves morale without flooding traffic.',
            ],
          },
          {
            title: 'Legendary Dining Rooms & Taverns',
            steps: [
              'Dig a large hall, at least around 10x10.',
              'Smooth and engrave walls and floors.',
              'Install valuable furniture such as engraved tables, metal chests, and quality chairs.',
              'Designate it as a dining hall and assign it as a tavern.',
              'Let eating and drinking in a legendary room create long-lasting positive thoughts.',
            ],
          },
          {
            title: 'Clothing Management',
            bullets: [
              'Clothing becomes tattered after long use and produces steady negative thoughts.',
              'Create work orders for shirts, trousers, and shoes.',
              'Use a refuse stockpile filtered for tattered clothing so dwarves discard old gear.',
            ],
          },
        ],
        diagram: 'Tavern Mist Generator Waterfall',
        image: mistGeneratorDiagram,
      },
      {
        id: 'tantrums',
        title: 'Managing Tantrums & Preventing Spirals',
        paragraphs: [
          'A tantrum spiral is a chain reaction. One stressed dwarf attacks a bystander, the bystander becomes stressed, property is destroyed, grief spreads, and the fortress begins hurting itself faster than any invader could.',
        ],
        codeTitle: 'Tantrum Spiral Pattern',
        code: [
          'Stressed Dwarf -> Tantrum and punches bystander',
          '                    |',
          '                    v',
          'Bystander injured -> stress rises -> tantrum',
          '                    |',
          '                    v',
          'Property destroyed -> owners become upset -> more violence',
        ],
        subsections: [
          {
            title: 'Emergency Containment Protocols',
            steps: [
              'Appoint a Sheriff or Captain of the Guard.',
              'Build a Jail zone with chains or ropes, beds, tables, and nearby food.',
              'Give stressed dwarves access to a Mayor or noble office for meetings.',
              'Bury dead dwarves immediately in coffins to prevent horror thoughts and ghosts.',
              'If a dwarf turns berserk, draft the military and neutralize them before violence spreads.',
            ],
          },
        ],
        callouts: [
          {
            type: 'important',
            label: 'IMPORTANT',
            body: 'Corpses in public paths are psychological hazards. Burial, refuse control, and corpse hauling are morale systems, not just cleanup tasks.',
          },
        ],
      },
    ],
    checklist: [
      'Check Thoughts and Needs when a dwarf becomes distressed.',
      'Keep mood materials such as cloth, bones, stone, bars, and shells available.',
      'Build temples, taverns, dining rooms, and mist paths before stress spikes.',
      'Maintain a clothing industry so tattered garments are replaced.',
      'Prepare jail, burial, and military response plans before the first tantrum spiral.',
    ],
  },
  'masterclass-endgame': {
    subtitle: 'The Road Ahead',
    introduction: [
      'Once food is stable, workshops are automated, and soldiers are armed, basic survival stops being the main challenge. That is where Dwarf Fortress becomes a game about ambition.',
      'The endgame is defined by megaprojects, performance management, controlled danger, deep-earth discoveries, and the evolving systems that keep each world feeling alive.',
    ],
    sections: [
      {
        id: 'megaprojects',
        title: 'Megaprojects: The True Dwarven Endgame',
        paragraphs: [
          'A megaproject is a huge engineering effort that proves your fortress has moved beyond survival. It turns wealth, logistics, and planning into something visible.',
        ],
        subsections: [
          {
            title: 'Above-Ground Castles & Obsidian Towers',
            bullets: [
              'Surface castles require thousands of blocks, careful scaffolding, weather exposure planning, and defense against flying threats.',
              'Obsidian casting uses controlled magma and water contact to create valuable black walls and floors.',
              'Cast obsidian can be smoothed and engraved, turning dangerous fluid engineering into architecture.',
            ],
          },
          {
            title: 'Capturing and Weaponizing Forgotten Beasts',
            steps: [
              'Use webs, bait chambers, bridges, or controlled paths to capture or contain the beast.',
              'Build a sealed cell beside a defensive corridor.',
              'Separate the beast from enemies with fortifications so attacks can pass but movement cannot.',
              'Expose the firing lane during a siege and let breath weapons, dust, fire, or venom do the work.',
            ],
          },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'WARNING',
            body: 'Forgotten Beast containment is advanced engineering. Test every bridge, door, and lever path before trusting the system near civilians.',
          },
        ],
      },
      {
        id: 'veteran-exploits',
        title: 'Veteran Pro-Tips & Exploits',
        paragraphs: [
          'Advanced overseers often use engine-aware techniques to solve clutter, refuse, and performance problems. Use them deliberately and isolate them from normal traffic.',
        ],
        callouts: [
          {
            type: 'pro-tip',
            label: 'PRO-TIP',
            body: 'A Dwarven Atom Smasher uses a raising drawbridge to delete items, liquids, and normal-sized creatures on its landing tiles. It is excellent for refuse, stone, tattered clothing, and corpse disposal.',
          },
        ],
        codeTitle: 'Atom Smasher Pattern',
        code: [
          '[Bridge Raised]                  [Bridge Lowered]',
          '      |                           ===============',
          '      v                           x x x x x x x',
          '[Refuse Dump Zone] -- Lever --> [Vaporized Items]',
        ],
        subsections: [
          {
            title: 'Atom Smasher Construction',
            steps: [
              'Dig a small pit or controlled landing area.',
              'Build a raising drawbridge so its lowered position covers the landing tile.',
              'Link a nearby lever to the bridge with mechanisms.',
              'Create a Garbage Dump zone on the landing tile.',
              'Mark unwanted items for dumping and pull the lever once haulers clear the area.',
              'Wall or door the smasher off so pets and dwarves cannot wander onto the landing tile.',
            ],
          },
        ],
        diagram: 'Dwarven Atom Smasher Refuse Compactor',
        image: atomSmasherDiagram,
      },
      {
        id: 'fps-death',
        title: 'Delaying FPS Death',
        paragraphs: [
          'Dwarf Fortress is simulation-heavy and CPU-bound. As populations, animals, items, contaminants, and pathfinding zones multiply, frame rate can decline.',
        ],
        tables: [
          {
            caption: 'FPS Optimization Targets',
            columns: ['Lag Vector', 'Implementation', 'Benefit'],
            rows: [
              ['Animal populations', 'Pasture livestock tightly and butcher excess animals.', 'Reduces pathfinding spikes and population clutter.'],
              ['Sprawling stockpiles', 'Use compact or minecart-based stockpile strategies.', 'Reduces item tracking across large areas.'],
              ['Open caverns', 'Wall off explored cavern sectors not actively used.', 'Stops unseen creatures from consuming background pathfinding.'],
              ['Contaminants', 'Clean blood, mud, and fluid clutter when possible.', 'Reduces tracking overhead from many small splatter objects.'],
            ],
          },
        ],
        callouts: [
          {
            type: 'important',
            label: 'IMPORTANT',
            body: 'Performance is part of fortress design. Compact layouts, controlled animal counts, and sealed unused spaces help the simulation stay playable longer.',
          },
        ],
      },
      {
        id: 'hidden-fun-stuff',
        title: 'Hidden Fun Stuff: Spoiler-Light Warning',
        paragraphs: [
          'Deep below the caverns, raw adamantine appears as a glowing sky-blue metal. It can be refined into wafers for the strongest armor and sharpest blades in the world.',
        ],
        subsections: [
          {
            title: 'Adamantine Caution',
            bullets: [
              'Adamantine forms vertical hollow tubes extending toward the magma sea.',
              'The outer shell is valuable ore, but the center can contain catastrophic danger.',
              'Mine carefully and leave a protective outer shell unless you have a containment plan.',
              'Prepare floodgates, bridges, cave-in traps, or sealed shafts before exploring too deeply.',
            ],
          },
        ],
        callouts: [
          {
            type: 'warning',
            label: 'WARNING',
            body: 'Do not mine too greedily. Breaching an adamantine tube can release an overwhelming threat directly into the mine shafts.',
          },
        ],
        diagram: 'Mining Raw Adamantine Tubes',
        image: adamantineDiagram,
      },
      {
        id: 'road-ahead',
        title: 'The Road Ahead',
        paragraphs: [
          'Dwarf Fortress continues to expand beyond the local fortress map. Diplomacy, off-site relationships, and future mythic systems point toward worlds that react more deeply to player decisions.',
        ],
        subsections: [
          {
            title: 'Developing Systems to Watch',
            bullets: [
              'Diplomacy systems can make messengers, treaties, wars, trade covenants, and military aid more important.',
              'Procedural myth and magic systems may introduce world-specific rules, research, laboratories, and deity interactions.',
              'Future forts may need to manage not only survival and industry, but their political and mythic place in the world.',
            ],
          },
        ],
        callouts: [
          {
            type: 'note',
            label: 'NOTE',
            body: 'Treat roadmap material as a living area of the guide. It should be checked against current patch notes before publishing a final public release.',
          },
        ],
      },
    ],
    checklist: [
      'Choose megaprojects that your logistics can actually support.',
      'Separate dangerous beasts, atom smashers, magma, and deep shafts from civilian traffic.',
      'Design with performance in mind as population and item counts grow.',
      'Mine adamantine cautiously and preserve containment options.',
      'Keep roadmap sections easy to update as the game evolves.',
    ],
  },
};
