{#<section class="set">#}
    {##}
{#</section>#}

{% macro set() %}
    <div class="gallery-overview" >
        {{ caller() }}
    </div>
{% endmacro %}

{% macro album( id, artwork, title, duration, wave, folded ) %}
    {% set options = {
        id: id
    } %}

    <div class="set auto-init" data-modules="modules/album/album" data-options="{{ options | dump }}">
        <div class="album-art-holder">
            <img class="album-art" src="{{ artwork }}" alt="album art" title="{{ title }}"/>
            <div class="album-art-copy {% if folded %} fold {% endif %}"
                 style="background-image: url('{{ artwork }}')">
            </div>
            <div class="control">
                <ul>
                    <li><span class="fa fa-play fa-w play"></span></li>
                    <li><span class="fa fa-pause fa-w pause"></span></li>
                </ul>
            </div>
        </div>
        <div class="stream">
            {#<span class="length">{{ duration }}</span>#}
            <img class="wave" src="{{ wave }}" alt="waveform" title="{{  title }}" />
            {#           <div class="stream_shadow">
                <img class="wave_shadow" src="$waveform_url" alt="waveform" title="$title" />
            </div>#}
            <div class="progress_temp"></div>
            <div class="progress"></div>
        </div>
    </div>
{% endmacro %}
