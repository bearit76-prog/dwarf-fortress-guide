export const EMBARK_VERSION = '53.14';
export const DEFAULT_BUDGET = 1274;

export const skillLevels = [
  { level: 0, label: 'Untrained', cost: 0 },
  { level: 1, label: 'Novice', cost: 5 },
  { level: 2, label: 'Adequate', cost: 11 },
  { level: 3, label: 'Competent', cost: 18 },
  { level: 4, label: 'Skilled', cost: 26 },
  { level: 5, label: 'Proficient', cost: 35 },
];

export const skills = [
  { id: 'MINING', name: 'Mining' },
  { id: 'WOODCUTTING', name: 'Woodcutting' },
  { id: 'CARPENTRY', name: 'Carpentry' },
  { id: 'MASONRY', name: 'Stoneworking' },
  { id: 'PLANT', name: 'Growing' },
  { id: 'BREWING', name: 'Brewing' },
  { id: 'COOK', name: 'Cooking' },
  { id: 'MECHANICS', name: 'Mechanics' },
  { id: 'APPRAISAL', name: 'Appraisal' },
  { id: 'ORGANIZATION', name: 'Organization' },
  { id: 'DIAGNOSIS', name: 'Diagnosis' },
  { id: 'WOUND_DRESSING', name: 'Wound dressing' },
  { id: 'DODGING', name: 'Dodging' },
  { id: 'AXE', name: 'Axe fighting' },
];

export const supplies = [
  {
    id: 'copper-pick',
    name: 'Copper pick',
    category: 'Tools',
    cost: 20,
    token: '[ITEM:{quantity}:WEAPON:ITEM_WEAPON_PICK:INORGANIC:COPPER]',
    essential: true,
  },
  {
    id: 'copper-axe',
    name: 'Copper battle axe',
    category: 'Tools',
    cost: 40,
    token: '[ITEM:{quantity}:WEAPON:ITEM_WEAPON_AXE_BATTLE:INORGANIC:COPPER]',
  },
  {
    id: 'iron-anvil',
    name: 'Iron anvil',
    category: 'Tools',
    cost: 100,
    token: '[ITEM:{quantity}:ANVIL:NONE:INORGANIC:IRON]',
  },
  {
    id: 'logs',
    name: 'Logs',
    category: 'Materials',
    cost: 3,
    token: '[ITEM:{quantity}:WOOD:NONE:PLANT_MAT:OAK:WOOD]',
  },
  {
    id: 'bituminous-coal',
    name: 'Bituminous coal',
    category: 'Materials',
    cost: 3,
    token: '[ITEM:{quantity}:BOULDER:NONE:INORGANIC:BITUMINOUS_COAL]',
  },
  {
    id: 'plump-helmet-spawn',
    name: 'Plump helmet spawn',
    category: 'Seeds',
    cost: 1,
    token: '[ITEM:{quantity}:SEEDS:NONE:PLANT_MAT:MUSHROOM_HELMET_PLUMP:SEED]',
    essential: true,
  },
  {
    id: 'pig-tail-seeds',
    name: 'Pig tail seeds',
    category: 'Seeds',
    cost: 1,
    token: '[ITEM:{quantity}:SEEDS:NONE:PLANT_MAT:GRASS_TAIL_PIG:SEED]',
  },
  {
    id: 'dwarven-wine',
    name: 'Dwarven wine',
    category: 'Food & drink',
    cost: 2,
    token: '[ITEM:{quantity}:DRINK:NONE:PLANT_MAT:MUSHROOM_HELMET_PLUMP:DRINK]',
    essential: true,
  },
  {
    id: 'plump-helmets',
    name: 'Plump helmets',
    category: 'Food & drink',
    cost: 2,
    token: '[ITEM:{quantity}:PLANT:NONE:PLANT_MAT:MUSHROOM_HELMET_PLUMP:STRUCTURAL]',
    essential: true,
  },
  {
    id: 'thread',
    name: 'Plant-fiber thread',
    category: 'Medical',
    cost: 6,
    token: '[ITEM:{quantity}:THREAD:NONE:PLANT_MAT:GRASS_TAIL_PIG:THREAD]',
  },
  {
    id: 'cloth',
    name: 'Plant-fiber cloth',
    category: 'Medical',
    cost: 12,
    token: '[ITEM:{quantity}:CLOTH:NONE:PLANT_MAT:GRASS_TAIL_PIG:THREAD]',
  },
  {
    id: 'gypsum',
    name: 'Gypsum plaster',
    category: 'Medical',
    cost: 3,
    token: '[ITEM:{quantity}:POWDER_MISC:NONE:INORGANIC:GYPSUM]',
  },
];

