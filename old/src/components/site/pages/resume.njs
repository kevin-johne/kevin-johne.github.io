{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% extends templatePath + "default.njs" %}

{% block pageTitle %}résumé{% endblock %}

{% block meta %}
    <meta name="description" content="Recent work experience, education, and awards">
{% endblock %}

{% block content %}
    {% call modules.content.default() %}
    <h1>Résumé</h1>
    <h2>Work Experience</h2>
    <p>
        2019<br/>
        Re-platform <a class="link" target="_blank" href="http://www.calvinklein.es">Calvin Klein</a> from JSP to React
    </p>
    <p>
        2018<br/>
        Re-platform <a class="link" target="_blank" href="http://www.tommy.pl">Tommy Hilfiger</a> from JSP to React
    </p>
    <p>
        late 2017<br/>
        A/B Testing with Optimizely for Brands like <a class="link" target="_blank" href="http://www.made.com">Made</a> and <a class="link" target="_blank" href="http://www.beauybay.com">Beauty Bay</a>
    <p>
        2017<br/>
        Angular engineer at <a class="link" target="_blank" href="http://www.affectv.co.uk">Affectv</a>
    </p>
    <p>
        2015 &mdash; 2017<br/>
        specialist frontend developer at <a class="link" target="_blank" href="http://www.denkwerk.com">denkwerk</a>
    </p>
    <p>
        2012 &mdash; 2015<br/>
        freelance
    </p>
    <p>
        2011<br/>
        intern web developer at <a class="link" target="_blank" href="http://www.konsultaner.de">Konsultaner</a>
    </p>
    <h2>Talks</h2>
    <p>
        2018<br>
        <a class="link" target="_blank" href="https://youtu.be/Pkgjyn5Nw2A">Introduction to WebAssembly</a> at Salmon frontend meet up
    </p>
    <h2>Education</h2>
    <p>
        2014 &mdash; 2015<br/>
        master program in social media and web technologies, Växjö, Sweden
    </p>
    <p>
        2009 &mdash; 2013<br/>
        bachelor of science in computer science, Zwickau, Germany
    </p>
    <p>
        2006 &mdash; 2009<br/>
        technical assistant for computer science
    </p>
    <h2>Awards</h2>
    <p>
        2016 Red Dot Award: Communication Design<br/>
        Gedore Website &mdash; Gold<br/>
        New Baraka Website &mdash; Gold<br/>
        Zwilling Brand Website &mdash; Gold
    </p>
    <p>
        2016 IF Award<br/>
        New Baraka Website &mdash; Gold
    </p>
    <p>
        <a href="files/resume.pdf" class="link" target="_blank">download resume</a>
    </p>
    {% endcall %}

{% endblock %}
