package piscine

func ToLower(s string) string {
	test := ""
	runes := []rune(s)
	alphaup := "abcdefghijklmnopqrstuvwxyz"
	alpha := "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

	for _, r := range runes {
		found := false
		for i, c := range alpha {
			if c == r {
				test += string(alphaup[i])
				found = true
				break
			}
		}
		if !found {
			test += string(r)
		}
	}
	return test
}
