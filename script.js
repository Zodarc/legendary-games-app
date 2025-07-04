function playSound() {
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
  }
  
  const trailers = {
    "Wukong": {
      title: "Black Myth: Wukong - Pre-Order CG Trailer | PS5 Games",
      desc: "Black Myth: Wukong is an action RPG based on Journey to the West.",
      url: "https://www.youtube.com/embed/u83VdXAVq08"
    },
    "God of War": {
      title: "God of War Ragnarök - &quot;Father and Son&quot; Cinematic Trailer | PS5 &amp; PS4 Games",
      desc: "Kratos returns in this epic Norse mythology-based saga.",
      url: "https://www.youtube.com/embed/dIQGI36BxDE"
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
    },
    "Elden Ring": {
  title: "Elden Ring",
  desc: "A vast fantasy world awaits you in this open-world masterpiece by FromSoftware.",
  url: "https://www.youtube.com/embed/E3Huy2cdih0"
},
"Spider-Man 2": {
  title: "Spider-Man 2",
  desc: "Swing through New York as Peter and Miles in this PS5-exclusive sequel.",
  url: "https://www.youtube.com/embed/cqGjhVJWtEg"
},
"FC 24": {
  title: "EA Sports FC 24",
  desc: "Experience the next era of football with enhanced realism and dynamic gameplay.",
  url: "https://www.youtube.com/embed/_bPzq_8pqug"
},
"GTA VI": {
  title: "Grand Theft Auto VI",
  desc: "Return to Vice City in Rockstar’s most ambitious open-world crime saga yet.",
  url: "https://www.youtube.com/embed/QdBZY2fkU-0"
},
"Valorant": {
  title: "Valorant",
  desc: "Tactical hero shooter where precision, strategy, and ability timing rule.",
  url: "https://www.youtube.com/embed/e_E9W2vsRbQ"
},
"Cyberpunk 2077": {
  title: "Cyberpunk 2077",
  desc: "Enter Night City: a high-tech open world full of choices, guns, and Keanu.",
  url: "https://www.youtube.com/embed/qIcTM8WXFjk"
},
"Hogwarts Legacy": {
  title: "Hogwarts Legacy",
  desc: "Live the unwritten as a wizard student in the open-world Harry Potter universe.",
  url: "https://www.youtube.com/embed/BtyBjOW8sGY"
},
"The Witcher 3": {
  title: "The Witcher 3",
  desc: "An award-winning RPG full of monsters, magic, and moral choices.",
  url: "https://www.youtube.com/embed/ndl1W4ltcmg"
},
"Assassin’s Creed Mirage": {
  title: "Assassin’s Creed Mirage",
  desc: "Return to classic stealth gameplay in this Baghdad-based AC adventure.",
  url: "https://www.youtube.com/embed/cLDextlL5n0"
},
"Apex Legends": {
  title: "Apex Legends",
  desc: "Free-to-play battle royale with fast action and unique heroes.",
  url: "https://www.youtube.com/embed/innmNewjkuk"
},
"Red Dead Redemption 2": {
  title: "Red Dead Redemption 2",
  desc: "Experience the wild west like never before in Rockstar’s masterpiece.",
  url: "https://www.youtube.com/embed/eaW0tYpxyp0"
},
"The Last of Us Part I": {
  title: "The Last of Us Part I",
  desc: "Joel and Ellie’s iconic journey remade for PS5 and PC.",
  url: "https://www.youtube.com/embed/WxjeV10H1F0"
},
"Fortnite": {
  title: "Fortnite",
  desc: "The ever-evolving sandbox battle royale where creativity meets survival.",
  url: "https://www.youtube.com/embed/2gUtfBmw86Y"
},
"Mortal Kombat 1": {
  title: "Mortal Kombat 1",
  desc: "Reboot the timeline and rip through brutal combos in MK’s newest era.",
  url: "https://www.youtube.com/embed/UZ6eFEjFfJ0"
},
"Starfield": {
  title: "Starfield",
  desc: "Explore the stars and forge your legacy in Bethesda’s space RPG.",
  url: "https://www.youtube.com/embed/pYqyVpCV-3c"
},
"Tekken 8": {
  title: "Tekken 8",
  desc: "Get ready for the next battle — Tekken returns with Unreal Engine 5.",
  url: "https://www.youtube.com/embed/2hPuRQz6IlM"
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
  