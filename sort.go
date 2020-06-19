package main

import "fmt"

var a = [100]int{}

func inputArray(A []int, maxSize []int) int {
	top := 0
	for ok := true; ok; ok = true {
		var x int
		fmt.Scanf("%d", &x)
		if x == 0 || top == maxSize {
			break
		}
		A[top] = x
		top++
	}
	return top
}

func printArray(A []int, N int) int {
	for i := 0; i < N; i++ {
		fmt.Printf("3d", A[i])
		fmt.Printf("\n")
	}
	return 0
}

func main() {
	fmt.Printf("Type the numbers:")
	A := a
	N := inputArray(A, a)
	printArray(A, N)
}
