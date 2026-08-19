(() => {
  "use strict";

  const form = document.getElementById("studio-feedback-form");
  if (!form) return;

  const dateField = document.getElementById("feedback-date");
  if (dateField && !dateField.value) {
    const now = new Date();
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    dateField.value = localDate.toISOString().slice(0, 10);
  }

  const status = document.getElementById("feedback-copy-status");
  const copyButton = document.getElementById("copy-feedback");
  const value = (data, name) => String(data.get(name) || "").trim();

  function buildReport() {
    const data = new FormData(form);
    const fields = [
      ["Name or initials", "name"],
      ["Date", "date"],
      ["Version", "version"],
      ["macOS", "macOS"],
      ["Area", "area"],
      ["Goal", "goal"],
      ["Steps", "steps"],
      ["Expected", "expected"],
      ["Actual", "actual"],
      ["Error", "error"],
      ["Comments or feature request", "comments"]
    ];
    const lines = ["LYRELINE STUDIO FEEDBACK"];
    for (const [label, name] of fields) {
      const answer = value(data, name);
      if (answer) lines.push("", `${label}:`, answer);
    }
    return `${lines.join("\n")}\n`;
  }

  async function copyReport() {
    status.classList.remove("is-error");
    try {
      const report = buildReport();
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(report);
      } else {
        const temporary = document.createElement("textarea");
        temporary.value = report;
        temporary.setAttribute("readonly", "");
        temporary.style.position = "fixed";
        temporary.style.opacity = "0";
        document.body.appendChild(temporary);
        temporary.select();
        const copied = document.execCommand("copy");
        temporary.remove();
        if (!copied) throw new Error("Copy command unavailable");
      }
      status.textContent = "Feedback copied. Paste it into an email to lyreline.support@icloud.com.";
    } catch (_error) {
      status.textContent = "Copy was unavailable. Include the requested details manually in your email.";
      status.classList.add("is-error");
    }
  }

  copyButton.addEventListener("click", copyReport);
  form.addEventListener("submit", event => event.preventDefault());
})();
