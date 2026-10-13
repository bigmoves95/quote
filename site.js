/* ===== EDIT THESE (same details as in index.html) ===== */
const SITE = {
  business: "Big Moves",
  phone: "07360 360790",
  email: "info@big-moves.com",
  adsId: "",          // Google Ads tag ID, e.g. "AW-123456789"
  adsConversion: ""   // e.g. "AW-123456789/AbCdEfGh"
};
(function(){
  const digits = SITE.phone.replace(/[^\d+]/g, "");
  const intl = digits.startsWith("+") ? digits.slice(1) : digits.replace(/^0/, "44");
  if (SITE.adsId){
    const sc = document.createElement("script"); sc.async = true;
    sc.src = "https://www.googletagmanager.com/gtag/js?id=" + SITE.adsId; document.head.append(sc);
    window.dataLayer = window.dataLayer || []; window.gtag = function(){ dataLayer.push(arguments); };
    gtag("js", new Date()); gtag("config", SITE.adsId);
  }
  const track = () => { if (window.gtag && SITE.adsConversion) gtag("event", "conversion", {send_to: SITE.adsConversion}); };
  const msg = window.WA_MSG || "Hi " + SITE.business + ", I'd like a quote.";
  const wa = "https://wa.me/" + intl + "?text=" + encodeURIComponent(msg);
  const here = location.pathname.split("/").pop() || "index.html";
  const link = (href, label) => '<a href="' + href + '"' + (here === href ? ' class="on"' : '') + '>' + label + '</a>';
  const phoneSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.6 3.6a1 1 0 01-.25 1z"/></svg>';
  const waSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.1z"/></svg>';
  document.getElementById("hdr").innerHTML =
    '<div class="wrap"><a class="brand" href="index.html"><img src="logo.png" alt="' + SITE.business + '"><span class="tag">REMOVALS | STORAGE</span></a>' +
    '<div class="contact"><a class="btn call" href="tel:' + digits + '">' + phoneSvg + 'Call</a><a class="btn wa" href="' + wa + '" target="_blank" rel="noopener">' + waSvg + 'WhatsApp</a></div>' +
    '<nav class="nav">' + link("index.html", "Get a quote") + link("commercial.html", "Commercial moves") + link("about.html", "About us") + '</nav></div>';
  document.getElementById("ftr").innerHTML =
    '&copy; ' + new Date().getFullYear() + ' ' + SITE.business + '. Fully insured: goods in transit and public liability.<br><a href="mailto:' + SITE.email + '">' + SITE.email + '</a> &middot; <a href="tel:' + digits + '">' + SITE.phone + '</a>';
  document.querySelectorAll(".btn.wa,.btn.call,[data-track]").forEach(el => el.addEventListener("click", track));
  document.querySelectorAll("[data-wa]").forEach(el => { el.href = wa; el.target = "_blank"; el.rel = "noopener"; });
})();
