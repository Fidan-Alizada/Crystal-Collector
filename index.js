
document.addEventListener("DOMContentLoaded", function() {
    const crystals = [
        { id: 1, value: 0, imageUrl: "./904190.webp" },
        { id: 2, value: 0, imageUrl: "./pngtree-crystal-stone-or-precious-stone-picture-image_7866734.png" },
        { id: 3, value: 0, imageUrl: "./pngtree-green-crystals-of-sapphire-realistic-precious-geological-minerals-isolated-on-white-png-image_4858780.png" },
        { id: 4, value: 0, imageUrl: "./pngtree-magic-crystal-icon-cartoon-vector-png-image_5041556.png" }
    ];

    var targetScore = 0;
    var currentScore = 0;
    var wins = 0;
    var losses = 0;

    const targetScoreDisplay = document.getElementById("target-score");
    const currentScoreDisplay = document.getElementById("current-score");

    function initializeGame() {
    
        targetScore = Math.floor(Math.random() * 101) + 19; 
        currentScore = 0;

       
        targetScoreDisplay.textContent = targetScore;
        currentScoreDisplay.textContent = currentScore;

     
        for (let crystal of crystals) {
            crystal.value = Math.floor(Math.random() * 12) + 1;
        }

       
        document.getElementById("crystals").innerHTML = "";

        crystals.forEach(crystal => {
            const crystalElement = document.createElement("img");
            crystalElement.classList.add("crystal");
            crystalElement.src = crystal.imageUrl;
            crystalElement.alt = `Crystal ${crystal.id}`;
            crystalElement.addEventListener("click", function() {
                addCrystalValue(crystal.value);
            });
            document.getElementById("crystals").appendChild(crystalElement);
        });
    }

    function addCrystalValue(value) {
        currentScore += value;
        currentScoreDisplay.textContent = currentScore;

        if (currentScore === targetScore) {
            wins++;
            alert("You win!");
            initializeGame();
        } else if (currentScore > targetScore) {
            losses++;
            alert("You lose!");
            initializeGame();
        }
    }
    document.getElementById("restart-btn").addEventListener("click", function() {
        initializeGame();
    });

    initializeGame();
});
