package piscine

func Capitalize(s string) string {
	runes := []rune(s)
	inWord := false
	for i, r := range runes {
		if (r >= 'A' && r <= 'Z') || (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') {
			if !inWord {
				inWord = true
				if r >= 'a' && r <= 'z' {
					runes[i] = r - 32
				}
			} else {
				if r >= 'A' && r <= 'Z' {
					runes[i] = r + 32
				}
			}
		} else {
			inWord = false
		}
	}
	return string(runes)
}
