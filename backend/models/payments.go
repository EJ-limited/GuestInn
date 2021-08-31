package models

import "github.com/google/uuid"

type PaymentRequests struct {
	Tx_Ref         string        `json:"tx_ref"`
	Amount         int           `json:"amount"`
	Currency       string        `json:"currency"`
	RedirectURL    string        `json:"redirect_url"`
	PaymentOptions []string      `json:"payment_options"`
	Customer       Customer      `json:"customer"`
	Customizations Customization `json:"customizations"`
}

type PaymentResponse struct {
	Status  string      `json:"status"`
	Message string      `json:"Message"`
	Data    PaymentData `json:"data"`
}

type PaymentData struct {
	Link string `json:"link"`
}

type Customer struct {
	Email       string `json:"email"`
	PhoneNumber string `json:"phonenumber"`
	Name        string `json:"name"`
}

type Customization struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Logo        string `json:"logo"`
}

// Sane defaults for the customization
func (Pr PaymentRequests) DefaultCustomizations() Customization {
	var customizaton Customization
	customizaton.Title = "Name of GuestInn"
	customizaton.Description = "Complete payment for your stay at XYZ"
	customizaton.Logo = "https://ifunny.co/what?"
	return customizaton
}

// Sane Default Payments Options
func (Pr PaymentRequests) DefaultPaymentOpts() []string {
	var options []string
	options = append(options, "card", "banktransfer")
	return options
}

// Generate a transaction refrence based from a UUID
func (Pr PaymentRequests) GenTrx() string {
	ref := uuid.New().String()
	return ref
}
