        // Sticky navbar on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-sticky');
            } else {
                navbar.classList.remove('navbar-sticky');
            }
        });

        // Close navbar when clicking on a link (mobile view)
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const navbarCollapse = document.querySelector('.navbar-collapse');
           
            navLinks.forEach(function(navLink) {
                navLink.addEventListener('click', function() {
                    if (navbarCollapse.classList.contains('show')) {
                        const toggle = document.querySelector('.navbar-toggler');
                        toggle.click();
                    }
                });
            });
        });
