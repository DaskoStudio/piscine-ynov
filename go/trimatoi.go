package piscine

func TrimAtoi(s string) int {
	sign := 1
	started := false
	result := 0

	for _, r := range s {
		if r == '-' && !started {
			sign = -1
		}
		if r >= '0' && r <= '9' {
			started = true
			result = result*10 + int(r-'0')
		}
	}

	return sign * result
}
