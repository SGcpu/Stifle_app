
(function () {
    document.onkeydown = function (e) {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || (e.ctrlKey && e.key === "U")) {
            return false;
        }
    };
  
    setInterval(() => {
        const devtools = /./;
        devtools.toString = function () {
            throw new Error("DevTools detected");
        };
        console.log("%c", devtools);
    }, 1000);
  })();
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && ["u", "s", "h", "i", "j"].includes(event.key.toLowerCase())) {
        event.preventDefault();
    }
  });
  