# ⚔️ Monster Slayer — Specification & Task Roadmap

A turn-based mini-game where the Player battles a Monster through attacks, special abilities, and healing.

---

## 🎮 Complete Game Requirements & Behaviors

### 1. Starting State
- Both the **Player** and the **Monster** start with **100% Health**.
- Combat action buttons are active and visible.
- Battle Log is empty.

---

### 2. Combat Actions & Round Cycle
Every player action (except Surrender) triggers an automatic **Monster retaliation** in the same turn:

* **Attack**
  - **Player Action:** Deals random damage (**5 to 12**) to the Monster.
  - **Monster Retaliation:** Automatically deals random damage (**8 to 15**) to the Player.
  - Advances the round counter by 1.

* **Special Attack**
  - **Player Action:** Deals heavy random damage (**10 to 25**) to the Monster.
  - **Monster Retaliation:** Automatically deals random damage (**8 to 15**) to the Player.
  - **Cooldown Rule:** Can only be used **once every 3 rounds**. The button must be disabled when on cooldown.
  - Advances the round counter by 1.

* **Heal**
  - **Player Action:** Restores random health (**8 to 20**).
  - **Cap Rule:** Player health cannot exceed **100%** maximum health.
  - **Monster Retaliation:** Automatically deals random damage (**8 to 15**) to the Player.
  - Advances the round counter by 1.

* **Surrender**
  - Player immediately forfeits the battle.
  - The game ends with the Monster winning (no monster counter-attack).

---

### 3. Health Bars & Visual Feedback
- Health bar widths dynamically adjust to match the current percentage of remaining health.
- Widths must be safely clamped between **0%** and **100%** (no negative widths or visual bar overflow).

---

### 4. Game Over & Outcomes
When health drops to 0 for either combatant:

* **Outcomes:**
  - **Player Won:** Monster health $\le 0$ while Player has health remaining.
  - **Monster Won (Player Lost):** Player health $\le 0$ while Monster has health remaining, or Player surrendered.
  - **Draw:** Both combatants reach $\le 0$ health in the same round.

* **Game Over Screen:**
  - When the game concludes, the combat controls section must be hidden.
  - Display a **Game Over** panel showing the outcome (*"You won!"*, *"You lost!"*, or *"It's a draw!"*).
  - Provide a **"Start New Game"** button that resets health, rounds, controls, and battle history back to the starting state.

---

### 5. Battle Log
- Every action taken in battle (Player attack, Special attack, Heal, Monster retaliation) is recorded.
- **Ordering:** The most recent battle event is always displayed at the top of the log list.
- **Log Formatting:**
  - Identifies who performed the action (**Player** vs **Monster**).
  - Describes the action type (**attacked** or **healed**).
  - Highlights the numerical value (damage dealt or health restored).

---

### 📊 Combat Reference Table

| Action | Player Effect | Monster Retaliation | Cooldown |
| :--- | :--- | :--- | :--- |
| **Attack** | Deals 5–12 damage | Takes 8–15 damage | None |
| **Special Attack** | Deals 10–25 damage | Takes 8–15 damage | Every 3 rounds |
| **Heal** | Heals 8–20 HP (max 100%) | Takes 8–15 damage | None |
| **Surrender** | Immediate Loss | None | None |

---

## 🗺️ Step-by-Step Task Roadmap

### 🎯 Task 1: Basic Combat Loop & Health Tracking
- [ ] Initialize health for Player and Monster (100% each).
- [ ] Implement the **Attack** button:
  - Player deals normal damage (**5–12**) to Monster.
  - Monster retaliates with counter-attack damage (**8–15**) to Player.

---

### 🎯 Task 2: Dynamic Health Bar UI
- [ ] Update both health bar widths dynamically to visually reflect current health percentage.
- [ ] Ensure health bars clamp cleanly between **0%** and **100%** (no negative widths or visual overflows).

---

### 🎯 Task 3: Special Attack & Cooldown
- [ ] Implement the **Special Attack** button:
  - Deals heavier random damage (**10–25**) to Monster $\rightarrow$ Monster retaliates (**8–15**).
- [ ] Implement the **Cooldown Rule**:
  - Special Attack is only available once every **3 rounds** (button is disabled while on cooldown).

---

### 🎯 Task 4: Healing & Surrender
- [ ] Implement the **Heal** button:
  - Restores random health (**8–20**) to Player (capped at **100%** max).
  - Monster retaliates with a counter-attack (**8–15**).
- [ ] Implement the **Surrender** button:
  - Player immediately forfeits the match (Monster wins, no retaliation).

---

### 🎯 Task 5: Game Over Screen & Restart
- [ ] Detect the three game outcomes (Win, Loss, Draw).
- [ ] When the game ends:
  - Hide combat action controls.
  - Show the **Game Over** panel with the outcome (*"You won!"*, *"You lost!"*, or *"It's a draw!"*).
- [ ] Implement **Start New Game**:
  - Resets health, rounds, controls, and history back to the starting state.

---

### 🎯 Task 6: Battle Log
- [ ] Record every battle event (Player attacks, Monster attacks, healing).
- [ ] Render the list of events with the **most recent event at the top**.
- [ ] Format each log item to show actor, action, and numerical value.
