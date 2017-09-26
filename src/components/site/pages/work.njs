{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% call modules.content.default() %}
<h1>Work as a frontend developer</h1>
<p>In the last years I've been working as a frontend developer and was lucky enough to got engaged in creative and interesting projects. My work was dedicated to create style guides, web-apps and angular-apps for german and international brands.
</p>
{% endcall %}
{% for project in projects %}
    {% call modules.imageTextTeaser.imageTextTeaser() %}
    {% set projectLink = '#project/' + project.title | escape %}
    {{ modules.imageTextTeaser.image( project.previewImg, project.title,  projectLink ) }}

    {% call modules.imageTextTeaser.text( project.title, projectLink ) %}
    <p>
        {{ project.shortDescription }}
    </p>
    {% endcall %}
    {% endcall %}
{% endfor %}
