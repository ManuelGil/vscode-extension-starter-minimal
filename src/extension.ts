// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Import the Configs, Controllers, and Providers
import {
  EXTENSION_DISPLAY_NAME,
  EXTENSION_ID,
  EXTENSION_NAME,
  ExtensionConfig,
  USER_PUBLISHER,
} from './app/configs';
import { CommandHandlerController } from './app/controllers';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  // The code you place here will be executed every time your command is executed
  let resource: vscode.WorkspaceFolder | undefined;

  if (
    !vscode.workspace.workspaceFolders ||
    vscode.workspace.workspaceFolders.length === 0
  ) {
    // Check if there are workspace folders
    vscode.window.showErrorMessage(
      'No workspace folders are open. Please open a workspace folder to use this extension',
    );
    return;
  }

  if (vscode.workspace.workspaceFolders.length === 1) {
    // Optionally, prompt the user to select a workspace folder if multiple are available
    resource = vscode.workspace.workspaceFolders[0];
  } else {
    const selectedFolder = await vscode.window.showWorkspaceFolderPick({
      placeHolder:
        'Select a workspace folder to use. This folder will be used to load workspace-specific configuration for the extension',
    });

    resource = selectedFolder;
  }

  // -----------------------------------------------------------------
  // Initialize the extension
  // -----------------------------------------------------------------

  // Get the configuration for the extension
  const config = new ExtensionConfig(
    vscode.workspace.getConfiguration(EXTENSION_ID, resource?.uri),
  );

  if (!config.enable) {
    // Check if the extension is enabled
    vscode.window.showErrorMessage(
      'My Extension is disabled. Please enable it to use the extension',
    );
    return;
  }

  // -----------------------------------------------------------------
  // Get version of the extension
  // -----------------------------------------------------------------

  // Get the previous version of the extension
  const previousVersion = context.globalState.get('version');
  // Get the current version of the extension
  const currentVersion = context.extension.packageJSON.version;

  // Check if the extension is running for the first time
  if (!previousVersion) {
    vscode.window.showInformationMessage(
      `Welcome to ${EXTENSION_DISPLAY_NAME}! The extension is now active`,
    );

    // Update the version in the global state
    context.globalState.update('version', currentVersion);
  }

  // Check if the extension has been updated
  if (previousVersion && previousVersion !== currentVersion) {
    const actions: vscode.MessageItem[] = [
      {
        title: 'Release Notes',
      },
      {
        title: 'Close',
      },
    ];

    const option = await vscode.window.showInformationMessage(
      `New version of ${EXTENSION_DISPLAY_NAME} is available. Check out the release notes for version ${currentVersion}!`,
      ...actions,
    );

    // Handle the actions
    switch (option?.title) {
      case actions[0].title:
        vscode.env.openExternal(
          vscode.Uri.parse(
            `https://marketplace.visualstudio.com/items/${USER_PUBLISHER}.${EXTENSION_NAME}/changelog`,
          ),
        );
        break;
    }

    // Update the version in the global state
    context.globalState.update('version', currentVersion);
  }

  // -----------------------------------------------------------------
  // Register the commands
  // -----------------------------------------------------------------

  // Create a new CommandHandlerController
  const commandHandler = new CommandHandlerController();

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposableHelloWorld = vscode.commands.registerCommand(
    'extensionIdentifier.helloWorld',
    () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      commandHandler.helloWorld();
    },
  );

  context.subscriptions.push(disposableHelloWorld);
}

// this method is called when your extension is deactivated
export function deactivate() {}
