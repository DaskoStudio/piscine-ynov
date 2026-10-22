package piscine

func MakeRange(min, max int) []int {
	if max <= min {
		return nil
	}

	size := max - min
	list := make([]int, size)

	for i := 0; i < size; i++ {
		list[i] = min + i
	}

	return list
}
