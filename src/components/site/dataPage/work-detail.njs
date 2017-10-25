{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{%- block pageTitle %}
    {{ title }} {%- for tag in tags -%}#{{ tag }}{% endfor -%}
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
    {% call modules.content.default() %}
    <h1>
        {{ title }}
    </h1>
    {% if tags %}
        <ul class="tags">
            {% for tag in tags %}
                <li title="tag {{ tag }}">{{ tag }}</li>
            {% endfor %}
        </ul>
    {% endif %}
    <section class="mod-content__column">
        {% for description in descriptions %}
            <p>
                {{ description }}
            </p>
        {% endfor %}
    </section>
    {% if links %}
        <section>
            <p>
                {%- for link in links %}
                    <a class="link" href="http://{{ link }}" target="_blank">
                        visit {{ link }}
                    </a><br/>
                {% endfor -%}
            </p>
        </section>
    {% endif %}
    {% endcall %}
    {{ modules.imageTextSlider.default( features ) }}
    {{ modules.pagination.project(previous, next) }}
{% endblock %}
