{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% call modules.imageText.default( images ) %}

            {% if title %}
                <h1>
                    {{ title }}
                </h1>
            {% endif %}
            {% if tags %}
                <ul class="tags">
                    {% for tag in tags %}
                        <li title="tag {{ tag }}">{{ tag }}</li>
                    {% endfor %}
                </ul>
            {% endif %}
<p>
    {{ description }}
</p>
{% if websiteLink %}
    <a class="link" href="{{ websiteLink }}">Go to website of {{ title }}</a>
{% endif %}
{% endcall %}
