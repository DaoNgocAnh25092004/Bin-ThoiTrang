//-------------------------- slider img ------------------------------
$(document).ready(function () {
    $('.image__slider').slick({
        slidesToShow: 1, // số phần tử hiện thị => mặc định là một
        slidesToScroll: 1, // lướt qua 1 phần tử => mặc định là một
        infinite: true, // chạy vô tận => mặc định là true
        arrows: true, // Cho phép hiển thị phím mũi tên chạy => mặc định là true
        autoplay: true,
        autoplaySpeed: 1000, // tự động chạy sau 5000s
        draggable: true, // cho phép tự lướt chuyển động
        prevArrow: `<button type='button' class='slick-prev image__slider-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next image__slider-arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
        dots: true, // các vị trí index ở dưới ảnh => mặc định là false
        // màn hình nhỏ
        responsive: [
            {
                breakpoint: 741,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});

// --------------- <!--đóng mở thanh menu trên mobile --> -------------------
// Lấy phần tử menu và nút menu
const menu = document.querySelector('.header__navbar-item--menu');
const menuButton = document.querySelector('.header__btn i');
const buttonClose = document.querySelector('.header__menu-close');
const overlay1 = document.querySelector('.nav__overlay1');
const overlay2 = document.querySelector('.nav__overlay2');
const headerUser = document.querySelector('.icon-user');
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
    if (screenWidth <= 740) {
        if (headerUser.style.display === 'none' || headerUser.style.display === '') {
            headerUser.style.display = 'block';
            overlay2.style.display = 'block'
            menu.style.display = 'none';


        } else {
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
const textFooters = document.querySelectorAll('.footer__header-menu--item');
const itemFooters = document.querySelectorAll('.footer__touch-click');
// biến để theo dõi sự kiện click itemFooters
let itemFootersClicked = new Array(itemFooters.length).fill(true);
function clickOnMenuFooter() {
    itemFooters.forEach((itemFooters, index) => {
        itemFooters.addEventListener('click', () => {
            if (itemFootersClicked[index]) {
                onMenuFooters[index].style.display = 'none';
                closeMenuFooters[index].style.display = 'block';
                textFooters[index].style.display = 'block';
                itemFootersClicked[index] = false;
            } else {
                onMenuFooters[index].style.display = 'block';
                closeMenuFooters[index].style.display = 'none';
                textFooters[index].style.display = 'none';
                itemFootersClicked[index] = true;
            }
        })
    })
}
clickOnMenuFooter();

//----------------------------Click menu items -------------------------------
const shirtItemsAll = document.querySelectorAll('.item__shirt')
shirtItemsAll.forEach(shirtItems => {
    shirtItems.addEventListener('click', () => {
        const shirtItemId = shirtItems.getAttribute('data-product-id');
        window.location.href = `thongtinsanpham.html?id=${shirtItemId}`;
    })
})
