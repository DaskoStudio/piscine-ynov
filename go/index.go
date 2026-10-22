package piscine

func Index(s string, toFind string) int {
	lenS := len(s)
	lenF := len(toFind)

	if lenF == 0 {
		return 0
	}
	if lenS < lenF {
		return -1
	}
	for i := 0; i <= lenS-lenF; i++ {
		if s[i:i+lenF] == toFind {
			return i
		}
	}
	return -1
}
