(()=>{document.addEventListener("DOMContentLoaded",function(){let d=document.getElementById("search-toggle"),r=document.getElementById("search-modal"),g=document.getElementById("search-close"),i=document.getElementById("search-input"),c=document.getElementById("search-results"),y=r?.querySelector(".search-modal-overlay");if(!r||!d)return;let o=null,h=[];async function w(){try{h=await(await fetch("/index.json")).json();let t={keys:[{name:"title",weight:.4},{name:"content",weight:.3},{name:"summary",weight:.2},{name:"section",weight:.1}],includeScore:!0,includeMatches:!0,threshold:.4,minMatchCharLength:2,ignoreLocation:!0};o=new Fuse(h,t)}catch(e){console.error("Failed to load search index:",e)}}function m(){r.classList.add("active"),document.body.style.overflow="hidden",setTimeout(()=>i.focus(),100),o||w()}function l(){r.classList.remove("active"),document.body.style.overflow="",i.value="",p()}function p(){c.innerHTML=`
            <div class="search-empty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <p>Start typing to search...</p>
            </div>
        `}function L(e){c.innerHTML=`
            <div class="search-no-results">
                <p>No results found for "<strong>${a(e)}</strong>"</p>
                <p class="search-no-results-hint">Try different keywords or check your spelling</p>
            </div>
        `}function a(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}function k(e,t=150){return!e||e.length<=t?e:e.substring(0,t)+"..."}function E(e){let t=e.toLowerCase();return t==="projects"?"search-result-badge-project":t==="posts"?"search-result-badge-post":"search-result-badge-default"}function x(e){if(!o||e.trim().length<2){p();return}let t=o.search(e);if(t.length===0){L(e);return}let u=t.slice(0,10).map(n=>{let s=n.item,S=n.score,v=s.summary||k(s.content),I=E(s.section);return`
                <a href="${s.permalink}" class="search-result-item">
                    <div class="search-result-header">
                        <span class="search-result-title">${a(s.title)}</span>
                        <span class="search-result-badge ${I}">${a(s.section)}</span>
                    </div>
                    ${v?`<p class="search-result-excerpt">${a(v)}</p>`:""}
                    ${s.date?`<span class="search-result-date">${s.date}</span>`:""}
                </a>
            `}).join("");c.innerHTML=u}d.addEventListener("click",m),g.addEventListener("click",l),y.addEventListener("click",l);let f;i.addEventListener("input",e=>{clearTimeout(f),f=setTimeout(()=>{x(e.target.value)},300)}),document.addEventListener("keydown",e=>{(e.key==="/"||e.key==="k"&&(e.metaKey||e.ctrlKey))&&!r.classList.contains("active")&&(e.preventDefault(),m()),e.key==="Escape"&&r.classList.contains("active")&&l()}),c.addEventListener("keydown",e=>{let t=c.querySelectorAll(".search-result-item"),u=document.activeElement,n=Array.from(t).indexOf(u);if(e.key==="ArrowDown"){e.preventDefault();let s=n<t.length-1?n+1:0;t[s]?.focus()}else if(e.key==="ArrowUp"){e.preventDefault();let s=n>0?n-1:t.length-1;t[s]?.focus()}})});})();
