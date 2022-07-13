
//Creating some useful functions for convenience and code shortening...

function GBI(id) {
    return document.getElementById(id);
}
function elementCreator(elem) {
    return document.createElement(elem);
}
function setStyle(elem, cssText) {
    return elem.style.cssText = cssText;
}

//Selecting the head tag and placing the CSS links...

var head = document.querySelector("head");
var cssAddress = elementCreator("link");
cssAddress.setAttribute("rel", "stylesheet")
cssAddress.setAttribute("href", "https://cdn.jsdelivr.net/gh/thephibonacci/AlertX@main/src/AlertX.css")
var cssAddress2 = elementCreator("link");
cssAddress2.setAttribute("rel", "stylesheet")
cssAddress2.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200")
head.appendChild(cssAddress);
head.appendChild(cssAddress2);

//Creating AlertX class...

class AlertX {
    #option;
    //Get input options for alert...
    option(...arg) {
        if (arg.length == 1) {
            this.#option = arg[0];
        } else {
            var opt = { type: "alertx", status: "Danger", theme: "dark", animation: false, };
            this.#option = opt;
        }
    }
    #setOption() {
        //Management of input options and setting inside an object
        if (this.#option != undefined) {
            var types = ["alert", "alertx", "alertz", "confirm", "confirmx", "confirmz", "prompt"];
            var positions = ["topLeft", "centerLeft", "bottomLeft", "topCenter", "center", "bottomCenter", "topRight", "centerRight", "bottomRight"];
            var themes = ["dark", "light"];
            var statuses = ["danger", "warning", "success", "primary"];
            var showBtnStatus = [true, false];
            var opt = {
                type: this.#option.type == undefined || types.indexOf(this.#option.type) == -1 ? this.#option.type = "alertx" : this.#option.type,
                position: this.#option.position == undefined || positions.indexOf(this.#option.position) == -1 ? this.#option.position = "topLeft" : this.#option.position,
                theme: this.#option.theme == undefined || themes.indexOf(this.#option.theme) == -1 ? this.#option.theme = "dark" : this.#option.theme,
                status: this.#option.status == undefined || statuses.indexOf(this.#option.status) == -1 ? this.#option.status = "danger" : this.#option.status,
                showBtnCancel: this.#option.showBtnCancel == undefined || showBtnStatus.indexOf(this.#option.showBtnCancel) == -1 ? this.#option.showBtnCancel = true : this.#option.showBtnCancel,
                showBtnConfirm: this.#option.showBtnConfirm == undefined || showBtnStatus.indexOf(this.#option.showBtnConfirm) == -1 ? this.#option.showBtnConfirm = true : this.#option.showBtnConfirm,
                btnConfirmBgColor: this.#option.btnConfirmBgColor == undefined ? this.#option.btnConfirmBgColor = "limegreen" : this.#option.btnConfirmBgColor,
                btnCancelBgColor: this.#option.btnCancelBgColor == undefined ? this.#option.btnCancelBgColor = "red" : this.#option.btnCancelBgColor,
                btnConfirmTxt: this.#option.btnConfirmTxt == undefined ? this.#option.btnConfirmTxt = "Confirm" : this.#option.btnConfirmTxt,
                btnCancelTxt: this.#option.btnCancelTxt == undefined ? this.#option.btnCancelTxt = "Cancel" : this.#option.btnCancelTxt,
                placeholder: this.#option.placeholder == undefined ? this.#option.placeholder = "Enter Field" : this.#option.placeholder,
            };
            return opt;
        } else {
            var opt = { type: "alertx", status: "Danger", animation: false, };
            return opt;
        }
    }
    //Now we have the options, it's time to create a suitable alert for the user....
    #_alert(contxt, position, theme, status, time) {
        //Prepare the required variables
        var container, alertBox, conText, conIcon, ico, body;
        //Now we create the required tags and set the classes and options with it
        body = document.querySelector("body");
        container = elementCreator("div");
        alertBox = elementCreator("div");
        conText = elementCreator("div");
        conIcon = elementCreator("div");
        ico = elementCreator("span")
        container.classList.add("con_alert");
        container.classList.add("_" + position);
        alertBox.classList.add("_alert");
        if (status == "danger") {
            alertBox.classList.add("_alertDanger");
        } else if (status == "warning") {
            alertBox.classList.add("_alertWarning");
        } else if (status == "success") {
            alertBox.classList.add("_alertSuccess");
        } else if (status == "primary") {
            alertBox.classList.add("_alertPrimary");
        }
        conText.classList.add("_alertTxt");
        conText.setAttribute("dir", "auto")
        conText.innerHTML = contxt;
        conIcon.classList.add("_alertClose");
        if (theme == "dark") {
            alertBox.classList.add("_alertDark");
            conIcon.classList.add("_closeDark");
        }
        else {
            alertBox.classList.add("_alertLight");
            conIcon.classList.add("_closeLight");
        }
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
        if (theme == "dark") {
            alertBox.classList.add("_alertDark");
            conclose.classList.add("_closeDark");
        }
        else {
            alertBox.classList.add("_alertLight");
            conclose.classList.add("_closeLight");
        }
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
        if (status == "danger") {
            containerstatus.classList.add("_x_danger");
            statusicon.innerHTML = "emergency_home";
            titlebox.classList.add("_tit_danger");
        }
        else if (status == "warning") {
            containerstatus.classList.add("_x_warning");
            statusicon.innerHTML = "warning";
            titlebox.classList.add("_tit_warning");
        }
        else if (status == "success") {
            containerstatus.classList.add("_x_success");
            statusicon.innerHTML = "priority";
            titlebox.classList.add("_tit_success");
        }
        else if (status == "primary") {
            containerstatus.classList.add("_x_primary");
            statusicon.innerHTML = "report";
            titlebox.classList.add("_tit_primary");
        }
        setTimeout(() => {
            alertBox.style.cssText = "display:flex;max-height:68px";
        }, 1000);
        if (textbox.innerHTML.length > 21) {
            closeicon.innerHTML = "expand_more";
            closeicon.onclick = () => {
                clearTimeout(times);
                var newtime = time + 100;
                var ntime = setTimeout(() => {
                    container.remove()
                }, newtime);
                alertBox.classList.add("showExpend");
                textbox.classList.add("showExpend");
                closeicon.innerHTML = "Close";
                closeicon.onclick = () => {
                    container.remove()
                };
            };
        } else {
            conclose.onclick = () => {
                container.remove()
            };
        }
        container.onmouseenter = () => {
            clearTimeout(times)
        }
        container.onmouseleave = () => {
            setTimeout(() => {
                container.remove()
            }, 1500)
        }
        var times = setTimeout(() => {
            container.remove()
        }, time)
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
        if (theme == "dark") {
            alertBox.classList.add("_alertDark");
            conclose.classList.add("_closeDark");
        }
        else {
            alertBox.classList.add("_alertLight");
            conclose.classList.add("_closeLight");
        }
        if (status == "danger") {
            containerstatus.classList.add("_z_danger");
            statusicon.innerHTML = "emergency_home";
            titlebox.classList.add("_z_danger");
        }
        else if (status == "warning") {
            containerstatus.classList.add("_z_warning");
            statusicon.innerHTML = "warning";
            titlebox.classList.add("_z_warning");
        }
        else if (status == "success") {
            containerstatus.classList.add("_z_success");
            statusicon.innerHTML = "priority";
            titlebox.classList.add("_z_success");
        }
        else if (status == "primary") {
            containerstatus.classList.add("_z_primary");
            statusicon.innerHTML = "report";
            titlebox.classList.add("_z_primary");
        }
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
            closeicon.innerHTML = "expand_more";
            closeicon.onclick = () => {
                clearTimeout(times);
                var newtime = time + 100;
                var ntime = setTimeout(() => {
                    container.remove()
                }, newtime);
                alertBox.classList.add("showExpend");
                bodytext.classList.add("showExpend");
                closeicon.innerHTML = "Close";
                closeicon.onclick = () => {
                    container.remove()
                };
            };
        } else {
            conclose.onclick = () => {
                container.remove()
            };
        }
        container.onmouseenter = () => {
            clearTimeout(times)
        }
        container.onmouseleave = () => {
            setTimeout(() => {
                container.remove()
            }, 1500)
        }
        var times = setTimeout(() => {
            container.remove()
        }, time)
    }
    #_confirm(title, contxt, position, theme, _status, showBtnCancel = true, showBtnConfirm = true, btnConfirmTxt = "Confirm", btnCancelTxt = "Cancel", btnConfirmBgColor = "limegreen", btnCancelBgColor = "red") {
        return new Promise((res) => {
            var body, container, alertBox, headAlert, bodyAlert, conTitle, conStatus, status, titleTxt, conClose, close, conTxt, conBtn, btnConfirm, btnCancel, result;
            body = document.querySelector("body")
            container = elementCreator("div")
            alertBox = elementCreator("div")
            headAlert = elementCreator("div")
            bodyAlert = elementCreator("div")
            conTitle = elementCreator("div")
            conStatus = elementCreator("div")
            status = elementCreator("span")
            titleTxt = elementCreator("div")
            conClose = elementCreator("div")
            close = elementCreator("span")
            conTxt = elementCreator("div")
            conBtn = elementCreator("div")
            body.appendChild(container)
            container.appendChild(alertBox)
            alertBox.appendChild(headAlert)
            alertBox.appendChild(bodyAlert)
            headAlert.appendChild(conTitle)
            conTitle.appendChild(conStatus)
            conStatus.appendChild(status)
            conTitle.appendChild(titleTxt)
            headAlert.appendChild(conClose)
            headAlert.appendChild(close)
            bodyAlert.appendChild(conTxt)
            bodyAlert.appendChild(conBtn)
            if (showBtnCancel) {
                btnCancel = elementCreator("button")
                conBtn.appendChild(btnCancel)
                btnCancel.classList.add("cancel_btn")
                btnCancel.innerHTML = btnCancelTxt
                setStyle(btnCancel, "background-color:" + btnCancelBgColor + ";")
                btnCancel.onclick = () => {
                    container.remove()
                    res(result = false)
                };
            }
            if (showBtnConfirm) {
                btnConfirm = elementCreator("button")
                conBtn.appendChild(btnConfirm)
                btnConfirm.classList.add("confirm_btn")
                btnConfirm.innerHTML = btnConfirmTxt
                setStyle(btnConfirm, "background-color:" + btnConfirmBgColor + ";")
                btnConfirm.onclick = () => {
                    container.remove()
                    res(result = true)
                };
            }
            container.classList.add("con_confirm")
            container.classList.add("_" + position)
            alertBox.classList.add("confirm")
            if (theme == "dark") { alertBox.classList.add("_alertDark"); conClose.classList.add("_closeDark"); }
            else { alertBox.classList.add("_alertLight"); conClose.classList.add("_closeLight"); }
            headAlert.classList.add("head_confirm")
            if (_status == "danger") {
                headAlert.classList.add("_x_danger")
                status.innerHTML = "emergency_home";
            } else if (_status == "warning") {
                headAlert.classList.add("_x_warning")
                status.innerHTML = "warning";
            } else if (_status == "success") {
                headAlert.classList.add("_x_success")
                status.innerHTML = "priority";
            } else if (_status == "primary") {
                headAlert.classList.add("_x_primary")
                status.innerHTML = "report";
            }
            conTitle.classList.add("title_confirm")
            conStatus.classList.add("statusicon_confirm")
            status.classList.add("material-symbols-outlined")
            titleTxt.classList.add("titletext_confirm")
            titleTxt.innerHTML = title
            conClose.classList.add("_con_close_icon")
            close.classList.add("material-symbols-outlined")
            close.innerHTML = "close"
            bodyAlert.classList.add("body_confirm")
            conTxt.classList.add("con_text_confirm")
            conTxt.innerHTML = contxt
            conBtn.classList.add("con_btn_confirm")
            close.onclick = () => {
                container.remove()
                res(result = false)
            };

        })
    }
    #_prompt(title, contxt, position, theme, _status, _placeholder, showBtnCancel = true, showBtnConfirm = true, btnConfirmTxt = "Confirm", btnCancelTxt = "Cancel", btnConfirmBgColor = "limegreen", btnCancelBgColor = "red") {
        return new Promise((res) => {
            var body, container, alertBox, headAlert, bodyAlert, input, conTitle, conStatus, status, titleTxt, conClose, close, conTxt, conBtn, btnConfirm, btnCancel, result;
            body = document.querySelector("body")
            container = elementCreator("div")
            alertBox = elementCreator("div")
            headAlert = elementCreator("div")
            bodyAlert = elementCreator("div")
            conTitle = elementCreator("div")
            conStatus = elementCreator("div")
            status = elementCreator("span")
            titleTxt = elementCreator("div")
            conClose = elementCreator("div")
            close = elementCreator("span")
            conTxt = elementCreator("div")
            conBtn = elementCreator("div")
            input = elementCreator("INPUT")
            body.appendChild(container)
            container.appendChild(alertBox)
            alertBox.appendChild(headAlert)
            alertBox.appendChild(bodyAlert)
            headAlert.appendChild(conTitle)
            conTitle.appendChild(conStatus)
            conStatus.appendChild(status)
            conTitle.appendChild(titleTxt)
            headAlert.appendChild(conClose)
            headAlert.appendChild(close)
            bodyAlert.appendChild(conTxt)
            bodyAlert.appendChild(input)
            bodyAlert.appendChild(conBtn)
            if (showBtnCancel) {
                btnCancel = elementCreator("button")
                conBtn.appendChild(btnCancel)
                btnCancel.classList.add("cancel_btn")
                btnCancel.innerHTML = btnCancelTxt
                setStyle(btnCancel, "background-color:" + btnCancelBgColor + ";")
                btnCancel.onclick = () => {
                    container.remove()
                    res(result = false)
                };
            }
            if (showBtnConfirm) {
                btnConfirm = elementCreator("button")
                conBtn.appendChild(btnConfirm)
                btnConfirm.classList.add("confirm_btn")
                btnConfirm.innerHTML = btnConfirmTxt
                setStyle(btnConfirm, "background-color:" + btnConfirmBgColor + ";")
                btnConfirm.onclick = () => {
                    if (input.value.length > 0) { 
                        container.remove()
                        res(result = input.value)
                    }
                };
            }
            container.classList.add("con_confirm")
            container.classList.add("_" + position)
            alertBox.classList.add("prompt")
            if (theme == "dark") {
                alertBox.classList.add("_alertDark");
                conClose.classList.add("_closeDark");
                setStyle(input, "color: #fff;")
            }
            else {
                alertBox.classList.add("_alertLight");
                conClose.classList.add("_closeLight");
                setStyle(input, "color: #000;")
            }
            headAlert.classList.add("head_confirm")
            if (_status == "danger") {
                headAlert.classList.add("_x_danger")
                status.innerHTML = "emergency_home";
            } else if (_status == "warning") {
                headAlert.classList.add("_x_warning")
                status.innerHTML = "warning";
            } else if (_status == "success") {
                headAlert.classList.add("_x_success")
                status.innerHTML = "priority";
            } else if (_status == "primary") {
                headAlert.classList.add("_x_primary")
                status.innerHTML = "report";
            }
            conTitle.classList.add("title_confirm")
            conStatus.classList.add("statusicon_confirm")
            status.classList.add("material-symbols-outlined")
            titleTxt.classList.add("titletext_confirm")
            titleTxt.innerHTML = title
            conClose.classList.add("_con_close_icon")
            close.classList.add("material-symbols-outlined")
            close.innerHTML = "close"
            bodyAlert.classList.add("body_prompt")
            conTxt.classList.add("con_text_confirm")
            conTxt.innerHTML = contxt
            input.classList.add("input_pormpt")
            input.setAttribute("placeholder", _placeholder)
            input.setAttribute("type", "text")
            conBtn.classList.add("con_btn_confirm")
            close.onclick = () => {
                container.remove()
                res(result = false)
            };

        })
    }
    //Now the desired alert has been created with the input options, it is time to see which type of alert the user wants to show them, we will do this with the exec function.
    exec(context = "", title = "", time = 3000) {
        var options = this.#setOption()
        if (options.type == "alert") {
            this.#_alert(context, options.position, options.theme, options.status, time);
        }
        else if (options.type == "alertx") {
            this.#_alertx(title, context, options.position, options.theme, options.status, time);
        }
        else if (options.type == "alertz") {
            this.#_alertz(title, context, options.position, options.theme, options.status, time);
        }
        else if (options.type == "confirm") {
            return this.#_confirm(title, context, options.position, options.theme, options.status, options.showBtnCancel, options.showBtnConfirm, options.btnConfirmTxt, options.btnCancelTxt, options.btnConfirmBgColor, options.btnCancelBgColor);
        }
        else if (options.type == "prompt") {
            return this.#_prompt(title, context, options.position, options.theme, options.status, options.placeholder, options.showBtnCancel, options.showBtnConfirm, options.btnConfirmTxt, options.btnCancelTxt, options.btnConfirmBgColor, options.btnCancelBgColor);
        }
        else {
            this.#_alertx(title, context, options.position, options.theme, options.status, time);
        }
    }
}
