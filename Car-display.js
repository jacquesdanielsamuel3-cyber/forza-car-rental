const carData = {
  "Audi A8": {
    brand: "Audi", seats: 5, fuel: "Petrol", transmission: "Automatic",
    image: "Latest car/Audi A8.png",
    description: "Luxury sedan with cutting-edge tech and comfort.",
    pricePerDay: 3500
  },
  "Lexus LS": {
    brand: "Lexus", seats: 5, fuel: "Petrol", transmission: "Automatic",
    image: "Latest car/Lexus LS.png",
    description: "Premium design and refined performance.",
    pricePerDay: 3200
  },
  "Porsche Taycan": {
    brand: "Porsche", seats: 4, fuel: "Electric", transmission: "Automatic",
    image: "Latest car/Porsche Taycan.png",
    description: "Futuristic electric performance sedan.",
    pricePerDay: 4500
  },
  "Toyota GR Supra": {
    brand: "Toyota", seats: 2, fuel: "Petrol", transmission: "Manual",
    image: "Latest car/Toyota Supra.png",
    description: "Sports coupe designed for thrilling rides.",
    pricePerDay: 3000
  },
  "Hyundai Palisade": {
    brand: "Hyundai", seats: 7, fuel: "Diesel", transmission: "Automatic",
    image: "Latest car/Hyundai Palisade.png",
    description: "Family SUV with luxury interior.",
    pricePerDay: 2800
  },
  "Honda Accord": {
    brand: "Honda", seats: 5, fuel: "Petrol", transmission: "Automatic",
    image: "Latest car/Honda Accord.png",
    description: "Reliable midsize car with good mileage.",
    pricePerDay: 2600
  },
    "BMW 4 Series Convertible": {
    brand: "BMW 4", seats: 4, fuel: "Petrol", transmission: "Automatic",
    image: "Latest car/bmw 4 series convertible.png",
    description: "Stylish convertible designed for luxury and sporty drives..",
    pricePerDay: 4500
  },
  "Rolls-Royce Phantom": {
    brand: "Rolls-Royce", seats: 4, fuel: "Petrol", transmission: "Automatic",
    image: "Luxury car/rolls-royce-phantom.png",
    description: "Ultimate luxury and exclusivity.",
    pricePerDay: 25000
  },
  "Bentley Flying Spur": {
    brand: "Bentley", seats: 4, fuel: "Petrol", transmission: "Automatic",
    image: "Luxury car/Bentley.png",
    description: "Elegance meets performance.",
    pricePerDay: 20000
  },
  "Mercedes-Benz S-Class Maybach": {
    brand: "Mercedes-Benz", seats: 5, fuel: "Petrol", transmission: "Automatic",
    image: "Luxury car/Mercedes.png",
    description: "Executive luxury with smart features.",
    pricePerDay: 18000
  },
  "Porsche Panamera Turbo": {
    brand: "Porsche", seats: 4, fuel: "Petrol", transmission: "Automatic",
    image: "Luxury car/porsche-panamera-SE.png",
    description: "Performance meets practicality.",
    pricePerDay: 16000
  },
  "Range Rover Autobiography": {
    brand: "Range Rover", seats: 5, fuel: "Diesel", transmission: "Automatic",
    image: "Luxury car/Range Rover.png",
    description: "Luxury off-roader with class.",
    pricePerDay: 14000
  },
  "Aston Martin DB11": {
    brand: "Aston Martin", seats: 2, fuel: "Petrol", transmission: "Automatic",
    image: "Luxury car/Aston Martin DB11.png",
    description: "Bold design and performance.",
    pricePerDay: 23000
  },
  "Maserati Quattroporte": {
    brand: "Maserati", seats: 5, fuel: "Petrol", transmission: "Automatic",
    image: "Luxury car/Maserati-Quattroporte.png",
    description: "Italian style luxury sedan.",
    pricePerDay: 17000
  },
  "Toyota Vitz": {
    brand: "Toyota", seats: 5, fuel: "Petrol", transmission: "Automatic",
    image: "Family car/Toyota Vitz.png",
    description: "Compact, efficient, ideal for city.",
    pricePerDay: 1200
  },
  "Suzuki Swift": {
    brand: "Suzuki", seats: 5, fuel: "Petrol", transmission: "Manual",
    image: "Family car/Suzuki swift.png",
    description: "Fun and practical hatchback.",
    pricePerDay: 1300
  },
  "Nissan March": {
    brand: "Nissan", seats: 5, fuel: "Petrol", transmission: "Automatic",
    image: "Family car/Nissan march.png",
    description: "Small and economic.",
    pricePerDay: 1200
  },
  "Hyunda i10": {
    brand: "Hyundai", seats: 5, fuel: "Petrol", transmission: "Manual",
    image: "Family car/Hyunda i10.png",
    description: "City hatchback with great value.",
    pricePerDay: 1300
  },
  "Toyota Corolla": {
    brand: "Toyota", seats: 5, fuel: "Petrol", transmission: "Automatic",
    image: "Family car/Toyota Corolla.png",
    description: "Legendary reliability and comfort.",
    pricePerDay: 1800
  },
  "Toyota Sienta": {
    brand: "Toyota", seats: 7, fuel: "Hybrid", transmission: "Automatic",
    image: "Family car/Toyota Sienta.png",
    description: "Compact MPV for family.",
    pricePerDay: 2000
  },
  "Toyota Probox": {
    brand: "Toyota", seats: 5, fuel: "Petrol", transmission: "Manual",
    image: "Family car/Toyota Probox.png",
    description: "Cargo or people carrier.",
    pricePerDay: 1600
  },
  "Renault Triber": {
    brand: "Renault", seats: 7, fuel: "Petrol", transmission: "Manual",
    image: "Family car/Renault Triber.png",
    description: "Flexible MPV with 3-row seating.",
    pricePerDay: 1800
  },
  "Renault Kwid": {
    brand: "Renault", seats: 5, fuel: "Petrol", transmission: "Manual",
    image: "Family car/Renault kwid.png",
    description: "Affordable compact crossover.",
    pricePerDay: 1100
  }
};

