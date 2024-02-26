document.addEventListener("DOMContentLoaded", function () {
	const checkbox = document.getElementById("checkbox");
	const nav = document.querySelector(".navegacion");

	checkbox.addEventListener("click", function () {
		nav.classList.toggle("activo");
	});

	window.addEventListener("resize", function () {
		if (window.innerWidth >= 768) {
			nav.classList.add("activo");
		} else {
			nav.classList.remove("activo");
		}
	});

	if (window.innerWidth >= 768) {
		nav.classList.toggle("activo");
	} else {
		nav.classList.remove("activo");
	}
});
