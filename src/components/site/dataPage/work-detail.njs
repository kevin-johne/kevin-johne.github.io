{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Kevin Johne - have yet a Style Guide?{% endblock %}
{% block content %}
    {{ modules.imageText.default( title, tags, descriptions, images, links ) }}
{% endblock %}
