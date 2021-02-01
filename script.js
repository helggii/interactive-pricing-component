const pageViews = [ '10k', '50k', '100k', '500k', '1M' ];
const prices = [ 8, 12, 16, 24, 36 ];

const pages = document.querySelector('.pages');
const pricePerMonth = document.querySelector('.amount');
const slide = document.querySelector('.slide');
const yearPlanDiscount = document.querySelector('.tgl');

let slideValue = 3;
pages.textcontent = `${pageViews[slideValue]}`;
pricePerMonth.textContent = `$${prices[slide.value]}.00`;

slide.addEventListener('input', () => {
	slide.max = pageViews.length - 1;
	slideValue = slide.value;
	pages.textContent = `${pageViews[slideValue]}`;

	// change the price when moving the thumb across the slide
	if (yearPlanDiscount.checked) {
		pricePerMonth.textContent = `$${prices[slide.value] * 0.75}.00`;
	} else {
		pricePerMonth.textContent = `$${prices[slide.value]}.00`;
	}
});

// change the price when clicking the discount button
yearPlanDiscount.onchange = function() {
	if (this.checked) {
		pricePerMonth.textContent = `$${prices[slideValue] * 0.75}.00`;
	} else {
		pricePerMonth.textContent = `$${prices[slideValue]}.00`;
	}
};
