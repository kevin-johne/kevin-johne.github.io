<div class="site-landing">
    <div class="site-logo-holder">
        <a class="site-logo"href="./Web" class="landing-logo">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%"
                 viewBox="-20 -20 140 140" preserveAspectRatio="xMidYMid meet">
                <g>
                    <!--line class="flash" x1="50" y1="48" x2="50" y2="52"/-->
                    <rect class="border animation" x="2" y="2" width="0" height="0">
                        <animate
                            attributeName="stroke-width"
                            attributeType="style"
                            from="0px" to="4px"
                            begin="0s" dur="2s"
                            fill="freeze"
                            keySplines=".68 .23 .92 .48"
                            values="0px;4px"
                            calcMode="spline"
                        />
                        <animate
                            attributeName="x"
                            attributeType="XML"
                            from="50"
                            to="2"
                            begin="0s"
                            dur="2s"
                            fill="freeze"
                            keySplines=".68 .23 .92 .48"
                            keyTimes="0; 1"
                            values="50;2"
                            calcMode="spline"/>
                        <animate
                            attributeName="y"
                            attributeType="XML"
                            from="50"
                            to="2"
                            begin="0s"
                            dur="2s"
                            fill="freeze"
                            keySplines=".68 .23 .92 .48"
                            keyTimes="0; 1"
                            values="50;2"
                            calcMode="spline"/>
                        <animate attributeName="width" attributeType="XML" from="0" to="96" begin="0s" dur="2s" fill="freeze"
                                 keySplines=".68 .23 .92 .48" keyTimes="0; 1" values="0;96" calcMode="spline"/>
                        <animate attributeName="height" attributeType="XML" from="0" to="96" begin="0s" dur="2s" fill="freeze"
                                 keySplines=".68 .23 .92 .48" keyTimes="0; 1" values="0;96" calcMode="spline"/>
                        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="720 50 50"
                                          begin="0s" dur="2s" fill="freeze" keyTimes="0; 1" values="0 50 50;720 50 50"
                                          keySplines=".68, .23, .92, .48" calcMode="spline"/>
                    </rect>
                    <g id="square" transform="rotate(45 50 50)">
                        <line class="letter thick k-upper" x1="31.459" y1="20" x2="31.459" y2="80" stroke-dashoffset="60"
                              stroke-dasharray="60">
                            <animate attributeName="stroke-dashoffset" attributeType="XML" from="60" to="0" begin="2s" dur="1s"
                                     fill="freeze" keySplines=".68 .23 .92 .48" values="60;0" calcMode="spline"/>
                        </line>
                        <line class="letter k-lower" x1="31.459" y1="79" x2="54.379" y2="79" stroke-dashoffset="22.98"
                              stroke-dasharray="22.98">
                            <animate attributeName="stroke-dashoffset" attributeType="XML" from="22.98" to="0" begin="3s" dur="0.2s"
                                     fill="freeze" keySplines=".68 .23 .92 .48" values="22.98;0" calcMode="spline"/>
                        </line>
                        <line class="letter thick j-lower" x1="68.542" y1="80" x2="68.542" y2="20" stroke-dashoffset="60"
                              stroke-dasharray="60">
                            <animate attributeName="stroke-dashoffset" attributeType="XML" from="60" to="0" begin="2s" dur="1s"
                                     fill="freeze" keySplines=".68 .23 .92 .48" values="60;0" calcMode="spline"/>
                        </line>
                        <line class="letter j-upper" x1="68.542" y1="21" x2="45.622" y2="21" stroke-dashoffset="22.98"
                              stroke-dasharray="22.98">
                            <animate attributeName="stroke-dashoffset" attributeType="XML" from="22.98" to="0" begin="3s" dur="0.2s"
                                     fill="freeze" keySplines=".68 .23 .92 .48" values="22.98;0" calcMode="spline"/>
                        </line>
                    </g>
                    <line class="letter k-left-upper" x1="14" y1="56" x2="14" y2="35" stroke-dashoffset="21" stroke-dasharray="21">
                        <animate attributeName="stroke-dashoffset" attributeType="XML" from="21" to="0" begin="3s" dur="0.2s"
                                 fill="freeze" keySplines=".68 .23 .92 .48" values="21;0" calcMode="spline"/>
                    </line>
                    <line class="letter k-left-lower" x1="14" y1="56" x2="14" y2="65" stroke-dashoffset="9" stroke-dasharray="9">
                        <animate attributeName="stroke-dashoffset" attributeType="XML" from="9" to="0" begin="3s" dur="0.2s"
                                 fill="freeze" keySplines=".68 .23 .92 .48" values="9;0" calcMode="spline"/>
                    </line>
                </g>
            </svg>
        </a>
    </div>
    <div class="what-i-am-holder">
        <p class="show-later">
            I am a developer
        </p>
        <p class="show-later">
            sometimes designer
        </p>
        <p class="show-later">
            and on weekends deejay
        </p>
    </div>
    <div class="button-holder">
        <p class="show-later">
            <a class="crazy-button big-crazy-button neutral effect-delay" href="mailto:info@kevin-johne.de" data-text="Hire me" title="send email">Hire me</a>
        </p>
    </div>
    <div class="scroll-down">
        <p class="show-later">
            <i class="fa fa-angle-down fa-4x"></i>
        </p>
    </div>

</div>
<% include header %>
<div class="site-content">
    <% loop $Web %>
    <% include web_content %>
    <% end_loop %>
</div>
<% include contact %>