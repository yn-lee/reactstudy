import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  /*  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    // props -> state
    // REST API
    // Library Ex) D3 Video.js , setInterval, setTimeout ...
    return () => {
      //setInterval, setTimeout 작업을 제거할 때 ( clearInterval,clearTimeout)
      // 라이브러리 인스턴스 제거
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);
  // props 나 useState 로 참조하고있는경우 deps 를 넣어주어야함
  // 안넣었을 경우 : React Hook useEffect has a missing dependency
  */

  return (
    <div>
      <b
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>( {email} )</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  const style = {
    backgroundColor: "gainsboro",
  };
  return (
    <div style={style}>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.nusers
);