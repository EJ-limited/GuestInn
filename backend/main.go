package main

import (
	"net/http"

	"github.com/EJ-lim/guestinn/handlers"
	"github.com/gin-gonic/gin"
	stats "github.com/semihalev/gin-stats"
)

func main() {
	r := gin.Default()
	r.LoadHTMLFiles("../index.html")
	r.Use(stats.RequestStats())
	v1 := r.Group("/api/v1")
	r.GET("/", handlers.Index)
	// use versioned handlers
	{
		v1.POST("/charge", handlers.Charge)
		// v1.GET("/health", handlers.Healthz)
		// v1.GET("/verify", handler.Verify)
		v1.GET("/stats", func(c *gin.Context) {
			c.JSON(http.StatusOK, stats.Report())
		})

	}
	r.Run(":8080")

}
