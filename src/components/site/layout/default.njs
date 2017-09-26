<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Kevin Johne - have yet a Style Guide?</title>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="image_src" href="/img/kevin_johne_screenshot.jpg">
        <link href="https://fonts.googleapis.com/css?family=Cantata+One|Playfair+Display:900|Raleway" rel="stylesheet">        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="stylesheet" href="/css/main.css">
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
    </body>
</html>
