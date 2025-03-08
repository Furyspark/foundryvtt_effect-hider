// SPDX-FileCopyrightText: 2022 Johannes Loher
//
// SPDX-License-Identifier: MIT

/**
 * This is your JavaScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your module, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your module.
 */

import { setEffectVisibility, isCombatRunning, MODULE_ID } from "./lib.js";
import { initializeModuleRules } from "./integration.js";
import { registerSettings, getShowDuringCombat } from "./settings.js";

// Initialize module
Hooks.once("init", async () => {
  console.log(`${MODULE_ID} | Initializing ${MODULE_ID}`);

  initializeModuleRules();
  registerSettings();
});

Hooks.on("refreshToken", (token) => {
  if (canvas.tokens.highlightObjects) return;

  const showForCombat = getShowDuringCombat() && isCombatRunning();
  if (showForCombat) return;

  setEffectVisibility(token, token.hover);
});

Hooks.on("highlightObjects", (state) => {
  const showForCombat = getShowDuringCombat() && isCombatRunning();
  if (showForCombat) return;

  for (const token of canvas.tokens.placeables) {
    setEffectVisibility(token, state);
  }
});

Hooks.on("combatStart", () => {
  if (!getShowDuringCombat()) return;

  for (const token of canvas.tokens.placeables) {
    setEffectVisibility(token, true);
  }
});

Hooks.on("deleteCombat", () => {
  if (!getShowDuringCombat()) return;

  for (const token of canvas.tokens.placeables) {
    if (token.hover) continue; // Don't remove effects from hovered tokens
    setEffectVisibility(token, false);
  }
});
