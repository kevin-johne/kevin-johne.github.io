{% macro header( items ) %}
    <header class="site-header auto-init" data-modules="modules/header/header">
        <div class="site-header__inner">
            <a class="logo js-nav-link" href="#home">
                {% include imgPath + 'logo-landing.svg' %}
            </a>
            <ul class="nav-list">
                {% for item in items %}
                <li class="nav-item">
                    <a class="nav-link js-nav-link {% if item.current -%} current {%- endif %}" href="{{ item.href }}">
                        {{ item.text }}
                    </a>
                </li>
                {% endfor %}
            </ul>
        </div>
    </header>
{% endmacro %}

{% set items = [
    {
        text: 'Work',
        href: '#work'
    }, {
        text: 'About',
        href: '#about'
    }, {
        text: 'Résumé',
        href: '#cv'
    }
] %}

{{ header( items ) }}
