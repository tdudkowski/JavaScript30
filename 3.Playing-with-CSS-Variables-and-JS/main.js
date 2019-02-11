    const inputs = document.querySelectorAll('.controls input');

    const changeVal = function () {
      console.log(this.value);
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('click', changeVal));
    inputs.forEach(input => input.addEventListener('mousemove', changeVal));
