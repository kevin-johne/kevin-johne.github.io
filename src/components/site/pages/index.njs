{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}freelance frontend developer{% endblock %}

{% block meta %}
    <meta name="description" content="Kevin Johne a freelance frontend developer. He does living style guides, responsive websites, and software engineering. Available for contract work">
{% endblock %}

{% block content %}
    <section class="mod-features">
        <h1>
            Freelance Frontend Developer<br/>
            Available for <a class="link" href="mailto:{{ email }}">contract</a> work
        </h1>
        <section class="feature">
            <img src="img/content/styleguide.svg" alt="living style guide">
            <h2>I code living style guides, <br/> you will love</h2>
            <p>
                For a long living website a style guide is of great importance. Because all different departments in the
                creation pipeline of the application are in need of talking the same language. This language is the
                style guide, it is the source of truth everyone in the pipeline can rely on.
            </p>
            <p>
                I develop a platform for your user experience and visual designer, backend and frontend developer as
                well as project manager.
            </p>
        </section>
        <section class="feature">
            <img src="img/content/responsive.svg" alt="All sorts of devices with different screen size">
            <h2>I make responsive websites,<br/> your user will love</h2>
            <p>
                My tool set includes a flexible media query library, to get your application in perfect light for every
                screen size. Your user should have the possibility to experience your app from his phone, tablet, watch,
                computer or television.
            </p>
            <p>
                Already in the process of designing and developing modules, we need to think about how and which content
                is displayed on the devices your audience is using.
            </p>
        </section>
        <section class="feature">
            <img src="img/content/engineering.svg" alt="Coffee next to the computer and a engineering book">
            <h2>I do software engineering,<br/> your business will love</h2>
            <p>
                Are you planning a frontend application mainly written in JavaScript? Let me help you structure, define
                core functionality or extend your modules. I have two years experience in developing with JavaScript,
                mainly ECMAScript v5 or using AngularJS v1.6.
            </p>
            <p>
                During the last year I was helping Ströer and Affectv extending their internal AngularJS application.
                Mainly to improve performance and developing new modules.
            </p>
        </section>

    </section>

{% endblock %}
