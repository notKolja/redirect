(function () {
  var path = window.location.pathname.replace(/\/+$/, "") || "/";
  var redirects = window.REDIRECT_CONFIG || {};
  var entry = redirects[path];
  var headline = document.getElementById("headline");
  var message = document.getElementById("message");
  var fallback = document.getElementById("fallback");

  function getTarget(value) {
    if (typeof value === "string") {
      return value;
    }

    if (value && typeof value.target === "string") {
      return value.target;
    }

    return "";
  }

  function getTitle(value) {
    if (value && typeof value.title === "string") {
      return value.title;
    }

    return path;
  }

  var target = getTarget(entry);

  if (!target) {
    headline.textContent = "Redirect nicht gefunden";
    message.textContent = "Für " + path + " ist kein Ziel in config.js eingetragen.";
    fallback.textContent = "Neue Redirects kannst du in window.REDIRECT_CONFIG ergänzen.";
    return;
  }

  headline.textContent = getTitle(entry) + " wird geöffnet...";
  message.innerHTML = 'Falls nichts passiert, <a id="manual-link" href=""></a>.';

  var manualLink = document.getElementById("manual-link");
  manualLink.href = target;
  manualLink.textContent = "hier klicken";
 // fallback.textContent = target;

  window.setTimeout(function () {
    window.location.replace(target);
  }, 150);
})();
