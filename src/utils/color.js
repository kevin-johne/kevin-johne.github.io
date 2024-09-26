/**
 *
 * @param {string} hex - in hex format #ffffff or #fff
 * @returns {object} { red, green, blue }
 */
export function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const red = (bigint >> 16) & 255;
  const green = (bigint >> 8) & 255;
  const blue = bigint & 255;

  return { red, green, blue };
}

/**
 *
 * @param {string} hex - in hex format #ffffff or #fff
 * @param {number} alpha - between 0 - 1
 * @returns {string}
 */
export function hexToRgba(hex, alpha) {
  const { red, green, blue } = hexToRgb(hex);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
