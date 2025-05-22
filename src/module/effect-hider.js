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

import { refreshEffectVisibility, MODULE_ID } from "./lib.js";
import { initializeModuleRules } from "./integration.js";
import { registerSettings } from "./settings.js";

// Initialize module
Hooks.once("init", async () => {
  console.log(`${MODULE_ID} | Initializing ${MODULE_ID}`);

  initializeModuleRules();
  registerSettings();
});

Hooks.on("refreshToken", (token) => {
  //if (canvas.tokens.highlightObjects) return;
  refreshEffectVisibility(token);
});

Hooks.on("highlightObjects", (state) => {
  //const showForCombat = getShowDuringCombat() && isCombatRunning();
  //if (showForCombat) return;

  for (const token of canvas.tokens.placeables) {
    refreshEffectVisibility(token);
    //setEffectVisibility(token, state);
  }
});

Hooks.on("combatStart", () => {
  for (const token of canvas.tokens.placeables) {
    refreshEffectVisibility(token);
  }
});

Hooks.on("deleteCombat", () => {
  for (const token of canvas.tokens.placeables) {
    refreshEffectVisibility(token);
  }
});
