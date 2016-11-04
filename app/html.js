export default function(html) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>JavaZone 2017</title>
                <meta charset="utf-8">
                <link rel="stylesheet" type="text/css" href="/app.css">
                <script>
                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

                    ga('create', 'UA-3676724-10', 'auto');
                    ga('set', 'anonymizeIp', true);
                </script>
            </head>
            <body>
                <div id="app">${html}</div>
                <script src="/app.js"></script>
            </body>
        </html>
    `;
};
