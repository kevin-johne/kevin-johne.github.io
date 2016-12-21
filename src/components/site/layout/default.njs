<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Web professional Kevin Johne</title>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="image_src" href="/img/kevin_johne_screenshot.jpg">
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
        <div class="site-body show-grid">
            {% block aboveHeader %}{% endblock %}

            {% include modulesPath + '/mod-header/header.njs' %}

            {% block content %}
                <div class="site-page">
                </div>
            {% endblock %}

            {% include modulesPath + '/contact/contact.njs' %}
        </div>

        <script type="text/javascript" data-main="/js/app/main.js" src="/js/app/vendor/require.js"></script>
    </body>
</html>
