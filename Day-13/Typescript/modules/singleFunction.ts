export function fabonachi(n: number): number {
	if (n <= 1) {
		return n;
	}
	return fabonachi(n - 1) + fabonachi(n - 2);
}
