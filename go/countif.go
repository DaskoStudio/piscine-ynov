package piscine

func CountIf(f func(string) bool, tab []string) int {
	compte := 0
	for _, num := range tab {
		if f(num) {
			compte += 1
		}
	}
	return compte
}
