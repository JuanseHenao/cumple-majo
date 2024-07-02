$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  setTimeout(function () {
    document.querySelector(".confeti-container").remove();
  }, 10000);

  function open() {
    setTimeout(function () {
      window.open(
        "https://www.canva.com/design/DAGJwLJnoEQ/5F8SaAust1qIxXceU3Agnw/view?utm_content=DAGJwLJnoEQ&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        "_blank"
      );
    }, 3000);
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
