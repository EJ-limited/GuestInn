package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()
	v1 := r.Group("/api/v1")
	// use versioned handlers
	{
		v1.GET("/", handlers.Index)
		v1.POST("/charge", handlers.Charge)
		v1.GET("/health", handlers.Healthz)
		v1.GET("/verify", handler.Verify)

	}

}
