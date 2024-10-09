!function() {
    "use strict";
    const l = {}
      , i = ["cityId", "cityName", "checkIn", "checkOut", "appc", "cguid", "rid", "productId", "pageSize", "offerToken", "loyaltyTier", "environment", "isMobile", "isVertical"];
    customElements.define("hotel-xsell", class extends HTMLElement {
        constructor() {
            super(...arguments),
            this.getCarouselHTML = async e => {
                var e = await fetch(e);
                if (e.ok)
                    return e.text();
                throw e = await e.text(),
                new Error(e)
            }
        }
        async init(o) {
            var e = i.map(e => {
                var t = null != (t = o[e]) ? t : "";
                return e + "=" + encodeURIComponent(t)
            }
            ).join("&")
              , {isMobile: t, environment: r} = (this.browseMoreUrl = o.browseMoreUrl,
            this.offerToken = o.offerToken,
            o)
              , t = (!t || r && !["qaa", "qab", "preprod"].includes(r) ? "" : `https://pclntes-7d9ddd343708.herokuapp.com/?" + e
              , e = null != (r = l[t]) ? r : await this.getCarouselHTML(t);
            this.attachHtml(e, t)
        }
        hookButtons() {
            this.shadowRoot.querySelectorAll("[data-id]").forEach(t => t.addEventListener("click", e => {
                e.preventDefault();
                e = t.getAttribute("data-id");
                "arrowRight" === e || "arrowLeft" === e ? this.slide("arrowLeft" === e ? "left" : "right") : "link-browse-more" === e ? this.handleBrowseMoreClick() : this.selectCard(t)
            }
            ))
        }
        slide(e) {
            var o = this.shadowRoot.querySelector("[data-id=carousel-container]");
            {
                var r = e;
                const {left: l, right: i} = o.getBoundingClientRect() || {};
                e = o.querySelectorAll("[data-id=hotel-card]");
                let t = 0;
                null != e && e.forEach(e => {
                    e = e.getBoundingClientRect();
                    "left" === r && e.left < l && (t = e.left - l - 16),
                    "right" === r && (e.left > i || Math.floor(e.right) > Math.floor(i)) && !t && (t = e.right - i + 16)
                }
                ),
                o.scrollBy({
                    left: t,
                    behavior: "smooth"
                })
            }
        }
        selectCard(e) {
            var t, e = e.closest("[data-url]");
            null != (t = null == e ? void 0 : e.dataset) && t.url && window.open(e.dataset.url)
        }
        handleBrowseMoreClick() {
            window.open(this.browseMoreUrl + "?xsellToken=" + this.offerToken)
        }
        attachHtml(e, t) {
            l[t] = e,
            this.shadowRoot ? this.shadowRoot.innerHTML = e : this.attachShadow({
                mode: "open"
            }).innerHTML = e,
            this.hookButtons()
        }
    }
    )
}();
