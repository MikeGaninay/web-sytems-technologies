
    document.addEventListener("DOMContentLoaded", function(){
    const Reg_form = document.getElementById("Form");
    const Body_form = document.getElementById("user_table")
    

    Reg_form.addEventListener("submit", function(event){
        event.preventDefault();

        const name1 = document.getElementById('name');
        const email1 = document.getElementById('email');
        const role1 = document.getElementById('role')

        if(name1.value === ""){
            alert("Please Add your Name!");
            return;
        }

        if(email1.value === ""){
            alert("Please Add your Email!");
            return;
        }

        register(name1.value, email1.value, role1.value);
        name1.value = "";
        email1.value = "";
    });

    function register(name, email, role){
        const appending_entity = document.createElement('tr');
        appending_entity.innerHTML = '<td style="text-align:center;">' 
        + Math.floor(Math.random() * 100000) + '</td>' 
        + '<td style="text-align:center;">' + name + '</td>' 
        + '<td style="text-align:center;">' + email + '</td>' 
        + '<td style="text-align:center;">' + role + '</td>' 
        + '<td style="text-align:center;">' + '<button class="edit-btn" style="border: 1px solid green; border-radius:3px; font-family:italic; padding:2px; margin:1px; background-color:Green;">Edit</button><button class="delete-btn" style="border: 1px solid red; border-radius:3px; font-family:italic; padding:2px; margin:1px; background-color:red;">Delete</button>' 
        + '</td>';
        Body_form.appendChild(appending_entity)
    }
    
    Body_form.addEventListener('click', function(event){
        if(event.target.classList.contains('delete-btn')){
            event.target.closest('tr').remove();
        }
        else if(event.target.classList.contains('edit-btn')){
            const c_row = event.target.closest('tr');
            document.getElementById('name').value = c_row.querySelector('td:nth-child(2)').textContent;
            document.getElementById('email').value = c_row.querySelector('td:nth-child(3)').textContent;
            document.getElementById('role').value = c_row.querySelector('td:nth-child(4)').textContent;
        }
    });
});
