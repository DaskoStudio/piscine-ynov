package piscine

func Any(f func(string) bool, a []string) bool {
	for _, num := range a {
		if f(num) {
			return true
		}
	}
	return false
}
