const moduleRules = [
  {
    id: "pf2e-dorako-ux",
    skipBackground: true,
  },
  {
    id: "pathfinder-ui",
    skipBackground: true,
  },
  {
    id: "pf2e-effects-halo",
    skipBackground: true,
  },
];

export const renderRules = {
  skipBackground: false,
};

export function initializeModuleRules() {
  for (const module of moduleRules) {
    const gameModule = game.modules.get(module.id);
    if (gameModule?.active !== true) continue;

    if (module.skipBackground === true) renderRules.skipBackground = true;
  }
}
