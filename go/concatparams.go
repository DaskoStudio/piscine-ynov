package piscine

func ConcatParams(args []string) string {
	list := ""
	for i := 0; i < len(args); i++ {
		if i != len(args)-1 {
			list += args[i] + "\n"
		} else {
			list += args[i]
		}
	}
	return list
}
