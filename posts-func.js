$(document).ready(()=>{
    
    $.ajax({
        type:"GET",
        url:"http://localhost:3333/posts?postId=2",
        success:(posts)=>{

            $.ajax({
                type:"GET",
                url:"http://localhost:3333/users",
                success:(userArray)=>{
                        
                    // To get postId from url

                    // var urlString=window.location.href;
                    // var url=new URL(urlString);
                    // var id=url.searchParams.get("postId");

                    var arr=new Array(posts[0]);
                    var result=arr[0];
                    console.log(result);

                    var user_id=result.userId;
                    
                    
                    var image_url;

                    
                    if(result.url != null)
                    {
                        image_url=result.url;
                    }

                    for(let i=0;i<userArray.length;i++)
                    {
                        if(user_id==userArray[i].userId)
                        {
                            var user_name=userArray[i].userName;
                            // console.log(user_name);
                            
                        }
                    }

                    
                    $('<img src="'+ image_url+'" class="image">').appendTo("#post-image-containerId")

                    
                    $('<h2 class="postTitle">' + result.postTitle +'</h2><br>').appendTo("#top-Div")
                    $('<h6>Created At : '+ result.postDate + '</h6>').appendTo("#top-Div")
                    $('<h6>Category : ' + result.category + '</h6>').appendTo("#top-Div")
                    $('<h6>Created By : ' + user_name + '</h6><br>').appendTo("#top-Div")
                    $('<p>'+ result.content +'</p>').appendTo("#top-Div")
                    $('<h6 class="likes">Likes :'+ result.likes.length+'</h6>').appendTo("#top-Div")



                    console.log(userArray)
                    console.log(result.comments[0].comment);
                    

                    
                    for(let i=0;i<result.comments.length;i++)
                    {
                        // console.log(result.comments[i]);

                        var userId_commented=result.comments[i].userId;

                        for(let j=0;j<userArray.length;j++)
                        {
                            if(userId_commented==userArray[j].userId)
                            {
                                userName_commented=userArray[j].userName;
                                // console.log(userName_commented);
                                
                                $('<h5>'+ userName_commented+" : " +result.comments[i].comment +'</h5>').appendTo("#commentSection")
                            }
                        }
                        
                        

                    }


                }
            })
            
        }

    })


})