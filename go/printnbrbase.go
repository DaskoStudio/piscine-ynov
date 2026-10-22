package piscine

import "github.com/01-edu/z01"

func PrintNbrBase(nbr int, base string) {
	if !isValidBase(base) {
		z01.PrintRune('N')
		z01.PrintRune('V')
		return
	}

	baseRunes := []rune(base)
	baseLen := len(baseRunes)

	if nbr == 0 {
		z01.PrintRune(baseRunes[0])
		return
	}
	n := int64(nbr)
	var unsignedN uint64

	if n < 0 {
		z01.PrintRune('-')
		unsignedN = uint64(-n)
	} else {
		unsignedN = uint64(n)
	}

	var result []rune
	for unsignedN > 0 {
		remainder := unsignedN % uint64(baseLen)
		result = append([]rune{baseRunes[remainder]}, result...)
		unsignedN = unsignedN / uint64(baseLen)
	}

	for _, r := range result {
		z01.PrintRune(r)
	}
}

func isValidBase(base string) bool {
	if len(base) < 2 {
		return false
	}

	baseRunes := []rune(base)
	for i, r := range baseRunes {
		if r == '+' || r == '-' {
			return false
		}
		for j := i + 1; j < len(baseRunes); j++ {
			if r == baseRunes[j] {
				return false
			}
		}
	}
	return true
}
