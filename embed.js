(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/arcade/",
    "verprefix": "",
    "workerjs": "/arcade/worker.js",
    "monacoworkerjs": "/arcade/monacoworker.js",
    "gifworkerjs": "/arcade/gifjs/gif.worker.js",
    "serviceworkerjs": "/arcade/serviceworker.js",
    "typeScriptWorkerJs": "/arcade/tsworker.js",
    "pxtVersion": "12.2.13",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/arcade/",
    "commitCdnUrl": "/arcade/",
    "blobCdnUrl": "/arcade/",
    "cdnUrl": "/arcade/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "arcade",
    "simUrl": "/arcade/simulator.html",
    "simserviceworkerUrl": "/arcade/simulatorserviceworker.js",
    "simworkerconfigUrl": "/arcade/workerConfig.js",
    "partsUrl": "/arcade/siminstructions.html",
    "runUrl": "/arcade/run.html",
    "docsUrl": "/arcade/docs.html",
    "multiUrl": "/arcade/multi.html",
    "asseteditorUrl": "/arcade/asseteditor.html",
    "isStatic": true,
    "kioskUrl": "/arcade/kiosk.html",
    "teachertoolUrl": "/arcade/teachertool.html",
    "tutorialtoolUrl": "/arcade/tutorialtool.html",
    "skillmapUrl": "/arcade/skillmap.html",
    "multiplayerUrl": "/arcade/multiplayer.html",
    "authcodeUrl": "/arcade/authcode.html"
};

    var scripts = [
        "/arcade/highlight.js/highlight.pack.js",
        "/arcade/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/arcade/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/arcade/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/arcade/target.js");
    scripts.push("/arcade/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.setInitCallbacks(pxtCallbacks)
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
