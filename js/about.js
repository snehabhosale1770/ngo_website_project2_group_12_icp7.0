function about() {
    const element = document.getElementById("tab-content");
    element.innerText = "NGOs are private agencies that can support development at local, national and international level by organising indigenous groups. NGOs as citizen groups raise awareness and influence policies and include independent cooperatives, community associations, societies, groups and various other associations."
}
function mission() {
    const element = document.getElementById("tab-content")
    element.innerText = "  The Foundation for Social Change and Inclusion works for the social development and integration of underprivileged individuals, groups and communities in Bulgaria."
}
function vision() {
    const element = document.getElementById("tab-content")
    element.innerText = "  Our work aims to break the vicious cycle of poverty and social isolation and to restore hope for a better future. We believe that every person has the right to access resources and opportunities in order to live and develop with dignity and to become an active and contributing member of our society."
}

function lightmode() {
    const theme = document.getElementById("body");
    theme.className = "theme-light";
  }
  
  function darkmode() {
    const theme = document.getElementById("body");
    theme.className = "theme-dark";
  }

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
        let isAnyFieldEmpty = false;

        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isAnyFieldEmpty = true;
            }
        });

        if (isAnyFieldEmpty) {
            // Show the popup or alert
            alert('All fields are required!');
        } else {
            // Submit the form
            form.submit();
        }
    });
});