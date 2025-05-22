import { MODULE_ID } from "./lib.js";
import { refreshEffectVisibility } from "./lib.js";

const MODULE_SETTINGS = {
  "hideEffects": {
    name: "EffectHider.Settings.HideEffects.Name",
    hint: "EffectHider.Settings.HideEffects.Hint",
    scope: "client",
    config: true,
    requiresReload: false,
    type: String,
    choices: {
      "always": "EffectHider.Settings.HideEffects.Choices.Always",
      "notInCombat": "EffectHider.Settings.HideEffects.Choices.WhenNotInCombat",
      "never": "EffectHider.Settings.HideEffects.Choices.Never",
    },
    default: false,
    onChange: () => {
      for (const token of canvas.tokens.placeables) {
        refreshEffectVisibility(token);
      }
    },
  },
};

export function registerSettings() {
  for (const [key, setting] of Object.entries(MODULE_SETTINGS)) {
    game.settings.register(MODULE_ID, key, setting);
  }
}
