<!--h1>$Headline</h1>
	<section class="intro">
		<p>$Content</p>
	</section-->
<% cached 'projectlist', $List('Web').max('LastEdited'), $List('Web').count() %>
<% loop $Projects %>
  <section class="showcase">
		<% with $Images.first.CroppedFocusedImage(800,600) %>
      <img class="showcase-image" src="$Link" alt="$Title" title="$Title"/>
		<% end_with %>
    <div class="details">
      <h2>$Title</h2>
      <p>$Description</p>
	    <% if $Url %>
        <a href="$Url" target="_blank">Check it out!</a>
	    <% end_if %>
    </div>
  </section>
<% end_loop %>
<% end_cached %>