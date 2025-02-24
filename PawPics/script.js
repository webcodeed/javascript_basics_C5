const breedSelect = document.querySelector("#breed");
const refreshBtn = document.querySelector("button");

const mainImg = document.querySelector("#main");
const loader = document.querySelector("#loader");

const apiURL = "https://dog.ceo/api";
async function init() {
  // Fetch breed list
  const breedListResponse = await fetch(`${apiURL}/breeds/list/all`);
  const breedListData = await breedListResponse.json();

  const breedList = Object.keys(breedListData.message);

  let breedOptions = `<option value="" selected disabled>Pick a breed...</option>`;

  breedList.forEach((breed) => {
    breedOptions += `<option value="${breed}">${breed}</option>`;
  });

  breedSelect.innerHTML = breedOptions;

  // Get a random image
  const randomImgRes = await fetch(`${apiURL}/breeds/image/random`);
  const randomImgData = await randomImgRes.json();

  mainImg.src = randomImgData.message;
  mainImg.addEventListener("load", () => {
    loader.classList.remove("show");
    mainImg.classList.add("show");
  });

  breedSelect.addEventListener("change", handleBreedChange);
  refreshBtn.addEventListener("click", handleRefreshBtn);
}

let breedType;

const handleBreedChange = async (event) => {
  if (event.target.value) {
    breedType = event.target.value;

    mainImg.classList.remove("show");
    loader.classList.add("show");

    const dogRes = await fetch(`${apiURL}/breed/${breedType}/images/random`);
    const dogData = await dogRes.json();

    mainImg.src = dogData.message;
  }
};

async function handleRefreshBtn(event) {
  mainImg.classList.remove("show");
  loader.classList.add("show");

  let res;

  if (breedType) {
    res = await fetch(`${apiURL}/breed/${breedType}/images/random`);
  } else {
    res = await fetch(`${apiURL}/breeds/image/random`);
  }

  const resData = await res.json();

  mainImg.src = resData.message;
}

init();
