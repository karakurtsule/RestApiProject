//jsonplaceholder.typicode.com


document.querySelector('#get-one').addEventListener('click',function(){

    var postid = document.querySelector('#postid').value;
    var url = "https://jsonplaceholder.typicode.com/posts/"+postid; //1 nolu post
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);

    xhr.onload = function(){

        if(xhr.status === 200){
            var post = JSON.parse(xhr.responseText);

                var html = `
                <div class="card text-center">
                    <div class="card-header">
                    ${post.id} - ${post.title}
                </div>
                <div class="card-body">   
                    <p class="card-text">${post.body}</p>        
                </div>
                 `;

                document.querySelector('#results').innerHTML = html;
              
        }
    } 
    xhr.send();

})



document.querySelector('#get-all').addEventListener('click',function(){


    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);

    xhr.onload = function(){

        if(xhr.status === 200){
            var posts = JSON.parse(xhr.responseText);
            posts.forEach(post => {
                var html = `
                <div class="card text-center">
                    <div class="card-header">
                     ${post.title}
                </div>
                <div class="card-body">   
                    <p class="card-text">${post.body}</p>        
                </div>
                 `;

                document.querySelector('#results').innerHTML += html;
            });          
        }
    } 
    xhr.send();

})


document.querySelector('#post-data').addEventListener('click',function(){

    var data = {
        userId:1,
        title:"new title",
        body:"new body"
    }

    var json = JSON.stringify(data);
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(this.status === 201 && this.readyState === 4){ //postta 201
            console.log(xhr.responseText);
        }
    }

    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);




 //id eklemedik jsonplaceholderda 100 kayıt vardı ekledigim obje 101. kayıt olarak geldi...
})