package piscine

import "github.com/01-edu/z01"

func PrintNbr(n int) {
	if n == 0 {
		z01.PrintRune('0')
		return
	}
	if n < 0 {
		z01.PrintRune('-')
	}
	var digits [20]rune
	i := 0
	for n != 0 {
		rem := n % 10
		if rem < 0 {
			rem = -rem
		}
		digits[i] = rune(rem + '0')
		i++
		n /= 10
	}
	for j := i - 1; j >= 0; j-- {
		z01.PrintRune(digits[j])
	}
}
