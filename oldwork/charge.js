function book(){
    const email = document.getElementById("email");
    const phonenumber = document.getElementById("phonenumber");
    const checkin = document.getElementById("checkin-date");
    const checkout =  document.getElementById("checkout-date");
    const roomtype = document.getElementById("roomtype");

    fetch("/api/v1/charge",{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                "name":"example",
                "email":email,
                "phonenumber":phonenumber,
                "checkin-date":checkin,
                "checkout-date":checkout,
                "roomtype":roomtype,
                "guests":2,
            }
        )

    })
    .then(function(response){
        console.log(response.json())
    })
}