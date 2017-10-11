{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% macro blogPreview(article) %}
    <div class="blog-preview">
        <h2><a href="#blog/{{ article.title | urlencode }}">{{ article.title }}</a></h2>
        <div class="blog-preview__data">{{ article.date }}</div>
        <div class="tags-list">
            {% for tag in article.tags %}
                <span>{{ tag }}</span>
            {% endfor %}
        </div>
        <img data-src="{{ article.previewImg }}">
    </div>
{% endmacro %}

{% call modules.content.default() %}
    <h1>
        Thoughts about dev, <br/>
         live and amusement
    </h1>
    {% for article in articles %}
        {{ blogPreview(article) }}
    {% endfor %}
{% endcall %}
