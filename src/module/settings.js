import { MODULE_ID } from "./lib.js";
import { isCombatRunning, setEffectVisibility } from "./lib.js";

const MODULE_SETTINGS = {
  "showDuringCombat": {
    name: "EffectHider.Settings.ShowDuringCombat.Name",
    hint: "EffectHider.Settings.ShowDuringCombat.Hint",
    scope: "client",
    config: true,
    requiresReload: false,
    type: Boolean,
    default: false,
    onChange: (value) => {
      if (!isCombatRunning()) return;

      for (const token of canvas.tokens.placeables) {
        if (value === true) {
          setEffectVisibility(token, true);
        } else {
          if (!token.hover) setEffectVisibility(token, false);
        }
      }
    },
  },
};

export function registerSettings() {
  for (const [key, setting] of Object.entries(MODULE_SETTINGS)) {
    game.settings.register(MODULE_ID, key, setting);
  }
}

export function getShowDuringCombat() {
  return game.settings.get(MODULE_ID, "showDuringCombat") === true;
}
