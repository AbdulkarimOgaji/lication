package main

import (
	"log"

	"github.com/whatslication/pkg/health"
	"github.com/whatslication/pkg/http/rest"
	"github.com/whatslication/pkg/storage/mongo"
)

func main() {
	s, err := mongo.NewStorage()
	if err != nil {
		log.Fatal("Failed to connect to the database", err)
	}
	health := health.NewService(s)

	router := rest.Handler(health)
	router.Run()
}