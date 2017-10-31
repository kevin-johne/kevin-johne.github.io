{% macro default( imageTextList ) %}
    {% if imageTextList %}
        <div class="mod-image-text-slider auto-init" data-module="modules/image-text-slider/image-text-slider">
            <div class="image-slider js-image-slider">
                {%- for imageText in imageTextList %}
                    <div class="image-slider__item">
                        <picture>
                            <source srcset="{{ imageText.image }}"/>
                            <img src="{{ imageText.image }}"/>
                        </picture>
                    </div>
                {% endfor -%}
            </div>
            <div class="text-slider js-text-slider">
                {% for imageText in imageTextList %}
                    <div class="text-slider__item">
                        <h2>{{ imageText.title }}</h2>
                        <p>{{ imageText.text }}</p>
                    </div>
                {% endfor %}
            </div>
        </div>
    {% endif %}
{% endmacro %}
