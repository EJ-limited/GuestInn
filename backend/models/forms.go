package models

import (
	"errors"
	"fmt"
)

type BookingForm struct {
	Name         string `json:"name" form:"name"`
	CheckInDate  string `json:"checkin-date" form:"checkin-date" binding:"required" `
	CheckOutDate string `json:"checkout-date" form:"checkout-date"  binding:"required"`
	PhoneNumber  string `json:"phonenumber" form:"phonenumber"  binding:"required"`
	Email        string `json:"email" form:"email"  binding:"required"`
	RoomType     string `json:"roomtype" form:"roomtype"  binding:"required"`
	Guests       int    `json:"rooms" forms:"rooms"  binding:"required"`
}

// FormToCustomer creates a customer object from the form passed in
func (bf BookingForm) FormToCustomer(form BookingForm) *Customer {
	var customer Customer
	customer.Email = form.Email
	customer.Name = form.Name
	customer.PhoneNumber = form.PhoneNumber
	return &customer
}

// RoomType struct defines a room type and price
type RoomType struct {
	Price int    `json:"price"`
	Name  string `json:"name"`
}

var AC = RoomType{Price: 5000, Name: "AC"}
var NONAC = RoomType{Price: 4000, Name: "non-AC"}
var SINGLEBED = RoomType{Price: 3000, Name: "single bed"}
var DOUBLEBED = RoomType{Price: 2500, Name: "double bed"}

//GetRoomPrice will return Roomtype from the given string or an error if the roomtype passed in is invalid
func (rt RoomType) GetRoomPrice(roomtype string) (RoomType, error) {
	switch roomtype {
	case "AC":
		return AC, nil
	case "non-AC":
		return NONAC, nil
	case "single bed":
		return SINGLEBED, nil
	case "double bed":
		return DOUBLEBED, nil
	}
	return RoomType{}, errors.New(fmt.Sprintf("roomtype %s was not found", roomtype))
}
