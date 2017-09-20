{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Kevin Johne Web Developer{% endblock %}

{% block aboveHeader %}
    {% include modulesPath + 'landing/landing.njs' %}
{% endblock %}
