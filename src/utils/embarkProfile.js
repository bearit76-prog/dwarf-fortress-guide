import { animals, skillLevels, supplies } from '../data/embarkCalculator.js';

function safeName(value) {
  return value.replace(/[\[\]\r\n]/g, '').trim() || 'Strike the Earth Starter';
}

function renderQuantityToken(template, quantity) {
  return template.replace('{quantity}', String(quantity));
}

export function calculateEmbarkCost(config) {
  const skillCost = config.dwarves.reduce(
    (total, dwarf) =>
      total +
      Object.values(dwarf.skills).reduce(
        (dwarfTotal, level) => dwarfTotal + (skillLevels.find((entry) => entry.level === level)?.cost || 0),
        0,
      ),
    0,
  );

  const supplyCost = supplies.reduce(
    (total, item) => total + item.cost * (Number(config.supplies[item.id]) || 0),
    0,
  );
  const animalCost = animals.reduce(
    (total, animal) => total + animal.cost * (Number(config.animals[animal.id]) || 0),
    0,
  );

  return { skillCost, supplyCost, animalCost, total: skillCost + supplyCost + animalCost };
}

export function getEmbarkWarnings(config, budget) {
  const warnings = [];
  const quantity = (id) => Number(config.supplies[id]) || 0;
  const miners = config.dwarves.filter((dwarf) => (dwarf.skills.MINING || 0) > 0).length;
  const cost = calculateEmbarkCost(config);

  config.dwarves.forEach((dwarf, index) => {
    const assignedLevels = Object.values(dwarf.skills).reduce((total, level) => total + level, 0);
    if (assignedLevels > 10) {
      warnings.push(`Dwarf ${index + 1} has ${assignedLevels} skill levels; the game allows 10.`);
    }
  });

  if (quantity('copper-pick') < miners) warnings.push('Bring at least one pick for each trained miner.');
  if (quantity('dwarven-wine') < 28) warnings.push('Less than 28 drinks is a very tight first-season supply.');
  if (quantity('plump-helmet-spawn') < 5) warnings.push('Add plump helmet spawn for a dependable underground crop.');
  if (quantity('plump-helmets') < 10) warnings.push('Starting food is low; add plants or prepared meals.');
  if (cost.total > budget) warnings.push(`Estimated cost is ${cost.total - budget} points over the planning budget.`);
  if (!Object.values(config.animals).some((value) => Number(value) > 0)) {
    warnings.push('No animals selected. Breeding pairs are optional but useful.');
  }

  return warnings;
}

export function serializeEmbarkProfile(config) {
  const lines = [
    '[PROFILE]',
    `[TITLE:${safeName(config.profileName)}]`,
    '',
  ];

  config.dwarves.forEach((dwarf, dwarfIndex) => {
    Object.entries(dwarf.skills)
      .filter(([, level]) => level > 0)
      .forEach(([skill, level]) => lines.push(`[SKILL:${dwarfIndex + 1}:${skill}:${level}]`));
  });

  lines.push('');
  supplies.forEach((item) => {
    const quantity = Number(config.supplies[item.id]) || 0;
    if (quantity > 0) lines.push(renderQuantityToken(item.token, quantity));
  });

  lines.push('');
  animals.forEach((animal) => {
    const quantity = Number(config.animals[animal.id]) || 0;
    if (quantity > 0) lines.push(renderQuantityToken(animal.token, quantity));
  });

  return `${lines.join('\n').trim()}\n`;
}
