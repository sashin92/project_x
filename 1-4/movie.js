
const contentTitle = document.querySelector('.main-content__title');
const contentDetail = document.querySelector('.main-content__detail');

function setInfoFromPrevPage() {
  const titleName = sessionStorage.getItem('titleName');
  const titleDescription = sessionStorage.getItem('titleDescription');
  if (titleName) {
    document.title = titleName;
    contentTitle.innerText = titleName;
  }
  if (titleDescription) {
    contentDetail.innerText = titleDescription;
  }
}

setInfoFromPrevPage();