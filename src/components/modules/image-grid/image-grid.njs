{% macro default() %}
    <div class="mod-image-grid">
        {{caller()}}
    </div>
{% endmacro %}

{% macro gridCell( img, title, link, filler ) %}
    <div class="grid__cell" style="background-image: url({{ img }})">
            <a href="{{ link }}">
                <img src="{{ img }}" title="{{ title }}"/>
        </a>
    </div>
{% endmacro %}

{% macro gridCellFiller() %}
    <div class="grid__cell grid__cell--filler">
        <img src="img/content/filler.jpg">
    </div>
{% endmacro %}
