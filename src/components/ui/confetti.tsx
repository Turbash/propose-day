import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const interval: any = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#ff69b4', '#ff1493', '#ff85c1', '#ffc0cb'],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#ff69b4', '#ff1493', '#ff85c1', '#ffc0cb'],
    });
  }, 250);
};

export const triggerFireworks = () => {
  const duration = 7 * 1000;
  const animationEnd = Date.now() + duration;

  const interval: any = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#ff85c1', '#ffc0cb', '#ff0066'],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#ff85c1', '#ffc0cb', '#ff0066'],
    });
  }, 100);
};

export const triggerHeartExplosion = () => {
  const scalar = 2;
  const heart = confetti.shapeFromText({ text: '💕', scalar });

  const defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: [heart],
    scalar,
  };

  confetti({
    ...defaults,
    particleCount: 30,
  });

  confetti({
    ...defaults,
    particleCount: 20,
    flat: true,
  });

  confetti({
    ...defaults,
    particleCount: 20,
    scalar: scalar / 2,
    shapes: ['circle'],
  });
};
