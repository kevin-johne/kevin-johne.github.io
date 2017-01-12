{% macro imageTextTeaser() %}
    <section class="mod-image-text-teaser">
        {{ caller() }}
    </section>
{% endmacro %}

{% macro image( src, title ) %}
    <img class="mod-image-text-teaser__image" src="{{ src }}" alt="{{ title }}" title="{{ title }}"/>
{% endmacro %}

{% macro text( title, subline ) %}
    <div class="mod-image-text-teaser__text">
        <h2>{{ title }}</h2>
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