/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/* Kurt Stubbings - Grass Roots Group */
/* Replace special characters with their counterparts to work in emails and such. Does most of the standard characters and all of the latin 1 accented characters */
/* Written by Kurt Stubbings 2016 */


define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        Menus = brackets.getModule("command/Menus");


    // Function to run when the menu item is clicked
    function replaceSpecialCharacters() {

        var mainWindow = EditorManager.getActiveEditor(),
            activeText = mainWindow.document;

        if (activeText) {

            var htmlContent = activeText.getText();

            // store current cursor and scroll positions
            var cursorPos = mainWindow.getCursorPos(),
                scrollPos = mainWindow.getScrollPos();

            htmlContent = htmlContent.replace(/\u2013/g, "&ndash;");
            htmlContent = htmlContent.replace(/\u2014/g, "&mdash;");
            htmlContent = htmlContent.replace(/\u0091/g, "'");
            htmlContent = htmlContent.replace(/\u0092/g, "'");
            htmlContent = htmlContent.replace(/\u0027/g, "'");
            htmlContent = htmlContent.replace(/\u00A3/g, "&pound;");
            htmlContent = htmlContent.replace(/:tm:/g, "&#153;");
            htmlContent = htmlContent.replace(/:tick:/g, "&#10004;");
            htmlContent = htmlContent.replace(/:c:/g, "&#169;");
            htmlContent = htmlContent.replace(/:r:/g, "&#174;");
            htmlContent = htmlContent.replace(/’/g, "'");
            htmlContent = htmlContent.replace(/‘/g, "'");
            htmlContent = htmlContent.replace(/“/g, "\"");
            htmlContent = htmlContent.replace(/”/g, "\"");
            htmlContent = htmlContent.replace(/\s&\s/g, " &amp; ");

            htmlContent = htmlContent.replace(/\u00C0/g, "&Agrave;");
            htmlContent = htmlContent.replace(/\u00C1/g, "&Aacute;");
            htmlContent = htmlContent.replace(/\u00C2/g, "&Acirc;");
            htmlContent = htmlContent.replace(/\u00C3/g, "&Atilde;");
            htmlContent = htmlContent.replace(/\u00C4/g, "&Auml;");
            htmlContent = htmlContent.replace(/\u00C5/g, "&Aring;");
            htmlContent = htmlContent.replace(/\u00C6/g, "&AElig;");

            htmlContent = htmlContent.replace(/\u00C7/g, "&Ccedil;");

            htmlContent = htmlContent.replace(/\u00C8/g, "&Egrave;");
            htmlContent = htmlContent.replace(/\u00C9/g, "&Eacute;");
            htmlContent = htmlContent.replace(/\u00CA/g, "&Ecirc;");
            htmlContent = htmlContent.replace(/\u00CB/g, "&Euml;");

            htmlContent = htmlContent.replace(/\u00CC/g, "&Igrave;");
            htmlContent = htmlContent.replace(/\u00CD/g, "&Iacute;");
            htmlContent = htmlContent.replace(/\u00CE/g, "&Icirc;");
            htmlContent = htmlContent.replace(/\u00CF/g, "&Iuml;");

            htmlContent = htmlContent.replace(/\u00D1/g, "&Ntilde;");

            htmlContent = htmlContent.replace(/\u00D2/g, "&Ograve;");
            htmlContent = htmlContent.replace(/\u00D3/g, "&Oacute;");
            htmlContent = htmlContent.replace(/\u00D4/g, "&Ocirc;");
            htmlContent = htmlContent.replace(/\u00D5/g, "&Otilde;");
            htmlContent = htmlContent.replace(/\u00D6/g, "&Ouml;");

            htmlContent = htmlContent.replace(/\u00D9/g, "&Ugrave;");
            htmlContent = htmlContent.replace(/\u00DA/g, "&Uacute;");
            htmlContent = htmlContent.replace(/\u00DB/g, "&Ucirc;");
            htmlContent = htmlContent.replace(/\u00DC/g, "&Uuml;");
            
            htmlContent = htmlContent.replace(/\u00DD/g, "&Yacute;");

            htmlContent = htmlContent.replace(/\u00DF/g, "&szlig;");
            
            htmlContent = htmlContent.replace(/\u00e0/g, "&agrave;");
            htmlContent = htmlContent.replace(/\u00e1/g, "&aacute;");
            htmlContent = htmlContent.replace(/\u00e2/g, "&acirc;");
            htmlContent = htmlContent.replace(/\u00e3/g, "&atilde;");
            htmlContent = htmlContent.replace(/\u00e4/g, "&auml;");
            htmlContent = htmlContent.replace(/\u00e5/g, "&aring;");
            htmlContent = htmlContent.replace(/\u00e6/g, "&aelig;");
            
            htmlContent = htmlContent.replace(/\u00E7/g, "&ccedil;");


            htmlContent = htmlContent.replace(/\u00E8/g, "&egrave;");
            htmlContent = htmlContent.replace(/\u00E9/g, "&eacute;");
            htmlContent = htmlContent.replace(/\u00Ea/g, "&ecirc;");
            htmlContent = htmlContent.replace(/\u00EB/g, "&euml;");
            
            htmlContent = htmlContent.replace(/\u00EC/g, "&igrave;");
            htmlContent = htmlContent.replace(/\u00ED/g, "&iacute;");
            htmlContent = htmlContent.replace(/\u00EE/g, "&icirc;");
            htmlContent = htmlContent.replace(/\u00EF/g, "&iuml;");
            
            htmlContent = htmlContent.replace(/\u00F1/g, "&ntilde;");
            
            htmlContent = htmlContent.replace(/\u00E2/g, "&ograve;");
            htmlContent = htmlContent.replace(/\u00F3/g, "&oacute;");
            htmlContent = htmlContent.replace(/\u00F4/g, "&ocirc;");
            htmlContent = htmlContent.replace(/\u00F5/g, "&otilde;");
            htmlContent = htmlContent.replace(/\u00F6/g, "&ouml;");
            
            htmlContent = htmlContent.replace(/\u00F9/g, "&ugrave;");
            htmlContent = htmlContent.replace(/\u00FA/g, "&uacute;");
            htmlContent = htmlContent.replace(/\u00FB/g, "&ucirc;");
            htmlContent = htmlContent.replace(/\u00FC/g, "&uuml;");
            
            htmlContent = htmlContent.replace(/\u00FD/g, "&yacute;");
            htmlContent = htmlContent.replace(/\u00FF/g, "&yuml;");

            htmlContent = htmlContent.replace(/\u00fE/g, "&thorn;");
            
            htmlContent = htmlContent.replace(/\u2020/g, "&dagger;");
            
            
            activeText.setText(htmlContent);

            // restore cursor and scroll positions
            mainWindow.setCursorPos(cursorPos);
            mainWindow.setScrollPos(scrollPos.x, scrollPos.y);

            return true;
        }

        return false;
    }


    // First, register a command - a UI-less object associating an id to a handler
    var MY_COMMAND_ID = "grg.replace.specials"; // package-style naming to avoid collisions
    CommandManager.register("Replace Special Characters", MY_COMMAND_ID, replaceSpecialCharacters);

    // Then create a menu item bound to the command
    // The label of the menu item is the name we gave the command (see above)
    var menu = Menus.getMenu(Menus.AppMenuBar.FILE_MENU);
    //menu.addMenuItem(MY_COMMAND_ID);

    // We could also add a key binding at the same time:
    menu.addMenuItem(MY_COMMAND_ID, "Ctrl-Alt-9");
    // (Note: "Ctrl" is automatically mapped to "Cmd" on Mac)

    exports.replaceSpecialCharacters = replaceSpecialCharacters;
});