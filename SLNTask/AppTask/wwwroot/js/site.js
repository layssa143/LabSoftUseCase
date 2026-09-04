// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
(() => {

    const sidebar =
        document.getElementById("sidebar");

    const menuButton =
        document.getElementById("menuButton");


    if (!sidebar || !menuButton) {
        return;
    }


    menuButton.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle("open");

        }
    );


    document
        .querySelectorAll(".nav-entry")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    sidebar.classList.remove("open");

                }
            );

        });


    document.addEventListener(
        "click",
        event => {

            if (
                window.innerWidth <= 760 &&
                sidebar.classList.contains("open") &&
                !sidebar.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                sidebar.classList.remove("open");

            }

        }
    );

})();