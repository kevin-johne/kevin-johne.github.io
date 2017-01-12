{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% call modules.content.default() %}
    <h1>Welcome to Kevin Johne's personal site</h1>
    <p>
        I am a young guy who is seeking for new techniques and trends in web development and design.
        Since 2008 I am developing software, web sites and mobile applications. My attitude to software is, that it has to be a high qualitative product,
        doesn't matter how big the project is. When I code, the way is just as important as the result itself.
    </p>
    <p>
        While working for denkwerk I worked on several projects with a big variety of needed skill sets. Which the following references showing.
    </p>
{% endcall %}

{# STRÖER ONLINE MANAGEMENT SYSTEM #}
{% set title = 'Ströer — Online Management System' %}
{% set src = 'img/content/stroeer.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            Ströer OMS was my longest and most complex project. I thank denkwerk for working at this project.
            The frontend development was build around an huge AngularJS application. Which was the representation of an complex backend.
            The Interface between the FE and BE needed to be well thought through to make it scalable and robust.
        </p>
        <p>
            AngularJS, Struts, SCSS, Java
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
            My journey with condor was a pleasant one. I had a chance to tech myself a completely new important skill.
            Improving their website and IBE for screenreaders. Making the product WCAG prove till level AAA. I thank denkwerk for this opportunity.
        </p>
        <p>
            ARIA, HTML5, SEO, JAWS, NVDA
        </p>
        <a href="https://www.condor.com/eu/index.jsp"
           target="_blank"
           class="link--cta link--cta--small condor"
           data-text="Go to condor.com">
            Go to condor.com
        </a>
    {% endcall %}
{% endcall %}

{# BARAKA #}
{% set title = 'UNESCO — New Baraka' %}
{% set src = 'img/content/baraka.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            We at denkwerk build A unique style of donation, and Red Dot jury saw it too.
            Therefore New Baraka was winning three awards in the categories „Online“, „E-Commerce“ and „Social Responsibility“.
        </p>
        <p>
            PHP, JS, Animation
        </p>
        <a href="https://new-baraka.com/"
           target="_blank"
           class="link--cta link--cta--small baraka"
           data-text="Go to new-baraka.com">
            Go to new-baraka.com
        </a>
    {% endcall %}
{% endcall %}

{# CAR 2 GO #}
{% set title = 'Car2Go — Sign up Form' %}
{% set src = 'img/content/car2go.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            Car2Go instructed denkwerk of improving the usability of the sign up form, which is used in many countries all over the world including Canada, USA, Europe and China.
            Till today the new interface is not deployed yet and I'm not sure ever will.
        </p>
        <p>
            AngularJS, SCSS, HTML5
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
            In cooperation with Jacques\' IT and denkwerk we added an experience of their online shop for mobile users.
            We took special care that all the features are applied to the mobile website.
        </p>
        <p>
            Nunjucks, JS, SCSS, HTML5
        </p>
        <a href="https://www.jacques.de/"
           target="_blank"
           class="link--cta link--cta--small jacques"
           data-text="Go to jacques.de">
            Go to jacques.de
        </a>
    {% endcall %}
{% endcall %}

{# GEDORE SHOP #}
{% set title = 'Gedore — B2B Shop' %}
{% set src = 'img/content/gedore-shop.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            A business to business platform for Gedore, a german brand for real tools.
            I was planning and building the e-commerce website with my co-workers at denkwerk.
            My first project as a leading person in matters of frontend, and we got it all done on time.
        </p>
        <p>
            OXID, PHP, JS, Smarty, SCSS
        </p>
        <a href="https://de.gedore-shop.com/"
           target="_blank"
           class="link--cta link--cta--small gedore-shop"
           data-text="Go to gedore-shop.com">
            Go to gedore-shop.com
        </a>
    {% endcall %}
{% endcall %}

{# GEDORE BRAND SITE #}
{% set title = 'Gedore — Brand\'s' %}
{% set src = 'img/content/gedore-carolus.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            Do at flexible for a fast and simple theme change.
            After Gedore's main brand website was done it took only a week to deploy carolus.
        </p>
        <p>
            Nunjucks, JS, SCSS, Style Guide
        </p>
        <a href="https://www.gedore.com/"
           target="_blank"
           class="link--cta link--cta--small gedore"
           data-text="Go to gedore.com">
            Go to gedore.com
        </a><br>
        <a href="https://de.carolus.de/en/"
           target="_blank"
           class="link--cta link--cta--small carolus"
           data-text="Go to carolus.de">
            Go to carolus.de
        </a>
    {% endcall %}
{% endcall %}

{# ZWILLING #}
{% set title = 'Zwilling — Brand\'s' %}
{% set src = 'img/content/zwilling-brands.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            New at denkwerk and had to step right into it, well at first i build some new modules for the site.
            Than it turned out to get an expert in gruntJS, I analysed the current tasks, how oftern they are used, how fast they are, and what is actually needed.
            I reconstructed the grunt tasks for a faster and easier work.
        </p>
        <p>
            HTML5, JS, JQuery, GruntJS, SCSS
        </p>
        <a href="https://www.zwilling.com"
           target="_blank"
           class="link--cta link--cta--small zwilling"
           data-text="Go to zwilling.com">
            Go to zwilling.com
        </a>
    {% endcall %}
{% endcall %}

{# LISA HANTKE#}
{% set title = 'Lisa Hantke — Portfolio' %}
{% set src = 'img/content/lisa-hantke.jpg' %}

{% call modules.imageTextTeaser.imageTextTeaser() %}
    {{ modules.imageTextTeaser.image( src, title ) }}

    {% call modules.imageTextTeaser.text( title ) %}
        <p>
            This project was made for the excellent start up photographer Lisa Hantke from Germany.
            Setting her photos of fashion, beauty and portraits as good as possible, I chose to fill screen with her photos.
            Only a small navigation bar on the lower part of the site.
            Even now the website has changed since, it is worth to look up her work.
        </p>
        <p>
            Design, PS, Project Management, BE, FE
        </p>
        <a href="http://www.lisahantke.de/"
           target="_blank"
           class="link--cta link--cta--small lisa-hantke"
           data-text="Go to lisahantke.de">
            Go to lisahantke.de
        </a>
    {% endcall %}
{% endcall %}