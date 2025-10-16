class PortlandDayPlanner {
  constructor() {
    this.spinners = {
      food: document.getElementById('food-spinner'),
      activity: document.getElementById('activity-spinner'),
      outdoor: document.getElementById('outdoor-spinner'),
      evening: document.getElementById('evening-spinner'),
    };

    this.results = {
      food: document.getElementById('food-result'),
      activity: document.getElementById('activity-result'),
      outdoor: document.getElementById('outdoor-result'),
      evening: document.getElementById('evening-result'),
    };

    this.spinButton = document.getElementById('spin-button');
    this.resetButton = document.getElementById('reset-button');
    this.resultsContainer = document.getElementById('results');

    this.isSpinning = false;
    this.init();
  }

  init() {
    this.spinButton.addEventListener('click', () => this.spinAll());
    this.resetButton.addEventListener('click', () => this.reset());

    // Add click handlers for individual spinners
    Object.keys(this.spinners).forEach((key) => {
      this.spinners[key].addEventListener('click', () => this.spinSingle(key));
    });
  }

  spinAll() {
    if (this.isSpinning) return;

    this.isSpinning = true;
    this.spinButton.disabled = true;
    this.spinButton.textContent = '🎲 Spinning...';

    // Hide results during spinning
    this.resultsContainer.style.opacity = '0.5';

    // Spin all spinners with different durations
    const spinPromises = Object.keys(this.spinners).map((key, index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.spinSingleSpinner(key);
          resolve();
        }, index * 200); // Stagger the spins
      });
    });

    Promise.all(spinPromises).then(() => {
      setTimeout(() => {
        this.isSpinning = false;
        this.spinButton.disabled = false;
        this.spinButton.textContent = '🎲 Plan My Day!';
        this.resultsContainer.style.opacity = '1';
      }, 2000);
    });
  }

  spinSingle(category) {
    if (this.isSpinning) return;
    this.spinSingleSpinner(category);
  }

  spinSingleSpinner(category) {
    const spinner = this.spinners[category];
    const wheel = spinner.querySelector('.spinner-wheel');
    const options = spinner.querySelectorAll('.spinner-option');

    // Get current rotation from CSS custom property
    const currentRotation = parseFloat(
      getComputedStyle(wheel).getPropertyValue('--rotation') || '0'
    );

    // Calculate random spin amount (multiple full rotations + random stop)
    const baseSpins = 3 + Math.random() * 3; // 3-6 full rotations
    const randomStop = Math.random() * 360;
    const totalRotation = currentRotation + baseSpins * 360 + randomStop;

    // Add spinning class for smooth transition
    wheel.classList.add('spinning');

    // Update the CSS custom property to trigger the rotation
    wheel.style.setProperty('--rotation', `${totalRotation}deg`);

    // Calculate which option will be selected
    const finalAngle = totalRotation % 360;
    const optionAngle = 360 / options.length;
    const selectedIndex =
      Math.floor((360 - finalAngle) / optionAngle) % options.length;

    // Update result after animation
    setTimeout(() => {
      const selectedOption = options[selectedIndex].textContent;
      this.results[category].textContent = selectedOption;
      wheel.classList.remove('spinning');
    }, 2000);
  }

  reset() {
    // Reset all spinners to initial position
    Object.keys(this.spinners).forEach((key) => {
      const wheel = this.spinners[key].querySelector('.spinner-wheel');
      wheel.classList.remove('spinning');
      wheel.style.setProperty('--rotation', '0deg');
    });

    // Clear results
    Object.keys(this.results).forEach((key) => {
      this.results[key].textContent = '-';
    });

    // Reset button state
    this.isSpinning = false;
    this.spinButton.disabled = false;
    this.spinButton.textContent = '🎲 Plan My Day!';
    this.resultsContainer.style.opacity = '1';
  }

  // Add some fun effects
  addConfetti() {
    // Simple confetti effect
    const colors = [
      '#ff6b6b',
      '#4ecdc4',
      '#45b7d1',
      '#96ceb4',
      '#feca57',
      '#ff9ff3',
    ];

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = '-10px';
      confetti.style.borderRadius = '50%';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '1000';

      document.body.appendChild(confetti);

      // Animate confetti falling
      confetti.animate(
        [
          { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
          {
            transform: `translateY(${
              window.innerHeight + 100
            }px) rotate(720deg)`,
            opacity: 0,
          },
        ],
        {
          duration: 3000 + Math.random() * 2000,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }
      ).onfinish = () => {
        confetti.remove();
      };
    }
  }
}

// Initialize the planner when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const planner = new PortlandDayPlanner();

  // Add confetti effect when all spinners finish
  const originalSpinAll = planner.spinAll.bind(planner);
  planner.spinAll = function () {
    originalSpinAll();
    setTimeout(() => {
      planner.addConfetti();
    }, 2000);
  };
});
