{% extends templatePath + "default.njs" %}

{% block pageTitle %}Error Page... sorry{% endblock %}

{% block meta %}
<meta name="description" content="Your path went wrong and was leading to an error, go back to start!">
{% endblock %}

{% block content %}
    <h1>Error 404 :(</h1>
    <p>
        Upps something happened here not correct...
    </p>
    <p>
        better to get back on Track. The Link brings you back to the <a href="/">beginning</a>. A new chance :)
    </p>
{% endblock %}
