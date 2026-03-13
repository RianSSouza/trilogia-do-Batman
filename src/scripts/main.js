
AOS.init();

const botoes = document.querySelectorAll('.btn-trailer');

const circulos = document.querySelectorAll('.circulo__progresso');

botoes.forEach(botao => {
    botao.addEventListener('click', (event)=>{
        event.preventDefault();
        const url = botao.getAttribute('data-url');
        const larguraTela = window.innerWidth;

        if (larguraTela > 760) {
                window.open(
                url,
                "trailer",
                "width=800,height=450"
            )
            }else{
                window.open(url, "_blank")
            }        
    })
});

circulos.forEach(circulo => {
        const progresso = circulo.getAttribute('data-progress');
        let start = 0;

        const interval = setInterval(() => {
            if(start >= progresso){
                clearInterval(interval);
            }else{
                start++;
                circulo.style.background = `
                    conic-gradient(
                        #78B1C8  0%,
                        #D0F0F7 ${start}%,
                        #222 
                        ${start}% 100%
                    )
                `;
                circulo.querySelector('.circulo__progresso__texto').textContent = `${start}%`;
            }
        }, 15)
});
