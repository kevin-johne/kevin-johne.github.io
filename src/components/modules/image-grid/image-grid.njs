{% macro default() %}
    <div class="mod-image-grid">
        {{caller()}}
    </div>
{% endmacro %}

{% macro gridCell( img, title, link, filler ) %}
    <div class="grid__cell {% if filler %} grid__cell--filler {% endif %}" style="background-image: url({{ img }})">
        <a href="{{ link }}">
            <img src="{{ img }}" title="{{ title }}"/>
        </a>
    </div>
{% endmacro %}
