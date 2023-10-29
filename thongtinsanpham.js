
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
// content__information-item--size---border
//---------------------------- size quần áo ---------------------------
const itemSize = document.querySelectorAll('.content__menu-size')
var valueSizeAddProduct = 'S';
function clickItemSize() {
    itemSize.forEach((item, index) => {
        item.addEventListener('click', () => {
            itemSize.forEach((item) => {
                item.classList.remove('content__information-item--size---border');
            })
            item.classList.add('content__information-item--size---border');
            valueSizeAddProduct = item.querySelector('p').textContent;
        });

    })
}
clickItemSize();

//---------------------- tăng số lượng -----------------------------
// Lấy ra các phần tử DOM cần sử dụng
const countElement = document.querySelector('.content__information-item--numbers');
const increaseButton = document.querySelector('.content__information-item--increase')
const minusButton = document.querySelector('.content__information-item--minus')

// Bắt đầu sự kiện click trên nút tăng
increaseButton.addEventListener("click", () => {
    countElement.value = parseInt(countElement.value) + 1;
});
minusButton.addEventListener('click', () => {
    if (countElement.value > 1)
        countElement.value = parseInt(countElement.value) - 1;
})
//---------------------------Hiện menu thông tin sản phẩm-------------------
const inforTitleItemMenu = document.querySelectorAll('.content__information-item--detail---header')
const inforFooterItemMenu = document.querySelectorAll('.content__information-item--detail---footer')
const inforMinusItem = document.querySelectorAll('.product-information__title--minus')
const inforPlusItem = document.querySelectorAll('.product-information__title--plus')

let itemInforClicked = new Array(inforTitleItemMenu.length).fill(true);
function clickInforItem() {
    inforTitleItemMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (itemInforClicked) {
                inforFooterItemMenu[index].style.display = 'block';
                inforPlusItem[index].style.display = 'none'
                inforMinusItem[index].style.display = 'block'
                itemInforClicked = false;
            } else {
                inforFooterItemMenu[index].style.display = 'none';
                inforPlusItem[index].style.display = 'block'
                inforMinusItem[index].style.display = 'none'
                itemInforClicked = true;
            }
        })
    })
}
clickInforItem();
//-------------------------------sự kiện click boder của ảnh----------------------------
const itemImgBoder = document.querySelectorAll('.content__information-item--secondary__image---item')
const itemImgMain = document.querySelector('.content__information-item-main__photo img')
function itemImgBoderClick() {
    itemImgBoder.forEach((item, index) => {
        item.addEventListener('click', () => {
            itemImgBoder.forEach((item) => {
                item.classList.remove('content__information-item--secondary__image---boder');
            })
            item.classList.add('content__information-item--secondary__image---boder');
        })
    })
}
itemImgBoderClick()
// -------------------------------sự kiện thay đổi thông tin của mỗi sản phẩm-----------------------------

