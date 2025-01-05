import { useEffect, useRef } from "react";
import Matter from "matter-js";
// import "../index.css";
import "./Homepage.css";
const HomePage = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let particles = [];
    const trail = canvasRef.current;
    const ctx = trail.getContext("2d");

    // Setup canvas
    const resizeCanvas = () => {
      trail.width = window.innerWidth;
      trail.height = window.innerHeight;
    };
    resizeCanvas();

    // Particle class
    class Particle {
      constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.size = speed * 2;
        this.speedX = (Math.random() - 0.5) * speed;
        this.speedY = (Math.random() - 0.5) * speed;
        this.life = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.02;
        this.size *= 0.95;
      }

      draw() {
        ctx.fillStyle = `rgba(255,255,255,${this.life})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Matter.js setup
    const engine = Matter.Engine.create();
    const render = Matter.Render.create({
      element: containerRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    // Cursor variables
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastMouseX = mouseX;
    let lastMouseY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;

    // Bubble spawning
    const bubbles = [];
    let bubbleCount = 0;
    const maxBubbles = 20;

    const spawnBubble = () => {
      if (bubbleCount >= maxBubbles) return;

      const angle = (bubbleCount / maxBubbles) * Math.PI * 2;
      const distance = 100;
      const x = window.innerWidth / 2 + Math.cos(angle) * distance;
      const y = window.innerHeight / 2 + Math.sin(angle) * distance;

      const radius = Matter.Common.random(20, 50);
      const bubble = Matter.Bodies.circle(x, y, radius, {
        friction: 0,
        frictionAir: 0.02,
        restitution: 0.8,
        render: {
          fillStyle: `rgba(255,255,255,${Matter.Common.random(0.1, 0.3)})`,
          strokeStyle: "white",
          lineWidth: 2,
        },
      });

      Matter.Body.setVelocity(bubble, {
        x: Math.cos(angle) * 2,
        y: Math.sin(angle) * 2,
      });

      bubbles.push(bubble);
      Matter.World.add(engine.world, bubble);
      bubbleCount++;

      if (bubbleCount < maxBubbles) {
        setTimeout(spawnBubble, 100);
      }
    };

    // Initialize physics
    Matter.Engine.run(engine);
    Matter.Render.run(render);
    setTimeout(spawnBubble, 500);

    // Animation loop
    const updateCursor = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      const cursorRing = document.querySelector(".cursor-ring");
      const cursorDot = document.querySelector(".cursor-dot");

      if (cursorRing && cursorDot) {
        cursorRing.style.transform = `translate(${ringX - 20}px, ${
          ringY - 20
        }px)`;
        cursorDot.style.transform = `translate(${mouseX - 4}px, ${
          mouseY - 4
        }px)`;
      }

      ctx.clearRect(0, 0, trail.width, trail.height);
      particles = particles.filter((p) => p.life > 0);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      bubbles.forEach((bubble) => {
        const dx = mouseX - bubble.position.x;
        const dy = mouseY - bubble.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          Matter.Body.applyForce(bubble, bubble.position, {
            x: dx * 0.001,
            y: dy * 0.001,
          });
        }
      });

      requestAnimationFrame(updateCursor);
    };

    // Event listeners
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const speed = Math.sqrt(
        Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2)
      );

      if (speed > 5) {
        for (let i = 0; i < speed / 2; i++) {
          particles.push(new Particle(mouseX, mouseY, speed / 10));
        }
      }

      lastMouseX = mouseX;
      lastMouseY = mouseY;
    };

    const handleClick = () => {
      bubbles.forEach((bubble) => {
        Matter.Body.setVelocity(bubble, {
          x: (Math.random() - 0.5) * 10,
          y: -10,
        });
      });

      for (let i = 0; i < 20; i++) {
        particles.push(new Particle(mouseX, mouseY, 20));
      }
    };

    const handleResize = () => {
      resizeCanvas();
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
      Matter.Render.setPixelRatio(render, window.devicePixelRatio);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);
    updateCursor();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
      Matter.Engine.clear(engine);
      Matter.Render.stop(render);
    };
  }, []);

  return (
    <div className="home-container">
      <nav>
        <a href="#home">Home</a>
        <a href="#teams">Teams</a>
        <a href="#events">Events</a>
      </nav>
      <div className="cursor-ring"></div>
      <div className="cursor-dot"></div>
      <canvas ref={canvasRef} className="cursor-trail"></canvas>
      <div ref={containerRef} id="game-container"></div>
      <h1 className="title">iCell</h1>
      <p className="subtitle">Where Innovation Meets Play</p>
    </div>
  );
};

export default HomePage;
