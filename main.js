
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    on: {
      slideChange: function () {
          changeBackground(this.realIndex);
      }
  }
  
  });
  function changeBackground(index) {
    const colors = [
      'linear-gradient(to right, rgb(227, 236, 205), rgb(186, 128, 58))',
      'linear-gradient(to right, #cfd9df, rgb(107, 107, 107))',
      'linear-gradient(to right, #a8e063, #56ab2f)',
      'linear-gradient(to right, #ff512f, #dd2476)'
    ];
  
    document.body.style.background = colors[index % colors.length];
  }