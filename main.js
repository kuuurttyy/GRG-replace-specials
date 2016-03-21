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

            htmlContent = htmlContent.replace("À", "&Agrave;");
            htmlContent = htmlContent.replace("Á", "&Aacute;");
            htmlContent = htmlContent.replace("Â", "&Acirc;");
            htmlContent = htmlContent.replace("Ã", "&Atilde;");
            htmlContent = htmlContent.replace("Ä", "&Auml;");
            htmlContent = htmlContent.replace("Å", "&Aring;");
            htmlContent = htmlContent.replace("Æ", "&AElig;");

            htmlContent = htmlContent.replace("Ç", "&Ccedil;");

            htmlContent = htmlContent.replace("È", "&Egrave;");
            htmlContent = htmlContent.replace("É", "&Eacute;");
            htmlContent = htmlContent.replace("Ê", "&Ecirc;");
            htmlContent = htmlContent.replace("Ë", "&Euml;");

            htmlContent = htmlContent.replace("Ì", "&Igrave;");
            htmlContent = htmlContent.replace("Í", "&Iacute;");
            htmlContent = htmlContent.replace("Î", "&Icirc;");
            htmlContent = htmlContent.replace("Ï", "&Iuml;");

            htmlContent = htmlContent.replace("Ñ", "&Ntilde;");

            htmlContent = htmlContent.replace("Ò", "&Ograve;");
            htmlContent = htmlContent.replace("Ó", "&Oacute;");
            htmlContent = htmlContent.replace("Ô", "&Ocirc;");
            htmlContent = htmlContent.replace("Õ", "&Otilde;");
            htmlContent = htmlContent.replace("Ö", "&Ouml;");

            htmlContent = htmlContent.replace("Ù", "&Ugrave;");
            htmlContent = htmlContent.replace("Ú", "&Uacute;");
            htmlContent = htmlContent.replace("Û", "&Ucirc;");
            htmlContent = htmlContent.replace("Õ", "&Utilde;");
            htmlContent = htmlContent.replace("Ü", "&Uuml;");
            
            htmlContent = htmlContent.replace("Ý", "&Yacute;");

            htmlContent = htmlContent.replace("ß", "&szlig;");
            
            htmlContent = htmlContent.replace("à", "&agrave;");
            htmlContent = htmlContent.replace("á", "&aacute;");
            htmlContent = htmlContent.replace("â", "&acirc;");
            htmlContent = htmlContent.replace("ã", "&atilde;");
            htmlContent = htmlContent.replace("ä", "&auml;");
            htmlContent = htmlContent.replace("å", "&aring;");
            htmlContent = htmlContent.replace("æ", "&aelig;");
            
            htmlContent = htmlContent.replace("ç", "&ccedil;");


            htmlContent = htmlContent.replace("è", "&egrave;");
            htmlContent = htmlContent.replace("é", "&eacute;");
            htmlContent = htmlContent.replace("ê", "&ecirc;");
            htmlContent = htmlContent.replace("ë", "&euml;");
            
            htmlContent = htmlContent.replace("ì", "&igrave;");
            htmlContent = htmlContent.replace("í", "&iacute;");
            htmlContent = htmlContent.replace("î", "&icirc;");

            htmlContent = htmlContent.replace("Ð", "&ETH;");
            
            htmlContent = htmlContent.replace("ñ", "&ntilde;");
            
            htmlContent = htmlContent.replace("ò", "&ograve;");
            htmlContent = htmlContent.replace("ó", "&oacute;");
            htmlContent = htmlContent.replace("ô", "&ocirc;");
            htmlContent = htmlContent.replace("õ", "&otilde;");
            htmlContent = htmlContent.replace("ö", "&ouml;");
            
            htmlContent = htmlContent.replace("ù", "&ugrave;");
            htmlContent = htmlContent.replace("ú", "&uacute;");
            htmlContent = htmlContent.replace("û", "&ucirc;");
            htmlContent = htmlContent.replace("ü", "&uuml;");
            
            htmlContent = htmlContent.replace("ý", "&yacute;");
            htmlContent = htmlContent.replace("ÿ", "&yuml;");

            htmlContent = htmlContent.replace("þ", "&thorn;");
            
            htmlContent = htmlContent.replace("†", "&dagger;");
            
            
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