import { renderRules } from "./integration.js";

export function shouldSkipEffectBackground() {
  return renderRules.skipBackground;
}
