<div id="content">Loading...</div>

<script>
    window.onload = (function() {
        fetch("https://offal-bot.azurewebsites.net/api/me", {  method: "GET", credentials: "include"})
            .then((resp) => resp.json())
            .then(function(data) {
                var element = document.getElementById("content");
                element.innerHTML = "Your username is: <strong>" + data.Username + "</strong>"
            })
            .catch(function() {
                
            });
    });
</script>