const brands = {
  "Audi": ["Audi A8"],
  "Lexus": ["Lexus LS"],
  "Porsche": ["Porsche Taycan", "Porsche Panamera Turbo"],
  "Toyota": ["Toyota GR Supra", "Toyota Vitz", "Toyota Corolla", "Toyota Sienta", "Toyota Probox"],
  "Hyundai": ["Hyundai Palisade", "Hyunda i10"],
  "Honda": ["Honda Accord"],
  "BMW 4": ["BMW 4 Series Convertible"],
  "Rolls-Royce": ["Rolls-Royce Phantom"],
  "Bentley": ["Bentley Flying Spur"],
  "Mercedes-Benz": ["Mercedes-Benz S-Class Maybach"],
  "Range Rover": ["Range Rover Autobiography"],
  "Aston Martin": ["Aston Martin DB11"],
  "Maserati": ["Maserati Quattroporte"],
  "Suzuki": ["Suzuki Swift"],
  "Nissan": ["Nissan March"],
  "Renault": ["Renault Triber", "Renault Kwid"]
};

// ---------- STATE ----------
let selectedCarKey = null;

// ---------- APP ----------
document.addEventListener("DOMContentLoaded", () => {
  const carGallery = document.getElementById("car-gallery");
  const carInfo = document.getElementById("car-info");
  const carMedia = document.getElementById("car-select");
  const carDetails = document.getElementById("car-details");
  const daysInput = document.getElementById("days");
  const priceInfo = document.getElementById("price-info");
  const form = document.getElementById("booking-form");

  // 1) Brand logos
  document.querySelectorAll("#brand-list img").forEach(logo => {
    const brand = logo.dataset.brand || logo.alt;
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => displayCars(brand));
  });

  // 2) Render cards for a brand
  function displayCars(brand) {
    carGallery.innerHTML = "";
    (brands[brand] || []).forEach(model => {
      const c = carData[model];
      if (!c) return;

      const card = document.createElement("div");
      card.className = "car-card";
      card.innerHTML = `
        <img src="${c.image}" alt="${model}">
        <h3>${model}</h3>
        <p>Rs ${c.pricePerDay} / day</p>
      `;
      card.addEventListener("click", () => showCarInfo(model));
      carGallery.appendChild(card);
    });
  }

  // 3) Show selected car + set selection + update price
  function showCarInfo(model) {
    selectedCarKey = model;
    const c = carData[model];

    carInfo.style.display = "flex";
    carMedia.innerHTML = `<img src="${c.image}" alt="${model}">`;
   carDetails.innerHTML = `
  <h2>${model}</h2>
  <div class="car-specs">
    <div class="spec-box"><i class="fas fa-chair"></i> <strong>Seats:</strong> ${c.seats}</div>
    <div class="spec-box"><i class="fas fa-gas-pump"></i> <strong>Fuel:</strong> ${c.fuel}</div>
    <div class="spec-box"><i class="fas fa-cogs"></i> <strong>Transmission:</strong> ${c.transmission}</div>
    <div class="spec-box"><i class="fas fa-info-circle"></i> ${c.description}</div>
    <div class="spec-box"><strong>Price/day:</strong> Rs ${c.pricePerDay}</div>
  </div>
`;

    updatePrice();
    carInfo.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // 4) Price calculation = days × pricePerDay
  function updatePrice() {
    if (!priceInfo) return;

    if (!selectedCarKey) {
      priceInfo.textContent = "Total Price: Rs 0";
      return;
    }

    const c = carData[selectedCarKey];
    const days = parseInt(daysInput?.value, 10);
    const validDays = !isNaN(days) && days > 0;

    const total = validDays ? c.pricePerDay * Math.min(days, 5) : 0;
    priceInfo.textContent = `Total Price: Rs ${total}`;
  }

  // 5) Events
  if (daysInput) daysInput.addEventListener("input", updatePrice);


// --- Show Confirmation Overlay ---
  function showBookingConfirmation(message) {
    let overlay = document.getElementById("confirmationOverlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "confirmationOverlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.background = "rgba(0,0,0,0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.color = "white";
      overlay.style.fontSize = "18px";
      overlay.style.zIndex = "9999";
      document.body.appendChild(overlay);
    }
    overlay.innerHTML = `
      <div style="background:#222; padding:20px; border-radius:10px; text-align:center;">
        ${message}<br><br>
        <button onclick="document.getElementById('confirmationOverlay').style.display='none'">Close</button>
      </div>
    `;
    overlay.style.display = "flex";

    // Auto-hide after 5s
    setTimeout(() => {
      overlay.style.display = "none";
    }, 5000);
  }

  // --- EmailJS Init ---
  emailjs.init("yfonXBK6R72NxeF6m");

  // --- Booking Form Submit ---
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (!selectedCarKey) {
      alert("⚠️ Please select a car first.");
      return;
    }

    const car = carData[selectedCarKey];
    const days = parseInt(daysInput.value, 10) || 0;
    const total = car.pricePerDay * Math.min(days, 5);

    // 🎉 Confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // --- EmailJS Data ---
    const bookingData = {
      car_name: selectedCarKey,
      total_price: total,
      full_name: document.getElementById("fullName").value,
      age: document.getElementById("age").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      card_number: document.getElementById("card").value,
      days: days
    };

    emailjs.send("service_2x0mdrf", "template_yzf97yo", bookingData)
      .then(function(response) {
        console.log("✅ Email sent!", response.status, response.text);
        showBookingConfirmation(`
          🎉 Booking Confirmed! <br><br>
          <strong>Car:</strong> ${selectedCarKey}<br>
          <strong>Name:</strong> ${bookingData.full_name}<br>
          <strong>Days:</strong> ${days}<br>
          <strong>Total:</strong> Rs ${total}<br>
          ✅ We will contact you shortly.
        `);
      }, function(error) {
        console.error("❌ Email failed:", error);
        alert("Failed to send email. Please try again.");
      });

    form.reset();
    priceInfo.textContent = "Total Price: Rs 0";
  });
  });
