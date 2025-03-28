package main

import (
	"fmt"
	"log"
	"os"

	"github.com/Debsnil24/Simple-UserAuth.git/routes"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load("./.env")
	if err != nil {
		log.Fatal("Error: Unable to Load .env file", err)
	}
	
	r := routes.Router()
	err = r.Run(":"+ os.Getenv("PORT"))
	if err != nil {
		fmt.Println("Error: Unable to Start Webserver", err)
	} else {
		fmt.Println("Success! Webserver started at port 9000")
	}
}