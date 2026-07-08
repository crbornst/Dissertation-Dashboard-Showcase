const tabs = document.querySelectorAll('.demo-tab');
const screens = document.querySelectorAll('.demo-screen');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const panel = tab.dataset.panel;
    tabs.forEach((item) => item.classList.remove('active'));
    screens.forEach((screen) => screen.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(panel).classList.add('active');
  });
});
