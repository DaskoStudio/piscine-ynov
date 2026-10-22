package main

import "github.com/01-edu/z01"

type point struct {
	x int
	y int
}

func setPoint(ptr *point) {
	ptr.x = 42
	ptr.y = 21
}

func main() {
	points := &point{}
	setPoint(points)
	var c rune = 1

	z01.PrintRune('x')
	z01.PrintRune(' ')
	z01.PrintRune('=')
	z01.PrintRune(' ')

	n := points.x
	for n > 0 {
		count := n / 10
		digit := '0'
		for i := 0; i < count; i++ {
			digit += c
		}
		z01.PrintRune(digit)
		digit = '0'
		count = n % 10
		for i := 0; i < count; i++ {
			digit += c
		}
		z01.PrintRune(digit)
		n = -1
	}
	z01.PrintRune(',')
	z01.PrintRune(' ')

	z01.PrintRune('y')
	z01.PrintRune(' ')
	z01.PrintRune('=')
	z01.PrintRune(' ')
	n = points.y
	for n > 0 {
		count := n / 10
		digit := '0'
		for i := 0; i < count; i++ {
			digit += c
		}
		z01.PrintRune(digit)
		digit = '0'
		count = n % 10
		for i := 0; i < count; i++ {
			digit += c
		}
		z01.PrintRune(digit)
		n = -1
	}

	z01.PrintRune('\n')
}
