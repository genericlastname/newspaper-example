let theme = 'news';

function changeTheme() {
  if (theme == 'sepia') {
    document.body.style.backgroundColor = '#ffe3c7';
    document.body.style.color = '#875f37';
    theme = 'news';
  } else if (theme == 'news') {
    document.body.style.backgroundColor = '#e3e3e3';
    document.body.style.color = '#424242';
    theme = 'twilight'
  } else if (theme == 'twilight') {
    document.body.style.backgroundColor = '#343b80';
    document.body.style.color = '#969cd4';
    theme = 'night'
  } else if (theme == 'night') {
    document.body.style.backgroundColor = '#1f1f1f';
    document.body.style.color = '#7a7a7a';
    theme = 'sepia'
  }
}

window.onload = changeTheme;
window.onclick = changeTheme;
