/*
JavaScript File
*/
const bootScript = document.createElement('script');
bootScript.type = 'application/javascript';
bootScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js';
document.body.appendChild( bootScript );

class TopMenu extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
      this.innerHTML = `
      <link href="style.css" rel="stylesheet">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">County Fair</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about/">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/schedules/">Schedules</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/entertainment/">Entertainment</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
      `;
    }
}
customElements.define('top-menu', TopMenu);

class FooterMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="text-center text-lg-start bg-light text-muted">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                    <a href="https://facebook.com" target="_blank"><i class="bi-facebook" role="img"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="bi-twitter" role="img"></i></a>
                    <a href="https://youtube.com" target="_blank"><i class="bi-youtube" role="img"></i></a>
                </div>
            </section>
        
            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>County Fair
                            </h6>
                            <p>
                            Join us in the beautiful countryside at Bolado Park Event Center, home of the San Benito County Fair.
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    
                        </div>
                
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    
                            <h6 class="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="/about/" class="text-reset">About Us</a>
                            </p>
                            <p>
                                <a href="/entertainment/" class="text-reset">Entertainment</a>
                            </p>
                            <p>
                                <a href="/schedules/" class="text-reset">Schedules</a>
                            </p>
                        </div>
                        
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            <p><i class="fas fa-home me-3"></i> Somewhere, State 12345, US</p>
                            <p>
                            <i class="fas fa-envelope me-3"></i>
                                info@country-fair.com
                            </p>
                            <p><i class="fas fa-phone me-3"></i> 234 567 8888</p>
                            <p><i class="fas fa-print me-3"></i> 234 567 8899</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                &copy; 2021
            </div>
        </footer>
        `
    }
}
customElements.define('bottom-menu', FooterMenu);
