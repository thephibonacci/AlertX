function GBI(id) { return document.getElementById(id); }
function elementCreator(elem) { return document.createElement(elem); }
var head = document.querySelector("head");
var cssAddress = elementCreator("link");
cssAddress.setAttribute("rel", "stylesheet")
cssAddress.setAttribute("href", "https://cdn.jsdelivr.net/gh/thephibonacci/AlertX@main/src/AlertX.css")
var cssAddress2 = elementCreator("link");
cssAddress2.setAttribute("rel", "stylesheet")
cssAddress2.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200")
head.appendChild(cssAddress);
head.appendChild(cssAddress2);
class AlertX {
    #option;
    option(...arg) { if (arg.length == 1) { this.#option = arg[0]; } else { var opt = { type: "alertx", status: "Danger", animation: false, }; this.#option = opt; } }
    #setOption() {
        if (this.#option != undefined) {
            var types = ["alert", "alertx", "alertz", "confirm", "confirmx", "confirmz", "prompt"];
            var positions = ["topLeft", "centerLeft", "bottomLeft", "topCenter", "center", "bottomCenter", "topRight", "centerRight", "bottomRight"];
            var themes = ["dark", "light"];
            var statuses = ["danger", "warning", "success", "primary"];
            var opt = {
                type: this.#option.type == undefined || types.indexOf(this.#option.type) == -1 ? this.#option.type = "alertx" : this.#option.type,
                position: this.#option.position == undefined || positions.indexOf(this.#option.position) == -1 ? this.#option.position = "topLeft" : this.#option.position,
                theme: this.#option.theme == undefined || themes.indexOf(this.#option.theme) == -1 ? this.#option.theme = "dark" : this.#option.theme,
                status: this.#option.status == undefined || statuses.indexOf(this.#option.status) == -1 ? this.#option.status = "danger" : this.#option.status,
            };
            return opt;
        } else { var opt = { type: "alertx", status: "Danger", animation: false, }; return opt; }
    }
    #_alert(contxt, position, theme, status, time) {
        var container, alertBox, conText, conIcon, ico, body;
        body = document.querySelector("body");
        container = elementCreator("div");
        alertBox = elementCreator("div");
        conText = elementCreator("div");
        conIcon = elementCreator("div");
        ico = elementCreator("span")
        container.classList.add("con_alert");
        container.classList.add("_" + position);
        alertBox.classList.add("_alert");
        if (status == "danger") { alertBox.classList.add("_alertDanger"); }
        else if (status == "warning") { alertBox.classList.add("_alertWarning"); }
        else if (status == "success") { alertBox.classList.add("_alertSuccess"); }
        else if (status == "primary") { alertBox.classList.add("_alertPrimary"); }
        conText.classList.add("_alertTxt");
        conText.setAttribute("dir", "auto")
        conText.innerHTML = contxt;
        conIcon.classList.add("_alertClose");
        if (theme == "dark") { alertBox.classList.add("_alertDark"); conIcon.classList.add("_closeDark"); }
        else { alertBox.classList.add("_alertLight"); conIcon.classList.add("_closeLight"); }
        ico.classList.add("material-symbols-outlined");
        conIcon.appendChild(ico)
        ico.innerHTML = "Close";
        body.appendChild(container)
        container.appendChild(alertBox)
        alertBox.appendChild(conText)
        alertBox.appendChild(conIcon)
        conIcon.onclick = () => { container.remove() }
        setTimeout(() => { container.remove() }, time)
    }
    #_alertx(title, contxt, position, theme, status, time) {
        time += 1000;
        var container, alertBox, body, containerstatus, titlebox, textbox, textbody, conclose, statusicon, closeicon;
        body = document.querySelector("body");
        container = elementCreator("div");
        alertBox = elementCreator("div");
        containerstatus = elementCreator("div");
        textbody = elementCreator("div");
        conclose = elementCreator("div");
        statusicon = elementCreator("span");
        titlebox = elementCreator("div");
        textbox = elementCreator("div");
        closeicon = elementCreator("span");
        container.classList.add("con_alert")
        container.classList.add("_" + position)
        alertBox.classList.add("_alertx")
        if (theme == "dark") { alertBox.classList.add("_alertDark"); conclose.classList.add("_closeDark"); }
        else { alertBox.classList.add("_alertLight"); conclose.classList.add("_closeLight"); }
        containerstatus.classList.add("x_con_icon")
        statusicon.classList.add("material-symbols-outlined")
        textbody.classList.add("_body_txt")
        titlebox.classList.add("_head_title")
        textbox.classList.add("_body_context")
        conclose.classList.add("_con_close_icon")
        closeicon.classList.add("material-symbols-outlined")
        body.appendChild(container)
        container.appendChild(alertBox)
        alertBox.appendChild(containerstatus)
        alertBox.appendChild(textbody)
        alertBox.appendChild(conclose)
        containerstatus.appendChild(statusicon)
        textbody.appendChild(titlebox)
        textbody.appendChild(textbox)
        conclose.appendChild(closeicon)
        titlebox.innerHTML = title;
        textbox.innerHTML = contxt
        closeicon.innerHTML = "close";
        if (status == "danger") { containerstatus.classList.add("_x_danger"); statusicon.innerHTML = "emergency_home"; titlebox.classList.add("_tit_danger"); }
        else if (status == "warning") { containerstatus.classList.add("_x_warning"); statusicon.innerHTML = "warning"; titlebox.classList.add("_tit_warning"); }
        else if (status == "success") { containerstatus.classList.add("_x_success"); statusicon.innerHTML = "priority"; titlebox.classList.add("_tit_success"); }
        else if (status == "primary") { containerstatus.classList.add("_x_primary"); statusicon.innerHTML = "report"; titlebox.classList.add("_tit_primary"); }
        setTimeout(() => { alertBox.style.cssText = "display:flex;max-height:68px"; }, 1000);
        if (textbox.innerHTML.length > 21) {
            closeicon.innerHTML = "expand_more"; closeicon.onclick = () => { clearTimeout(times); var newtime = time + 100; var ntime = setTimeout(() => { container.remove() }, newtime); alertBox.classList.add("showExpend"); textbox.classList.add("showExpend"); closeicon.innerHTML = "Close"; closeicon.onclick = () => { container.remove() }; };
        } else { conclose.onclick = () => { container.remove() }; }
        container.onmouseenter = () => { clearTimeout(times) }
        container.onmouseleave = () => { setTimeout(() => { container.remove() }, 1500) }
        var times = setTimeout(() => { container.remove() }, time)
    }
    #_alertz(title, contxt, position, theme, status, time) {
        var body, container, alertBox, head, bodytext, containerstatus, titlebox, conclose, statusicon, closeicon;
        body = document.querySelector("body");
        container = elementCreator("div");
        alertBox = elementCreator("div");
        head = elementCreator("div");
        bodytext = elementCreator("div");
        containerstatus = elementCreator("div");
        titlebox = elementCreator("div");
        conclose = elementCreator("div");
        statusicon = elementCreator("span");
        closeicon = elementCreator("span");
        container.classList.add("con_alert")
        container.classList.add("_" + position)
        alertBox.classList.add("_alertz")
        head.classList.add("_head_alertz")
        bodytext.classList.add("context")
        containerstatus.classList.add("con_zstatus_icon")
        statusicon.classList.add("material-symbols-outlined")
        titlebox.classList.add("z_head_title")
        conclose.classList.add("_con_close_icon")
        closeicon.classList.add("material-symbols-outlined")
        if (theme == "dark") { alertBox.classList.add("_alertDark"); conclose.classList.add("_closeDark"); }
        else { alertBox.classList.add("_alertLight"); conclose.classList.add("_closeLight"); }
        if (status == "danger") { containerstatus.classList.add("_z_danger"); statusicon.innerHTML = "emergency_home"; titlebox.classList.add("_z_danger"); }
        else if (status == "warning") { containerstatus.classList.add("_z_warning"); statusicon.innerHTML = "warning"; titlebox.classList.add("_z_warning"); }
        else if (status == "success") { containerstatus.classList.add("_z_success"); statusicon.innerHTML = "priority"; titlebox.classList.add("_z_success"); }
        else if (status == "primary") { containerstatus.classList.add("_z_primary"); statusicon.innerHTML = "report"; titlebox.classList.add("_z_primary"); }
        body.appendChild(container)
        container.appendChild(alertBox)
        alertBox.appendChild(head)
        alertBox.appendChild(bodytext)
        head.appendChild(containerstatus)
        containerstatus.appendChild(statusicon)
        head.appendChild(titlebox)
        titlebox.innerHTML = title;
        head.appendChild(conclose)
        conclose.appendChild(closeicon)
        closeicon.innerHTML = "close"
        bodytext.innerHTML = contxt;
        if (bodytext.innerHTML.length > 22) {
            closeicon.innerHTML = "expand_more"; closeicon.onclick = () => { clearTimeout(times); var newtime = time + 100; var ntime = setTimeout(() => { container.remove() }, newtime); alertBox.classList.add("showExpend"); bodytext.classList.add("showExpend"); closeicon.innerHTML = "Close"; closeicon.onclick = () => { container.remove() }; };
        } else { conclose.onclick = () => { container.remove() }; }
        container.onmouseenter = () => { clearTimeout(times) }
        container.onmouseleave = () => { setTimeout(() => { container.remove() }, 1500) }
        var times = setTimeout(() => { container.remove() }, time)
    }
    exec(context = "", title = "", time = 3000) {
        var options = this.#setOption()
        if (options.type == "alert") { this.#_alert(context, options.position, options.theme, options.status, time); }
        else if (options.type == "alertx") { this.#_alertx(title, context, options.position, options.theme, options.status, time); }
        else if (options.type == "alertz") { this.#_alertz(title, context, options.position, options.theme, options.status, time); }
        else { this.#_alertx(title, context, options.position, options.theme, options.status, time); }
    }
}


