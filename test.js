var containerEl = document.querySelector('.container');
var mixer = mixitup(containerEl, {
    animation: {
	    animateResizeTargets: true
	},

    selectors: {
        control: '[data-mixitup-control]'
    }
});

// var mixer = mixitup('#mixItUpContainer', {
//     selectors: {
//         control: '[data-mixitup-control]'
//     }
// });