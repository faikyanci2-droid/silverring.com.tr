document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var body = document.body;

  if (toggle) {
    toggle.addEventListener('click', function () {
      body.classList.toggle('nav-open');
    });
  }

  // Mobile submenu accordion behaviour
  document.querySelectorAll('.main-nav > ul > li').forEach(function (li) {
    var link = li.querySelector(':scope > a');
    var submenu = li.querySelector('.submenu');
    if (!submenu || !link) return;
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        li.classList.toggle('open');
      }
    });
  });

  // Sticky header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = '0 6px 18px rgba(26,26,24,.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  // Doc-nav (sidebar) active state on scroll
  var docNavLinks = document.querySelectorAll('.doc-nav a');
  var docBlocks = document.querySelectorAll('.doc-block');
  if (docNavLinks.length && docBlocks.length) {
    var setActive = function () {
      var pos = window.scrollY + 140;
      var current = docBlocks[0].id;
      docBlocks.forEach(function (b) {
        if (b.offsetTop <= pos) current = b.id;
      });
      docNavLinks.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    };
    window.addEventListener('scroll', setActive);
    setActive();
  }
});
