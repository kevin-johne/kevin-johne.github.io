{#<section class="set">#}
    {##}
{#</section>#}

{% macro set() %}
    <div class="gallery-overview">
        {{ caller() }}
    </div>
{% endmacro %}

{% macro album( id, artwork, title, duration, wave, folded ) %}
    {% set options = {
        id: id
    } %}

    <section class="set">
        <div class="album-art-holder auto-init" data-modules="modules/album/album" data-options="{{ options | dump }}">
            <img class="album-art" src="{{ artwork }}" alt="album art" title="{{ title }}"/>
            <div class="album-art-copy {% if folded %} fold {% endif %}"
                 style="background-image: url('{{ artwork }}')">
            </div>
            <div class="control">
                <ul>
                    <li><i class="fa fa-play fa-w play"></i></li>
                    <li><i class="fa fa-heart fa-w like"></i></li>
                    <li><i class="fa fa-share-alt fa-lw share"></i></li>
                    <li><i class="fa fa-download fa-w download"></i></li>
                </ul>
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
    </section>
{% endmacro %}
