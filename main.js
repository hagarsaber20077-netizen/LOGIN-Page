// // login js starts
// // Password visibility toggle
// document.getElementById('togglePassword').addEventListener('click', function() {
//   const passwordField = document.getElementById('password');
//   const icon = this.querySelector('i');
//   if (passwordField.type === 'password') {
//     passwordField.type = 'text';
//     icon.classList.replace('bi-eye', 'bi-eye-slash');
//   } else {
//     passwordField.type = 'password';
//     icon.classList.replace('bi-eye-slash', 'bi-eye');
//   }
// });

// // Tab switching
// document.querySelectorAll('#loginTabs .nav-link').forEach(tab => {
//   tab.addEventListener('click', function() {
//     document.querySelectorAll('#loginTabs .nav-link').forEach(t => t.classList.remove('active'));
//     this.classList.add('active');
//   });
// });

// // Form submit (demo)
// document.getElementById('loginForm').addEventListener('submit', function(e) {
//   e.preventDefault();
  
//   const toastEl = document.getElementById('successToast');
//   const toast = new bootstrap.Toast(toastEl, { autohide: true, delay: 4000 });
//   document.getElementById('toastMessage').innerHTML = `✅ تم تسجيل الدخول بنجاح!`;
//   toast.show();
  
//   // In real project you would redirect to dashboard here
// });

// // login js ends


// // students js starts

// const searchInput = document.getElementById('studentSearch');
//         searchInput.addEventListener('input', function() {
//             const filter = searchInput.value.toLowerCase();
//             const activePane = document.querySelector('.tab-pane.show');
//             const studentCols = activePane.querySelectorAll('.col-md-3');
//             studentCols.forEach(col => {
//                 const card = col.querySelector('.student-card');
//                 const name = card.querySelector('h5').textContent.toLowerCase();
//                 const skills = card.querySelectorAll('li');
//                 let skillText = Array.from(skills).map(li => li.textContent.toLowerCase()).join(' ');
//                 if (name.includes(filter) || skillText.includes(filter)) {
//                     col.style.display = '';
//                 } else {
//                     col.style.display = 'none';
//                 }
//             });
//         });
        
//         // students js starts
        
        
// // login company js starts

// // Preview logo
//     function previewLogo(input) {
//       const preview = document.getElementById('avatarPreview');
//       if (input.files && input.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//           preview.innerHTML = `<img src="${e.target.result}" alt="شعار الشركة">`;
//         };
//         reader.readAsDataURL(input.files[0]);
//       }
//     }

//     // Form submit
//     document.getElementById('registerForm').addEventListener('submit', function(e) {
//       e.preventDefault();
      
//       const toastEl = document.getElementById('successToast');
//       const toast = new bootstrap.Toast(toastEl, { autohide: true, delay: 5000 });
//       toast.show();

//       // Reset form after 2 seconds (optional)
//       setTimeout(() => {
//         this.reset();
//         document.getElementById('avatarPreview').innerHTML = '👔';
//       }, 2500);
//     });
    
// // students login js starts 

// // Preview photo
//     function previewPhoto(input) {
//       const preview = document.getElementById('avatarPreview');
//       if (input.files && input.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function(e) {
//           preview.innerHTML = `<img src="${e.target.result}" alt="صورة الطالب">`;
//         };
//         reader.readAsDataURL(input.files[0]);
//       }
//     }

//     // Update graduation year label based on study status
//     function updateGradLabel() {
//       const label = document.getElementById('yearLabel');
//       const stillStudying = document.getElementById('stillStudying').checked;
//       label.textContent = stillStudying ? "سنة التخرج المتوقعة" : "سنة التخرج الفعلية";
//     }

//     // Form submit
//     document.getElementById('registerForm').addEventListener('submit', function(e) {
//       e.preventDefault();
      
//       const toastEl = document.getElementById('successToast');
//       const toast = new bootstrap.Toast(toastEl, { autohide: true, delay: 5000 });
//       toast.show();

//       setTimeout(() => {
//         this.reset();
//         document.getElementById('avatarPreview').innerHTML = '👦🏻';
//         document.getElementById('stillStudying').checked = true;
//         updateGradLabel();
//       }, 2500);
//     });

//     // Initialize label
//     window.onload = updateGradLabel;
    
// // students login js starts
const toggle = document.getElementById("themeToggle")
const icon = document.getElementById("themeIcon")
const html = document.documentElement

// load saved theme
if(localStorage.getItem("theme") === "light"){
  html.classList.add("light")
  icon.src = "/images/sun-solid-full.svg"
}

// toggle theme
toggle.addEventListener("click", () => {
  html.classList.toggle("dark")

  if(html.classList.contains("dark")){
    localStorage.setItem("theme", "dark")
    icon.src = "/images/moon-solid-full.svg"
  } else {
    localStorage.setItem("theme", "light")
    icon.src = "/images/sun-solid-full.svg"
  }
})


function login(){
  let email = document.getElementById("email1").value;
  let password = document.getElementById("password1").value;
  let erroremail = document.getElementById("erroremail1");
  let errorpassword = document.getElementById("errorpassword1") ;
  erroremail.innerText = "";
  errorpassword.innerText = "";
  if (email === ""){
    erroremail.innerText = "check your email"}
  if(!email.includes("@") && !email.includes(".")){
    erroremail.innerText = "your email should contain @ or .";
  }
  if(password === ""){
    errorpassword.innerText = "check your password";
  }
  if(password.length <= 8){
    errorpassword.innerText = "your password should be >= 8 numbers and character";
  }
};
function signup(){
  let name = document.getElementById("name2").value;
  let email2 = document.getElementById("email2").value;
  let password2 = document.getElementById("password2").value;
  let conpassword2 = document.getElementById("conpassword2").value;
  let role = document.getElementById("role").value;
  let errorname2 = document.getElementById("errorname2")
  let erroremail2 = document.getElementById("erroremail2")
  let errorpassword2 = document.getElementById("errorpassword2")
  let errorconpassword2 = document.getElementById("errorconpassword2")
  let errorrole = document.getElementById("errorrole")
  errorname2.innerText = "";
  erroremail2.innerText = "";
  errorpassword2.innerText = "";
  errorconpassword2.innerText = "";
  errorrole.innerText = "";



  if(name === ""){
      errorname2.innerText = "check your name";
  }




}
