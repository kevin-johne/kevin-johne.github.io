{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% call modules.content.default() %}
    <h1>Welcome to Kevin Johne's personal site</h1>
    <p>
        I am a young guy who is seeking for new techniques and trends in web development and design.
        Since 2008 I developing web sites and mobile applications. My attitude to software is, that it has to be a high qualitative product,
        doesn't matter how big the project is. When I code, the way is just as important as the result itself.
    </p>
{% endcall %}

{# STRÖER ONLINE MANAGEMENT SYSTEM #}
{% set title = 'Ströer — Online Management System' %}
{% set src = 'img/content/stroeer.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            While working for denkwerk GmbH I worked on several projects with a big variety of needed skill sets. Ströer OMS was my longest and
            most complex project I had the pleasure to work for. The frontend development was build around an huge AngularJS application.
        </p>
        <p>
            Building a big AnuglarJS architecture was till the last a big challenge. The software is continually growing with features.
            Therefor it was important to keep the code simple and modular. I toughed myself how to solve complex use cases by taking Angular as it is.
            And making the best out of its toolbox; directive, services and controllers.
        </p>
    {% endcall %}
{% endcall %}

{# CONDOR WCAG #}
{% set title = 'Condor — WCAG' %}
{% set src = 'img/content/condor.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            My condor was to improve the condor IBE as well as the website for users we do not think about most the time while developing.
            I mean the users with a different approach on surfing a website, because they experience it in a different way.
            Some may use a special monitor for better contrast, other using screenreader.
        </p>
        <p>
            It was a long journey with condor and an very intresting one. I learned basic till advanced level how to improve websites so they approve
            A, AA, AAA.
            For sure is that the Microsoft system voice stuck in my head, after 'she' read out loud the condor website for 8 hours.
            'Headline level 1 ... tab tab ... list element with 10 items ...'
        </p>

        <a href="https://www.condor.com/eu/index.jsp" target="_blank">Check it out!</a>
    {% endcall %}
{% endcall %}

{# BARAKA #}
{% set title = 'New Baraka' %}
{% set src = 'img/content/baraka.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# CAR 2 GO #}
{% set title = 'Car2Go — Sign up' %}
{% set src = 'img/content/car2go.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# JACQUES WEINDEPOT #}
{% set title = 'Jacques\' Weindepot — Mobile' %}
{% set src = 'img/content/jacques.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# GEDORE SHOP #}
{% set title = 'Gedore — Business to Business Shop' %}
{% set src = 'img/content/gedore-shop.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# GEDORE BRAND SITE #}
{% set title = 'Gedore — Brand\'s' %}
{% set src = 'img/content/gedore-carolus.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# ZWILLING #}
{% set title = 'Zwilling — Brand\'s' %}
{% set src = 'img/content/zwilling-brands.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>

        </p>
    {% endcall %}
{% endcall %}

{# LISA HANTKE#}
{% set title = 'Lisa Hantke' %}
{% set src = 'img/content/lisa-hantke.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            This project was made for the excellent start up photographer Lisa Hantke from Germany.
            To set her capture fashion, beauty and moments of people as good as possible. The Screen was completely filled with the photo.
            Through the small white bar on the bottom has the user access to the gallery.
        </p>
        <p>
            The design is made by myself as well as the backend and frontend development.
            Lisa was then able to upload, sort and delete photos over a slim self made CMS.
        </p>
    {% endcall %}
{% endcall %}