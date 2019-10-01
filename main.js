let theme = 'news';

function changeTheme() {
  header = document.getElementById('theme');
  header.textContent = 'The theme is currently ' + theme +
    '. Click anywhere to change.';

  if (theme == 'sepia') {
    document.body.style.backgroundColor = '#ffe3c7';
    document.body.style.color = '#875f37';
    theme = 'news';
  } else if (theme == 'news') {
    document.body.style.backgroundColor = '#f0f0f0';
    document.body.style.color = '#424242';
    theme = 'twilight'
  } else if (theme == 'twilight') {
    document.body.style.backgroundColor = '#343b80';
    document.body.style.color = '#969cd4';
    theme = 'night'
  } else if (theme == 'night') {
    document.body.style.backgroundColor = '#1f1f1f';
    document.body.style.color = '#a6a6a6';
    theme = 'sepia'
  }
}

window.onload = changeTheme;
window.onclick = changeTheme;
