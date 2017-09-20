{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}Kevin Johne - have yet a Style Guide?{% endblock %}

{% block aboveHeader %}
    <div class="site-logo-holder">
        <a class="site-logo landing-logo" href="#">
            {% include imgPath + 'logo-landing.svg' %}
        </a>
    </div>
{% endblock %}
