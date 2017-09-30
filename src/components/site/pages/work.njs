{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% call modules.content.default() %}
<h1>Work as a frontend developer</h1>
<p>In the last years I've been working as a frontend developer and was lucky enough to got engaged in creative and
    interesting projects. My work was dedicated to create style guides, web-apps and angular-apps for german and
    international brands.
</p>
{% endcall %}
{% call modules.imageGrid.default() %}
    {% for project in projects %}
        {% set link = "#work/" + project.title %}
        {{  modules.imageGrid.gridCell( project.previewImg.src, project.title, link ) }}
    {% endfor %}

    {% set cols = 4 %}
    {% set fillers = cols - 1 - (projects.length - 1) % cols %}
    {% for i in range(0, fillers) %}
        {{  modules.imageGrid.gridCell( "img/content/filler.jpg", "nothing here", "", true ) }}
    {% endfor %}
{% endcall %}
