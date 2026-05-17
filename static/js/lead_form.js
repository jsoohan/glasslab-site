(function () {
  const URL = window.GLASSLAB_FORM_URL;
  document.querySelectorAll("form[data-glasslab-form]").forEach(function (form) {
    const statusEl = form.querySelector(".lf-status");
    const submitBtn = form.querySelector(".lf-submit");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!URL) {
        statusEl.textContent = "준비 중입니다. 잠시 후 다시 시도해 주세요.";
        statusEl.className = "lf-status err";
        return;
      }

      const fd = new FormData(form);
      const data = {};
      fd.forEach(function (v, k) {
        if (k === "concerns") {
          (data.concerns = data.concerns || []).push(v);
        } else {
          data[k] = v;
        }
      });
      data.concerns = (data.concerns || []).join(", ");
      data.user_agent = navigator.userAgent;
      data.referrer = document.referrer || "";

      const body = new URLSearchParams();
      Object.keys(data).forEach(function (k) { body.append(k, data[k]); });

      submitBtn.disabled = true;
      statusEl.textContent = "전송 중…";
      statusEl.className = "lf-status";

      fetch(URL, { method: "POST", mode: "no-cors", body: body })
        .then(function () {
          form.reset();
          statusEl.textContent = "접수됐습니다. 1~2일 내로 이메일 드릴게요.";
          statusEl.className = "lf-status ok";
        })
        .catch(function () {
          statusEl.textContent = "전송 실패. 잠시 후 다시 시도해 주세요.";
          statusEl.className = "lf-status err";
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  });
})();
