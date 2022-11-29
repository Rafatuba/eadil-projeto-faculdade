const voltarTopo = () => {
    window.scroll({
        top: 0, // subir ao topo
        behavior: 'smooth' // subir suave
    })
}

const botao = document.getElementById("button-top");
botao.onclick = voltarTopo;