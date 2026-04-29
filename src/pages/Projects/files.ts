export const codeFiles = {
  "/index.html": {
    code: 
    `<!DOCTYPE html>
<html lang="en">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Word Drag</title>
  <link rel="stylesheet" href="main.css">
  <script src="main.js" defer></script>
  <body>
	<main id="main">
	  <section class="form-holder">
		<div class="form-block">
		  <div class="rectangle-selection"></div>
		  <h1 class="title">Symbol <mark>Master</mark></h1>
			<p class="subtitle">Enter a word and play with symbols</p>
			<div class="input-group">
			  <input id="input-text" type="text" placeholder="Enter your word here...">
			  <button id="button" class="btn">Generate</button>
			</div>
			<div id="error-message"></div>
			<div class="canvas">
			  <ul id="symbols-container"></ul>
			</div>
		</div>
	  </section>
    </main>
    </body>
    `,
  },
  "/styles.css": {
    code: 
    `body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  user-select: none;
  cursor: default;
}

h1, h2, h3, h4, h5, h6 {
  color: #003566;
  line-height: 1;
  margin-bottom: .3em;
}

input {
  border-radius: 10px;
  border: 2px solid #003566;
  padding: 8px 10px;
}

mark {
  color: #ffc300;
  background: none;
}

button {
  border-radius: 10px;
  background: #003566;
  color: #fff;
  border: none;
  padding: 9px 15px;
}

button:hover {
  opacity: 0.8;
  transition: all ease 0.3s;
  cursor: pointer;
}

p {
  color: #001d3d;
  margin-bottom: 20px;
  margin-top: 0;
}

.form-block {
  margin: 0 auto;
  text-align: center;
  background: #fff;
}

.input-group {
  display: grid;
  gap: 10px;
}

#symbols-container {
  position: relative;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

.symbol {
  position: absolute;
  padding: 5px 10px;
  background: #f0f0f0;
  border: 1px solid #003566;
  border-radius: 5px;
  cursor: grab;
  user-select: none;
}

.symbol.selected {
  background: #003566;
  color: #fff;
}

ul {
  padding: 0;
  margin: 0;
}

.rectangle-selection {
  position: absolute;
  border: 2px dashed #003566;
  background-color: rgba(0, 0, 0, 0.1);
  pointer-events: none;
  opacity: 0;
}

#error-message {
  color: #a4161a;
  margin-top: 5px;
  text-align: left;
  font-size: 12px;
  height: 14px;
  line-height: 1;
  display: block;
  overflow: hidden;
}
    `,
  },
  "/index.js": {
    code: 
    `import "./styles.css";
import "./index.js";
const buttonElement = document.getElementById("button");
const inputTextElement = document.getElementById("input-text");
const textContainerElement = document.getElementById("symbols-container");
let selectedItems = [];
const errorText = document.getElementById("error-message");

buttonElement.addEventListener("click", () => {
  const inputText = inputTextElement.value.split(' ').join('');

  errorText.innerHTML = "&nbsp;"; 

  if (inputText.length === 0) {
	errorText.innerText = "Enter word please";
	return;
  }

  textContainerElement.innerHTML = "";

  [...inputText].forEach((symbol, index) => {
	const item = document.createElement("li");
	item.innerText = symbol;
	item.className = "symbol";

	const row = Math.floor(index / 8);
	const col = index % 8;
	item.style.left = \`\${col * 35}px\`;
	item.style.top = \`\${row * 40}px\`;

	item.addEventListener('mousedown', (e) => {
	  if (e.ctrlKey) {
		if (selectedItems.includes(item)) {
		  item.classList.remove("selected");
		  selectedItems = selectedItems.filter(i => i !== item);
		} else {
		  item.classList.add("selected");
		  selectedItems.push(item);
		}
		return;
	  }

	  if (!selectedItems.includes(item)) {
		selectedItems = [item];
	  }

	  const itemsHolderCoordinate = textContainerElement.getBoundingClientRect();

	  const itemsCoordinates = selectedItems.map(el => {
		return {
		  element: el,
		  initialX: e.clientX - el.getBoundingClientRect().left,
		  initialY: e.clientY - el.getBoundingClientRect().top,
		  startX: el.style.left,
		  startY: el.style.top
		};
	  });

	  const itemMove = (moveEvent) => {
		itemsCoordinates.forEach(data => {
		  let currentX = moveEvent.clientX - itemsHolderCoordinate.left - data.initialX;
		  let currentY = moveEvent.clientY - itemsHolderCoordinate.top - data.initialY;

		  data.element.style.left = \`\${currentX}px\`;
		  data.element.style.top = \`\${currentY}px\`;
		});
	  };

	  const itemSet = () => {
		document.removeEventListener('mousemove', itemMove);
		document.removeEventListener('mouseup', itemSet);

		const allSymbols = document.querySelectorAll('.symbol');
		allSymbols.forEach((otherItem) => {
		  if (selectedItems.includes(otherItem)) return;

		  if (isOverlapping(item, otherItem)) {
			const targetX = otherItem.style.left;
			const targetY = otherItem.style.top;

			const currentItemData = itemsCoordinates.find(d => d.element === item);

			therItem.style.left = currentItemData.startX;
			otherItem.style.top = currentItemData.startY;

			tem.style.left = targetX;
			tem.style.top = targetY;
		  }
		});

		selectedItems.forEach(el => el.classList.remove('selected'));
		selectedItems = [];
	  };

	  document.addEventListener('mousemove', itemMove);
	  document.addEventListener('mouseup', itemSet);
	});

	textContainerElement.appendChild(item);
  });
});

function isOverlapping(item1, item2) {
  const item1Coordinates = item1.getBoundingClientRect();
  const item2Coordinates = item2.getBoundingClientRect();

  return !(item1Coordinates.right < item2Coordinates.left ||
	item1Coordinates.left > item2Coordinates.right ||
	item1Coordinates.bottom < item2Coordinates.top ||
	item1Coordinates.top > item2Coordinates.bottom
  );
}

function initRectangleSelection() {
  const selectionRectangle = document.querySelector(".rectangle-selection");
  let isMouseDown = false;
  let startX = 0;
  let startY = 0;

  function onMouseDown(e) {
	if (e.target.classList.contains('symbol')) return;

	isMouseDown = true;
	startX = e.clientX;
	startY = e.clientY;

	selectedItems.forEach(el => el.classList.remove('selected'));
	selectedItems = [];

	selectionRectangle.style.left = \`\${startX}px\`;
	selectionRectangle.style.top = \`\${startY + window.scrollY}px\`;
	selectionRectangle.style.width = '0px';
	selectionRectangle.style.height = '0px';
	selectionRectangle.style.opacity = 1;
  }

  function onMouseMove(e) {
	if (!isMouseDown) return;

	const currentX = e.clientX;
	const currentY = e.clientY;

	const left = Math.min(startX, currentX);
	const top = Math.min(startY, currentY);
	const width = Math.abs(currentX - startX);
	const height = Math.abs(currentY - startY);

	selectionRectangle.style.left = \`\${left}px\`;
	selectionRectangle.style.top = \`\${top + window.scrollY}px\`;
	selectionRectangle.style.width = \`\${width}px\`;
	selectionRectangle.style.height = \`\${height}px\`;

	const allSymbols = document.querySelectorAll('.symbol');
	const rectangle = {
	  left: left,
	  top: top,
	  right: left + width,
	  bottom: top + height
	};

	allSymbols.forEach(symbol => {
	  const symbolCoordinates = symbol.getBoundingClientRect();

	  const isInside = !(
		symbolCoordinates.right < rectangle.left ||
		symbolCoordinates.left > rectangle.right ||
		symbolCoordinates.bottom < rectangle.top ||
		symbolCoordinates.top > rectangle.bottom
	  );

	  if (isInside) {
		if (!selectedItems.includes(symbol)) {
		  symbol.classList.add("selected");
		  selectedItems.push(symbol);
		}
	  } else {
		symbol.classList.remove("selected");
		selectedItems = selectedItems.filter(i => i !== symbol);
	  }
	});
  }

  function onMouseUp() {
	isMouseDown = false;
	selectionRectangle.style.opacity = 0;
  }

  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}

initRectangleSelection();`,
  },
};
