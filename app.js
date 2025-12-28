
        function navigateTo(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show target page
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
                window.scrollTo(0, 0);
            }
        }

        function handleLogin(event) {
            event.preventDefault();
            alert('Login form submitted! (Frontend demo)');
            navigateTo('dashboard');
        }

        function handleSignup(event) {
            event.preventDefault();
            alert('Signup form submitted! (Frontend demo)');
            navigateTo('dashboard');
        }

        // Initialize with home page
        navigateTo('home');
   