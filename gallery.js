const imagesData = [
  {
    img: "./womenCEOs/cel1.jpeg",
    name: "Nelly Cheiboi",
    descripiton:
      "From growing up in hardship in a village in rural Kenya to becoming a game-changer in the digital world, Nelly Cheboi's journey is a testament to the power of determination and the transformative potential of education.",
  },
  {
    img: "./womenCEOs/cel2.jpeg",
    name: "Monica Katebe Musonda",
    descripiton:
      "Monica Katebe Musonda, an esteemed entrepreneur and businesswoman hailing from Zambia, has made significant strides in the food industry as the founder and CEO of Java Foods. Founded in 2012, Java Foods aims to revolutionize the food sector in Zambia by providing accessible and nutritious food products.",
  },
  {
    img: "./images/womenCEOs/cel3.jpeg",
    name: "Catherine Lesetedi",
    descripiton:
      "“If you think something is difficult, it becomes really difficult. If you think you can do it, sometimes you even surprise yourself.” These are the golden words of Catherine Lesetedi, the esteemed Group Chief Executive Officer of Botswana Insurance Holdings Limited (BIHL). She embodies a leadership style that defies convention.",
  },
  {
    img: "./images/womenCEOs/cel4.jpeg",
    name: "Oluwatosin Olaseinde",
    descripiton:
      "Oluwatosin Olaseinde, a highly accomplished chartered accountant with extensive experience in various aspects of finance, has made a significant impact in the industry. She is renowned as the Founder and CEO of Money Africa, a leading platform that enhances financial literacy and provides wealth management coaching.",
  },
  {
    img: "./images/womenCEOs/cel5.jpeg",
    name: "Diarra Bousso",
    descripiton:
      "Diarra Bousso, the visionary behind Diarrablu, has successfully merged her passion for fashion, mathematics, and education to create an innovative brand at the intersection of mathematics and fashion design. Drawing inspiration from her African heritage, Bousso uses mathematical concepts and equations to develop unique textile prints that form the foundation of her clothing line",
  },
  {
    img: "./images/womenCEOs/cel6.jpeg",
    name: "Gisela Van Houcke",
    descripiton:
      "Armed with a Bachelor's degree in English and French Law, Gisèla Van Houcke ventured beyond the legal realm, driven by a resolute mission to empower Black women and establish the world's first black beauty brand. Her exceptional achievements gained recognition when she stood as the sole francophone African woman in the 'business' category of the esteemed 'Forbes Under 30' ranking, predominantly occupied by young entrepreneurs from Anglophone Africa.",
  },
  {
    img: "",
    name: "Lumbie Mlambo",
    descripiton:
      "JB Dondolo, founded in 2016, is a social enterprise committed to removing barriers to clean water, sanitation, and hygiene in underserved communities. With a focus on empowering women and girls, JB Dondolo aims to break the cycle of poverty by providing access to essential resources and creating economic opportunities",
  },
  {
    img: "./images/womenCEOs/cel8.jpeg",
    name: "Alice Mamaga AmoAko",
    descripiton:
      "Alice Mamaga Akosua Amoako, a dynamic and visionary Digital Social Entrepreneur, is at the forefront of leveraging technology to create a brighter future for children with Autism in Ghana. As the project leader of the groundbreaking Autism Aid App Project, she has spearheaded the development of Ghana's first mobile application for Autism, gaining international acclaim and recognition from prestigious publications like The Guardian and Power FM.",
  },
  {
    img: "./images/womenCEOs/cel9.jpeg",
    name: "Maria Stevens",
    descripiton:
      "From a young age, Maria was captivated by the sight of professionals dressed in elegant attire, heading off to work. Little did she know then the challenges and sacrifices that came with such a life. However, her unwavering desire to be her own boss and make a difference in the business world never wavered.",
  },
  {
    img: "./images/womenCEOs/cel10.jpeg",
    name: "Aisha Pandor",
    descripiton:
      "Aisha R. Pandor is a visionary entrepreneur and the co-founder and CEO of SweepSouth, Africa's pioneering online platform for home cleaning services. Her passion for technology and social impact has driven SweepSouth's remarkable success, making it one of the fastest-growing startups in South Africa.",
  },
  {
    img: "./images/womenCEOs/cel11.jpeg.jpeg",
    name: "Charlette N'Guessan",
    descripiton:
      "Charlette N'Guessan is a trailblazing entrepreneur and CEO who has made history as the first woman to win the Africa Prize for Engineering Innovation. Her remarkable achievements and groundbreaking work in the tech industry have cemented her position as a true game-changer in today's world.",
  },
  {
    img: "./images/womenCEOs/cel12.jpeg",
    name: "Sandra Chukwudozie",
    descripiton:
      "Sandra Chukwudozie is a remarkable entrepreneur and CEO who is making waves in the renewable energy industry. As the CEO of Salpha Energy, she is on a mission to deepen access to affordable solar solutions in Nigeria's poorest communities.",
  },

  {
    img: "./images/womenCEOs/cel13.jpeg",
    name: "Sandra Mwiihangele",
    descripiton:
      "Sandra Mwiihangele, the visionary founder of Kiyomisandz Beauty Products, is revolutionizing the cosmetic industry in Namibia and beyond. With a passion for innovation and a keen understanding of customer needs, Sandra has built a thriving business that combines technical expertise with a commitment to quality and excellence.",
  },

  {
    img: "./images/womenCEOs/cel14.jpeg",
    name: "Awamary Lowe-Khan",
    descripiton:
      "CEO Awamary Lowe-Khan who hails from Gambia is on a mission to build the next generation of women leaders in Africa, by focusing on innovative ways to help them flourish. In 2018, Awamary returned to The Gambia, driven by a deep desire to effect transformative change. She established The Woman Boss and The Disruptive Lab under the Innovate Gambia umbrella. The Woman Boss is dedicated to empowering women and girls by fostering entrepreneurship, innovation, and leadership. With a focus on tackling societal challenges such as gender-based violence and traditional gender roles.",
  },

  {
    img: "./images/womenCEOs/cel15.jpeg",
    name: "Wassa Inoni",
    descripiton:
      "Wassa Inoni is an accomplished Program Manager, Entrepreneur, and catalyst for positive change. With a strong background in Agile Methodology, IT Systems Infrastructure, and Product and Project Management in Construction & IT, Wassa has left an indelible mark on both the business and academic spheres.",
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
  modal.style.display = "block";
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
