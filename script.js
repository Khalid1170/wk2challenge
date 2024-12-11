let shoppingList = [];

const form = document.querySelector('form');
const container = document.querySelector('.container');
const btns = document.querySelector('.btn-sections');
const clear = document.querySelector('.clear-list');

function displayItems() {
	container.innerHTML = '';

	shoppingList.forEach((item, index) => {
		const itemCard = `<div class="item">
				<div id="details-${index}" class="">
					<<h4 class="title">${item.name.toUpperCase()}</h4>
					<p class="price"> Costs ${item.price} ksh</p>
				</div>
				<div class="check">
					<input type="checkbox" id="mark-${index}" onclick="togglePurchased(${index})" />
					<label for="mark-${index}">Bought</label>
				</div>
			</div>`;

		container.insertAdjacentHTML('beforeend', itemCard);

	});

	if (shoppingList.length > 0) {
		btns.classList.remove('clear');
	} else {
		btns.classList.add('clear');
	}
}



function clearList() {
	shoppingList = [];
	container.innerHTML = ''; 
	btns.classList.add('clear'); 
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const itemName = e.target.product.value;
	const itemPrice = e.target.price.value;

	shoppingList.push({
		name: itemName,
		price: itemPrice,
	});
	form.reset();
	displayItems();
});


