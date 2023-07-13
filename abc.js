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
  
  // Tạo một đối tượng mới để chứa thông tin người dùng
  var newUser = {
    user: username,
    pass: password,
  };

  // Gửi yêu cầu HTTP POST đến địa chỉ '/login'
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://192.168.2.6/login", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  // Gửi thông tin tài khoản và mật khẩu dưới dạng JSON
  var data = JSON.stringify(newUser);
  xhttp.send(data);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Xử lý kết quả trả về từ máy chủ
      var responseData = JSON.parse(this.responseText);
      if (responseData.success) {
        window.location.href = "https://trinhtrongphuock66hus.github.io/page/";
      } else {
        alert(responseData.message);
      }
    }
  };  
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