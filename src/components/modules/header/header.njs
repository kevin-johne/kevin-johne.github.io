{% macro header( items ) %}
    <header class="site-header auto-init" data-modules="modules/header/header">
        <ul class="nav-list nav-list-left">
            {% for item in items %}
                <li class="nav-item">
                    {% if item.text !== 'Home' %}
                        <a class="nav-link {% if item.current -%} current {%- endif %}" href="{{ item.href }}">
                            {{ item.text }}
                        </a>
                    {% else %}
                        {% include imgPath + 'logo-landing.svg' %}
                    {% endif %}
                </li>
            {% endfor %}
        </ul>
    </header>
{% endmacro %}

{% set items = [
    {
        text: 'Home',
        href: '#'
    }, {
        text: 'projects',
        href: '#projects'
    }, {
        text: 'about',
        href: '#about'
    }, {
        text: 'c vitae',
        href: '#music'
    }, {
        text: 'thoughts',
        href: '#blog'
    }
] %}

{{ header( items ) }}
