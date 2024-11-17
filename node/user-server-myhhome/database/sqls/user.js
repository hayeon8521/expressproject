//전체조회 (무조건 조회할땐 정렬 꼭해줘야함!!)
const userList =
 `select user_no
        , user_id
        , user_pwd
        , user_name
        , user_gender
        , user_age
        , join_date
 from t_users
 order by user_no`;

//단건조회
const userInfo =
`select user_no,
        user_id,
        user_pwd,
        user_name,
        user_gender,
        user_age,
        join_date
 from t_users
 where user_no = ?`;

//등록
const userInsert =
`insert into t_users
 set ?`;

//수정
const userUpate =
`update t_users
 set ?
 where user_no = ?`;

//삭제
const userDelete =
`delete from t_users
 where user_no = ?`;

//모듈화
module.exports = {
   userList,
   userInfo,
   userInsert,
   userUpate,
   userDelete,
};