items = [
    //Ảnh áo
    {
        img1: './assets/image/img_items/img_shirt/shirt_1/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_1/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_1/anh_3.webp',
        imgMain: './assets/image/img_items/img_shirt/shirt_1/anh_1.webp',
        name: 'Áo Thun Bin Dây Rút Kem - ATRK',
        priceDiscount: '350,000₫',
        priceReal: '245,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_2/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_2/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_2/anh_3.jpeg',
        imgMain: './assets/image/img_items/img_shirt/shirt_2/anh_1.webp',
        name: 'Tee Bin IsUs Đen - USDE',
        priceDiscount: '350,000₫',
        priceReal: '245,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_3/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_3/anh_2.webp',
        img3: '',
        imgMain: './assets/image/img_items/img_shirt/shirt_3/anh_1.webp',
        name: 'Bin Raglan Line Đen Tee Đen Hồng - DRLDH',
        priceDiscount: '350,000₫',
        priceReal: '240,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_4/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_4/anh_2.webp',
        img3: '',
        imgMain: './assets/image/img_items/img_shirt/shirt_4/anh_1.webp',
        name: 'Bin.Madmonks Tee Vietnam 84 Trắng - DV84 Trắng',
        priceDiscount: '440,000₫',
        priceReal: '290,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_5/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_5/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_5/anh_3.webp',
        imgMain: './assets/image/img_items/img_shirt/shirt_5/anh_1.webp',
        name: 'Bin.Madmonks Short Sleeved White Shirt - DMWS',
        priceDiscount: '450,000₫',
        priceReal: '290,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_6/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_6/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_6/anh_3.webp',
        imgMain: './assets/image/img_items/img_shirt/shirt_6/anh_1.webp',
        name: 'Tee Bin IsUs Kem - USK',
        priceDiscount: '350,000₫',
        priceReal: '245,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_7/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_7/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_7/anh_3.webp',
        imgMain: './assets/image/img_items/img_shirt/shirt_7/anh_1.webp',
        name: 'Bin Áo Khoác Dù có cổ - ADCC',
        priceDiscount: '550,000₫',
        priceReal: '390,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_8/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_8/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_8/anh_3.webp',
        imgMain: './assets/image/img_items/img_shirt/shirt_8/anh_1.webp',
        name: 'Bin.Madmnonks 84 Sport T-Shirt - DMS',
        priceDiscount: '440,000₫',
        priceReal: '290,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_9/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_9/anh_2.webp',
        img3: '',
        imgMain: './assets/image/img_items/img_shirt/shirt_9/anh_1.webp',
        name: 'Bin.Theeight Áo Thun Thể Thao Đen - DED',
        priceDiscount: '480,000₫',
        priceReal: '295,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_10/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_10/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_10/anh_3.jpg',
        imgMain: './assets/image/img_items/img_shirt/shirt_10/anh_1.webp',
        name: 'Bin.Madmonks Pockets Short-Sleeved Black Shirt - DMPS',
        priceDiscount: '450,000₫',
        priceReal: '290,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_11/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_11/anh_2.webp',
        img3: '',
        imgMain: './assets/image/img_items/img_shirt/shirt_11/anh_1.webp',
        name: 'Degrey Raglan Line Kem Tee Navy Kem - DRLKN',
        priceDiscount: '350,000₫',
        priceReal: '240,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_12/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_12/anh_2.webp',
        img3: '',
        imgMain: './assets/image/img_items/img_shirt/shirt_12/anh_1.webp',
        name: 'Bin Jacket V Black - DJVB',
        priceDiscount: '450,000₫',
        priceReal: '380,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_13/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_13/anh_2.jpeg',
        img3: './assets/image/img_items/img_shirt/shirt_13/anh_3.jpg',
        imgMain: './assets/image/img_items/img_shirt/shirt_13/anh_1.webp',
        name: 'Bin.Madmonks Jacket Biker - JBK',
        priceDiscount: '1,450,000₫',
        priceReal: '1,000,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_14/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_14/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_14/anh_3.webp',
        imgMain: './assets/image/img_items/img_shirt/shirt_14/anh_1.webp',
        name: 'Bin Wax Tee Xám - DWTX',
        priceDiscount: '380,000₫',
        priceReal: '210,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_15/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_15/anh_2.webp',
        img3: '',
        imgMain: './assets/image/img_items/img_shirt/shirt_15/anh_1.webp',
        name: 'Bin Black Jacket Basic - DBJB',
        priceDiscount: '550,000₫',
        priceReal: '450,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_16/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_16/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_16/anh_3.webp',
        imgMain: './assets/image/img_items/img_shirt/shirt_16/anh_1.webp',
        name: 'Bin Not A Basic T-Shirt Kem - DNBK',
        priceDiscount: '330,000₫',
        priceReal: '240,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_17/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_17/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_17/anh_3.webp',
        imgMain: './assets/image/img_items/img_shirt/shirt_17/anh_1.webp',
        name: 'Bin Not A Basic T-Shirt Đen - DNBD',
        priceDiscount: '330,000₫',
        priceReal: '240,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_18/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_18/anh_2.webp',
        img3: '',
        imgMain: './assets/image/img_items/img_shirt/shirt_18/anh_1.webp',
        name: 'Bin Raglan Line Nâu Tee Nâu Kem - DRLNAU',
        priceDiscount: '350,000₫',
        priceReal: '240,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_19/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_19/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_19/anh_3.webp',
        imgMain: './assets/image/img_items/img_shirt/shirt_19/anh_1.webp',
        name: 'Bin Raglan Line Green Tee Green Kem - DRLGK',
        priceDiscount: '350,000₫',
        priceReal: '240,000₫'
    },
    {
        img1: './assets/image/img_items/img_shirt/shirt_20/anh_1.webp',
        img2: './assets/image/img_items/img_shirt/shirt_20/anh_2.webp',
        img3: './assets/image/img_items/img_shirt/shirt_20/anh_3.webp',
        imgMain: './assets/image/img_items/img_shirt/shirt_20/anh_1.webp',
        name: 'Bin.Madmonks Áo Thun Gân Ba Lỗ - ABL',
        priceDiscount: '280,000₫',
        priceReal: '190,000₫'
    },
    //Ảnh phụ kiện
    {
        img1: './assets/image/img_items/img_accessory/accessory_1/1.jpeg',
        img2: './assets/image/img_items/img_accessory/accessory_1/2.jpeg',
        img3: './assets/image/img_items/img_accessory/accessory_1/3.jpeg',
        imgMain: './assets/image/img_items/img_accessory/accessory_1/1.jpeg',
        name: 'DÉP QUAI NGANG EVA Bin ',
        priceDiscount: '280,000₫',
        priceReal: '200,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_2/1.jpeg',
        img2: './assets/image/img_items/img_accessory/accessory_2/2.jpeg',
        img3: './assets/image/img_items/img_accessory/accessory_2/3.jpeg',
        imgMain: './assets/image/img_items/img_accessory/accessory_2/1.jpeg',
        name: 'KÍNH MẮT Y2K Bin',
        priceDiscount: '280,000₫',
        priceReal: '120,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_3/1.jpeg',
        img2: './assets/image/img_items/img_accessory/accessory_3/2.jpeg',
        img3: './assets/image/img_items/img_accessory/accessory_3/3.jpeg',
        imgMain: './assets/image/img_items/img_accessory/accessory_3/1.jpeg',
        name: 'TẤT CAO CỔ ICON Bin',
        priceDiscount: '90,000₫',
        priceReal: '30,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_4/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_4/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_4/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_4/1.webp',
        name: 'Bin Medium Leather Basic Balo Kem - MLBBK',
        priceDiscount: '380,000₫',
        priceReal: '300,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_5/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_5/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_5/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_5/1.webp',
        name: 'Bin Leather Basic Balo - LBB',
        priceDiscount: '580,000₫',
        priceReal: '430,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_6/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_6/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_6/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_6/1.webp',
        name: 'Bin Leather Basic Balo Kem - LBBK',
        priceDiscount: '580,000₫',
        priceReal: '430,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_7/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_7/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_7/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_7/1.webp',
        name: 'Bin Leather ToteBook Xám - DLTX',
        priceDiscount: '450,000₫',
        priceReal: '350,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_8/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_8/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_8/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_8/1.webp',
        name: 'Bin Leather ToteBook - DLT',
        priceDiscount: '450,000₫',
        priceReal: '350,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_9/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_9/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_9/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_9/1.webp',
        name: 'Bin Simili Tote Black - SITOB',
        priceDiscount: '390,000₫',
        priceReal: '350,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_10/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_10/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_10/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_10/1.webp',
        name: 'Bin Canvas Bag - TCV',
        priceDiscount: '380,000₫',
        priceReal: '280,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_11/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_11/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_11/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_11/1.webp',
        name: 'Bin Crocodile Leather Basic Balo - CLBB',
        priceDiscount: '580,000₫',
        priceReal: '430,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_12/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_12/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_12/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_12/1.webp',
        name: 'Bin Leather Basic Balo Xám - LBBX',
        priceDiscount: '580,000₫',
        priceReal: '430,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_13/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_13/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_13/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_13/1.webp',
        name: 'Balo Bin Leather Flap Backpack - DLFB',
        priceDiscount: '680,000₫',
        priceReal: '580,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_14/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_14/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_14/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_14/1.webp',
        name: 'Bin Premium Leather Backpack - PLBP',
        priceDiscount: '490,000₫',
        priceReal: '395,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_15/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_15/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_15/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_15/1.webp',
        name: 'Balo Quốc Dân Trắng - BQD Trắng',
        priceDiscount: '290,000₫',
        priceReal: '239,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_16/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_16/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_16/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_16/1.webp',
        name: 'Basic Backpack Bin Trắng - BBD Trắng',
        priceDiscount: '420,000₫',
        priceReal: '349,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_17/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_17/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_17/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_17/1.webp',
        name: 'Bin Mini Bag Drawstring Silver - MBDSg',
        priceDiscount: '280,000₫',
        priceReal: '190,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_18/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_18/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_18/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_18/1.webp',
        name: 'Bin Leather Tag - TAG',
        priceDiscount: '100,000₫',
        priceReal: '55,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_19/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_19/2.webp',
        img3: '',
        imgMain: './assets/image/img_items/img_accessory/accessory_19/1.webp',
        name: 'Xoài Mực - XM',
        priceDiscount: '200,000₫',
        priceReal: '120,000₫'
    },
    {
        img1: './assets/image/img_items/img_accessory/accessory_20/1.webp',
        img2: './assets/image/img_items/img_accessory/accessory_20/2.webp',
        img3: './assets/image/img_items/img_accessory/accessory_20/3.webp',
        imgMain: './assets/image/img_items/img_accessory/accessory_20/1.webp',
        name: 'Túi Da Bin Travel Leather Bag - TVB',
        priceDiscount: '1200,000₫',
        priceReal: '990,000₫'
    },
    // phần thông tin quần 
    {
        img1: './assets/image/img_items/img_trousers/trousers_1/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_1/2.jpeg',
        img3: './assets/image/img_items/img_trousers/trousers_1/3.jpeg',
        imgMain: './assets/image/img_items/img_trousers/trousers_1/1.webp',
        name: 'Bin.Theeight Quần Thể Thao Cam - QTTC',
        priceDiscount: '350,000₫',
        priceReal: '195,000₫'
    },
    {
        img1: './assets/image/img_items/img_trousers/trousers_2/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_2/2.jpeg',
        img3: './assets/image/img_items/img_trousers/trousers_2/3.jpg',
        imgMain: './assets/image/img_items/img_trousers/trousers_2/1.webp',
        name: 'Bin Quần Lửng Túi Hộp Ống Rộng - QLTH',
        priceDiscount: '550,000₫',
        priceReal: '390,000₫'
    },
    {
        img1: './assets/image/img_items/img_trousers/trousers_3/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_3/2.webp',
        img3: './assets/image/img_items/img_trousers/trousers_3/3.webp',
        imgMain: './assets/image/img_items/img_trousers/trousers_3/1.webp',
        name: 'Bin Quần short thể thao đai lưng bản lớn - BOX',
        priceDiscount: '500,000₫',
        priceReal: '320,000₫'
    },
    {
        img1: './assets/image/img_items/img_trousers/trousers_4/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_4/2.webp',
        img3: './assets/image/img_items/img_trousers/trousers_4/3.webp',
        imgMain: './assets/image/img_items/img_trousers/trousers_4/1.webp',
        name: 'Bin.Madmonks Basic Long Pant - DMPA',
        priceDiscount: '500,000₫',
        priceReal: '450,000₫'
    },
    {
        img1: './assets/image/img_items/img_trousers/trousers_5/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_5/2.webp',
        img3: './assets/image/img_items/img_trousers/trousers_5/3.webp',
        imgMain: './assets/image/img_items/img_trousers/trousers_5/1.webp',
        name: 'Bin Váy Xếp Ly - VXL',
        priceDiscount: '500,000₫',
        priceReal: '390,000₫'
    },
    {
        img1: './assets/image/img_items/img_trousers/trousers_6/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_6/2.webp',
        img3: './assets/image/img_items/img_trousers/trousers_6/3.webp',
        imgMain: './assets/image/img_items/img_trousers/trousers_6/1.webp',
        name: 'Bin 2 layer culottes pants - DLCP',
        priceDiscount: '550,000₫',
        priceReal: '400,000₫'
    },
    {
        img1: './assets/image/img_items/img_trousers/trousers_7/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_7/2.webp',
        img3: '',
        imgMain: './assets/image/img_items/img_trousers/trousers_7/1.webp',
        name: 'Bin short cargo pants Kem - DSCPK',
        priceDiscount: '450,000₫',
        priceReal: '250,000₫'
    },
    {
        img1: './assets/image/img_items/img_trousers/trousers_8/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_8/2.webp',
        img3: '',
        imgMain: './assets/image/img_items/img_trousers/trousers_8/1.webp',
        name: 'Bin short cargo pants Đen - DSCPD',
        priceDiscount: '450,000₫',
        priceReal: '250,000₫'
    },
    {
        img1: './assets/image/img_items/img_trousers/trousers_9/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_9/2.webp',
        img3: './assets/image/img_items/img_trousers/trousers_9/3.jpeg',
        imgMain: './assets/image/img_items/img_trousers/trousers_9/1.webp',
        name: 'Bin.madmonks short Pant xám rêu - DMQR',
        priceDiscount: '250,000₫',
        priceReal: '190,000₫'
    },
    {
        img1: './assets/image/img_items/img_trousers/trousers_10/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_10/2.webp',
        img3: './assets/image/img_items/img_trousers/trousers_10/3.webp',
        imgMain: './assets/image/img_items/img_trousers/trousers_10/1.webp',
        name: 'Bin.madmonks short Pant trắng - DMQT',
        priceDiscount: '380,000₫',
        priceReal: '190,000₫'
    },
    {
        img1: './assets/image/img_items/img_trousers/trousers_11/1.webp',
        img2: './assets/image/img_items/img_trousers/trousers_11/2.webp',
        img3: './assets/image/img_items/img_trousers/trousers_11/3.webp',
        imgMain: './assets/image/img_items/img_trousers/trousers_11/1.webp',
        name: 'Binmadmonks short pant đen- DMQS',
        priceDiscount: '380,000₫',
        priceReal: '190,000₫'
    },
    // thông tin của set
    {
        img1: './assets/image/img_items/img_set/set_1/1.webp',
        img2: './assets/image/img_items/img_set/set_1/2.jpeg',
        img3: './assets/image/img_items/img_set/set_1/3.jpeg',
        imgMain: './assets/image/img_items/img_set/set_1/1.webp',
        name: 'SET BỘ MURAD Bin',
        priceDiscount: '800,000₫',
        priceReal: '480,000₫'
    },
    {
        img1: './assets/image/img_items/img_set/set_2/1.jpeg',
        img2: './assets/image/img_items/img_set/set_2/2.jpeg',
        img3: './assets/image/img_items/img_set/set_2/3.jpeg',
        imgMain: './assets/image/img_items/img_set/set_2/1.jpeg',
        name: 'SET BỘ POLO Bin AUT',
        priceDiscount: '790,000₫',
        priceReal: '520,000₫'
    },
    {
        img1: './assets/image/img_items/img_set/set_3/1.webp',
        img2: './assets/image/img_items/img_set/set_3/2.jpeg',
        img3: './assets/image/img_items/img_set/set_3/3.jpeg',
        imgMain: './assets/image/img_items/img_set/set_3/1.webp',
        name: 'SET BỘ MINOR Bin',
        priceDiscount: '700,000₫',
        priceReal: '500,000₫'
    },
]
// Trong file thongtinsanpham.html
const urlParams = new URLSearchParams(window.location.search);// nhiều đối tượng nên phải tạo như này
const productId = urlParams.get('id');

