{% macro imageTextLarge() %}
    <section class="showcase">
        {{ caller() }}
    </section>
{% endmacro %}

{% macro image( src, title ) %}
    <img class="showcase-image" src="{{ src }}" alt="{{ title }}" title="{{ title }}"/>
{% endmacro %}

{% macro text( title ) %}
    <div class="details">
        <h2>{{ title }}</h2>
        {{ caller() }}
    </div>
{% endmacro %}


{% set title = 'Demo for Image-Text-Large Module' %}
{% set src = imgPath + 'content/augenoptik.jpg' %}

{% call imageTextLarge() %}
    {{ image( src, title ) }}

    {% call text( title ) %}
        <p>
            Lorem ipsum dolor sit amet.
        </p>
        <a href="#">Demo Link</a>
    {% endcall %}
{% endcall %}