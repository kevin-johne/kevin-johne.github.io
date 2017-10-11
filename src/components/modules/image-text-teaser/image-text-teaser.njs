{% macro imageTextTeaser() %}
    <section class="mod-image-text-teaser">
        {{ caller() }}
    </section>
{% endmacro %}

{% macro image( src, title, link ) %}
    {% if link %}
        <a href="{{ link }}">
            <img class="mod-image-text-teaser__image" data-src="{{ src }}" alt="{{ title }}" title="{{ title }}"/>
        </a>
    {% else %}
        <img class="mod-image-text-teaser__image" data-src="{{ src }}" alt="{{ title }}" title="{{ title }}"/>
    {% endif %}
{% endmacro %}

{% macro text( title, link ) %}
    <div class="mod-image-text-teaser__text">
        <h2>
            {% if link %}
                <a href="{{ link }}">{{ title }}</a>
            {% else %}
                {{ title }}
            {% endif %}
        </h2>
        {{ caller() }}
    </div>
{% endmacro %}


{% set title = 'Demo for Image-Text-Large Module' %}
{% set src = imgPath + 'content/augenoptik.jpg' %}

{% call imageTextTeaser() %}
    {{ image( src, title ) }}

    {% call text( title ) %}
        <p>
            Lorem ipsum dolor sit amet.
        </p>
        <a href="#">Demo Link</a>
    {% endcall %}
{% endcall %}