// Lấy dữ liệu sản phẩm từ items.js
const productData = items[productId - 1];

// Cập nhật nội dung trang thongtinsanpham.html dựa trên thông tin sản phẩm
// Ví dụ: Cập nhật hình ảnh sản phẩm

const productImages = document.querySelectorAll('.content__information-item--secondary__image---item img');
const productImageMain = document.querySelector('.content__information-item-main__photo img');
const productName = document.querySelector('.content__information-item--title');
const productPriceDiscount = document.querySelector('.content__information-item--price---discount');
const productPriceReal = document.querySelector('.content__information-item--price---real');
const percentDiscountElement = document.querySelector('.content__information-item--price---percentdiscount');
function chuyenTrangItem() {
    //ảnh chính
    if (productData.imgMain) {
        productImageMain.src = productData.imgMain;
    }

    //ảnh menu
    for (let i = 0; i < productImages.length; i++) {
        const imgKey = `img${i + 1}`;
        if (productData[imgKey]) {
            productImages[i].src = productData[imgKey];

            // Add click event listener to each secondary image
            productImages[i].addEventListener('click', () => {
                productImageMain.src = productData[imgKey];
            });
        } else {
            // Ẩn các thẻ img nếu không có hình ảnh tương ứng
            productImages[i].style.display = 'none';
        }
    }

    // Cập nhật tên sản phẩm
    productName.textContent = productData.name;

    // Cập nhật giá giảm sản phẩm
    productPriceDiscount.textContent = productData.priceDiscount;

    // cập nhật giá thât sản phẩm 
    productPriceReal.textContent = productData.priceReal;

    //tính giảm giá 
    const priceDiscount = parseInt(productPriceDiscount.textContent.replace('₫', '').replace(',', ''), 10);
    const priceReal = parseInt(productPriceReal.textContent.replace('₫', '').replace(',', ''), 10);
    const discountPercent = ((priceDiscount - priceReal) / priceDiscount) * 100;

    // Cập nhật nội dung của phần tử tỷ lệ giảm giá
    percentDiscountElement.textContent = `-${discountPercent.toFixed(0)}%`;
}