export const animals = [
  { id: 'dog-female', name: 'Dog, female', cost: 31, token: '[PET:{quantity}:DOG:FEMALE]' },
  { id: 'dog-male', name: 'Dog, male', cost: 31, token: '[PET:{quantity}:DOG:MALE]' },
  { id: 'cat-female', name: 'Cat, female', cost: 11, token: '[PET:{quantity}:CAT:FEMALE]' },
  { id: 'cat-male', name: 'Cat, male', cost: 11, token: '[PET:{quantity}:CAT:MALE]' },
  { id: 'turkey-female', name: 'Turkey hen', cost: 10, token: '[PET:{quantity}:BIRD_TURKEY:FEMALE]' },
  { id: 'turkey-male', name: 'Turkey gobbler', cost: 10, token: '[PET:{quantity}:BIRD_TURKEY:MALE]' },
  { id: 'pig-female', name: 'Sow', cost: 51, token: '[PET:{quantity}:PIG:FEMALE]' },
  { id: 'pig-male', name: 'Boar', cost: 51, token: '[PET:{quantity}:PIG:MALE]' },
];

const standardDwarves = [
  { name: 'Miner', skills: { MINING: 5, DODGING: 2 } },
  { name: 'Miner / Mason', skills: { MINING: 5, MASONRY: 3 } },
  { name: 'Grower / Brewer', skills: { PLANT: 5, BREWING: 4 } },
  { name: 'Woodworker', skills: { WOODCUTTING: 4, CARPENTRY: 5 } },
  { name: 'Mechanic', skills: { MECHANICS: 5, MASONRY: 2 } },
  { name: 'Doctor', skills: { DIAGNOSIS: 5, WOUND_DRESSING: 4 } },
  { name: 'Broker / Manager', skills: { APPRAISAL: 5, ORGANIZATION: 5 } },
];

export const presets = {
  beginner: {
    name: 'Beginner-Safe',
    description: 'Two miners, dependable food production, basic medicine, and breeding animals.',
    dwarves: standardDwarves,
    supplies: {
      'copper-pick': 2,
      'copper-axe': 1,
      'iron-anvil': 1,
      logs: 16,
      'plump-helmet-spawn': 15,
      'pig-tail-seeds': 10,
      'dwarven-wine': 40,
      'plump-helmets': 20,
      thread: 5,
      cloth: 5,
      gypsum: 5,
    },
    animals: { 'dog-female': 2, 'dog-male': 1, 'turkey-female': 3, 'turkey-male': 1 },
  },
  industry: {
    name: 'Industry Rush',
    description: 'More fuel and raw materials for reaching metal production quickly.',
    dwarves: standardDwarves.map((dwarf) => ({ ...dwarf, skills: { ...dwarf.skills } })),
    supplies: {
      'copper-pick': 2,
      'copper-axe': 1,
      'iron-anvil': 1,
      logs: 25,
      'bituminous-coal': 20,
      'plump-helmet-spawn': 15,
      'dwarven-wine': 35,
      'plump-helmets': 20,
    },
    animals: { 'dog-female': 1, 'dog-male': 1, 'pig-female': 2, 'pig-male': 1 },
  },
  lean: {
    name: 'Lean Start',
    description: 'A compact essentials-first setup with room to customize in-game.',
    dwarves: standardDwarves.map((dwarf) => ({ ...dwarf, skills: { ...dwarf.skills } })),
    supplies: {
      'copper-pick': 2,
      'copper-axe': 1,
      logs: 12,
      'plump-helmet-spawn': 12,
      'dwarven-wine': 35,
      'plump-helmets': 20,
    },
    animals: { 'dog-female': 1, 'dog-male': 1 },
  },
};

export function clonePreset(key) {
  return structuredClone(presets[key]);
}
