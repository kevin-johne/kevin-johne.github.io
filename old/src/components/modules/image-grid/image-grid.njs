{% macro default() %}
    <div class="mod-image-grid">
        {{caller()}}
    </div>
{% endmacro %}

{% macro gridCell( img, title, link, filler ) %}
    <div class="grid__cell" style="background-image: url({{ img }})">
            <a href="{{ link }}">
                <img src="/img/content/filler.jpg" data-src="{{ img }}" alt="photo {{title}} to strength brand" title="{{ title }}"/>
        </a>
    </div>
{% endmacro %}

{% macro gridCellFiller() %}
    <div class="grid__cell grid__cell--filler">
        <img src="/img/content/filler.jpg" data-src="img/content/filler.jpg" alt="nothing hear">
    </div>
{% endmacro %}
