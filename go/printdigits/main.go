package main

import "github.com/01-edu/z01"

func main() {
	for d := '0'; d <= '9'; d++ {
		z01.PrintRune(d)
	}
	z01.PrintRune('\n')
}
