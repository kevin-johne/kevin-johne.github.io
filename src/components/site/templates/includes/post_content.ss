<article class="blog-post">
  <header class="article-header">
    <div class="subline">
      Published at <span class="highlighted">$Date</span>
			<% if $Tags %>
        and talkes about
				<% loop $Tags %>
          <span class="highlighted">$Tag</span>
					<% if not $Last %>, <% end_if %>
				<% end_loop %>
			<% end_if %>
    </div>
    <h1 class="article-title">$Title</h1>
    <div>
      <div class="article-sideline">
				$Sideline
      </div>
      <div class="article-cover">
				<% with $TitleImage %>
          <img class="" src="$Link" alt="$Title"/>
				<% end_with %>
      </div>
    </div>
  </header>
  <div class="article-content">
		$Content
  </div>
</article>