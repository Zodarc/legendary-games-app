function playSound() {
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
  }
  
  const trailers = {
    "Wukong": {
      title: "Wukong",
      desc: "Black Myth: Wukong is an action RPG based on Journey to the West.",
      url: "https://www.youtube.com/embed/KxqdRFfBFCU"
    },
    "God of War": {
      title: "God of War",
      desc: "Kratos returns in this epic Norse mythology-based saga.",
      url: "https://www.youtube.com/embed/EE-4GvjKcfs"
    },
    "Warzone": {
      title: "Call of Duty: Warzone",
      desc: "Drop into a massive battle royale arena and fight to survive.",
      url: "https://www.youtube.com/embed/0E44DClsX5Q"
    },
    "PUBG": {
      title: "PUBG: Battlegrounds",
      desc: "The battle royale game that started it all. Land, loot, survive.",
      url: "https://www.youtube.com/embed/ODWCbu_cuqk"
    }
  };
  
  function openModal(gameName) {
    const modal = document.getElementById("gameModal");
    const title = document.getElementById("modalTitle");
    const desc = document.getElementById("modalDesc");
    const trailer = document.getElementById("modalTrailer");
  
    title.textContent = trailers[gameName].title;
    desc.textContent = trailers[gameName].desc;
    trailer.src = trailers[gameName].url + "?autoplay=1";
  
    modal.style.display = "block";
  }
  
  function closeModal() {
    const modal = document.getElementById("gameModal");
    const trailer = document.getElementById("modalTrailer");
    trailer.src = ""; // Stop video
    modal.style.display = "none";
  }
  