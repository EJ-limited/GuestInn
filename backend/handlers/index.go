package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Index handles all requests relating to the index page
func Index(c *gin.Context) {
	c.HTML(http.StatusAccepted, "index.html", gin.H{})
}
