//------------------------------------Hiện giỏ hàng-------------------
let gioHang = [];
if (localStorage.getItem('gioHang')) {
    gioHang = JSON.parse(localStorage.getItem('gioHang'));
}

const showCartInfo = document.querySelector('.showCart');
const iconHeaderCart = document.querySelector('.ti-shopping-cart-full');
const buttonMinusCart = document.querySelector('.showCart__info-footer--button button:first-child');
const appElement = document.querySelector('.app');
const screeenBlurred = document.querySelector('.cart-blurred__screen');
function clickShowCart() {
    iconHeaderCart.addEventListener('click', () => {
        if (showCartInfo.style.display === 'block') {
            showCartInfo.style.display = 'none';
            screeenBlurred.style.display = 'none'
        } else {
            showCartInfo.style.display = 'block';
            screeenBlurred.style.display = 'block'
        }
    });
    screeenBlurred.addEventListener('click', () => {
        showCartInfo.style.display = 'none';
        screeenBlurred.style.display = 'none';
    })
    // ẩn giỏ hàng khi tải lại trang
    window.addEventListener('load', () => {
        showCartInfo.style.display = 'none';
    })

}

clickShowCart();
// -------------------- chuyển trang khi click vào xem giỏ hàng------------------
const buttonNavigateToCart = document.querySelector('.showCart-footer button');
function clickbuttonNavigateToCart() {
    buttonNavigateToCart.addEventListener('click', () => {
        window.location.href = `giohang.html`;
    })

}
clickbuttonNavigateToCart();


//----------------------------lấy thông tin của sản phẩm thêm vào giỏ hàng-------------------------
const nameProductAddCart = document.querySelector('.content__information-item--title');
const priceProductAddCart = document.querySelector('.content__information-item--price---real');
const imageProductAddCart = document.querySelector('.content__information-item-main__photo img');
const quantityProductAddCart = document.querySelector('.content__information-item--numbers');
// Khai báo biến toàn cục để lưu trữ giỏ hàng




function showMyCart() {
    var ttgh = "";
    var totalQuantity = 0;
    for (let i = 0; i < gioHang.length; i++) {
        ttgh += `
        <div class="showCart__info">
            <div class="showCart__info-img">
                <img src="${gioHang[i].hinhAnh}" alt="">
            </div>
            <div class="showCart__infomation">
                <div class="showCart__info-header">
                    <p>${gioHang[i].ten}</p>
                    <i class="ti-close ti-close__cart"></i>
                </div>
                <div class="showCart__info-size">
                    <p>SIZE: ${gioHang[i].sizeSanPham}</p>
                    
                </div>
                <div class="showCart__info-footer">
                    <div class="showCart__info-footer--button">
                        <button class="decrease-quantity">-</button>
                        <input type="text" value="${gioHang[i].soLuongSanPham}" class="product-quantity">
                        <button class="increase-quantity">+</button>
                    </div>
                    <div class="showCart__info-footer--price">
                        <p>${gioHang[i].gia}</p>
                    </div>
                </div>
                
            </div>
        </div>
        `;
        totalQuantity += 1;
    }
    document.getElementById('mycart').innerHTML = ttgh;
    document.querySelector('.header__navbar-icon--link---quantity_cart').textContent = totalQuantity;
    
    const decreaseButtons = document.querySelectorAll('.decrease-quantity');
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    const productQuantityInputs = document.querySelectorAll('.product-quantity');

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
        document.querySelector('.showCart-footer--into__money p').textContent = formattedTotalPriceWithComma;
    }


    // Thêm trình xử lý sự kiện vào nút +/- để thay đổi số lượng
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
    const removeButtons = document.querySelectorAll('.ti-close__cart');
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            gioHang.splice(index, 1); // Xóa sản phẩm khỏi mảng
            showMyCart(); // Cập nhật hiển thị giỏ hàng
            updateLocalStorage();
            showCartProductNone();
            
        });
        
    });

    if (gioHang.length === 0) {
        updateTotalPriceDisplay();
    }
}

function updateLocalStorage() {
    localStorage.setItem('gioHang', JSON.stringify(gioHang));
}

showMyCart();


// khởi tạo giỏ hàng khi tải lại trang
var storedCart = localStorage.getItem('gioHang');
if (storedCart) {
    gioHang = JSON.parse(storedCart);
    showMyCart();
}


//---------------------- khi không có sản phẩm nào  ----------------------------
const cartProductNone = document.querySelector('.showCart-none');
function showCartProductNone() {
    if (gioHang.length === 0) {
        cartProductNone.style.display = 'block';


    } else if (gioHang.length > 0) {
        cartProductNone.style.display = 'none';
    }
}
showCartProductNone();
// -------------------------- magrintop show cart -----------------------------

if(!window.location.href.includes('thongtinsanpham.html')) {
    showCartInfo.style.marginTop = '-8px' 
}

// --------------------------------Số lượng sản phẩm ---------------------------

const quantityProductCartFullPage = document.querySelector('.showCart-header h2 span');
// Hàm để cập nhật số lượng sản phẩm trong giỏ hàng
function updateProductCount() {
    quantityProductCartFullPage.textContent = gioHang.length;
}
updateProductCount();
//--------------------------------- đóng cart on mobile -----------------------
const closeCartOnMobile = document.querySelector('.showCart-header_close')
// hàm ẩn cart on mobile
function clickCloseCartOnMobile() {
   closeCartOnMobile.addEventListener('click', () => {
       showCartInfo.style.display = 'none';
       screeenBlurred.style.display = 'none';
   })
}
clickCloseCartOnMobile();