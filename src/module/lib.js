import { renderRules } from "./integration.js";

export const MODULE_ID = "effect-hider";

export function shouldSkipEffectBackground() {
  return renderRules.skipBackground;
}

export function isCombatRunning() {
  return game.combat?.active === true;
}

export function getShowDuringCombat() {
  return game.settings.get(MODULE_ID, "hideEffects") !== "always";
}

export function refreshEffectVisibility(token) {
  if (shouldShowEffects(token)) {
    setEffectVisibility(token, true);
  } else {
    setEffectVisibility(token, false);
  }
}

export function setEffectVisibility(token, value) {
  for (const fx of token.effects.children) {
    if (fx === token.effects.overlay) continue; // Skip base overlay
    if (fx === token.effects.bg && shouldSkipEffectBackground()) continue; // Skip background frames, for Dorako UI (and possibly other module conflicts)

    fx.visible = value;
  }
}

export function shouldShowEffects(token) {
  if (token.hover) return true;

  if (canvas.tokens.highlightObjects) return true;

  if (isCombatRunning() && getShowDuringCombat()) return true;

  return game.settings.get(MODULE_ID, "hideEffects") === "never";
}
