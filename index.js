window.addEventListener("DOMContentLoaded", () => {
    const tt = new TiltToggle(".tilt-toggle");
});

class TiltToggle {
    pristine = "tilt-toggle--pristine";

    constructor(el) {
        this.el = document.querySelector(el);

        this.init();
    }
    init() {
        this.el ? .classList.add(this.pristine);
        this.el ? .addEventListener("change", () => {
            this.el ? .classList.remove(this.pristine);
        });
    }
}