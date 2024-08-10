function adjustScale() {
    const viewportWidth = window.innerWidth;
    const scale = viewportWidth / 1920; // 1920 adalah lebar referensi
    document.querySelector('meta[name="viewport"]').setAttribute('content', `width=device-width, initial-scale=${scale}`);
  }
  
  window.addEventListener('resize', adjustScale);
  window.addEventListener('load', adjustScale);