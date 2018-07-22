$(document).foundation()
var larr = [
  document.getElementById('n1'), document.getElementById('n2'),
  document.getElementById('n3'), document.getElementById('n4'),
  document.getElementById('n5'), document.getElementById('n6'),
  document.getElementById('n7')
];


var liarr_names = [
  'home', 'about', 'services', 'plants', 'landscape', 'mahogany', 'contact',
  'footer'
];
var liarr_offsets = [0, 0, 0, 0, 0, 0, 0];
var threshold_offsets = [0, 0, 0, 0, 0, 0, 0, 0];
var sections = liarr_offsets.length;
var i;

function sa(lindex) {
  larr.map(e => e.classList.remove('active'));
  if (lindex >= 1 && lindex <= sections)
    larr[lindex - 1].classList.add('active');
}

liarr_names.forEach(function(element) {
  liarr_offsets.push($('#' + element).offset());
});

$(document).ready(function() {
  $(window).scroll(function() {
    var screenPosition = $(window).scrollTop();
    // console.log(screenPosition);
    for (i = 1; i <= sections; i++)
      if (screenPosition <= threshold_offsets[i]) {
        sa(i);
        break;
      }
  });
  for (i = 1; i < sections; i++)
    threshold_offsets[i] =
        ((liarr_offsets[i].top - liarr_offsets[i - 1].top) / 2) +
        (liarr_offsets[i - 1].top);
  threshold_offsets[sections] = liarr_offsets[sections].top + 2000;
  $(window).scroll();
  $('#n1, #n2, #n3, #n4, #n5, #n6, #n7').click(function() {
    $(window).scroll();
  });
});