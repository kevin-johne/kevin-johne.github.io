<header class="site-header">
	<ul class="nav-list nav-list-left">
		<% loop $Menu(1) %>
        <li class="nav-item">
	        <% if $MenuTitle.XML == "Home" %>
            <div class="logo">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 100 100">
                  <g>
                    <rect class="border" x="2" y="2" width="96" height="96"/>
                    <g id="square" transform="rotate(45 50 50)">
                      <line class="letter thick" x1="31.459" y1="20" x2="31.459" y2="80"/>
                      <line class="letter" x1="31.459" y1="79" x2="54.379" y2="79"/>
                      <line class="letter thick" x1="68.542" y1="80" x2="68.542" y2="20"/>
                      <line class="letter" x1="68.542" y1="21" x2="45.622" y2="21"/>
                    </g>
                    <line class="letter" x1="14" y1="35" x2="14" y2="65"/>
                  </g>
                </svg>
            </div>
	        <% else %>
            <a class="nav-link $LinkingMode" href="$Link" title="$Title.XML">
			        $MenuTitle.XML
	            <span class="stretch stretch-top" data-text="$MenuTitle.XML"></span>
	            <span class="stretch stretch-bottom" data-text="$MenuTitle.XML"></span>
            </a>
	        <% end_if %>
        </li>
		<% end_loop %>
  </ul>
</header>