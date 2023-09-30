// import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";

// // components

// import Navbar from "../components/Navbars/AuthNavbar.js";
// import FooterSmall from "../components/Footers/FooterSmall.js";

// // views

// import Login from "../views/auth/Login";
// import Register from "../views/auth/Register.js";

// export default function Auth() {
//   return (
//     <>
//       <Navbar transparent />
//       <main>
//         <section className="relative w-full h-full py-40 min-h-screen">
//           <div
//             className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
//             style={{
//               backgroundImage:
//                 "url(" + require("../assets/img/register_bg_2.png").default + ")",
//             }}
//           ></div>
//           <Switch>
//             <Route path="/auth/login" exact component={Login} />
//             <Route path="/auth/register" exact component={Register} />
//             <Redirect from="/auth" to="/auth/login" />
//           </Switch> 
//           <FooterSmall absolute />
//         </section>
//       </main>
//     </>
//   );
// }


import React from "react";
import { Link, Outlet } from "react-router-dom";

import FooterSmall from "../components/Footers/FooterSmall.js";
// components
import Navbar from "../components/Navbars/AuthNavbar.js";

export default function Auth() {

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("../assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <nav>
            <ul>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
            </ul>
          </nav>
          <Outlet /> {/* Renders the child routes */}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}

