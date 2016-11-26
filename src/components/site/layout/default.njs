

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Web professional Kevin Johne</title>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="image_src" href="/dist/img/kevin_johne_screenshot.jpg">
        <link rel="shortcut icon" href="/dist/img/favicon.ico" />
        <link rel="stylesheet" href="/dist/css/main.css">
    </head>
    <body>
        <div class="site-body">


            {% block content %}

            {% endblock %}

            {% include modulesPath + '/header/header.njs' %}
        </div>

        <script type="text/javascript" data-main="/dist/js/app/main.js" src="/dist/js/app/vendor/require.js"></script>
    </body>
</html>
