const imagesData = [
  {
    img: "../images/cel1.jpeg",
    name: "Nelly Cheiboi",
    descripiton: 
    `From growing up in hardship in a village in rural Kenya to becoming a game-changer in the digital world, Nelly Cheboi's journey is a testament to the power of determination and the transformative potential of education. Faced with the challenges of basic sustenance and limited opportunities, Nelly’s life took a remarkable turn when she earned a full scholarship at Augustana College in Illinois to pursue her dreams in the United States.
      While working odd jobs to support her family, Cheboi discovered her true passion: computer science. With a newfound vision to break the cycle of intergenerational poverty, she devised a groundbreaking plan. Her mission? Harness the digital economy to unlock global opportunities for rural Africans and so, she founded TechLit Africa, a non-profit organization in 2018 along with Tyler Cinnamon. This innovative organization breathes new life into discarded computers, transforming them into tools of empowerment. In primary schools across Africa, TechLit Africa up-cycles these old computers, teaching vital digital skills to students. They have built ten computer labs in rural Kenya through their efforts, benefitting 4,000 students and 20 teachers.
      Nelly’s relentless drive and visionary approach have not gone unnoticed. She has rightfully earned a place on the prestigious Forbes 30 under 30 lists and was hailed as CNN Hero of the Year in 2022. Her relentless pursuit of change is fueled by a deep-rooted commitment to reshaping the lives of those facing similar hardships to her upbringing. 
      Driven by her passion, she later established Zawadi School in Kenya, where TechLit Africa took its first steps toward creating a brighter future.
    `,
  },
  {
    img: "../images/cel2.jpeg",
    name: "Monica Katebe Musonda",
    descripiton:
      "Okafor ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },
  {
    img: "../images/cel3.jpeg",
    name: "Catherine Lesetedi",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },
  {
    img: "../images/cel4.jpeg",
    name: "Oluwatosin Olaseinde",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },
  {
    img: "../images/cel5.jpeg",
    name: "Diarra Bousso",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },
  {
    img: "../images/cel6.jpeg",
    name: "Gisela Van Houcke",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },
  {
    img: "../images/cel7.jpeg",
    name: "Lumbie Mlambo",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },
  {
    img: "../images/cel8.jpeg",
    name: "Alice Mamaga AmoAko",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },
  {
    img: "../images/cel9.jpeg",
    name: "Maria Stevens",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },
  {
    img: "../images/cel10.jpeg",
    name: "Aisha Pandor",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },
  {
    img: "../images/cel11.jpeg",
    name: "Charlette N'Guessan",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },
  {
    img: "../images/cel12.jpeg",
    name: "Sandra Chukwudozie",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },

  {
    img: "../images/cel13.jpeg",
    name: "Sandra Mwiihangele",
    descripiton:
      "Jane ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump,Bacon ipsum dolor amet short loin drumstick landjaeger tail rump",
  },

  {
    img: "../images/cel14.jpeg",
    name: "Awamary Lowe-Khan",
    descripiton:
      "CEO Awamary Lowe-Khan who hails from Gambia is on a mission to build the next generation of women leaders in Africa, by focusing on innovative ways to help them flourish. In 2018, Awamary returned to The Gambia, driven by a deep desire to effect transformative change. She established The Woman Boss and The Disruptive Lab under the Innovate Gambia umbrella. The Woman Boss is dedicated to empowering women and girls by fostering entrepreneurship, innovation, and leadership. With a focus on tackling societal challenges such as gender-based violence and traditional gender roles.",
  },

  {
    img: "../images/cel15.jpeg",
    name: "Wassa Inoni",
    descripiton:
      "CEO Awamary Lowe-Khan who hails from Gambia is on a mission to build the next generation of women leaders in Africa, by focusing on innovative ways to help them flourish. In 2018, Awamary returned to The Gambia, driven by a deep desire to effect transformative change. She established The Woman Boss and The Disruptive Lab under the Innovate Gambia umbrella. The Woman Boss is dedicated to empowering women and girls by fostering entrepreneurship, innovation, and leadership. With a focus on tackling societal challenges such as gender-based violence and traditional gender roles.",
  },
];

const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close_btn")[0];
const imgContainer = document.querySelector(".gallery");
const prevbtn = document.getElementById("prev");
const nextbtn = document.getElementById("next");
const slideImg = document.getElementById("slider_image");
const modalTitle = document.getElementById("modal_title");
const modalBodyText = document.getElementById("modal_body");

let count = 0;

// close modal if user clicks anywhere out of the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Display images on page load
imagesData.forEach((data, index) => {
  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("img_wrapper");

  const imgElement = document.createElement("img");
  imgElement.src = data.img;
  imgElement.alt = data.name;

  imgWrapper.appendChild(imgElement);
  imgContainer.appendChild(imgWrapper);

  //  Event listener to open modal
  imgElement.addEventListener("click", () => {
    count = index;
    renderModal(data);
  });
});

function renderModal(data) {
  modal.style.display = "flex";
  slideImg.src = data.img;
  modalTitle.innerText = data.name;
  modalBodyText.innerText = data.descripiton;
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Slider Next Button Event Handler
nextbtn.addEventListener("click", () => {
  count++;
  if (count >= imagesData.length) {
    count = 0;
    slideImg.src = imagesData[0].img;
    modalTitle.innerText = imagesData[imagesData.length - 1].name;
    modalBodyText.innerText = imagesData[imagesData.length - 1].descripiton;
  } else {
    slideImg.src = imagesData[count].img;
    modalTitle.innerText = imagesData[count].name;
    modalBodyText.innerText = imagesData[count].descripiton;
  }
});

// Slider previous Button Event Handler
prevbtn.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = imagesData.length - 1;
    slideImg.src = imagesData[imagesData.length - 1].img;
    modalTitle.innerText = imagesData[imagesData.length - 1].name;
    modalBodyText.innerText = imagesData[imagesData.length - 1].descripiton;
  } else {
    slideImg.src = imagesData[count].img;
    modalTitle.innerText = imagesData[count].name;
    modalBodyText.innerText = imagesData[count].descripiton;
  }
});
