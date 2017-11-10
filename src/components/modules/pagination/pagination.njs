{% macro project(previous, next) %}
    <nav class="mod-pagination">
        {% if previous %}
            <a class="mod-pagination__prev" href="/work/{{ previous.title  | lower | urlencode }}.html">
                <span class="mod-pagination__sub-title">prev project</span>
                <span class="mod-pagination__title">{{ previous.title }}</span>
                <span class="mod-pagination__img-container">
                    <img data-src="/{{ previous.previewImg.src }}" alt="{{ previous.title }}">
                </span>
            </a>
        {% endif %}

        {% if next %}
            <a class="mod-pagination__next" href="/work/{{ next.title | lower | urlencode }}.html">
                <span class="mod-pagination__sub-title">next project</span>
                <span class="mod-pagination__title">{{ next.title }}</span>
                <span class="mod-pagination__img-container">
                    <img data-src="/{{ next.previewImg.src }}" alt="{{ next.title }}">
                </span>
            </a>
        {% endif %}
    </nav>
{% endmacro %}
