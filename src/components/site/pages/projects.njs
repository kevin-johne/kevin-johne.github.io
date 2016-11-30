{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

<h2>Working at Denkwerk</h2>
{# STRÖER ONLINE MANAGEMENT SYSTEM #}
{% set title = 'Ströer Online Management System' %}
{% set src = 'img/content/stroeer.jpg' %}

{% call modules.imageTextLarge.imageTextLarge() %}
    {{ modules.imageTextLarge.image( src, title ) }}

    {% call modules.imageTextLarge.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# CONDOR WCAG #}
{% set title = 'Condor WCAG' %}
{% set src = 'img/content/condor.jpg' %}

{% call modules.imageTextLarge.imageTextLarge() %}
    {{ modules.imageTextLarge.image( src, title ) }}

    {% call modules.imageTextLarge.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# BARAKA #}
{% set title = 'New Baraka' %}
{% set src = 'img/content/baraka.jpg' %}

{% call modules.imageTextLarge.imageTextLarge() %}
    {{ modules.imageTextLarge.image( src, title ) }}

    {% call modules.imageTextLarge.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# CAR 2 GO #}
{% set title = 'Car2Go Sign up' %}
{% set src = 'img/content/car2go.jpg' %}

{% call modules.imageTextLarge.imageTextLarge() %}
    {{ modules.imageTextLarge.image( src, title ) }}

    {% call modules.imageTextLarge.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# JACQUES WEINDEPOT #}
{% set title = 'Jacques\' Weindepot Mobile' %}
{% set src = 'img/content/jacques.jpg' %}

{% call modules.imageTextLarge.imageTextLarge() %}
    {{ modules.imageTextLarge.image( src, title ) }}

    {% call modules.imageTextLarge.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# GEDORE SHOP #}
{% set title = 'Gedore B2B Shop' %}
{% set src = 'img/content/gedore-shop.jpg' %}

{% call modules.imageTextLarge.imageTextLarge() %}
    {{ modules.imageTextLarge.image( src, title ) }}

    {% call modules.imageTextLarge.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# GEDORE BRAND SITE #}
{% set title = 'Gedore Brand\'s' %}
{% set src = 'img/content/gedore-carolus.jpg' %}

{% call modules.imageTextLarge.imageTextLarge() %}
    {{ modules.imageTextLarge.image( src, title ) }}

    {% call modules.imageTextLarge.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# ZWILLING #}
{% set title = 'Zwilling Brand\'s' %}
{% set src = 'img/content/zwilling-brands.jpg' %}

{% call modules.imageTextLarge.imageTextLarge() %}
    {{ modules.imageTextLarge.image( src, title ) }}

    {% call modules.imageTextLarge.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

<h2>As a Free lancer </h2>

{# LISA HANTKE#}
{% set title = 'Lisa Hantke' %}
{% set src = 'img/content/lisa-hantke.jpg' %}

{% call modules.imageTextLarge.imageTextLarge() %}
    {{ modules.imageTextLarge.image( src, title ) }}

    {% call modules.imageTextLarge.text( title ) %}
        <p>
            This project was made for the excellent start up photographer Lisa Hantke from Germany.
            To set her capture fashion, beauty and moments of people as good as possible. The Screen was completely filled with the photo.
            Through the small white bar on the bottom has the user access to the gallery.

            The design is made by myself as well as the backend and frontend development.
            Lisa was then able to upload, sort and delete photos over a slim self made CMS.
        </p>
    {% endcall %}
{% endcall %}