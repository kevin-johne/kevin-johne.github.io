<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Kevin Johne - have yet a Style Guide?</title>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="image_src" href="/img/kevin_johne_screenshot.jpg">
        <link href="https://fonts.googleapis.com/css?family=Cantata+One|Playfair+Display:900|Raleway" rel="stylesheet">
        <link rel="stylesheet" href="/css/main.css">
        <link rel="shortcut icon" href="/img/favicon.ico" />
    </head>
    <body>
        <div class="site-body show-grid">
            {% include modulesPath + '/header/header.njs' %}

            {% block content %}
                <div class="site-page">
                </div>
            {% endblock %}
        </div>

        {% include modulesPath + '/footer/footer.njs' %}

        <script type="text/javascript" data-main="/js/app/main.js" src="/js/app/vendor/require.js"></script>

        {% if not production %}
            <script src="http://localhost:{{ liveReloadPort }}/livereload.js"></script>

            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-63560371-1"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-63560371-1');
            </script>

        {% endif %}
    </body>
</html>
