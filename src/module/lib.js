import { hasDorakoUX } from "./integration.js";

export function shouldHideEffectBackground() {
  return !hasDorakoUX();
}
