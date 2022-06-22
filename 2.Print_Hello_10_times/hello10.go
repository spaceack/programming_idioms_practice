package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Printf(strings.Repeat("Hello, Spaceack!\n", 5))
	for i := 0; i < 5; i++ {
		fmt.Printf("Hello, Spaceack!\n")
	}
}
