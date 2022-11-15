function binToDec() {
	let binary = document.querySelector("#binary").value;
	let power = binary.length - 1;
	let sum = 0;
	for (let i = 0; i < binary.length; i = i + 1) {
		sum = sum + Number(binary[i]) * Math.pow(16, power);
		power = power - 1;
	}
	document.querySelector(".result").textContent = `Decimal Number : ${sum}`;
}
