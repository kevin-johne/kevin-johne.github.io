{% macro header( items ) %}
    <header class="site-header auto-init" data-modules="modules/header/header">
        <ul class="nav-list nav-list-left">
            {% for item in items %}
                <li class="nav-item">
                    {% if item.text !== 'Home' %}
                        <a class="nav-link {% if item.current -%} current {%- endif %}" href="{{ item.href }}">
                            {{ item.text }}
                            <span class="stretch stretch-top" data-text="{{ item.text }}"></span>
                            <span class="stretch stretch-bottom" data-text="{{ item.text }}"></span>
                        </a>
                    {% endif %}
                </li>
            {% endfor %}
        </ul>
    </header>
{% endmacro %}

{% set items = [
    {
        text: 'Web',
        href: '#projects'
    }, {
        text: 'Music',
        href: '#music'
    }, {
        text: 'Home',
        href: '#'
    }, {
        text: 'Blog',
        href: '#blog'
    }, {
        text: 'Story',
        href: '#story'
    }
] %}

{{ header( items ) }}
