const colors =['#e68383','#c5dc52', '#ce34b9', '#ebe95c', '#57eb93' ];
    function changeBg(){
    const bg = colors[Math.floor(Math.random() * colors.length -1)];
    document.body.style.backgroundColor = bg;
    }
    setInterval(changeBg, 6000);