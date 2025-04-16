/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 * FIND GOOD FONT
 * sedan,coupe,suv,etc
 */
function setupCarouselControls(type) {
    const nextDom = document.getElementById(`${type}-next`);
    const prevDom = document.getElementById(`${type}-prev`);
    const carouselDom = document.getElementById(`${type}-carousel`);
    const listItemDom = carouselDom.querySelector('.list');
    const thumbnailDom = carouselDom.querySelector('.thumbnail');

    let timeRunning = 3000;
    let runTimeOut;

    function showSlider(direction) {
        const itemSlider = carouselDom.querySelectorAll('.list .item');
        const itemThumbnail = carouselDom.querySelectorAll('.thumbnail .item');

        if (itemSlider.length === 0 || itemThumbnail.length === 0) {
            console.warn(`No items found for type: ${type}`);
            return;
        }

        if (direction === 'next') {
            listItemDom.appendChild(itemSlider[0]);
            thumbnailDom.appendChild(itemThumbnail[0]);
            carouselDom.classList.add('next');

            setTimeout(() => {
                carouselDom.classList.remove('next');
            }, 500);
        } else {
            const lastIndex = itemSlider.length - 1;
            listItemDom.prepend(itemSlider[lastIndex]);
            thumbnailDom.insertBefore(itemThumbnail[itemThumbnail.length - 1], thumbnailDom.firstChild);
            carouselDom.classList.add('prev');

            setTimeout(() => {
                carouselDom.classList.remove('prev');
            }, 500);
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);
    }

    if (nextDom && prevDom) {
        nextDom.onclick = () => showSlider('next');
        prevDom.onclick = () => showSlider('prev');
    } else {
        console.warn(`Navigation buttons not found for ${type}`);
    }

    // Ensure main image starts at index 0 and its corresponding thumbnail is at the end
    const items = thumbnailDom.querySelectorAll('.item');
    if (items.length > 1) {
        thumbnailDom.appendChild(items[0]);
    }
}


const vehicles = {
  electric: [
    {
      brand: "Rimac",
      model: "Nevera R",
      image: "assets/rimacNeveraR.jpg",
      author: "ELECTRIC",
      description:
        "The Rimac Nevera R is a fully electric hypercar designed and manufactured in Croatia. It features advanced torque vectoring and a carbon-fiber monocoque chassis.",
      stats: {
        horsepower: "1914 hp",
        topSpeed: "258 mph",
        acceleration: "0-60 mph in 1.85 sec",
        weight: "5,070 lbs",
        range: "340 miles"
      }
    },
    {
      brand: "Rivian",
      model: "R1T",
      image: "assets/r1T.jpg",
      author: "ELECTRIC",
      description:
        "The Rivian R1T is a rugged electric pickup truck designed for adventure, with quad-motor all-wheel drive and a flexible gear tunnel.",
      stats: {
        horsepower: "835 hp",
        topSpeed: "115 mph",
        acceleration: "0-60 mph in 3.0 sec",
        weight: "7,148 lbs",
        range: "314 miles"
      }
    },
    {
      brand: "Aptera Motors",
      model: "Solar EV",
      image: "assets/aptera.jpg",
      author: "ELECTRIC",
      description:
        "The Aptera Solar EV is a lightweight, three-wheeled vehicle that can charge using solar energy, ideal for high-efficiency urban commuting.",
      stats: {
        horsepower: "180 hp",
        topSpeed: "110 mph",
        acceleration: "0-60 mph in 3.5 sec",
        weight: "1,800 lbs",
        range: "400+ miles"
      }
    },
    {
      brand: "Lucid",
      model: "Air Sapphire",
      image: "assets/lucid-air-sapphire.jpg",
      author: "ELECTRIC",
      description:
        "The Lucid Air Sapphire is a luxury EV with a tri-motor setup offering incredible performance and range, targeting the premium sedan market.",
      stats: {
        horsepower: "1,234 hp",
        topSpeed: "205 mph",
        acceleration: "0-60 mph in 1.89 sec",
        weight: "5,236 lbs",
        range: "427 miles"
      }
    }
  ],
  
  hybrid: [
    {
      brand: "Porsche",
      model: "Semper Vivus",
      image: "assets/lohner-porsche.jpg",
      author: "HYBRID",
      description:
        "The Porsche Semper Vivus was the first functional hybrid vehicle ever made, combining two electric motors with a combustion engine.",
      stats: {
        horsepower: "4 hp",
        topSpeed: "22 mph",
        acceleration: "N/A",
        weight: "3,527 lbs",
        mpg: "N/A"
      }
    },
    {
      brand: "Toyota",
      model: "Prius",
      image: "assets/prius2024.jpg",
      author: "HYBRID",
      description:
        "The Toyota Prius 2024 is a benchmark for hybrid efficiency and reliability, offering modern styling and high fuel economy.",
      stats: {
        horsepower: "194 hp",
        topSpeed: "112 mph",
        acceleration: "0-60 mph in 7.1 sec",
        weight: "3,097 lbs",
        mpg: "58 city / 53 highway"
      }
    },
    {
      brand: "Porsche",
      model: "911 Carrera T Hybrid",
      image: "assets/porsche-911-t-hybrid.jpg",
      author: "HYBRID",
      description:
        "The Porsche 911 Carrera T Hybrid combines classic sports car handling with mild hybrid efficiency for everyday performance driving.",
      stats: {
        horsepower: "379 hp",
        topSpeed: "181 mph",
        acceleration: "0-60 mph in 4.3 sec",
        weight: "3,254 lbs",
        mpg: "20 city / 29 highway"
      }
    },
    {
      brand: "Porsche",
      model: "918 Spyder",
      image: "assets/porsche918.jpg",
      author: "HYBRID",
      description:
        "The Porsche 918 Spyder is a plug-in hybrid supercar offering cutting-edge performance and electric-only capability.",
      stats: {
        horsepower: "887 hp",
        topSpeed: "211 mph",
        acceleration: "0-60 mph in 2.5 sec",
        weight: "3,715 lbs",
        mpg: "67 MPGe"
      }
    }
  ],

  gas: [
    {
      brand: "Bugatti",
      model: "Chiron Super Sport",
      image: "assets/bugatti_chiron_super_sport.jpg",
      author: "PETROL",
      description:
        "The Bugatti Chiron Super Sport is a pinnacle of combustion engineering, designed for extreme top speeds and luxury.",
      stats: {
        horsepower: "1,578 hp",
        topSpeed: "273 mph",
        acceleration: "0-60 mph in 2.3 sec",
        weight: "4,400 lbs",
        mpg: "9 city / 14 highway"
      }
    },
    {
      brand: "Ford",
      model: "Taurus",
      image: "assets/fordTaurus.jpg",
      author: "PETROL",
      description:
        "The Ford Taurus is a dependable full-size sedan known for its comfort, spacious interior, and smooth ride.",
      stats: {
        horsepower: "288 hp",
        topSpeed: "133 mph",
        acceleration: "0-60 mph in 6.5 sec",
        weight: "3,917 lbs",
        mpg: "18 city / 26 highway"
      }
    },
    {
      brand: "McLaren",
      model: "F1 GTR",
      image: "assets/f1GTR.jpg",
      author: "PETROL",
      description:
        "The McLaren F1 GTR is a race-spec version of the iconic F1 road car, stripped for track use and optimized for endurance.",
      stats: {
        horsepower: "600 hp",
        topSpeed: "240 mph",
        acceleration: "0-60 mph in 3.2 sec",
        weight: "2,530 lbs",
        mpg: "10 city / 17 highway"
      }
    },
    {
      brand: "Mercedes-Benz",
      model: "300 SLR",
      image: "assets/merc300SLR.jpeg",
      author: "PETROL",
      description:
        "The Mercedes-Benz 300 SLR is a legendary racing car from the 1950s, featuring advanced aerodynamics and a magnesium alloy body.",
      stats: {
        horsepower: "310 hp",
        topSpeed: "180 mph",
        acceleration: "0-60 mph in 6.9 sec",
        weight: "1,984 lbs",
        mpg: "N/A"
      }
    }
  ]
};


