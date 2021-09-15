/*
JavaScript File
*/
const bootScript = document.createElement('script');
bootScript.type = 'application/javascript';
bootScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js';
document.body.appendChild( bootScript );

// class CustomMenu extends HTMLElement {
//     constructor() {
//         super();
//     }
//     connectedCallback() {
//       this.innerHTML = `
//       <link href="style.css" rel="stylesheet">
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">Navbar</a>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">Link</a>
//               </li>
//               <li class="nav-item dropdown">
//                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Dropdown
//                 </a>
//                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li><a class="dropdown-item" href="#">Action</a></li>
//                   <li><a class="dropdown-item" href="#">Another action</a></li>
//                   <li><hr class="dropdown-divider"></li>
//                   <li><a class="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link disabled">Disabled</a>
//               </li>
//             </ul>
//             <form class="d-flex">
//               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//               <button class="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>


//       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://nationalgeographicpartners.com/app/uploads/2020/11/screen-shot-2020-10-19-at-9_43_51-pm.png" class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="https://www.nysut.org/~/media/images/nysut/news/2020/september/news_200930_hispanicheritage_04.jpg" class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="https://via.placeholder.com/150x75/333" class="d-block w-100" alt="...">
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//       `;
//     }
// }
  
// customElements.define('my-custom-menu', CustomMenu);