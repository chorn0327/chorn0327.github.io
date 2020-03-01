var container = document.querySelector('#container');
var iso = window.iso = new Isotope( container, {
  layoutMode: 'fitRows',
  transitionDuration: 400,
  stagger: '0.1s',
  cellsByRow: {
    columnWidth: 130,
    rowHeight: 140,
  },
  // filter: '.transition',
  getSortData: {
    number: '.number parseInt',
    symbol: '.symbol',
    name: '.name',
    category: '[data-category]',
    weight: function( itemElem ) {
      // remove parenthesis
      var weight = itemElem.querySelector('.weight').textContent;
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

var options = document.querySelector('#options');

options.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }

  // var opt = {};
  var key = event.target.parentNode.getAttribute('data-isotope-key');
  var value = event.target.getAttribute('data-isotope-value');

  if ( key === 'filter' && value === 'number-greater-than-50' ) {
    value = function( elem ) {
      var numberText = elem.querySelector('.number').textContent;
      return parseInt( numberText, 10 ) > 40;
    };
  }
  // console.log( key, value );
  iso.options[ key ] = value;
  iso.arrange();
});

// iso.on( 'hideComplete', function( items ) {
//   console.log( 'hideComplete', items );
// })

// iso.on( 'revealComplete', function( items ) {
//   console.log( 'revealComplete', items );
// })

// iso.on( 'arrangeComplete', function( items ) {
//   console.log( 'arrangeComplete', items.length );
// });