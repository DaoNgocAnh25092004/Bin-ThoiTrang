// ---------Hình ảnh chuyển đầu trang web-------------
var imgSliders = [
    '/assets/image/img_slider/Bia2.webp',
    '/assets/image/img_slider/Bia1.jpg',
    '/assets/image/img_slider/Bia5.jpg',
    '/assets/image/img_slider/Bia4.jpg',
    '/assets/image/img_slider/Bia3.webp',
    '/assets/image/img_slider/Bia6.jpg'
]
var imgIndexSliders = 0;
function changeImage () {
    var slider = document.getElementById('slider');
    slider.style.backgroundImage = `url(${imgSliders[imgIndexSliders]})`;
    
    imgIndexSliders++;
    // lặp lại hình đầu nếu chạy hết
    if(imgIndexSliders >= imgSliders.length){
        imgIndexSliders = 0;
    }
    setTimeout(changeImage, 5000);
};
// bắt đầu thay đổi ảnh khi load lại trang
window.onload = function(){
    changeImage();
};
// --------------- <!--đóng mở thanh menu trên mobile --> -------------------
// Lấy phần tử menu và nút menu
const menu = document.querySelector('.header__navbar-item--menu');
const menuButton = document.querySelector('.header__btn i');
const buttonClose = document.querySelector('.header__menu-close');
const overlay1 = document.querySelector('.nav__overlay1');
const overlay2 = document.querySelector('.nav__overlay2');
const headerUser =document.querySelector('.icon-user');
const iconUser = document.querySelector('.header__navbar-icon--link---user');
var screenWidth = window.innerWidth;
// Xử lý sự kiện click
function closeMenuHeader() {
    // Kiểm tra nếu menu hiện đang ẩn thì hiển thị và ngược lại
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        buttonClose.style.display = 'block';
        overlay1.style.display = 'block'
    } else {
        menu.style.display = 'none';
        buttonClose.style.display = 'none';
        overlay1.style.display = 'none'

    } 
    
};
function closeUserHeader() {
    if(screenWidth <= 740) {
        if(headerUser.style.display === 'none' || headerUser.style.display === '') {
            headerUser.style.display = 'block';
            overlay2.style.display = 'block'
            menu.style.display = 'none';
    
    
        } else  {
            headerUser.style.display = 'none';
            overlay2.style.display = 'none'
            menu.style.display = 'none';
    
    
        }
    }
    
}
menuButton.addEventListener('click', closeMenuHeader);
buttonClose.addEventListener('click', closeMenuHeader);
overlay1.addEventListener('click', closeMenuHeader);
overlay2.addEventListener('click', closeUserHeader);
iconUser.addEventListener('click', closeUserHeader);
// --------------- <!--đóng mở thanh menu trên mobile --> -------------------

// ----------------------Hiện menu footer --------------------
const onMenuFooters = document.querySelectorAll('.footer__header-on--menu');
const closeMenuFooters = document.querySelectorAll('.footer__header-close--menu');
const itemFooters = document.querySelectorAll('.footer__header-menu--item');

function clickOnMenuFooter() {
    // Lặp qua tất cả các nút 'onMenuFooter' và thực hiện thay đổi trạng thái
    onMenuFooters.forEach((onMenuFooter, index) => {
        onMenuFooter.addEventListener('click', () => {
            onMenuFooter.style.display = 'none';
            closeMenuFooters[index].style.display = 'block';
            itemFooters[index].style.display = 'block';
        });
    });

    // Lặp qua tất cả các nút 'closeMenuFooter' và thực hiện thay đổi trạng thái
    closeMenuFooters.forEach((closeMenuFooter, index) => {
        closeMenuFooter.addEventListener('click', () => {
            onMenuFooters[index].style.display = 'block';
            closeMenuFooter.style.display = 'none';
            itemFooters[index].style.display = 'none';
        });
    });
}

// Gọi hàm để thiết lập sự kiện cho các nút
clickOnMenuFooter();