function renderCarousel(type) {
    const carousel = document.getElementById(`${type}-carousel`);
    const listContainer = carousel.querySelector(".list");
    const thumbnailContainer = carousel.querySelector(".thumbnail");

    listContainer.innerHTML = "";
    thumbnailContainer.innerHTML = "";

    const cars = vehicles[type];

    // Step 1: Add main images as usual
    cars.forEach((car) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
      <img src="${car.image}" />
      <div class="content">
        <div class="author">${car.author}</div>
        <div class="title">${car.brand}</div>
        <div class="topic">${car.model}</div>
        <div class="description">
          ${car.description}<br><br>
          <strong>Horsepower:</strong> ${car.stats.horsepower}<br>
          <strong>MPG / Range:</strong> ${car.stats.mpg || car.stats.range}<br>
          <strong>Top Speed:</strong> ${car.stats.topSpeed}<br>
          <strong>Weight:</strong> ${car.stats.weight}
        </div>
      </div>
    `;
        listContainer.appendChild(item);
    });

    // Step 2: Add thumbnails but start from index 1, then push index 0 last
    for (let i = 1; i < cars.length; i++) {
        const thumb = createThumbnail(cars[i]);
        thumbnailContainer.appendChild(thumb);
    }
    // Add Rimac (index 0) at the end
    const rimacThumb = createThumbnail(cars[0]);
    thumbnailContainer.appendChild(rimacThumb);
}

// Helper function for thumbnail creation
function createThumbnail(car) {
    const thumb = document.createElement("div");
    thumb.classList.add("item");
    thumb.innerHTML = `
    <img src="${car.image}" />
    <div class="content">
      <div class="title">${car.brand}</div>
      <div class="description">${car.model}</div>
    </div>
  `;
    return thumb;
}



function showCategory(type) {
    // Hide all
    document.getElementById("electric-carousel").style.display = "none";
    document.getElementById("hybrid-carousel").style.display = "none";
    document.getElementById("gas-carousel").style.display = "none";
    document.getElementById("category-container").style.display = "none";


    // Show selected carousel
    const carousel = document.getElementById(`${type}-carousel`);
    carousel.style.display = "block";

    // Generate content for this type
    renderCarousel(type);
}

setupCarouselControls('electric');
setupCarouselControls('hybrid');
setupCarouselControls('gas');
