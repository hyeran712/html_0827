/* =========================
   메인 배너 슬라이드
========================= */

const banners = [
  {
    image: "./img/banner/banner1.webp",
    title: "인생에 딱 한번 받는<br>할인 혜택",
    description: "첫구매 70% 할인 받으러가기 >",
  },
  {
    image: "./img/banner/banner2.webp",
    title: "실속장보기 곧 마감<br>1+1 할인혜택",
    description: "최대 15% 중복할인 받기 >",
  },
  {
    image: "./img/banner/banner3.webp",
    title: "올해 추석은 센스있게<br>인기 브랜드 총집합",
    description: "추석 선물 보러가기 >",
  },
  {
    image: "./img/banner/banner4.gif",
    title: "치즈덕후를 위한<br>CHEESE PARTY",
    description: "쫄깃고소 치즈로 식탁 완성하기 >",
  },
];

let bannerIndex = 0;

const bannerImage = document.querySelector("#bannerImage");
const bannerTitle = document.querySelector("#bannerTitle");
const bannerDesc = document.querySelector("#bannerDesc");
const bannerCurrent = document.querySelector("#bannerCurrent");
const bannerTotal = document.querySelector("#bannerTotal");

const prevBtn = document.querySelector(".banner-prev");
const nextBtn = document.querySelector(".banner-next");

/* 전체 배너 개수 */
bannerTotal.textContent = banners.length;

/* 배너 변경 함수 */
function showBanner() {
  bannerImage.src = banners[bannerIndex].image;
  bannerTitle.innerHTML = banners[bannerIndex].title;
  bannerDesc.textContent = banners[bannerIndex].description;
  bannerCurrent.textContent = bannerIndex + 1;
}

/* 오른쪽 버튼 */
nextBtn.addEventListener("click", function () {
  bannerIndex++;

  if (bannerIndex >= banners.length) {
    bannerIndex = 0;
  }

  showBanner();
});

/* 왼쪽 버튼 */
prevBtn.addEventListener("click", function () {
  bannerIndex--;

  if (bannerIndex < 0) {
    bannerIndex = banners.length - 1;
  }

  showBanner();
});

/* 3초마다 자동 슬라이드 */
setInterval(function () {
  bannerIndex++;

  if (bannerIndex >= banners.length) {
    bannerIndex = 0;
  }

  showBanner();
}, 3000);

/* =========================
   TOP PICK 추천 상품
========================= */

fetch("./json/0_toppick.json")
  .then((res) => res.json())
  .then((data) => {
    const box = document.querySelector(".toppick-list");

    data.forEach((item) => {
      box.innerHTML += `
        <a href="sub.html" target="_blank">
          <div class="product-card">

            <img src="${item.image}" alt="${item.name}">

            <button class="cart-btn" type="button">
              🛒 담기
            </button>

            <h4>${item.name}</h4>

            <h5>${item.price.toLocaleString()}원</h5>

          </div>
        </a>
      `;
    });
  });

/* =========================
   간식 · 베이커리 · 시리얼
========================= */

fetch("./json/1_snank.json")
  .then((res) => res.json())
  .then((data) => {
    const box = document.querySelector(".snank");

    data.forEach((item) => {
      box.innerHTML += `
        <a href="#">
          <div class="product-card">

            <img src="${item.image}" alt="${item.name}">

            <h4>${item.name}</h4>

            <h5>${item.price.toLocaleString()}원</h5>

          </div>
        </a>
      `;
    });
  });

/* =========================
   과일 · 채소
========================= */

fetch("./json/2_fruit.json")
  .then((res) => res.json())
  .then((data) => {
    const box = document.querySelector(".fruit");

    data.forEach((item) => {
      box.innerHTML += `
        <a href="#">
          <div class="product-card">

            <img src="${item.image}" alt="${item.name}">

            <h4>${item.name}</h4>

            <h5>${item.price.toLocaleString()}원</h5>

          </div>
        </a>
      `;
    });
  });

/* =========================
   만두
========================= */

fetch("./json/3_mandu.json")
  .then((res) => res.json())
  .then((data) => {
    const box = document.querySelector(".mandu");

    data.forEach((item) => {
      box.innerHTML += `
        <a href="#">
          <div class="product-card">

            <img src="${item.image}" alt="${item.name}">

            <button class="cart-btn">🛒 담기</button>

            <h4>${item.name}</h4>

            <h5>${item.price.toLocaleString()}원</h5>

          </div>
        </a>
      `;
    });
  });
/* =========================
   마켓핫딜
========================= */

fetch("./json/4_hotdeal.json")
  .then((res) => res.json())
  .then((data) => {
    const box = document.querySelector(".hotdeal-list");

    data.forEach((item) => {
      box.innerHTML += `
        <a href="#">
          <div class="hotdeal-card">

            <img src="${item.image}" alt="${item.name}">

            <button class="cart-btn">
              🛒 담기
            </button>

            <span class="hotdeal-badge">
              오늘특가
            </span>

            <h4>${item.name}</h4>

            <p class="original-price">
              ${item.original_price.toLocaleString()}원
            </p>

            <div class="price-box">

              <strong class="discount">
                ${item.discount}%
              </strong>

              <h5>
                ${item.price.toLocaleString()}원
              </h5>

            </div>

          </div>
        </a>
      `;
    });
  });
