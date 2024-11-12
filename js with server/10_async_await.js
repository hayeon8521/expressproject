// 10_async_await.js //가독성을 위해서 실행하는 경우가 많음 변수에 범위에대해서도 겹처서 판단 가능해짐
async function getPostInfo(){
   //postList 배열 을 가지고 옴
   let postList = await fetch("https://jsonplaceholder.typicode.com/posts")
                        .then((res) => res.json())
                        .catch( err => console.log(err) );
   let postId = postList[0].id;

   //하나의 게시글을 가져온다
   let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                     .then((res) => res.json())
                     .catch( err => console.log(err) );

   //답글 리스트를 가져와서
   let commentList = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                           .then((res) => res.json())
                           .catch( err => console.log(err) );

   //2개를 합산하는 작업을 함
   post.comments = commentList;

   //로그 출력
   console.log(post);
}
getPostInfo(); // 싱크 붙으면 비동기 함수가 되어버림!!! 함수외부는 비동기 // 함수내부는 순차 처리 작업으로 됨

console.log('코드 종료');  //코드 종료가 먼저 실행됨