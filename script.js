const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const glow = document.querySelector('.cursor-glow');
const boot = document.querySelector('#boot-screen');
const bootLog = document.querySelector('#boot-log');
const bootProgress = document.querySelector('.boot-progress span');
const skipBoot = document.querySelector('#skip-boot');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

if (glow && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });
}

if (boot && bootLog && bootProgress) {
  const lines = ['initialising secure shell', 'loading field notes', 'mounting /research', 'checking transmission channel', 'byteping.xyz ready'];
  let index = 0;
  const finishBoot = () => {
    boot.classList.add('done');
    document.body.classList.remove('booting');
  };
  document.body.classList.add('booting');
  const addLine = () => {
    if (index < lines.length) {
      const line = document.createElement('span');
      line.className = `boot-line${index === 3 ? ' warn' : ''}`;
      line.textContent = lines[index];
      bootLog.appendChild(line);
      index += 1;
      bootProgress.style.width = `${(index / lines.length) * 100}%`;
      window.setTimeout(addLine, 280);
    } else {
      window.setTimeout(finishBoot, 420);
    }
  };
  window.setTimeout(addLine, 180);
  if (skipBoot) skipBoot.addEventListener('click', finishBoot);
}
