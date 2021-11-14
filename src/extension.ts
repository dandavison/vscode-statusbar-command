import * as vscode from 'vscode';
import { CommandsController } from './commandsController';
import { runInNewContext } from 'vm';


export function activate(context: vscode.ExtensionContext): void {

  context.subscriptions.push(new CommandsController(runInNewContext));
}
