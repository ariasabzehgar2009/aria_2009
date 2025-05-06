// 1. Object Literal: used as initializer
const playerTemplate = {
    name: "Jonesy",
    health: 100,
    speed: 5,
    strength: 5,

    // Method: get random power
    randomPower: function() {
        return Math.random() < 0.5 ? this.speed : this.strength;
    },

    // Method: fight another player
    battle: function(opponent) {
        this.health -= 1;
        opponent.health -= 1;

        const myPower = this.randomPower();
        const oppPower = opponent.randomPower();

        if (myPower > oppPower) {
            opponent.health -= 10;
        } else if (myPower < oppPower) {
            this.health -= 10;
        }
    },

    // Method: is player still alive?
    isAlive: function() {
        return this.health > 0;
    }
};

// 2. Create player instances (Object.create)
const players = [
    Object.create(playerTemplate),
    Object.create(playerTemplate),
    Object.create(playerTemplate),
    Object.create(playerTemplate),
    Object.create(playerTemplate)
];

// 2. Set player properties: name, health, power
["Jonesy", "Peely", "", "Kevin", "Ironman"].forEach((name, i) => {
    players[i].name = name;
    players[i].health = 100;
    players[i].speed = Math.floor(Math.random() * 10) + 1;
    players[i].strength = Math.floor(Math.random() * 10) + 1;
});

// 3. Game Loop
let round = 1;
while (players.filter(p => p.isAlive()).length > 1) {
    element.append(`--- Round ${round} ---`);

    const living = players.filter(p => p.isAlive());
    const attacker = living[Math.floor(Math.random() * living.length)];

    // 3. Each living player battles the random attacker
    living.forEach(opponent => {
        if (attacker !== opponent && opponent.isAlive()) {
            attacker.battle(opponent);
        }
    });

    // 4. Leaderboard output
    const leaderboard = players
        .filter(p => p.isAlive())
        .sort((a, b) => b.health - a.health)
        .map(p => `${p.name}: ${p.health} HP`)
        .join("<br>");

    element.append(`<strong>Leaderboard:</strong><br>${leaderboard}`);

    // 5. Remove dead players
    players.forEach(p => {
        if (!p.isAlive() && !p.deadAnnounced) {
            element.append(`${p.name} has been eliminated.`);
            p.deadAnnounced = true;
        }
    });

    round++;
}

// 6. Game Over
const winner = players.find(p => p.isAlive());
if (winner) {
    element.append(`<strong>🏆 Winner: ${winner.name} with ${winner.health} HP</strong>`);
} else {
    element.append("<strong>No one survived.</strong>");
}
