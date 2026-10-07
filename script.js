// Emergency Help Request Form

const form = document.getElementById("helpForm");
const success = document.getElementById("success");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const type = document.getElementById("type").value;
    const details = document.getElementById("details").value;

    if (
        name === "" ||
        phone === "" ||
        location === "" ||
        type === "" ||
        details === ""
    ) {
        alert("Please fill in all the details.");
        return;
    }

    const request = {
        name: name,
        phone: phone,
        location: location,
        type: type,
        details: details,
        date: new Date().toLocaleString()
    };

    localStorage.setItem(
        "emergencyRequest",
        JSON.stringify(request)
    );

    success.hidden = false;

    success.innerHTML =
        "✅ <strong>Emergency request submitted successfully!</strong>" +
        "<br><br>" +
        "Your request has been recorded on this device." +
        "<br><br>" +
        "⚠️ For an immediate emergency, please call the appropriate emergency number.";

    form.reset();
});
