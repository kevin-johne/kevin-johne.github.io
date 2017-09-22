{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% set title = 'Hi There' %}
{% set src = 'img/content/me.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            I'm Kevin Johne, a web developer with a degree in B. Sc. in Computer Science from the West Saxony University of Applied Science in Zwickau, Germany.
            Currently living in London, United Kingdom.
        </p>
        <p>
            In my past I found my pleasure in creating style guides. I believe in long living software and only a well defined style guide makes this possible.
            I follow the principle of patterns, modules, and pages. A collection where developers, designers, project managers pick from, to create new content.
        </p>
        <p>
            Currently I am looking for work in a multidisciplinary environment with a great focus on web design and UX.
        </p>
    {% endcall %}
{% endcall %}
