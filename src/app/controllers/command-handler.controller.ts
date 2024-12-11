import { window } from 'vscode';

import { EXTENSION_DISPLAY_NAME } from '../configs';

/**
 * The CommandHandlerController class.
 *
 * @class
 * @classdesc The class that represents the example controller.
 * @export
 * @public
 * @example
 * const controller = new CommandHandlerController(config);
 */
export class CommandHandlerController {
  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods
  /**
   * The helloWorld method.
   *
   * @function helloWorld
   * @public
   * @memberof ExampleController
   * @example
   * controller.helloWorld();
   *
   * @returns {void} - No return value
   */
  helloWorld(): void {
    // Display a message box to the user
    window.showInformationMessage(
      `Hello World from ${EXTENSION_DISPLAY_NAME}!`,
    );
  }
}
