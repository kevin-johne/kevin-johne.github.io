{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{%- block pageTitle %}
    title {%- for tag in tags -%}#{{ tag }}{% endfor -%}
{% endblock -%}

{% block meta %}
    <meta name="description" content="{{ title }}, {{ descriptions[0] }}">
    <meta name="keywords" content="{{ title }},
        {%- for tag in tags -%}
            {{ tag }}
            {%- if not loop.last -%}
                ,
            {%- endif -%}
        {% endfor -%}
    ">
{% endblock %}

{% block content %}
    {{ modules.imageText.default( title, tags, descriptions, images, links ) }}
{% endblock %}
