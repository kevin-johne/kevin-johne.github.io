{% macro default( images ) %}
    <div class="mod-image-text">
        <div class="mod-image-text__image-col">
            {% for image in images %}
                <img src="{{ image.src }}" title="{{ img.title }}">
            {% endfor %}
        </div>
        <div class="mod-image-text__text-col">
            {{ caller() }}
        </div>
    </div>
{% endmacro %}
