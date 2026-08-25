const images = [
      "images/background-images/space-1.jpg",
      "images/background-images/space-2.jpg",
      "images/background-images/l-photography-6FeWaxXIsko-unsplash.jpg",
      "images/background-images/abed-ismail-_jhUrn9o8yM-unsplash.jpg",
      "images/background-images/wp15161175-particle-accelerator-wallpapers.webp",
      "images/background-images/wp8579892-cern-wallpapers.webp",
      "images/background-images/wp12828108-large-hadron-collider-wallpapers.webp",
      "images/background-images/wp15161149-particle-accelerator-wallpapers.webp",
      "images/background-images/wp14997867-spectroscopy-wallpapers.webp",
      "images/background-images/wp10425494-particle-physics-wallpapers.jpg",
      "images/background-images/wp10425488-particle-physics-wallpapers.jpg",
      "images/background-images/wp2166472-physics-wallpapers.jpg",
      "images/background-images/wp2166437-physics-wallpapers.jpg",
      "images/background-images/wp2166417-physics-wallpapers.jpg",
      "images/background-images/wp2166403-physics-wallpapers.jpg",
      "images/background-images/wp1893186-physics-wallpapers.jpg",
      "images/background-images/wp2166374-physics-wallpapers.jpg",
      "images/background-images/wp2166351-physics-wallpapers.jpg",
      "images/background-images/wp2035752-science-wallpapers.jpg",
      "images/background-images/wp2166347-physics-wallpapers.jpg",
      "images/background-images/wp2166343-physics-wallpapers.jpg",
      "images/background-images/wp2166321-physics-wallpapers.jpg",
      "images/background-images/wp2166315-physics-wallpapers.jpg",
      "images/background-images/wp14819683-physics-wallpapers.jpg",
      "images/background-images/Fl83heL-astronomy-wallpaper.jpg",
      "images/background-images/wp12560095-physics-equations-wallpapers.jpg",
      "images/background-images/wp12560013-physics-hd-wallpapers.jpg"
    ];

    // Get the day of the year
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const diff = today - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    // Pick image
    const image = images[dayOfYear % images.length];

    // Apply wallpaper
    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";