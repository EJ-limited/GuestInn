package handlers

import (
	"net/http"

	"github.com/EJ-lim/guestinn/models"
	"github.com/gin-gonic/gin"
)

func Charge(c *gin.Context) {
	// checkindate := c.PostForm("checkin-date")
	// checkoutdate := c.PostForm("checkout-date")
	// guestno := c.PostForm("rooms")
	// phonenumber := c.PostForm("phonenumber")
	// email := c.PostForm("email")
	// roomtype := c.PostForm("roomtype")
	var form models.BookingForm
	err := c.ShouldBind(&form)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
	}
	c.JSON(200, gin.H{
		"checkin":  form.CheckInDate,
		"checkout": form.CheckOutDate,
		"guests":   form.Guests,
		"mail":     form.Email,
		"room":     form.RoomType,
	})

}
