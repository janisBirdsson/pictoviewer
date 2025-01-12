const url = new URL(window.location.href);
let params = new URLSearchParams(document.location.search);
let background = params.get("background");

window.onload = (event) => {
    document.body.style.backgroundColor = background;
};


const pickr = Pickr.create({
    el: '.pickr-container',
    theme: 'monolith',
    lockOpacity: true,
    default: background,

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: false,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

pickr.on('save', color => {
	pickr.addSwatch(color.toRGBA(0).toString());
});


pickr.on('change', color => {
    document.body.style.backgroundColor = color.toRGBA(0).toString();;
    url.searchParams.set('background', color.toHEXA(0).toString());
    history.pushState({}, "", url);
})