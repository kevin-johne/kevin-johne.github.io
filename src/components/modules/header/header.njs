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
                        <a class="nav-link" href="{{ item.href }}">
                            {% include imgPath + 'logo-landing.svg' %}
                        </a>
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
        text: 'work',
        href: '#work'
    }, {
        text: 'about',
        href: '#about'
    }, {
        text: 'résumé',
        href: '#cv'
    }, {
        text: 'thoughts',
        href: '#blog'
    }
] %}

{{ header( items ) }}
