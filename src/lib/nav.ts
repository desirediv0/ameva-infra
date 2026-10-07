/**
 * The navbar is transparent until it condenses, so its ink has to match
 * whatever band sits underneath it at the top of each page.
 *
 * The home page opens on the light editorial hero; every other route opens on
 * a dark image band (`PageHero`, the project detail hero, or the 404). Unknown
 * paths render `not-found`, which is dark — so defaulting to "dark" is correct.
 *
 * Resolved during render from the pathname, so there is no first-paint flash.
 */
const LIGHT_HERO_ROUTES = new Set<string>(["/"]);

export const hasDarkHero = (pathname: string) =>
  !LIGHT_HERO_ROUTES.has(pathname);
