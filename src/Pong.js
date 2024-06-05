import React from 'react';
import p5 from 'p5';

class Pong extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    let playerPos,
      computerPos,
      ballPos,
      ballSpeed,
      paddleHeight,
      paddleWidth,
      canvasDimensions,
      scaleFactor;

    p.rand = (a, b) => {
      return a + Math.random() * (b - a);
    };

    p.setup = () => {
      canvasDimensions = [window.innerWidth * 0.8, window.innerHeight * 0.8];
      p.createCanvas(canvasDimensions[0], canvasDimensions[1]);
      p.background(20);

      scaleFactor = p.width / 600; // Adjust based on the original canvas width

      paddleHeight = 50 * scaleFactor;
      paddleWidth = 5 * scaleFactor;

      playerPos = p.height / 2;
      computerPos = p.height / 2;

      ballPos = p.createVector(p.width / 2, p.height / 2);
      ballSpeed = p.createVector(2 * scaleFactor, p.rand(-2 * scaleFactor, 2 * scaleFactor));
    };

    p.drawPaddle = (x, y) => {
        const constrainedY = p.constrain(y, paddleHeight / 2, p.height - paddleHeight / 2);
        p.fill(255);
        p.rectMode(p.CENTER);
        p.rect(x, constrainedY, paddleWidth, paddleHeight);
    };
      

    p.drawBall = (x, y) => {
      p.fill('#fffff');
      p.ellipse(x, y, 8 * scaleFactor, 8 * scaleFactor);
    };

    p.resetBall = () => {
      ballPos = p.createVector(p.width / 2, p.height / 2);
      ballSpeed = p.createVector(2 * scaleFactor, p.rand(-3 * scaleFactor, 3 * scaleFactor));
    };

    p.draw = () => {
      p.background(20);

      // Draw paddles
      p.drawPaddle(20 * scaleFactor, playerPos);
      p.drawPaddle(p.width - 20 * scaleFactor, computerPos);

      // Draw ball
      p.drawBall(ballPos.x, ballPos.y);

      // Move player paddle
      playerPos = Math.max(0, Math.min(p.height, p.mouseY));

      // Move computer paddle
      // Use the same logic as before for simplicity
      computerPos += (ballPos.y - computerPos) * 0.3;

      // Move ball
      ballPos.add(ballSpeed);

      // Wall collisions
      if (ballPos.y < 4 * scaleFactor || ballPos.y > p.height - 4 * scaleFactor) {
        ballSpeed.y *= -1;
      }

      // Goal collisions
      if (ballPos.x < 4 * scaleFactor || ballPos.x > p.width - 4 * scaleFactor) {
        p.resetBall();
      }

      // Ball/paddle collisions
      if (ballPos.x < 25 * scaleFactor && ballPos.x > 15 * scaleFactor) {
        if (ballPos.y > playerPos - paddleHeight / 2 && ballPos.y < playerPos + paddleHeight / 2) {
          ballSpeed.x *= -1.01;
          ballSpeed.y += (ballPos.y - playerPos) / 20;
        }
      } else if (ballPos.x > p.width - 25 * scaleFactor && ballPos.x < p.width - 15 * scaleFactor) {
        if (ballPos.y > computerPos - paddleHeight / 2 && ballPos.y < computerPos + paddleHeight / 2) {
          ballSpeed.x *= -1.01;
          ballSpeed.y += (ballPos.y - computerPos) / 20;
        }
      }
    };
  };

  componentDidMount() {
    if (!this.myP5) {
      this.myP5 = new p5(this.Sketch, this.myRef.current);
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }} ref={this.myRef}>

      </div>
    );
  }
}

export default Pong;
