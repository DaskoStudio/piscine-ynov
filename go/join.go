package piscine

func Join(strs []string, sep string) string {
	str := ""
	for r, ele := range strs {
		if r < len(strs)-1 {
			str += ele + sep
		} else {
			str += ele
		}
	}
	return str
}
