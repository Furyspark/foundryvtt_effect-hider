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

// Initialize module
Hooks.once("init", async () => {
  console.log("effect-hider | Initializing effect-hider");

  // Register custom sheets (if any)
});

// Setup module
Hooks.once("setup", async () => {
  // Do anything after initialization but before
  // ready
});

// When ready
Hooks.once("ready", async () => {
  // Do anything once the module is ready
});

// Add any additional hooks if necessary
Hooks.on("refreshToken", (obj) => {
  if (canvas.tokens.highlightObjects) return;
  for (const fx of obj.effects.children) {
    if (fx !== obj.effects.overlay) fx.visible = obj.hover;
  }
});

Hooks.on("highlightObjects", (state) => {
  for (const token of canvas.tokens.placeables) {
    for (const fx of token.effects.children) {
      if (fx !== token.effects.overlay) fx.visible = state;
    }
  }
});
