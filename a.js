// Short address of the AniTube plugin for Lampa: loads the current beta.
(function () {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://dez955.github.io/anionline/anitube-beta.js?t=' + Date.now();
    document.body.appendChild(script);
})();
