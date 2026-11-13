const modeButtons = document.querySelectorAll('[data-mode]');

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isRain = button.dataset.mode === 'rain';
    document.body.classList.toggle('rain-mode', isRain);
    modeButtons.forEach((item) => item.classList.toggle('active', item === button));
  });
});

document.querySelector('#printPlan')?.addEventListener('click', () => window.print());

document.querySelectorAll('[data-check]').forEach((box) => {
  const key = `anshun-check-${box.dataset.check}`;
  box.checked = localStorage.getItem(key) === '1';
  box.addEventListener('change', () => localStorage.setItem(key, box.checked ? '1' : '0'));
});

document.querySelectorAll('[data-price]').forEach((input) => {
  const key = `anshun-price-${input.dataset.price}`;
  input.value = localStorage.getItem(key) || '';
  input.addEventListener('input', () => localStorage.setItem(key, input.value));
});

document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => {
    img.classList.add('image-failed');
    img.alt = `${img.alt}（图片暂时无法加载，可点击来源查看）`;
  });
});
