// ==UserScript==
// @name         undo-github
// @namespace    io.mstg.undo-github
// @version      0.1
// @description  wow undo the header changes to github
// @author       Mustafa Gezen
// @match        https://github.com/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/mstg/undo-github/master/undo.js
// @updateURL    https://raw.githubusercontent.com/mstg/undo-github/master/undo.js
// @require      https://code.jquery.com/jquery.min.js
// ==/UserScript==

$(document).ready(function(){
    $("a[href='/pulls']").attr("href", "/explore").text("Explore");
    $("a.dropdown-item[href='/explore']").attr("href", "/pulls").text("Pull requests");
});
