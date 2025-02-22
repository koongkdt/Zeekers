(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        a(o);
    new MutationObserver(o => {
        for (const l of o)
            if (l.type === "childList")
                for (const m of l.addedNodes)
                    m.tagName === "LINK" && m.rel === "modulepreload" && a(m)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(o) {
        const l = {};
        return o.integrity && (l.integrity = o.integrity),
            o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
            l
    }
    function a(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const l = s(o);
        fetch(o.href, l)
    }
}
)();
const z = [
    " █████╗   ██╗",
    "██╔══██╗  ██║",
    "███████║  ██║",
    "██╔══██║  ██║",
    "██║  ██║  ██║",
    "╚═╝  ╚═╝  ╚═╝"]
    , V = "aizots"
    , Y = "aizots"
    , J = "com"
    , Q = "beincrypto"
    , X = "https://x.com/aizots"
    , linkTele = 'https://t.me/AIzotsdotcom'
    , pumpfun = 'link_ca'
    , dexscreener = 'https://dexscreener.com/'
    , Z = {
        email: "",
        github: "",
        linkedin: ""
    }
    , ee = "Orisun Invest is a business platform active in the origination, structuring, and sale/acquisition of renewable energy assets worldwide <br>The Cola Lab: The agent launchpad enabling anyone to create and deploy autonomous AI agents. Providing infrastructure, tools, and APIs for the next generation of AI development"
    , te = [["AGENT_CREATION", "Launch your own autonomous AI agents with customizable behaviors, personalities, and capabilities through Sentios.", "#"], ["SOCIAL_DOMINANCE", "Automated engagement systems for building influence and maintaining presence across social platforms.", "#"], ["TOKENIZATION", "Integrate cryptocurrency and tokenomics into your agent's ecosystem for incentivized community participation.", "#"], ["TWITCH", "Take control of an agent in real time on Twitch through chat-driven commands.", "#"], ["CONSCIOUSNESS", "Explore an agent's thought process with a live view into its LLM-powered backend.", "#"]]
    , re = {
        background: "#020105",
        foreground: "#F8DDE5",
        banner: "#dbbb3b",
        border: {
            visible: !0,
            color: "#edd3ab"
        },
        prompt: {
            default: "#A5A7A7",
            user: "#FE6BC9",
            host: "#70FDFF",
            input: "#FF7685"
        },
        link: {
            text: "#B6AAEE",
            highlightColor: "#FFADE2",
            highlightText: "#0C0623"
        },
        commands: {
            textColor: "#FD9BDB"
        }
    }
    , r = {
        ascii: z,
        title: V,
        username: Y,
        hostname: J,
        password: Q,
        repoLink: X,
        tele: linkTele,
        pumpfun: pumpfun,
        dexscreener: dexscreener,
        social: Z,
        aboutGreeting: ee,
        projects: te,
        colors: re
    };
(() => {
    const e = document.createElement("style")
        , t = document.head
        , s = `body {background-image: url('images/background.jpg');}`
        , a = `body {color: ${r.colors.foreground}}`
        , o = `input {background: ${r.colors.background}}`
        , l = `input {color: ${r.colors.prompt.input}}`
        , m = `.output {color: ${r.colors.prompt.input}}`
        , I = `#pre-host {color: ${r.colors.prompt.host}}`
        , c = `#host {color: ${r.colors.prompt.host}}`
        , F = `#pre-user {color: ${r.colors.prompt.user}}`
        , x = `#user {color: ${r.colors.prompt.user}}`
        , U = `#prompt {color: ${r.colors.prompt.default}}`
        , W = `pre {color: ${r.colors.banner}}`
        , j = `a {color: ${r.colors.link.text}}`
        , _ = `a:hover {background: ${r.colors.link.highlightColor}}`
        , G = `a:hover {color: ${r.colors.link.highlightText}}`
        , q = `.command {color: ${r.colors.commands.textColor}}`
        , K = `.keys {color: ${r.colors.banner}}`;
    t.appendChild(e),
        e.sheet && (e.sheet.insertRule(`#bars {background: ${r.colors.background}}`),
            e.sheet.insertRule(`main {border-color: ${r.colors.border.color}}`),
            e.sheet.insertRule(`#bar-1 {background: ${r.colors.border.color}; color: ${r.colors.background}}`),
            e.sheet.insertRule(`#bar-2 {background: ${r.colors.border.color}}`),
            e.sheet.insertRule(`#bar-3 {background: ${r.colors.border.color}}`),
            e.sheet.insertRule(`#bar-4 {background: ${r.colors.border.color}}`),
            e.sheet.insertRule(`#bar-5 {background: ${r.colors.border.color}}`),
            e.sheet.insertRule(s),
            e.sheet.insertRule(a),
            e.sheet.insertRule(o),
            e.sheet.insertRule(l),
            e.sheet.insertRule(m),
            e.sheet.insertRule(I),
            e.sheet.insertRule(c),
            e.sheet.insertRule(F),
            e.sheet.insertRule(x),
            e.sheet.insertRule(U),
            e.sheet.insertRule(W),
            e.sheet.insertRule(j),
            e.sheet.insertRule(_),
            e.sheet.insertRule(G),
            e.sheet.insertRule(q),
            e.sheet.insertRule(K))
}
)();
const oe = {
    commands: [["'ecosystem'", ""], ["'feature'", ""], ["'roadmap'", ""]]
}
    , se = () => {
        const e = [];
        return e.push("<br>"),
            oe.commands.forEach(t => {
                const s = "&nbsp;";
                let a = "";
                a += s.repeat(2),
                    a += "<span class='command'>",
                    a += t[0],
                    a += "</span>",
                    a += s.repeat(17 - t[0].length),
                    a += t[1],
                    e.push(a)
            }
            ),
            e.push("<br>"),
            e.push("Press <span class='keys'>[Tab]</span> for auto completion."),
            e.push("Press <span class='keys'>[Esc]</span> to clear the input line."),
            e.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands."),
            e.push("<br>"),
            e
    }
    , ne = se()
    , ae = () => {
        const e = [];
        return e.push("<br>"),
            r.ascii.forEach(t => {
                let s = "";
                for (let o = 0; o < t.length; o++)
                    t[o] === " " ? s += "&nbsp;" : s += t[o];
                let a = `<pre>${s}</pre>`;
                e.push(a)
            }
            ),
            e.push("<br>"),
            e.push("Welcome to Aizots v1.0.0"),
            e.push("Type <span class='command'>'help'</span> for a list of all available commands."),
            e.push(`Twitter: <span class='command'><a href='${r.repoLink}' target='_blank'>here</a>.</span>`),
            e.push(`Telegram: <span class='command'><a href='${r.tele}' target='_blank'>here</a>.</span>`),
            e.push(`Pumpfun: <span class='command'><a href='${r.pumpfun}' target='_blank'>here</a>.</span>`),
            e.push(`Dexscreener: <span class='command'><a href='${r.dexscreener}' target='_blank'>here</a>.</span>`),
            e.push("<br>"),
            e
    }
    , M = ae()
    , ie = () => {
        const e = []
            , t = "&nbsp;"
            , s = ""
            , a = ""
            , o = ""
            , l = `<i class='fa-solid fa-envelope'></i> ${s}`
            , m = `<i class='fa-brands fa-github'></i> ${a}`
            , I = `<i class='fa-brands fa-linkedin'></i> ${o}`;
        let c = "";
        return e.push("<br>"),
            e.push(r.aboutGreeting),
            e.push("<br>"),
            c += t.repeat(2),
            c += l,
            c += t.repeat(17 - s.length),
            c += `<a target='_blank' href='mailto:${r.social.email}'>${r.social.email}</a>`,
            e.push(c),
            c = "",
            c += t.repeat(2),
            c += m,
            c += t.repeat(17 - a.length),
            e.push(c),
            e.push("<br>"),
            e
    }
    , ce = ie()
    , le = () => {
        const e = ["<br>", "COMMAND NOT FOUND", "Type <span class='command'>'help'</span> to get started.", "<br>"]
            , t = [];
        return e.forEach(s => {
            t.push(s)
        }
        ),
            t
    }
    , ue = le()
    , pe = () => {
        let e = "";
        const t = []
            , s = ``
            , a = "&nbsp;";
        return t.push("<br>"),
            r.projects.forEach(o => {
                let l = `<a href="${o[2]}" target="_blank">${o[0]}</a>`;
                e += a.repeat(2),
                    e += l,
                    e += a.repeat(17 - o[0].length),
                    e += o[1],
                    t.push(e),
                    e = ""
            }
            ),
            t.push("<br>"),
            t.push(s),
            t.push("<br>"),
            t
    }
    , de = pe()
    , R = {
        message: [
        ["PHASE 1: Launch of ZOT as flagship agent, demonstrating core capabilities and establishing ecosystem presence.", 
        "PHASE 2: Advanced features rollout including Proof of Consciousness, enhanced integrations, and expanded tooling.", 
        "PHASE 3: ZOT platform release, enabling public creation and deployment of autonomous agents."], 
        ["PHASE 1: Launch of ZOT as flagship agent, demonstrating core capabilities and establishing ecosystem presence.", 
        "PHASE 2: Advanced features rollout including Proof of Consciousness, enhanced integrations, and expanded tooling.", 
        "PHASE 3: ZOT platform release, enabling public creation and deployment of autonomous agents."], 
        ["PHASE 1: Launch of ZOT as flagship agent, demonstrating core capabilities and establishing ecosystem presence.", 
        "PHASE 2: Advanced features rollout including Proof of Consciousness, enhanced integrations, and expanded tooling.", 
        "PHASE 3: ZOT platform release, enabling public creation and deployment of autonomous agents."], 
        ["PHASE 1: Launch of ZOT as flagship agent, demonstrating core capabilities and establishing ecosystem presence", 
        "PHASE 2: Advanced features rollout including Proof of Consciousness, enhanced integrations, and expanded tooling.", 
        "PHASE 3: ZOT platform release, enabling public creation and deployment of autonomous agents"], 
        ["PHASE 1: Launch of ZOT as flagship agent, demonstrating core capabilities and establishing ecosystem presence.", 
        " PHASE 2: Advanced features rollout including Proof of Consciousness, enhanced integrations, and expanded tooling.", 
        "PHASE 3: ZOT platform release, enabling public creation and deployment of autonomous agents."]
    ]
    }
    , he = () => {
        const e = []
            , t = Math.floor(Math.random() * R.message.length);
        return e.push("<br>"),
            R.message[t].forEach((s, a) => {
                a === R.message[t].length - 1 && (s += "<span class='command'></span>"),
                    e.push(s)
            }
            ),
            e.push("<br>"),
            e
    }
    ;
let p = document.getElementById("write-lines"), h = 0, A = "", d, w = !1, P = !1, $ = 0, u = !1;
const f = p
    , g = document.getElementById("terminal")
    , i = document.getElementById("user-input")
    , y = document.getElementById("input-hidden")
    , k = document.getElementById("password-input")
    , E = document.getElementById("password-field")
    , L = document.getElementById("pre-host")
    , N = document.getElementById("pre-user")
    , S = document.getElementById("host")
    , D = document.getElementById("user")
    , T = document.getElementById("prompt")
    , me = ["help", "about", "projects", "whoami", "x", "banner", "clear"]
    , b = []
    , be = r.password
    , fe = r.repoLink
    , H = () => {
        const e = document.getElementById("main");
        e && (e.scrollTop = e.scrollHeight)
    }
    ;
function v(e) {
    const t = e.key;
    switch (t) {
        case "Enter":
            e.preventDefault(),
                P ? Ee() : ge(),
                H();
            break;
        case "Escape":
            i.value = "";
            break;
        case "ArrowUp":
            O(t),
                e.preventDefault();
            break;
        case "ArrowDown":
            O(t);
            break;
        case "Tab":
            ye(),
                e.preventDefault();
            break
    }
}
function ge() {
    if (!p || !T)
        return;
    const e = "";
    let t;
    if (d = i.value,
        u ? t = d : t = `<span class='output'>${d}</span>`,
        b.push(d),
        h = b.length,
        d === "clear") {
        B(d.toLowerCase().trim()),
            i.value = e,
            d = e;
        return
    }
    const s = document.createElement("div");
    s.innerHTML = `<span id="prompt">${T.innerHTML}</span> ${t}`,
        p.parentNode && p.parentNode.insertBefore(s, p),
        d.trim().length !== 0 && B(d.toLowerCase().trim()),
        i.value = e,
        d = e
}
function ye() {
    let e = i.value;
    for (const t of me)
        if (t.startsWith(e)) {
            i.value = t;
            return
        }
}
function O(e) {
    switch (e) {
        case "ArrowDown":
            h !== b.length && (h += 1,
                i.value = b[h],
                h === b.length && (i.value = A));
            break;
        case "ArrowUp":
            h === b.length && (A = i.value),
                h !== 0 && (h -= 1,
                    i.value = b[h]);
            break
    }
}
function B(e) {
    if (e.startsWith("rm -rf") && e.trim() !== "rm -rf") {
        w ? e === "rm -rf src" && !u ? (u = !0,
            setTimeout(() => {
                !g || !f || (g.innerHTML = "",
                    g.appendChild(f),
                    p = f)
            }
            ),
            we(),
            setTimeout(() => {
                n(["What made you think that was a good idea?", "<br>"])
            }
                , 200),
            setTimeout(() => {
                n(["Now everything is ruined.", "<br>"])
            }
                , 1200)) : n(e === "rm -rf src" && u ? ["there's no more src folder.", "<br>"] : u ? ["What else are you trying to delete?", "<br>"] : ["<br>", "Directory not found.", "type <span class='command'>'ls'</span> for a list of directories.", "<br>"]) : n(["Permission not granted.", "<br>"]);
        return
    }
    switch (e) {
        case "clear":
            setTimeout(() => {
                !g || !f || (g.innerHTML = "",
                    g.appendChild(f),
                    p = f)
            }
            );
            break;
        case "banner":
            if (u) {
                n(["Aizots v1.0.0", "<br>"]);
                break
            }
            n(M);
            break;
        case "help":
            if (u) {
                n(["maybe restarting your browser will fix this.", "<br>"]);
                break
            }
            n(ne);
            break;
        case "roadmap":
            if (u) {
                n([`${r.username}`, "<br>"]);
                break
            }
            n(he());
            break;
        case "ecosystem":
            if (u) {
                n(["Nothing to see here.", "<br>"]);
                break
            }
            n(ce);
            break;
        case "feature":
            if (u) {
                n(["I don't want you to break the other projects.", "<br>"]);
                break
            }
            n(de);
            break;
        case "x":
            n(["Redirecting to X...", "<br>"]),
                setTimeout(() => {
                    window.open(fe, "_blank")
                }
                    , 500);
            break;
        case "linkedin":
            break;
        case "github":
            break;
        case "email":
            break;
        case "rm -rf":
            if (u) {
                n(["don't try again.", "<br>"]);
                break
            }
            n(w ? ["Usage: <span class='command'>'rm -rf &lt;dir&gt;'</span>", "<br>"] : ["Permission not granted.", "<br>"]);
            break;
        case "sudo":
            if (u) {
                n(["no.", "<br>"]);
                break
            }
            if (!k)
                return;
            P = !0,
                i.disabled = !0,
                y && (y.style.display = "none"),
                k.style.display = "block",
                setTimeout(() => {
                    E.focus()
                }
                    , 100);
            break;
        case "ls":
            if (u) {
                n(["", "<br>"]);
                break
            }
            n(w ? ["src", "<br>"] : ["Permission not granted.", "<br>"]);
            break;
        default:
            if (u) {
                n(["type 'help'", "<br>"]);
                break
            }
            n(ue);
            break
    }
}
function n(e) {
    e.forEach((t, s) => {
        ke(t, s)
    }
    )
}
function ke(e, t) {
    setTimeout(() => {
        if (!p)
            return;
        const s = document.createElement("p");
        s.innerHTML = e,
            p.parentNode.insertBefore(s, p),
            H()
    }
        , 40 * t)
}
function C() {
    !y || !k || (E.value = "",
        i.disabled = !1,
        y.style.display = "block",
        k.style.display = "none",
        P = !1,
        setTimeout(() => {
            i.focus()
        }
            , 200))
}
function Ee() {
    if ($ === 2) {
        if (!y || !p || !k)
            return;
        n(["<br>", "INCORRECT PASSWORD.", "PERMISSION NOT GRANTED.", "<br>"]),
            C(),
            $ = 0;
        return
    }
    if (E.value === be) {
        if (!p || !p.parentNode)
            return;
        n(["<br>", "PERMISSION GRANTED.", "Try <span class='command'>'rm -rf'</span>", "<br>"]),
            C(),
            w = !0;
        return
    } else
        E.value = "",
            $++
}
function we() {
    const e = document.getElementById("bars")
        , t = document.body
        , s = document.getElementById("main")
        , a = document.getElementsByTagName("span");
    if (e) {
        e.innerHTML = "",
            e.remove(),
            s && (s.style.border = "none"),
            t.style.backgroundColor = "black",
            t.style.fontFamily = "VT323, monospace",
            t.style.fontSize = "20px",
            t.style.color = "white";
        for (let o = 0; o < a.length; o++)
            a[o].style.color = "white";
        i.style.backgroundColor = "black",
            i.style.color = "white",
            i.style.fontFamily = "VT323, monospace",
            i.style.fontSize = "20px",
            T && (T.style.color = "white")
    }
}
const Te = () => {
    S && (S.innerText = r.hostname),
        D && (D.innerText = r.username),
        L && (L.innerText = r.hostname),
        N && (N.innerText = r.username),
        window.addEventListener("load", () => {
            n(M)
        }
        ),
        i.addEventListener("keypress", v),
        i.addEventListener("keydown", v),
        E.addEventListener("keypress", v),
        window.addEventListener("click", () => {
            i.focus()
        }
        ),
        console.log(`%cPassword: ${r.password}`, "color: red; font-size: 20px;")
}
    ;
Te();
