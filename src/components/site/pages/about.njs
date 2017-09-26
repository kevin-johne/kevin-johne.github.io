{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% call modules.content.default() %}
<h1>
    Hej Hej, <br/>
    I&#8217;m Kevin Johne
</h1>
<p>
    a frontend developer with a degree in B. Sc. in Computer Science from the West Saxony University of Applied Science
    in Zwickau, Germany.
    Currently living in London, United Kingdom.
</p>
{% endcall %}

{% set title = 'Available for contract work' %}
{% set src = 'img/content/me.jpg' %}
{% set link = 'mailto:k.johne90@web.de' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
{{ modules.imageTextTeaser.image( src, title ) }}

{% call modules.imageTextTeaser.text( title, link ) %}

<p>
    During my past project I found my pleasure in creating style guides. I believe in long living software and a well
    defined
    style guide is a important key.
    I follow the principle of patterns, modules, and pages. A collection where developers, designers, project managers
    pick from, to create new content.
</p>
<p>
    Currently I am available for hiring. I am looking forward to work in a multidisciplinary environment with a great
    focus on web design and UX.
</p>
{% endcall %}
{% endcall %}
