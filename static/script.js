function toggleCard(element) {
    // Fecha todos os outros cards abertos
    document.querySelectorAll('.icon-circle').forEach(circle => {
        if (circle !== element) {
            circle.classList.remove('active');
        }
    });

    // Abre ou fecha o card clicado
    element.classList.toggle('active');
}

// Opcional: Fechar o card ao clicar fora dele
document.addEventListener('click', function(event) {
    if (!event.target.closest('.icon-circle')) {
        document.querySelectorAll('.icon-circle').forEach(circle => {
            circle.classList.remove('active');
        });
    }
});

var navLinks = document.getElementById("navLinks");

    function showMenu() {
        navLinks.style.right = "0";
    }

    function hideMenu() {
        navLinks.style.right = "-200px"; // Or whatever width your menu uses
    }


document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.50 // Dispara quando 15% do elemento está visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("ativo");
            }
        });
    }, observerOptions);

    // Seleciona todos os elementos que devem ser revelados
    const elementosParaRevelar = document.querySelectorAll(".revelar");
    elementosParaRevelar.forEach(el => observer.observe(el));
});