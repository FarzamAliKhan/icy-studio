const degreeToRadian = (angle) => {
    return angle * (Math.PI / 180);
  };

  

  const radius = 100;
  const diameter = radius * 2;
  
  const circle = document.querySelector("#circle");
  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  
  const text = circle.dataset.text;
  const characters = text.split("");
  
  const deltaAngle = 360 / characters.length;
  const characterOffsetAngle = 8;
  let currentAngle = -90;
  
  characters.forEach((character, index) => {
    const span = document.createElement("span");
    span.innerText = character;
    const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
  
    const transform = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
    span.style.transform = `${transform} ${rotate}`;
  
    currentAngle += deltaAngle;
    circle.appendChild(span);
  });
  