chuyenTrangItem();
//------------------------------------Hiện giỏ hàng-------------------
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
const inforProductAddCart = document.querySelector('.content__information-item--buy---add');
const nameProductAddCart = document.querySelector('.content__information-item--title');
const priceProductAddCart = document.querySelector('.content__information-item--price---real');
const imageProductAddCart = document.querySelector('.content__information-item-main__photo img');
const quantityProductAddCart = document.querySelector('.content__information-item--numbers');
// Khai báo biến toàn cục để lưu trữ giỏ hàng
var gioHang = [];
function clickButtonAddCart() {
    clickItemSize();
    inforProductAddCart.addEventListener('click', () => {
        const productName = nameProductAddCart.textContent;
        const productSizeAdd = valueSizeAddProduct;
        const productIndex = gioHang.findIndex((product) => product.ten === productName && product.sizeSanPham === productSizeAdd);

        if (productIndex !== -1) {
            // Sản phẩm đã tồn tại trong giỏ hàng với cùng tên và size, cộng thêm số lượng vào số lượng hiện có
            gioHang[productIndex].soLuongSanPham += parseInt(quantityProductAddCart.value);
        } else {
            let infoProduct = {
                ten: productName,
                gia: priceProductAddCart.textContent,
                hinhAnh: imageProductAddCart.src,
                soLuongSanPham: parseInt(quantityProductAddCart.value),
                sizeSanPham: valueSizeAddProduct
            };
            gioHang.push(infoProduct);
        }

        // Hiển thị giỏ hàng
        showCartInfo.style.display = 'block';
        screeenBlurred.style.display = 'block';
        // Lưu giỏ hàng vào localStorage
        localStorage.setItem('gioHang', JSON.stringify(gioHang));
        showMyCart();
        showCartProductNone();

        // update lại số lượng sản phẩm bên mobile
        updateProductCount();

    })

}

clickButtonAddCart();


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
            // update lại số lượng sản phẩm bên mobile
            updateProductCount();
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

if (window.location.href.includes('thongtinsanpham.html')) {
    showCartInfo.style.marginTop = '-45px'
}
//------------------------- ẩn thanh toán khi click cart ----------------------
const showMenuButtonAddProduct = document.querySelector('.content__information-item--buy__show');
const iconItemMenu = document.querySelector('.header__btn i');
const overlayItemMenu = document.querySelector('.nav__overlay1');
const overlayItemMenuIconUser = document.querySelector('.nav__overlay2');
const iconCloseMenu = document.querySelector('.header__menu-close i');
const iconUserHeader = document.querySelector('.header__navbar-icon--link---user i')
if (window.innerWidth <= 740) {
    iconHeaderCart.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'none';
    })
    screeenBlurred.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'block';
    })
    // ẩn khi bật menu item
    iconItemMenu.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'none';
    })
    overlayItemMenu.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'block';
    })
    iconCloseMenu.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'block';
    })
    // icon user 
    iconUserHeader.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'none';
    })
    overlayItemMenuIconUser.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'block';
    })
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
        // inforProductAddCart.style.display = 'block'
    })
 }
 clickCloseCartOnMobile();