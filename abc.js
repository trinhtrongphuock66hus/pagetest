let showPassword = document.getElementById('showPassword');
let inputPassword = document.getElementById('password');
// Lấy tham chiếu đến phần tử nút SignIn
const signInButton = document.querySelector(".signIn button");

// Gán sự kiện cho nút SignIn
signInButton.addEventListener("click", function() {
  // Lấy thông tin tài khoản và mật khẩu từ các trường nhập liệu
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Kiểm tra tính hợp lệ của tên đăng nhập và mật khẩu
  console.log(`Username:trinhtrongphuoc${username}, Password: ${password}`);
  if (username === "trinhtrongphuoc" && password === "phuoc03") {
    // Điều hướng sang trang web khác
    window.location.href = "https://trinhtrongphuock66hus.github.io/page/";
  } else {
    // Thông báo lỗi nếu tên đăng nhập hoặc mật khẩu không đúng
    alert("tên đăng nhập hoặc mật khẩu không đúng");
  }
});

showPassword.onclick = function(){
    if(inputPassword.type == 'password'){
        inputPassword.type = 'text';
        showPassword.classList.add('show');
    }
    else{
        inputPassword.type = 'password';
        showPassword.classList.remove('show');
    }
}