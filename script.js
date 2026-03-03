/* ================================================================
   script.js — Mangalam HDPE Pipes
   UPDATED: Carousel + Zoom + All Interactivity
================================================================ */

// 1. STICKY HEADER
(function() {
    const hdr = document.getElementById("stickyHeader");
    const hero = document.getElementById("hero");
    let lastY = 0;
    window.addEventListener("scroll", function() {
        const y = window.pageYOffset;
        const fold = hero ? hero.offsetHeight * 0.55 : 500;
        hdr.classList.toggle("visible", y > fold && y < lastY);
        lastY = y;
    }, { passive: true });
})();

// 2. IMAGE CAROUSEL WITH ZOOM
(function() {
    const IMGS = [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=85",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=85",
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=85",
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=85",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=85"
    ];

    const ZOOM = 3;
    const LENS_W = 120;
    const LENS_H = 120;

    const mainImg = document.getElementById("cMainImg");
    const wrap = document.getElementById("carouselWrap");
    const lens = document.getElementById("zoomLens");
    const result = document.getElementById("zoomResult");
    const thumbs = document.querySelectorAll(".c-thumb");
    const prevBtn = document.getElementById("cPrev");
    const nextBtn = document.getElementById("cNext");
    let cur = 0;

    // Preload images
    IMGS.forEach(src => { (new Image()).src = src; });

    function go(n) {
        cur = (n + IMGS.length) % IMGS.length;
        mainImg.style.opacity = "0";
        setTimeout(() => {
            mainImg.src = IMGS[cur];
            result.style.backgroundImage = "url(" + IMGS[cur] + ")";
            mainImg.style.opacity = "1";
        }, 180);
        thumbs.forEach((t, i) => t.classList.toggle("active", i === cur));
    }

    // Auto-play
    let timer = setInterval(() => go(cur + 1), 5000);
    function resetTimer() { clearInterval(timer); timer = setInterval(() => go(cur + 1), 5000); }

    thumbs.forEach((t, i) => t.addEventListener("click", () => { go(i); resetTimer(); }));
    prevBtn.addEventListener("click", () => { go(cur - 1); resetTimer(); });
    nextBtn.addEventListener("click", () => { go(cur + 1); resetTimer(); });
    wrap.addEventListener("mouseenter", () => clearInterval(timer));
    wrap.addEventListener("mouseleave", resetTimer);

    // Zoom setup
    result.style.backgroundImage = "url(" + IMGS[0] + ")";
    result.style.backgroundRepeat = "no-repeat";
    result.style.backgroundSize = (ZOOM * 100) + "% " + (ZOOM * 100) + "%";

    wrap.addEventListener("mousemove", function(e) {
        const rect = wrap.getBoundingClientRect();
        const rawX = e.clientX - rect.left;
        const rawY = e.clientY - rect.top;

        const cx = Math.min(Math.max(rawX, LENS_W / 2), rect.width - LENS_W / 2);
        const cy = Math.min(Math.max(rawY, LENS_H / 2), rect.height - LENS_H / 2);

        lens.style.left = cx + "px";
        lens.style.top = cy + "px";

        const pctX = (cx / rect.width) * 100;
        const pctY = (cy / rect.height) * 100;
        result.style.backgroundPosition = pctX + "% " + pctY + "%";
    });

    mainImg.style.transition = "opacity .18s ease";
    go(0);
})();

// 3. APPS CAROUSEL
(function() {
    const track = document.getElementById("appsTrack");
    const prev = document.getElementById("appPrev");
    const next = document.getElementById("appNext");
    if (!track) return;
    const CARD_W = 296;
    let off = 0;
    function maxOff() {
        return Math.max(0, track.children.length - Math.floor(track.parentElement.offsetWidth / CARD_W));
    }
    function slide(d) {
        off = Math.min(Math.max(off + d, 0), maxOff());
        track.style.transform = "translateX(-" + off * CARD_W + "px)";
    }
    prev.addEventListener("click", () => slide(-1));
    next.addEventListener("click", () => slide(1));
    window.addEventListener("resize", () => {
        off = Math.min(off, maxOff());
        track.style.transform = "translateX(-" + off * CARD_W + "px)";
    });
})();

// 4. PROCESS TABS
(function() {
    const tabs = document.querySelectorAll(".proc-tab");
    const title = document.getElementById("procTitle");
    const desc = document.getElementById("procDesc");
    const list = document.getElementById("procList");
    const DATA = [
        { t: "High-Grade Raw Material Selection", d: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.", b: ["PE100 grade material", "Optimal molecular weight distribution"] },
        { t: "Precision Extrusion Process", d: "State-of-the-art extruders melt and force the PE100 compound through a precision die to form the pipe profile.", b: ["Consistent melt temperature control", "High-speed screw design for uniformity"] },
        { t: "Controlled Cooling System", d: "Rapid and uniform cooling in water baths ensures structural integrity and dimensional accuracy of the extruded pipe.", b: ["Controlled water bath temperature", "Multi-stage cooling for stress relief"] },
        { t: "Accurate Sizing & Calibration", d: "Vacuum sizing baskets precisely set the outer diameter, maintaining tight tolerances as per ISO and IS standards.", b: ["Vacuum calibration sleeves", "Diameter tolerance +/-0.2mm"] },
        { t: "Rigorous Quality Control", d: "Every batch undergoes inline dimensional checks, pressure tests, and material property verification.", b: ["100% dimensional inspection", "Hydrostatic pressure testing"] },
        { t: "Laser Marking & Traceability", d: "High-resolution laser printers permanently mark each pipe with standard details for full traceability.", b: ["Permanent laser marking", "Batch and date traceability"] },
        { t: "Precision Cutting", d: "Automated cutters deliver exact pipe lengths with clean perpendicular cuts ready for fusion jointing.", b: ["Tolerance of +/-5mm per standard length", "Automated cut-off saws"] },
        { t: "Safe Packaging & Dispatch", d: "Pipes are bundled, sleeved, or coiled and carefully packaged to prevent transit damage and maintain hygiene.", b: ["UV-resistant protective sleeves", "Custom bundling per order"] }
    ];
    tabs.forEach((tab, i) => {
        tab.addEventListener("click", function() {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            title.textContent = DATA[i].t;
            desc.textContent = DATA[i].d;
            list.innerHTML = DATA[i].b.map(b => '<li><span class="bullet-dot blue"></span> ' + b + '</li>').join("");
        });
    });
})();

// 5. FAQ ACCORDION
(function() {
    const items = document.querySelectorAll(".faq-item");
    items.forEach(item => {
        const btn = item.querySelector(".faq-q");
        btn.addEventListener("click", function() {
            const open = item.classList.contains("active");
            items.forEach(i => {
                i.classList.remove("active");
                i.querySelector(".faq-icon").innerHTML = "⌄";
            });
            if (!open) {
                item.classList.add("active");
                item.querySelector(".faq-icon").innerHTML = "⌃";
            }
        });
    });
})();

// 6. SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", function(e) {
        const t = document.querySelector(a.getAttribute("href"));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
});

// 7. SCROLL REVEAL
(function() {
    const els = document.querySelectorAll(".reveal");
    els.forEach((el, i) => el.style.transitionDelay = (i % 3) * 80 + "ms");
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
})();