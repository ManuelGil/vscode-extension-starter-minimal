/**
 * EXTENSION_ID: The unique identifier of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_ID);
 *
 * @returns {string} - The unique identifier of the extension
 */
export const EXTENSION_ID: string = 'extensionIdentifier';

/**
 * EXTENSION_NAME: The repository ID of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_NAME);
 *
 * @returns {string} - The repository ID of the extension
 */
export const EXTENSION_NAME: string = 'vscode-extension-starter-minimal';

/**
 * EXTENSION_DISPLAY_NAME: The name of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_DISPLAY_NAME);
 *
 * @returns {string} - The name of the extension
 */
export const EXTENSION_DISPLAY_NAME: string = 'My Extension';

/**
 * USER_NAME: The githubUsername of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(USER_NAME);
 *
 * @returns {string} - The githubUsername of the extension
 */
export const USER_NAME: string = 'githubUsername';

/**
 * USER_PUBLISHER: The publisher of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(USER_PUBLISHER);
 *
 * @returns {string} - The publisher of the extension
 */
export const USER_PUBLISHER: string = 'extensionPublisher';

/**
 * EXTENSION_REPOSITORY_URL: The repository URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_REPOSITORY_URL);
 *
 * @returns {string} - The repository URL of the extension
 */
export const EXTENSION_REPOSITORY_URL: string = `https://github.com/${USER_NAME}/${EXTENSION_NAME}`;

/**
 * MARKETPLACE_URL: The marketplace URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(MARKETPLACE_URL);
 *
 * @returns {string} - The marketplace URL of the extension
 */
export const EXTENSION_MARKETPLACE_URL: string = `https://marketplace.visualstudio.com/items?itemName=${USER_PUBLISHER}.${EXTENSION_NAME}`;

/**
 * DEFAULT_ENABLE: The default enable of the extension.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(DEFAULT_ENABLE);
 *
 * @returns {boolean} - The default enable of the extension
 */
export const DEFAULT_ENABLE: boolean = true;
