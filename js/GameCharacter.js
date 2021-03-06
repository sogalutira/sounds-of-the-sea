class GameCharacter {
  constructor(game, xPos, yPos, type) {
    this.game = game;
    this.health;
    this.hits;
    this.name;
    this.healthBarConfig = {
      width: 200,
      height: 30,
      bg: {
          color: '#173559'
      },
      bar: {
          color: '#e4eccd'
      },
      animationDuration: 200
    };

    this.healthBarTextConfig = { font: "24px Averia Serif Libre", fill: "#ffffff", align: "left"};
    this.healthBarText;
    this.sprite = game.add.sprite(xPos, yPos, type);
  }

  renderHealthBar(game, xPos, yPos) {
    this.healthBarConfig.x = xPos;
    this.healthBarConfig.y = yPos;
    this.healthBar = new HealthBar(game, this.healthBarConfig);

    this.healthBarText = game.add.text(xPos-98, 10, this.name, this.healthBarTextConfig);
  }

  takeDamage(damage) {
    this.healthBar.setPercent(damage);
  }
  changeNet(xPos, yPos, type){
    this.sprite = game.add.sprite(xPos, yPos, type);
    this.sprite.animations.add('moving', [0, 1, 2, 3]);
    this.sprite.animations.play('moving', 5, true);
    this.sprite.scale.setTo(4,4);
  }
}
