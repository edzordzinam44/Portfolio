const awesome =
document.querySelector('[data-element="awesome"]');
const intrinsicSwitch =
document.querySelector('#intrisic-switch');

// Set sizing attribute based on switch
intrinsicSwitch.addEventListener("change", () => {
    awesome.setAttribute(
        "data-sizing",
        intrinsicSwitch.checked ? "intrinsic" : "extrinic"
    )
})