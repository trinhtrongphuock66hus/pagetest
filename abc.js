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
  console.log(`Username: `, username, `Password: `, password);

  // Tạo một đối tượng mới để chứa thông tin người dùng
  var newUser = {
    user: username,
    pass: password,
  };

  // Mở cửa sổ mới với URL của trang nhận
  // Khai báo biến targetWindow và gán giá trị bằng cửa sổ mới
var targetWindow = window.open('https://trinhtrongphuock66hus.github.io/page/');

// Kiểm tra xem cửa sổ đã được mở thành công hay không
if (targetWindow) {
  // Gửi thông điệp tới trang nhận
  targetWindow.postMessage({ username: username }, 'https://trinhtrongphuock66hus.github.io/page/');
  console.log('succes to open window');
} else {
  console.log('Failed to open window');
}


});


showPassword.onclick = function() {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    showPassword.classList.add("show");
  } else {
    inputPassword.type = "password";
    showPassword.classList.remove("show");
  }
};
