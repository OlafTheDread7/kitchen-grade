/* ===========================================================
   PawPick — site logic (shared across all pages)
   Edit the tag below if your Amazon Associates ID ever changes.
   =========================================================== */
const AFFILIATE_TAG = "onamzjacob034-20";

function amazonLink(query) {
  const q = encodeURIComponent(query);
  return `https://www.amazon.com/s?k=${q}&tag=${AFFILIATE_TAG}`;
}
function wireAffiliateLinks() {
  document.querySelectorAll("[data-amz]").forEach(el => {
    el.setAttribute("href", amazonLink(el.getAttribute("data-amz")));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "sponsored nofollow noopener");
  });
}
function wireNav() {
  const t = document.querySelector(".nav-toggle"), l = document.querySelector(".nav-links");
  if (t && l) t.addEventListener("click", () => l.classList.toggle("open"));
}
function wireSignup() {
  document.querySelectorAll("form.signup").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = form.querySelector("input[type=email]");
      const note = form.parentElement.querySelector(".signup-note");
      if (input && input.value) { if (note) note.textContent = "✓ You're in! Check your inbox to confirm."; input.value = ""; }
    });
  });
}
function wireYear() { document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear()); }
document.addEventListener("DOMContentLoaded", () => { wireAffiliateLinks(); wireNav(); wireSignup(); wireYear(); });
