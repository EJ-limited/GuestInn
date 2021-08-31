package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	r.GET("/", handlers.Index)
	r.POST("/charge", handlers.Charge)
	r.GET("/health", handlers.Healthz)
	r.GET("/verify", handler.Verify)

}
