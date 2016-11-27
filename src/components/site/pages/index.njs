{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Homepage{% endblock %}

{% block aboveHeader %}
    {% include modulesPath + 'landing/landing.njs' %}
{% endblock %}

{% block content %}
    Hi
{% endblock %}
