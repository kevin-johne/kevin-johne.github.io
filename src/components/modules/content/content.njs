{% macro default() %}
    <div class="mod-content">
        {{ caller() }}
    </div>
{% endmacro %}

{% call default() %}
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum, deserunt impedit numquam quasi repudiandae? Consectetur delectus deserunt iure voluptatum.
    </p>
{% endcall %}
