/**
 * Validates basic message structure
 * @param {Object} message - Message object
 * @returns {boolean} - True if valid, false otherwise
 */
export function validateMessage({ to, body }) {
  return typeof to === 'string' && typeof body === 'string' && to.length > 0 && body.length > 0;
}