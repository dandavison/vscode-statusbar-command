import { AccessibilityInformation } from 'vscode';

export interface StatusBarItemConfig {

  /**
  * The alignment of this item (default: left)
  */
  alignment?: 'left' | 'right';

  /**
   * The priority of this item. Higher value means the item should
   * be shown more to the left.
   */
  priority?: number;

  /**
   * The identifier of this item.
   *
   * *Note*: if no identifier was provided by the {@link window.createStatusBarItem `window.createStatusBarItem`}
   * method, the identifier will match the {@link Extension.id extension identifier}.
   */
  id?: string;

  /**
   * The name of the entry, like 'Python Language Indicator', 'Git Status' etc.
   * Try to keep the length of the name short, yet descriptive enough that
   * users can understand what the status bar item is about.
   */
  name?: string | undefined;

  /**
   * The text to show for the entry. You can embed icons in the text by leveraging the syntax:
   *
   * `My text $(icon-name) contains icons like $(icon-name) this one.`
   *
   * Where the icon-name is taken from the [codicon](https://microsoft.github.io/vscode-codicons/dist/codicon.html) icon set, e.g.
   * `light-bulb`, `thumbsup`, `zap` etc.
   */
  text: string;

  /**
   * The tooltip text when you hover over this entry.
   */
  tooltip?: string | undefined;

  /**
   * The foreground color for this entry.
   */
  color?: string | undefined;

  /**
   * the background color for this entry
   */
  backgroundColor?: string | undefined;

  /**
   * identifier of a command to run on click.
   *
   * The command must be [known](#commands.getCommands).
   *
   * Note that if this is a [`Command`](#Command) object, only the [`command`](#Command.command) and [`arguments`](#Command.arguments)
   * are used by VS Code.
   */
  command: string;


  /**
   * Arguments that the command handler should be invoked with.
   */
  arguments?: Array<unknown>;

  /**
   * Accessibility information used when screen reader interacts with this StatusBar item
   */
  accessibilityInformation?: AccessibilityInformation;

  /**
   * if RegEx is valid, then the StatusbarItem is shown
   */
  include?: string;

  /**
   * regex flags for include
   */
   includeFlags?: string;

  /**
   * if RegEx is valid, then the StatusbarItem is hidden
   */
  exclude?: string;

  /**
   * regex flags for exclude
   */
   excludeFlags?: string;

  /**
   * if regex match languageid
   */
  filterLanguageId?: string;

  /**
   * regex flags for filterLanguageId
   */
   filterLanguageIdFlags?: string;

  /**
   * if regex match filename
   */
  filterFileName?: string;

  /**
   * regex flags for filterFileName
   */
   filterFileNameFlags?: string;

  /**
   * if regex match filepath
   */
  filterFilepath?: string;

  /**
   * regex flags for filterFilepath
   */
  filterFilepathFlags?: string;

  /**
   * if regex match text
   */
  filterText?: string;

  /**
   * regex flags for filterText
   */
   filterTextFlags?: string;

   /**
    * events to register script execution
    * https://code.visualstudio.com/api/references/vscode-api#Event
    * example: vscode.workspace.onDidChangeConfiguration
    */
    scriptEvents?: Array<string>;

    /**
     * script to execute if event is triggered
     * e.g. evt.affectsConfiguration('http') ? statusBarItem.text = 'http changed' : statusBarItem.text = 'http not changed'
     */
     script?: string;
}
