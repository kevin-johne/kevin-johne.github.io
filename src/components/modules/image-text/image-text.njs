{% macro default( title, tags, descriptions, images, link ) %}
    <div class="mod-image-text">
        <div class="mod-image-text__header">
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
        </div>
        <div class="mod-image-text__image">
            {% for image in images %}
                <img src="{{ image.src }}" title="{{ image.title }}">
            {% endfor %}
        </div>
        <div class="mod-image-text__text">
            {% for description in descriptions %}
                <p>
                    {{ description }}
                </p>
            {% endfor %}
            {% if link %}
                <a class="link" href="http://{{ link }}" target="_blank">Go to {{link}}</a>
            {% endif %}
        </div>
    </div>
{% endmacro %}
