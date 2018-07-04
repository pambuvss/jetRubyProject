var slider = {
  slides:["/images/1.jpg",'/images/2.jpg'],
  titles:["You can add hotels", "you can leave a response"],
  frame:0, // текущий кадр для отбражения - индекс картинки из массива
  set: function(image) { // установка нужного фона слайдеру
  	document.getElementById("scr").style.backgroundImage = "url("+image+")";
  },
  set_title(title){
  	var div = document.getElementById("st");
  	div.innerHTML = "<strong>" + title + "</strong>";
  },
  init: function() { // запуск слайдера с картинкой с нулевым индексом
    this.set(this.slides[this.frame]);
    this.set_title(this.titles[this.frame]);
  },
  left: function() { // крутим на один кадр влево
    this.frame--;
    if(this.frame < 0) this.frame = this.slides.length-1;
    this.set(this.slides[this.frame]);
    this.set_title(this.titles[this.frame]);
  },
  right: function() { // крутим на один кадр вправо
    this.frame++;
    if(this.frame == this.slides.length) this.frame = 0;
    this.set(this.slides[this.frame]);
    this.set_title(this.titles[this.frame]);
  }

};
window.onload = function() { // запуск слайдера после загрузки документа
  slider.init();
  setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
    slider.right();
  },5000);
};