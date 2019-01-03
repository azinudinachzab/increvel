$("#book").click(function(){
    var url = document.querySelector('.carousel .active .isi').innerHTML;
    window.location.href = url;
});

(function($){
  $(function(){

  document.querySelector('#search_button').addEventListener('click', function () {
    document.getElementById('search').focus();
  });

  document.querySelector('#close').addEventListener('click', function () {
    document.getElementById('search').value = "";
    document.getElementById('search').blur();
  });

    $('.sidenav').sidenav({edge:'right'});
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown({constrainWidth: false});
    $('.slider').slider({height: 500, interval: 5000});
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
    $('select').formSelect();

  }); // end of document ready
})(jQuery); // end of jQuery name space
