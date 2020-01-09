const info = require('./info');

/**
 * This method is used by Tailor to fetch all the subcontainers and elements that
 * are inside of this custom container. Used in editor and for the preview functionality
 * @param {Object} parent - Sequelize instance of the Activity that holds this
 * custom container
 * @param {Object} childOptions - options used to for fetching the elements inside
 * the subcontainers of this custom continer, if such exist
 * @return {Arrray} An array of custom containers
 */
function fetch(parent, childOptions) {

}

/**
 * This method is used to resolve the statics of this custom container for the
 * purpose of the preview functionality
 * @param {Object} container - Sequelize instance of the custom container
 * @param {Function} defaultResolver - default statics resolver that Tailor uses
 * @return {Object} container with resolved statics
 */
function resolve(container, defaultResolver) {

}

/**
 * This method is used to create the summary of this container for the published
 * spine
 * @param {Object} container - Object containing the containers data
 * @return {Object} object containing summary data
 */
function buildSummary(container) {

}

module.exports = {
  ...info,
  fetch,
  resolve,
  buildSummary
};
