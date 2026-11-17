
// =================================
// DUT360 - JAVASCRIPT
// =================================

// 1. NÚT THAM QUAN 360°

const tourButton = document.getElementById("tour-button");

if (tourButton) {
  tourButton.addEventListener("click", function() {
    alert(
      "Chức năng tham quan 360° sẽ được bổ sung " +
      "khi có ảnh panorama thực tế của trường."
    );
  });
}

// 2. MENU ĐIỆN THOẠI

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", function() {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}

// 3. ĐÓNG MENU KHI CHỌN MỘT MỤC

document.querySelectorAll(".nav-link").forEach(function(link) {
  link.addEventListener("click", function() {
    document.querySelectorAll(".nav-link").forEach(function(item) {
      item.classList.remove("active");
    });

    link.classList.add("active");

    if (navigation) {
      navigation.classList.remove("open");
    }

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});
