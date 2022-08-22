// import './App.css';
// import {
//   HashRouter,
//   NavLink,
// } from 'react-router-dom';

// const Todo = () => {
//   return <p>這是 Todo 頁面 
//   </p>;
// };
// const Login = () => {
//   return <p>這是登入頁面</p>;
// };
// const Register = () => {
//   return <p>這是註冊頁面</p>;
// };

// function App() {
//   return (
//     <div className="container">
//       <HashRouter>
//         <div className="nav-link">
//           <NavLink to="/">
//             <p>回到首頁</p>
//           </NavLink>
//           <NavLink to="/register">
//             <p>註冊頁面</p>
//           </NavLink>
//           <NavLink to="/login">
//             <p>登入頁面</p>
//           </NavLink>
//           <NavLink to="/todo">
//             <p>Todo 頁面</p>
//           </NavLink>
//         </div>
//         {/* Routes, Route 練習區 */}
//         {/* 練習區 */}
//       </HashRouter>
//     </div>
//   );
// }

// export default App;

// ========
// https://github1s.com/riceball-tw/react-daily-task-router-main/blob/main/src/App.js
//



import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useNavigate,
} from "react-router-dom";

const Todo = () => {
  return (
    <>
      <p>Todo</p>
      <LogOut />
    </>
  );
};

const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const LogOut = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/login");
      }}
    >
      登出
    </button>
  );
};

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
        {/* 練習區 */}
      </BrowserRouter>
    </div>
  );
}

export default App;
