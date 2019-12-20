const info = require('./info');

/**
 * This method is used by Tailor to fetch all the subcontainers and elements that
 * are inside of this custom container. Used in editor and for the preview functionality
 * @param Object parent - Sequelize instance of the Activity that holds this
 * custom container
 * @param Object childOptions - options used to for fetching the elements inside
 * the subcontainers of this custom continer, if such exist
 */
function fetch(parent, childOptions) {

}

/**
 * This method is used to resolve the statics of this custom container for the
 * purpose of the preview functionality
 * @param Object container - Sequelize instance of the custom container
 * @param Function defaultResolver - default statics resolver that Tailor uses
 */
function resolve(container, defaultResolver) {
}

module.exports = {
  ...info,
  fetch,
  resolve
};
