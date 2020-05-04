// ==UserScript==
// @name         --youtube-chips
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  No more youtube chips (category cards on homepage)
// @author       canarado
// @match        *://www.youtube.com/*
// ==/UserScript==

(function() {
    'use strict';

    console.log("hewwo");

    let check_for_ready = setInterval(() => {
        if(document.readyState == 'complete') {
            clearInterval(check_for_ready);
            let chips = document.getElementById('chips-below');

            console.log('should be deleting now.')
            chips.remove();
        }
    }, 100);
})();
