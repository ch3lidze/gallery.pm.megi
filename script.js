const colors =['#e68383','#c5dc52', '#ce34b9', '#ebe95c', '#57eb93' ]
    const section = document.querySelector('section')
    function changeBg(){
    const bg = colors[Math.floor(Math.random() * colors.length -1)];
    section.style.backgroundColor = bg;
    }
    setInterval(changeBg, 4000)