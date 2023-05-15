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
  console.log(`Username: `,username,`Password: `,password);
  
  // khởi tạo đối tượng XMLHttpRequest
  var xhttp = new XMLHttpRequest();

  // Xác định hành động khi nhận được phản hồi từ máy chủ
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Xử lý kết quả trả về từ máy chủ
      var data = JSON.parse(this.responseText);
      console.log(data);
      const nguoiDung = data.find(user => user.user === username && user.pass === password);
      if (nguoiDung) {
        // Tài khoản và mật khẩu hợp lệ, chuyển hướng đến trang khác
        window.location.href = "https://trinhtrongphuock66hus.github.io/page/";
      } else {
        // Tài khoản và mật khẩu không hợp lệ, hiển thị thông báo lỗi
        alert("Tài khoản hoặc mật khẩu không đúng");
      }
    }
  };

  // Gửi yêu cầu HTTP GET đến địa chỉ '/users'
  xhttp.open("GET", "http://localhost:3000/users", true);
  xhttp.send();
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