function move() {
  const circle = document.getElementsByClassName("circle")[0];
  const rectangle = document.getElementsByClassName("box")[0];

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        circle.style.top = `${circle.offsetTop - 10}px`;
        break;
      case "ArrowDown":
        circle.style.top = `${circle.offsetTop + 10}px`;
        break;
      case "ArrowLeft":
        circle.style.left = `${circle.offsetLeft - 10}px`;
        break;
      case "ArrowRight":
        circle.style.left = `${circle.offsetLeft + 10}px`;
        break;
      case "Enter":
        createEgg(circle);
        break;
      default:
        break;
    }
    checkCollision(circle, rectangle);
  });
}

function createEgg(parentElement) {
  const egg = document.createElement("div");
  egg.classList.add("egg");
  const eggTop = `${
    parentElement.offsetTop + parentElement.offsetHeight / 2 - 5
  }px`;
  const eggLeft = `${
    parentElement.offsetLeft + parentElement.offsetWidth / 2 - 5
  }px`;
  console.log(eggTop, eggLeft);
  egg.style.top = eggTop;
  egg.style.left = eggLeft;
  const rectangle = document.getElementsByClassName("box")[0];
    rectangle.appendChild(egg);
}

function checkCollision(circle, rectangle) {
  const circleTop = circle.offsetTop;
  const circleBottom = circle.offsetTop + circle.offsetHeight;
  const circleLeft = circle.offsetLeft;
  const circleRight = circle.offsetLeft + circle.offsetWidth;

  const rectangleTopCoordinate = 0;
  const rectangleBottomCoordinate = 0 + rectangle.offsetHeight;
  const rectangleLeftCoordinate = 0;
  const rectangleRightCoordinate = 0 + rectangle.offsetWidth;

  if (circleBottom < rectangleTopCoordinate) {
    circle.style.top = `${rectangleBottomCoordinate}px`;
  } else if (circleTop > rectangleBottomCoordinate) {
    circle.style.top = `${rectangleTopCoordinate - circle.offsetHeight}px`;
  } else if (circleRight < rectangleLeftCoordinate) {
    circle.style.left = `${rectangleRightCoordinate}px`;
  } else if (circleLeft > rectangleRightCoordinate) {
    circle.style.left = `${rectangleLeftCoordinate - circle.offsetWidth}px`;
  }
}

move();
