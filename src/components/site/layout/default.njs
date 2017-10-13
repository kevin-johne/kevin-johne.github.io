<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Kevin Johne - {% block pageTitle %}{% endblock %}</title>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {% block meta %}

        {% endblock %}

        <link rel="image_src" href="/img/kevin_johne_screenshot.jpg">
        <link href="https://fonts.googleapis.com/css?family=Cantata+One|Playfair+Display:900|Raleway" rel="stylesheet">
        <link rel="stylesheet" href="/css/main.css">
        <link rel="shortcut icon" href="/img/favicon.ico" />
    </head>
    <body>
        <div class="site-body show-grid">
            {% include modulesPath + '/header/header.njs' %}

                <div class="site-page">
                    {% block content %}
                    {% endblock %}
                </div>
        </div>

        {% include modulesPath + '/footer/footer.njs' %}

        <script type="text/javascript" data-main="/js/app/main.js" src="/js/app/vendor/require.js"></script>

        {% if not production %}
            <script src="http://localhost:{{ liveReloadPort }}/livereload.js"></script>
        {% endif %}

        {% if production %}
            <script>
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                ga('create', 'UA-63560371-1', 'auto');
                ga('send', 'pageview');
            </script>
        {% endif %}
    </body>
</html>
