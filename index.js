let controlBtns = document.querySelectorAll(".controlBtn");
let gridItems = document.querySelectorAll(".grid-item");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");

let currentItem;

gridItems = Array.from(gridItems);

// 버튼에 이벤트 부여
const handleTextBtn = () => {
  controlBtns = Array.from(controlBtns);
  controlBtns.map((item) => {
    item.addEventListener("click", changeTextBtn);
  });
};

// 버튼 내용 변경 함수
const changeTextBtn = (e) => {
  currentItem = e.target.closest(".grid-item");
  if (e.target.classList.contains("minimize")) {
    e.target.innerText = "최소화";
    e.target.classList.add("maximize");
    e.target.classList.remove("minimize");
    handleMaxWindow(currentItem);
  } else {
    e.target.innerText = "최대화";
    e.target.classList.add("minimize");
    e.target.classList.remove("maximize");
    handleMinWindow(currentItem);
  }
};

// 최대화 함수
const handleMaxWindow = (item) => {
  gridItems.map((gridItem) => {
    gridItem.id !== item.id
      ? (gridItem.style.display = "none")
      : (gridItem.style.display = "block");
  });

  item.style.gridRow = "1 / 3";
  item.style.gridColumn = "1 / 3";
};

// 최소화 함수
const handleMinWindow = (item) => {
  gridItems.map((gridItem) => {
    gridItem.style.display = "block";
  });

  item1.style.gridRow = "1 / 2";
  item1.style.gridColumn = "1 / 2";
  item2.style.gridRow = "1 / 2";
  item2.style.gridColumn = "2/3";
  item3.style.gridRow = "2/3";
  item3.style.gridColumn = "1/2";
  item4.style.gridRow = "2/3";
  item4.style.gridColumn = " 2/3";
};

