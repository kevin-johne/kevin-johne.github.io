{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% set title = 'Demo for Image-Text-Large Module' %}
{% set src = 'img/content/augenoptik.jpg' %}

{% call modules.imageTextLarge.imageTextLarge() %}
    {{ modules.imageTextLarge.image( src, title ) }}

    {% call modules.imageTextLarge.text( title ) %}
        <p>
            Lorem ipsum dolor sit amet.
        </p>
        <a href="#">Demo Link</a>
    {% endcall %}
{% endcall %}