{% macro default( title, tags, descriptions, images, links ) %}
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
                <img src="{{ image.src }}" alt="{{ img.title }}" title="{{ image.title }}">
            {% endfor %}
        </div>
        <div class="mod-image-text__text">
            {% for description in descriptions %}
                <p>
                    {{ description }}
                </p>
            {% endfor %}
            {% if links %}
                <div class="text__links">
                    {% for link in links %}
                        <a class="link" href="http://{{ link }}" target="_blank">visit {{link}}</a><br/>
                    {% endfor %}
                </div>
            {% endif %}
        </div>
    </div>
{% endmacro %}
