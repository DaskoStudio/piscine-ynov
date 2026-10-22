package piscine

func IsAlpha(s string) bool {
	test := 0
	runes := []rune(s)
	alpha := "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN1234567890"
	for i := 0; i < len(runes); i++ {
		test = 0
		for _, char := range alpha {
			if char == runes[i] {
				test += 1
			}
		}
		if test != 1 {
			return false
		}
	}
	return true
}
