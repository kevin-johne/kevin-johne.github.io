{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

{% call modules.content.default() %}
    <h1>Music, who can without?</h1>
    <p>
        Not me, nope. As a rugret I already found my passion in electronic music.
        My parents had a good collection of dreamdance, well not long and it was mine, I think without ever noticing it.
        Later during my studies I started playing music on turntables, trying to put one song into another.
        It took a wail till the beat matching took over in ear and muscle memory.
    </p>
    <p>
        Till today I like drance, drum'n'bass and housetech so I spin it on and on.
    </p>
{% endcall %}

{% call modules.content.default() %}
    <h2 class="heading">My Sets</h2>
{% endcall %}

{% call modules.album.set() %}

    {{ modules.album.album(
        title = 'May',
        artwork = 'https://i1.sndcdn.com/artworks-000117195197-msfynh-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/72v5nz6Thvp2_m.png',
        folded = true,
        duration = 3322930,
        id = 206033790
    ) }}
    {{ modules.album.album(
        title = 'Vinylla',
        artwork = 'https://i1.sndcdn.com/artworks-000116568019-wy8nnr-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/jZ3kik8SX4he_m.png',
        folded = false,
        duration = 3018130,
        id = 205181765
    ) }}
    {{ modules.album.album(
        title = 'Just Once Again',
        artwork = 'https://i1.sndcdn.com/artworks-000109996183-z11kq7-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/UfSaMpT2MjBu_m.png',
        folded = false,
        duration = 4130058,
        id = 194993784
    ) }}

{% endcall %}

{% call modules.content.default() %}
    <h2 class="heading">My Likes</h2>
{% endcall %}

{% call modules.album.set() %}

    {{ modules.album.album(
        title = 'unueberlegt | 1063 Meilen',
        artwork = 'https://i1.sndcdn.com/artworks-000192529392-7h9qmh-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/gT1vD4WG6phM_m.png',
        folded = false,
        duration = 4720899,
        id = 291980348
    ) }}
    {{ modules.album.album(
        title = 'Lenzman & Dan Stezo - The Soul Tape',
        artwork = 'https://i1.sndcdn.com/artworks-000178285324-5k2bin-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/AV6LvVihnsha_m.png',
        folded = false,
        duration = 3600480,
        id = 189258488
    ) }}
    {{ modules.album.album(
        title = 'Track of the Day: Dossa & Locuzzed \“Shag\”',
        artwork = 'https://i1.sndcdn.com/artworks-000185355085-ym0iw0-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/YCgMd1GMjEoQ_m.png',
        folded = false,
        duration = 287581,
        id = 284789346
    ) }}

    {{ modules.album.album(
        title = 'Last Day Of Summer [The Old Soul EP]',
        artwork = 'https://i1.sndcdn.com/artworks-000056793106-vh73c4-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/tX3FajPsyP4d_m.png',
        folded = false,
        duration = 288182,
        id = 108461319
    ) }}

    {{ modules.album.album(
        title = 'drumandbass.de Podcast #64 mit Jaycut & Kolt Siewerts',
        artwork = 'https://i1.sndcdn.com/artworks-000182692165-48u7ci-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/wvzHhYuFFfLP_m.png',
        folded = false,
        duration = 5014569,
        id = 283007690
    ) }}

    {{ modules.album.album(
        title = 'Don\'t Play Podcast 20 Tokyo',
        artwork = 'https://i1.sndcdn.com/artworks-000180844434-w4qxp8-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/UbMJD6onzcLs_m.png',
        folded = false,
        duration = 4689915,
        id = 281616406
    ) }}

    {{ modules.album.album(
        title = 'Baez - Live At Yacht Cruise - 7.30.16',
        artwork = 'https://i1.sndcdn.com/artworks-000175753055-3rzljf-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/Xtt8zcsv6oTs_m.png',
        folded = false,
        duration = 7823700,
        id = 277676023
    ) }}

    {{ modules.album.album(
        title = 'forever summer pt. 2 | house & deep house mix',
        artwork = 'https://i1.sndcdn.com/artworks-000200588172-rbqxx7-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/BzFfR1l0EjVX_m.png',
        folded = false,
        duration = 3505803,
        id = 280153075
    ) }}

{% endcall %}
