<!--h1>$Headline</h1-->
<div class="gallery-overview">
	<% cached 'onceaday' %>
	<% loop $songs %>
    <section class="set" id="$id">
      <div class="album-art-holder">
        <img class="album-art" src="$me.artwork_url_300" alt="album art" title="$me.title"/>
        <div class="album-art-copy <% if $First %> fold <% else %> unfold <%end_if%>" style="background-image: url('$me.artwork_url_300')">
        </div>
        <div class="control">
          <ul>
            <li><i class="fa fa-play fa-w play control-element" song_id="$id"></i></li>
            <li><i class="fa fa-heart fa-w like"></i></li>
            <li><i class="fa fa-share-alt fa-lw share"></i></li>
            <li><i class="fa fa-download fa-w download"></i></li>
          </ul>
        </div>
        <div class="stream"><%--
        <span class="length">$duration_formated</span>--%>
          <img class="wave" src="$me.waveform_url" alt="waveform" title="$me.title" />
          <%--            <div class="stream_shadow">
          <img class="wave_shadow" src="$waveform_url" alt="waveform" title="$title" />
        </div>--%>
          <div class="progress_temp"></div>
          <div class="progress" duration="$duration"></div>
        </div>
      </div>
    </section>
	<% end_loop %>
	<% end_cached %>
</div>

