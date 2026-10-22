package piscine

import "github.com/01-edu/z01"

func PrintComb() {
	for d1 := '0'; d1 <= '7'; d1++ {
		for d2 := d1 + 1; d2 <= '8'; d2++ {
			for d3 := d2 + 1; d3 <= '9'; d3++ {

				z01.PrintRune(d1)
				z01.PrintRune(d2)
				z01.PrintRune(d3)
				if !(d1 == '7' && d2 == '8' && d3 == '9') {
					z01.PrintRune(',')
					z01.PrintRune(' ')
				}
			}
		}
	}
	z01.PrintRune('\n')
}
