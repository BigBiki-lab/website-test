const images = [
      "images/background-images/space-1.jpg",
      "images/background-images/space-2.jpg",
      "images/background-images/l-photography-6FeWaxXIsko-unsplash.jpg",
      "images/background-images/abed-ismail-_jhUrn9o8yM-unsplash.jpg"
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