{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}portfolio{% endblock %}

{% block meta %}
<meta name="description" content="Style guides, e-commerce, web apps, and angular apps are the kind Kevin Johne has experience with. His portfolio is displaying recently finished projects as a frontend developer.">
{% endblock %}

{% block content %}
    {% call modules.content.default() %}
    <h1>Portfolio</h1>
    <p>
        In the last years I've been working as a frontend developer and was lucky enough to got involved in creative and
        interesting projects. My work was dedicated to create living style guides, web apps, e-commerce platforms, and angular apps for international and German brands.
    </p>
    {% endcall %}
    {% call modules.imageGrid.default() %}
    {% for project in projects %}
        {% set link = "#work/" + project.title | lower | urlencode %}
        {{ modules.imageGrid.gridCell( project.previewImg.src, project.title, link ) }}
    {% endfor %}

    {% set cols = 4 %}
    {% set fillers = cols - 1 - (projects.length - 1) % cols %}
    {% for i in range(0, fillers) %}
        {{ modules.imageGrid.gridCellFiller() }}
    {% endfor %}
    {% endcall %}

{% endblock %}
