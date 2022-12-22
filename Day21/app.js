function awardBonuses() {
    for (let i = 1; i <= 100; i++) {
        console.log(
            `${i} - ${
                i % 3 === 0 && i % 5 === 0
                    ? "JACKPOT! 1 Million and a Yacht!"
                    : i % 3 === 0
                    ? "Vacation!"
                    : i % 5 === 0
                    ? "$100,000 bonus!"
                    : ":("
            }`
        );
    }
}

awardBonuses();

function awardBonuses2() {
    for (let i = 1; i <= 100; i++) {
        console.log(
            `${i} - ${(() => {
                switch (true) {
                    case i % 3 === 0 && i % 5 === 0:
                        return "JACKPOT! 1 Million and a Yacht!";
                    case i % 3 === 0:
                        return "Vacation!";
                    case i % 5 === 0:
                        return "$100,000 bonus!";
                    default:
                        return ":(";
                }
            })()}`
        );
    }
}

awardBonuses2();
