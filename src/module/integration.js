export function hasDorakoUX() {
  return game.modules.get("pf2e-dorako-ux")?.active ?? false;
}
