import { Check, Clipboard, Download, Info, RotateCcw, TriangleAlert } from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  animals,
  clonePreset,
  DEFAULT_BUDGET,
  EMBARK_VERSION,
  presets,
  skillLevels,
  skills,
  supplies,
} from '../data/embarkCalculator.js';
import { calculateEmbarkCost, getEmbarkWarnings, serializeEmbarkProfile } from '../utils/embarkProfile.js';

function QuantityRow({ entry, quantity, onChange }) {
  return (
    <label className="flex items-center justify-between gap-4 border-b border-steel/15 py-3 last:border-0">
      <span>
        <span className="block text-sm font-semibold text-text">{entry.name}</span>
        <span className="text-xs text-muted">{entry.cost} estimated points each</span>
      </span>
      <input
        aria-label={`${entry.name} quantity`}
        className="w-20 rounded-md border border-steel/30 bg-coal px-3 py-2 text-right text-text outline-none focus:border-brass"
        min="0"
        onChange={(event) => onChange(Math.max(0, Number(event.target.value) || 0))}
        type="number"
        value={quantity || 0}
      />
    </label>
  );
}

export default function EmbarkCalculator() {
  const [presetKey, setPresetKey] = useState('beginner');
  const [config, setConfig] = useState(() => ({
    ...clonePreset('beginner'),
    profileName: 'Strike the Earth Starter',
  }));
  const [copied, setCopied] = useState(false);
  const costs = useMemo(() => calculateEmbarkCost(config), [config]);
  const warnings = useMemo(() => getEmbarkWarnings(config, DEFAULT_BUDGET), [config]);
  const profileText = useMemo(() => serializeEmbarkProfile(config), [config]);
  const remaining = DEFAULT_BUDGET - costs.total;

  function loadPreset(key) {
    setPresetKey(key);
    setConfig({ ...clonePreset(key), profileName: `${presets[key].name} 53.14` });
    setCopied(false);
  }

  function updateQuantity(group, id, value) {
    setConfig((current) => ({ ...current, [group]: { ...current[group], [id]: value } }));
  }

  function updateSkill(dwarfIndex, skillId, level) {
    setConfig((current) => ({
      ...current,
      dwarves: current.dwarves.map((dwarf, index) =>
        index === dwarfIndex ? { ...dwarf, skills: { ...dwarf.skills, [skillId]: level } } : dwarf,
      ),
    }));
  }

  async function copyProfile() {
    await navigator.clipboard.writeText(profileText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function downloadProfile() {
    const blob = new Blob([profileText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `embark-profile-${EMBARK_VERSION.replace('.', '-')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  }

  const categories = [...new Set(supplies.map((item) => item.category))];

  return (
    <main className="px-4 py-14 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="fade-in max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass">Embark Calculator</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold text-text sm:text-5xl">
            Build a reusable starting party.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Choose skills, supplies, and animals, then export a profile block for your game.
          </p>
          <div className="mt-6 flex gap-3 rounded-lg border border-brass/25 bg-brass/5 p-4 text-sm leading-6 text-muted">
            <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
            <p>
              Compatible with the Steam release of Dwarf Fortress <strong className="text-text">{EMBARK_VERSION}</strong>.
              Item availability and final point costs depend on your selected civilization, so review the loaded profile
              on the Prepare Carefully screen before embarking.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="space-y-8">
            <section className="rounded-lg border border-steel/20 bg-panel/75 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-text">Starting preset</h2>
                  <p className="mt-2 text-sm text-muted">{presets[presetKey].description}</p>
                </div>
                <button
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brass hover:text-text"
                  onClick={() => loadPreset(presetKey)}
                  type="button"
                >
                  <RotateCcw aria-hidden="true" className="h-4 w-4" /> Reset preset
                </button>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {Object.entries(presets).map(([key, preset]) => (
                  <button
                    className={`rounded-md border p-4 text-left transition ${
                      presetKey === key
                        ? 'border-brass bg-brass/10 text-text'
                        : 'border-steel/25 bg-coal/40 text-muted hover:border-brass/50'
                    }`}
                    key={key}
                    onClick={() => loadPreset(key)}
                    type="button"
                  >
                    <span className="font-semibold">{preset.name}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-steel/20 bg-panel/75 p-6">
              <h2 className="font-heading text-2xl font-bold text-text">The starting seven</h2>
              <p className="mt-2 text-sm text-muted">Each dwarf may receive up to ten total skill levels in-game.</p>
              <div className="mt-6 space-y-5">
                {config.dwarves.map((dwarf, dwarfIndex) => (
                  <details className="rounded-md border border-steel/20 bg-coal/45 p-4" key={`${dwarf.name}-${dwarfIndex}`}>
                    <summary className="cursor-pointer font-semibold text-text">
                      {dwarfIndex + 1}. {dwarf.name}
                    </summary>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {skills.map((skill) => (
                        <label className="text-xs font-semibold text-muted" key={skill.id}>
                          {skill.name}
                          <select
                            className="mt-1 w-full rounded-md border border-steel/30 bg-panel px-3 py-2 text-sm text-text outline-none focus:border-brass"
                            onChange={(event) => updateSkill(dwarfIndex, skill.id, Number(event.target.value))}
                            value={dwarf.skills[skill.id] || 0}
                          >
                            {skillLevels.map((entry) => (
                              <option key={entry.level} value={entry.level}>
                                {entry.label} ({entry.level})
                              </option>
                            ))}
                          </select>
                        </label>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-steel/20 bg-panel/75 p-6">
              <h2 className="font-heading text-2xl font-bold text-text">Supplies</h2>
              <div className="mt-5 grid gap-6 lg:grid-cols-2">
                {categories.map((category) => (
                  <div className="rounded-md border border-steel/20 bg-coal/45 p-4" key={category}>
                    <h3 className="font-heading text-lg font-bold text-brass">{category}</h3>
                    <div className="mt-2">
                      {supplies.filter((item) => item.category === category).map((item) => (
                        <QuantityRow
                          entry={item}
                          key={item.id}
                          onChange={(value) => updateQuantity('supplies', item.id, value)}
                          quantity={config.supplies[item.id]}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-steel/20 bg-panel/75 p-6">
              <h2 className="font-heading text-2xl font-bold text-text">Animals</h2>
              <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
                {animals.map((animal) => (
                  <QuantityRow
                    entry={animal}
                    key={animal.id}
                    onChange={(value) => updateQuantity('animals', animal.id, value)}
                    quantity={config.animals[animal.id]}
                  />
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
            <section className="rounded-lg border border-brass/30 bg-panel p-6 shadow-glow">
              <h2 className="font-heading text-xl font-bold text-text">Point estimate</h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between text-muted"><dt>Skills</dt><dd>{costs.skillCost}</dd></div>
                <div className="flex justify-between text-muted"><dt>Supplies</dt><dd>{costs.supplyCost}</dd></div>
                <div className="flex justify-between text-muted"><dt>Animals</dt><dd>{costs.animalCost}</dd></div>
                <div className="flex justify-between border-t border-steel/25 pt-3 font-bold text-text">
                  <dt>Estimated total</dt><dd>{costs.total}</dd>
                </div>
                <div className={`flex justify-between font-bold ${remaining < 0 ? 'text-red-300' : 'text-brass'}`}>
                  <dt>Remaining</dt><dd>{remaining}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs leading-5 text-muted">Planning budget: {DEFAULT_BUDGET}. The game is authoritative.</p>
            </section>

            {warnings.length ? (
              <section className="rounded-lg border border-red-300/25 bg-red-950/15 p-5">
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-red-200">
                  <TriangleAlert aria-hidden="true" className="h-5 w-5" /> Review
                </h2>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {warnings.map((warning) => <li key={warning}>- {warning}</li>)}
                </ul>
              </section>
            ) : null}

            <section className="rounded-lg border border-steel/20 bg-panel/75 p-5">
              <label className="text-sm font-semibold text-text">
                Profile name
                <input
                  className="mt-2 w-full rounded-md border border-steel/30 bg-coal px-3 py-2 text-text outline-none focus:border-brass"
                  maxLength="60"
                  onChange={(event) => setConfig((current) => ({ ...current, profileName: event.target.value }))}
                  value={config.profileName}
                />
              </label>
              <div className="mt-4 grid gap-3">
                <button
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brass px-4 py-3 text-sm font-bold text-coal transition hover:bg-[#d4a15f]"
                  onClick={copyProfile}
                  type="button"
                >
                  {copied ? <Check aria-hidden="true" className="h-4 w-4" /> : <Clipboard aria-hidden="true" className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy profile block'}
                </button>
                <button
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brass/40 px-4 py-3 text-sm font-bold text-text transition hover:bg-brass/10"
                  onClick={downloadProfile}
                  type="button"
                >
                  <Download aria-hidden="true" className="h-4 w-4" /> Download text file
                </button>
              </div>
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-semibold text-brass">Preview generated profile</summary>
                <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap rounded-md bg-coal p-3 text-xs leading-5 text-muted">
                  {profileText}
                </pre>
              </details>
              <p className="mt-4 text-xs leading-5 text-muted">
                Paste the generated block at the end of <code className="text-text">prefs/embark_profiles.txt</code>.
                Keep a backup of the existing file.
              </p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
