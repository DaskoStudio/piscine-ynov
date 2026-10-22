package piscine

func AppendRange(min, max int) []int {
	if max <= min {
		return nil
	}

	list := []int{}
	for i := min; i < max; i++ {
		list = append(list, i)
	}
	return list
}
