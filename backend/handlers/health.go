package handlers

import (
	"github.com/gin-gonic/gin"
)

// Healthz returns a 200 to show the service is alive and healthy
func Healthz(c *gin.Context) {
	c.Status(200)
}
