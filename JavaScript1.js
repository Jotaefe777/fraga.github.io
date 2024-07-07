document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const message = document.getElementById('message');
    let noClickCount = 0;

    yesButton.addEventListener('click', () => {
        message.textContent = "Sabía que ibas a decir que sí, te quiero y no me gusta que peleemos por esas cosas <3 (⁠｡⁠･⁠ω⁠･⁠｡⁠)⁠ﾉ⁠♡";
    });

    noButton.addEventListener('click', () => {
        noClickCount++;
        switch(noClickCount) {
            case 1:
                message.textContent = "¿Estás segura?";
                noButton.style.transform = "scale(0.8)";
                break;
            case 2:
                message.textContent = "¿Estás segurísima?";
                noButton.style.transform = "scale(0.6)";
                break;
            case 3:
                message.textContent = "¿Estás segurísima preciosa?";
                noButton.style.transform = "scale(0.4)";
                break;
            case 4:
                message.textContent = "¿Piénsalo bien princesa, ¿estás segurísima?";
                noButton.style.transform = "scale(0.3)";
                break;
            case 5:
                message.textContent = "Inténtalo de nuevo, reina <3";
                noButton.style.transform = "scale(0.05)";
                break;
            default:
                noButton.style.transform = "scale(0.05)";
        }
    });
});

