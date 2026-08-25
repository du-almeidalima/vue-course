import {
  getMonsterAttackValue,
  getPlayerAttackValue,
  getPlayerHealValue,
  getPlayerSpecialAttackValue,
} from './utils';

declare const Vue: typeof import('vue');

const { createApp } = Vue;

type Character = {
  name: 'Player' | 'Monster';
  health: number;
};

type GameStatus = 'IN_PROGRESS' | 'PLAYER_WIN' | 'MONSTER_WIN' | 'DRAW';

type Action = 'ATTACK' | 'SPECIAL_ATTACK' | 'HEAL' | 'SURRENDER';

type Log = {
  round: number;
  action: Action;
  playerActionValue: number;
  monsterDamage: number;
  playerHealth: number;
  monsterHealth: number;
};

const SPECIAL_ATTACK_COOLDOWN = 3;
const HEAL_COOLDOWN = 4;

const getGameStatus = (player: Character, monster: Character): GameStatus => {
  if (player.health > 0 && monster.health > 0) {
    return 'IN_PROGRESS';
  }

  if (player.health <= 0 && monster.health <= 0) {
    return 'DRAW';
  }

  if (player.health > 0 && monster.health <= 0) {
    return 'PLAYER_WIN';
  }

  return 'MONSTER_WIN';
};

createApp({
  data() {
    return {
      player: {
        name: 'Player',
        health: 100,
      } as Character,
      monster: {
        name: 'Monster',
        health: 100,
      } as Character,
      gameStatus: 'IN_PROGRESS' as GameStatus,
      round: 0,
      specialAttackRoundCooldown: 0,
      healRoundCooldown: 0,
      logs: [] as Log[],
    };
  },
  methods: {
    getHealthBarClass(health: number) {
      if (health <= 0) return 'healthbar--zero';
      if (health <= 30) return 'healthbar--low';
      if (health <= 50) return 'healthbar--medium';
      return 'healthbar--high';
    },
    // The main game loop logic
    processRoundAction(action: Action) {
      let playerActionValue = 0;
      let monsterDamage = 0;

      // 1. Player Action
      switch (action) {
        case 'ATTACK': {
          playerActionValue = getPlayerAttackValue();
          this.monster.health = Math.max(0, this.monster.health - playerActionValue);
          break;
        }
        case 'SPECIAL_ATTACK': {
          playerActionValue = getPlayerSpecialAttackValue();
          this.monster.health = Math.max(0, this.monster.health - playerActionValue);
          break;
        }
        case 'HEAL': {
          playerActionValue = getPlayerHealValue();
          this.player.health = Math.min(100, this.player.health + playerActionValue);
          break;
        }
        case 'SURRENDER': {
          this.player.health = 0;
          break;
        }
      }

      // 2. Monster Retaliation (if not surrendered)
      if (action !== 'SURRENDER') {
        monsterDamage = getMonsterAttackValue();
        this.player.health = Math.max(0, this.player.health - monsterDamage);
      }

      // 3. Update Game Status & Round
      this.gameStatus = getGameStatus(this.player, this.monster);
      this.round++;

      // 4. Record Round Log
      this.logs.unshift({
        round: this.round,
        action,
        playerActionValue,
        monsterDamage,
        playerHealth: this.player.health,
        monsterHealth: this.monster.health,
      });

      // 5. Update Cooldowns
      this.specialAttackRoundCooldown = Math.max(0, this.specialAttackRoundCooldown - 1);
      this.healRoundCooldown = Math.max(0, this.healRoundCooldown - 1);

      if (action === 'SPECIAL_ATTACK') {
        this.specialAttackRoundCooldown = SPECIAL_ATTACK_COOLDOWN;
      } else if (action === 'HEAL') {
        this.healRoundCooldown = HEAL_COOLDOWN;
      }
    },
    restart() {
      this.round = 0;
      this.player.health = 100;
      this.monster.health = 100;
      this.gameStatus = 'IN_PROGRESS';
      this.specialAttackRoundCooldown = 0;
      this.healRoundCooldown = 0;
      this.logs = [];
    },
  },
  computed: {
    isSpecialAttackEnabled() {
      return this.specialAttackRoundCooldown === 0;
    },
    isHealEnabled() {
      return this.healRoundCooldown === 0;
    },
  },
}).mount('#game');
