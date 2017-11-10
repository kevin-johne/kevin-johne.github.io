{% macro header( items ) %}
    <header class="site-header auto-init" data-modules="modules/header/header">
        <div class="site-header__inner">
            <a class="logo js-nav-link" href="index.html">
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
        href: 'work.html'
    }, {
        text: 'About',
        href: 'about.html'
    }, {
        text: 'Résumé',
        href: 'resume.html'
    }
] %}

{{ header( items ) }}
