{% import 'modules' as modules %}
{% import 'patterns' as patterns %}

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
        title = 'Vinylla',
        artwork = 'https://i1.sndcdn.com/artworks-000109996183-z11kq7-t300x300.jpg',
        wave = 'https://w1.sndcdn.com/UfSaMpT2MjBu_m.png',
        folded = false,
        duration = 4130058,
        id = 194993784
    ) }}

{% endcall %}