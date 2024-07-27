function fabonachi(n) {
	if (n <= 1) {
		return n;
	}
	return fabonachi(n - 1) + fabonachi(n - 2);
}

module.exports = fabonachi;
