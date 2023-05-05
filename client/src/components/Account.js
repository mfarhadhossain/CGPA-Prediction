import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import classes from './../styles/Account.module.css';

export default function Account() {
  const { user, dispatch } = useContext(Context);
  const p = 3;

  console.log('testing from account.js');
  // console.log('testing ' + user.data);
  // console.log('testing ' + user.data.email);
  console.log(user);
  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    navigate('/');
  };

  const navigate = useNavigate();

  const handlePostLoan = () => {
    navigate('/applyForLoan/');
  };
  const handleGetLoans = () => {
    navigate('/loans/');
  };
  const showLoanStatus = () => {
    navigate('/customers/loan/' + user.data.user.id);
  };
  const foundEmployee = () => {
    return (
      <>
        <div className={classes.accountClickable}>
          <span title="See all applications" onClick={handleGetLoans}>
            Applications
          </span>
        </div>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <div className={classes.accountClickable}>
          <span title="You're a great employee!">
            {user.data.user.name}
            {/* bug */}
          </span>
        </div>
        <span className="material-icons-outlined" title="Logout" onClick={logout}>
          {' '}
          logout{' '}
        </span>
      </>
    );
  };
  const foundCustomer = () => {
    return (
      <>
        <div className={classes.accountClickable}>
          <span title="Apply for loan" onClick={handlePostLoan}>
            Apply
          </span>
        </div>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <div className={classes.accountClickable}>
          <span title="Click to see your loan status" onClick={showLoanStatus}>
            {user.data.user.name}
          </span>
        </div>
        <span className="material-icons-outlined" title="Logout" onClick={logout}>
          {' '}
          logout{' '}
        </span>
      </>
    );
  };
  return (
    <div className={classes.account}>
      {user ? (
        // <div> 3 paisi </div>
        user.data.user.isEmployee ? (
          // <div> 3 paisi </div>
          <>{foundEmployee()}</>
        ) : (
          <> {foundCustomer()} </>
        )
      ) : (
        //

        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
      {/* {user ? (

        <>
          <div className={classes.accountClickable}>
            <span title="Apply for loan" onClick={handlePostStory}>
              Apply
            </span>
          </div>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <div className={classes.accountClickable}>
            <span title="Click to see your loan status" onClick={showAllStory}>
              {user.data.user.name}
            </span>
          </div>
          <span className="material-icons-outlined" title="Logout" onClick={logout}>
            {' '}
            logout{' '}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )} */}
    </div>
  );
}
// console.log(`before rendering`);
// {
//   (() => {
//     console.log(`before first if`);
//     if (user) {
//       console.log(`before nested first if`);
//       console.log(user.data.user.isEmployee);
//       if (user.data.user.isEmployee === 1) {
//         return (
//           <>
//             <span>Employee</span>;
//           </>
//         );
//       } else {
//         console.log(`customer render korbo`);
//         return (
//           <div className={classes.account}>
//             <>
//               <div className={classes.accountClickable}>
//                 <span title="See all applications" onClick={handlePostStory}>
//                   Applications
//                 </span>
//               </div>
//               <span className="material-icons-outlined" title="Account">
//                 account_circle
//               </span>
//               <div className={classes.accountClickable}>
//                 <span title="Click to see your loan status" onClick={showAllStory}>
//                   {user.data.user.name}
//                   {/* bug */}
//                 </span>
//               </div>
//               <span className="material-icons-outlined" title="Logout" onClick={logout}>
//                 {' '}
//                 logout{' '}
//               </span>
//             </>
//           </div>
//         );
//       }
//     } else {
//       console.log(`before else first if`);
//       return (
//         <>
//           <h2>Public</h2>;
//         </>
//       );
//     }
//   })();
// }
// console.log(`after rendering`);
// {
//   () => {

//   };
// }
//   <div className={classes.account}>
//     (() => {
//       if(user.data.user.isEmployee)
//       {
//         return
// <>
//   <div className={classes.accountClickable}>
//     <span title="See all applications" onClick={handlePostStory}>
//       Applications
//     </span>
//   </div>
//   <span className="material-icons-outlined" title="Account">
//     account_circle
//   </span>
//   <div className={classes.accountClickable}>
//     <span title="Click to see your loan status" onClick={showAllStory}>
//       {user.data.user.name}
//       {/* bug */}
//     </span>
//   </div>
//   <span className="material-icons-outlined" title="Logout" onClick={logout}>
//     {' '}
//     logout{' '}
//   </span>
// </>
//       }
//       if(user.data.user.isEmployee===0)
//       {
//         return
// <>
//   <div className={classes.accountClickable}>
//     <span title="See all applications" onClick={handlePostStory}>
//       Applications
//     </span>
//   </div>
//   <span className="material-icons-outlined" title="Account">
//     account_circle
//   </span>
//   <div className={classes.accountClickable}>
//     <span title="Click to see your loan status" onClick={showAllStory}>
//       {user.data.user.name}
//       {/* bug */}
//     </span>
//   </div>
//   <span className="material-icons-outlined" title="Logout" onClick={logout}>
//     {' '}
//     logout{' '}
//   </span>
// </>
//       }
//       else
//       {
//         return
//         <>
//           <Link to="/signup">Signup</Link>
//           <Link to="/login">Login</Link>
//         </>
//       }
//  })()

//   </div>
//);
//}
