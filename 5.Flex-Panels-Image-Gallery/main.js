  const panel = document.querySelectorAll('.panel');

  const toggleOpen = function () {
   panel.forEach(panel => panel.classList.remove('open'));
   this.classList.toggle('open');
  }

  const toggleActive = function (e) {
   if (e.propertyName.includes('flex')) {
    this.classList.toggle('active');
   }
  }

  const removeOpen = () => {
   // panel.forEach(panel => panel.classList.remove('open'));
  }

  panel.forEach(panel => panel.addEventListener('click', toggleOpen));
  panel.forEach(panel => panel.addEventListener('mouseover', removeOpen));
  panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));
