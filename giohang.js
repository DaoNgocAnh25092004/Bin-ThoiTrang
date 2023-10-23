
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
const textFooters = document.querySelectorAll('.footer__header-menu--item');
const itemFooters = document.querySelectorAll('.footer__touch-click');
// biến để theo dõi sự kiện click itemFooters
let itemFootersClicked = new Array(itemFooters.length).fill(true);
function clickOnMenuFooter() {
   itemFooters.forEach((itemFooters, index) => {
        itemFooters.addEventListener('click', () => {
            if(itemFootersClicked[index]) {
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
//--------------------------Menu bill ---------------------------------
const menuBill = document.querySelector('.content__buy-item--menu---info_box----bill');
const infoBill = document.querySelector('.content__buy-item--menu---info_box----input');
const checkOffBillIcon = document.querySelector('.fa-circle-check--off');
const checkOnBillIcon = document.querySelector('.fa-circle-check--on');
function menuBillClick() {
    menuBill.addEventListener('click', () => {
        if(infoBill.style.display === 'block') {
            infoBill.style.display = 'none';
            checkOffBillIcon.style.display = 'block'
            checkOnBillIcon.style.display = 'none'
        } else {
            infoBill.style.display = 'block'
            checkOnBillIcon.style.display = 'block'
            checkOffBillIcon.style.display = 'none'
        }
    })
}
menuBillClick();

//------------------------------lấy thong tin từ file thong tin sản phẩm-------------------
// Đọc giỏ hàng từ biến toàn cục hoặc localStorage

let gioHang = [];
if (localStorage.getItem('gioHang')) {
    gioHang = JSON.parse(localStorage.getItem('gioHang'));
}
// thay đổi giá trị của giỏ hàng
const takeH2Quantity = document.querySelector('.content__buy-item--menu---info_title h2');
const spanQuantity = takeH2Quantity.querySelector('span');
let soSanPham = parseInt(spanQuantity.textContent, 10);
function changeValueProduct () {
    var ttgh = "";
    soSanPham = 0;
    for (let i = 0; i < gioHang.length; i++){
        ttgh += `
            <div class="content__buy-item--menu---info_box" >
            <div class="content__buy-item--menu---info_box----img">
                <img src="${gioHang[i].hinhAnh}" alt="">
            </div>
            <div class="content__buy-item--menu---info_box----right">
                <div class="content__buy-item--menu---info_box----right__header">
                    <h2>${gioHang[i].ten}</h2>
                    <p>${gioHang[i].gia}</p>
                </div>
                <div class="content__buy-item--menu---info_box----right__footer">
                    <div>
                        <button class="decrease-quantity">-</button>
                        <input class= "product-quantity" type="text" value="${gioHang[i].soLuongSanPham}">
                        <button class="increase-quantity">+</button>
                    </div>
                    <div>
                        <p>SIZE: ${gioHang[i].sizeSanPham}</p>
                    </div>
                    <div class="ti-trash_cart--delete">
                        <i class="ti-trash" ></i>
                    </div>
                </div>
            </div>
        </div>
        `
        soSanPham   += 1;
    }

    document.getElementById('mycart').innerHTML = ttgh;
    spanQuantity.textContent = soSanPham.toString();
    // Thêm trình xử lý sự kiện vào nút +/- để thay đổi số lượng
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    const productQuantityInputs = document.querySelectorAll('.product-quantity');

    for (let i = 0; i < gioHang.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            if (gioHang[i].soLuongSanPham > 1) {
                gioHang[i].soLuongSanPham--;
                productQuantityInputs[i].value = gioHang[i].soLuongSanPham;
                updateLocalStorage();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            gioHang[i].soLuongSanPham++;
            productQuantityInputs[i].value = gioHang[i].soLuongSanPham;
            updateLocalStorage();
        });
    }
     // Thêm sự kiện nghe để xóa sản phẩm
     const showDeleteProductCart = document.getElementById('delete-product');
     const overlayDeleteProductCart = document.querySelector('.cart-blurred__screen');
     const cancelDeleteProductCart = document.querySelector('.delete-product--button button:first-child');
     const agreeDeleteProductCart = document.querySelector('.delete-product--button button:nth-child(2)');
     const removeButtons = document.querySelectorAll('.ti-trash_cart--delete i');
     
     // Hàm xử lý sự kiện xóa sản phẩm
     function handleDeleteClick(index) {
         showDeleteProductCart.style.display = 'block';
         overlayDeleteProductCart.style.display = 'block';
     
         agreeDeleteProductCart.addEventListener('click', function handleAgreeDeleteClick() {
             gioHang.splice(index, 1);
     
             // Cập nhật local storage
             updateLocalStorage();
     
             // Cập nhật giao diện giỏ hàng sau khi xóa sản phẩm
             changeValueProduct();
     
             // Đóng cửa sổ xác nhận xóa sản phẩm
             showDeleteProductCart.style.display = 'none';
             overlayDeleteProductCart.style.display = 'none';
     
             // Loại bỏ bộ lắng nghe sự kiện khi xác nhận đã xong nó sẽ lặp lại sự kiện cho tk đằng sau cứ thế tăn dần + 1
             agreeDeleteProductCart.removeEventListener('click', handleAgreeDeleteClick);
            
             // loading lại trang web khi xóa hết nếu không tồn tại một phần tử
             if (gioHang.length === 0) {
                 window.location.reload();
             }
         });
     }
     
     // Gắn bộ lắng nghe cho mỗi nút xóa sản phẩm
     removeButtons.forEach((removeButton, index) => {
         removeButton.addEventListener('click', () => {
             handleDeleteClick(index);
         });
     });
     
    
    overlayDeleteProductCart.addEventListener('click', () => {
        showDeleteProductCart.style.display = 'none';
        overlayDeleteProductCart.style.display = 'none';
    
    });
    
    cancelDeleteProductCart.addEventListener('click', () => {
        showDeleteProductCart.style.display = 'none';
        overlayDeleteProductCart.style.display = 'none';
    
    });

    // tính tổng tiền
    let totalPrice = 0;

    for (let i = 0; i < gioHang.length; i++) {
        const priceProductOfCart = parseFloat(gioHang[i].gia.replace('₫', '').replace(',', ''), 10);
        totalPrice += priceProductOfCart * parseInt(gioHang[i].soLuongSanPham);
        updateTotalPriceDisplay();
    }

    for (let i = 0; i < gioHang.length; i++) {
        const productPrice = parseFloat(gioHang[i].gia.replace('₫', '').replace(',', ''), 10);
        const decreaseButton = decreaseButtons[i];
        const increaseButton = increaseButtons[i];

        decreaseButton.addEventListener('click', () => {
            if (gioHang[i].soLuongSanPham > 1) {
                totalPrice -= productPrice;
                updateTotalPriceDisplay();
            }
        });

        increaseButton.addEventListener('click', () => {
            totalPrice += productPrice;
            updateTotalPriceDisplay();
        });
    }

    function updateTotalPriceDisplay() {
        const formattedTotalPrice = totalPrice.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
            useGrouping: true
        });
        const formattedTotalPriceWithComma = formattedTotalPrice.replace(/\./g, ',').replace(/\s/g, '');
        document.querySelector('.content__buy-info--price p').textContent = formattedTotalPriceWithComma;
    }
    // loading lại trang khi xóa hết sản phẩm để cập nhật giá
    if (gioHang.length === 0) {
        updateTotalPriceDisplay();
    }
    
}
changeValueProduct();
function updateLocalStorage() {
    localStorage.setItem('gioHang', JSON.stringify(gioHang));
}

// khởi tạo giỏ hàng khi tải lại trang
var storedCart = localStorage.getItem('gioHang');
if (storedCart) {
    gioHang = JSON.parse(storedCart);
    changeValueProduct ()
}
//---------------------- khi không có sản phẩm nào  ----------------------------
const cartProductNone = document.querySelector('.content__buy-item--menu---not_product');
const noProductCard = document.querySelector('.content__buy-item--menu---info')
function showCartProductNone() {
    if(gioHang.length === 0) {
        cartProductNone.style.display = 'block';
        noProductCard.style.display = 'none';
        
    } else if (gioHang.length > 0){
        cartProductNone.style.display = 'none';
        noProductCard.style.display = 'block';
    }
}
showCartProductNone();
//------------------------- ẩn thanh toán khi click cart ----------------------
const payCartChange = document.querySelector('.content__buy-button_pay');
const iconItemMenu = document.querySelector('.header__btn i');
const overlayItemMenu = document.querySelector('.nav__overlay1');
const overlayItemMenuIconUser = document.querySelector('.nav__overlay2');
const iconCloseMenu = document.querySelector('.header__menu-close i');
const iconUserHeader = document.querySelector('.header__navbar-icon--link---user i')
if (window.innerWidth <= 740) {
    // ẩn khi bật menu item
    menuButton.addEventListener('click', () => {
        payCartChange.style.display = 'none';
    })
    overlayItemMenu.addEventListener('click', () => {
        payCartChange.style.display = 'flex';
    })
    iconCloseMenu.addEventListener('click', () => {
        payCartChange.style.display = 'flex';
    })
    // icon user 
    iconUserHeader.addEventListener('click', () => {
        payCartChange.style.display = 'none';
    })
    overlayItemMenuIconUser.addEventListener('click', () => {
        payCartChange.style.display = 'flex';
    })
}